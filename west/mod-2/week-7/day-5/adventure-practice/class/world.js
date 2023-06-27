const { Room } = require("./room");
const { Item } = require("./item");
const { Food } = require("./food");

class World {
	constructor() {
		this.rooms = {};
	}

	createRooms(rooms) {
		for (let i = 0; i < rooms.length; i++) {
			let roomData = rooms[i];
			let newRoom = new Room(roomData.name, roomData.description);

			this.rooms[roomData.id] = newRoom; // { 1: {id:1, name: etc}, 2: {id:2, name: etcetc}}
		}
	}

	connectRooms(rooms) {
		for (let i = 0; i < rooms.length; i++) {
			let roomID = rooms[i].id;
			let roomConnections = rooms[i].exits;

			for (const direction in roomConnections) {
				let connectedRoomID = roomConnections[direction];
				let roomToConnect = this.rooms[connectedRoomID];
				this.rooms[roomID].connectRooms(direction, roomToConnect);
			}
		}
	}

	createItems(items) {
		items.forEach((item) => {
			const room = this.rooms[item.room];
			const newInstance = item.isFood ? Food : Item;
			const newItem = new newInstance(item.name, item.description);
			room.addItem(newItem);

			// if (item.isFood) {
			// 	newItem = new Food(item.name, item.description);
			// } else {
			// 	newItem = new Item(item.name, item.description);
			// }
		});
	}

	loadWorld(worldData) {
		const roomList = worldData.rooms;
		const itemList = worldData.items;

		// Instantiate new room objects
		// Get name, id and description from room data
		this.createRooms(roomList);

		// Connect rooms by ID
		// Note that all rooms must be created before they can be connected
		this.connectRooms(roomList);

		// Instantiate items using data stored in the itemList variable
		// A non-food item should be instantiated as an instance of the `Item` class
		// A food item should be instantiated as an instance of the `Food` class
		this.createItems(itemList);
	}
}

module.exports = {
	World,
};
