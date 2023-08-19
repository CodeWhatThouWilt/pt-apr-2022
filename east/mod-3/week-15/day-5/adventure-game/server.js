const http = require("http");
const fs = require("fs");

const { Player } = require("./game/class/player");
const { World } = require("./game/class/world");

const worldData = require("./game/data/basic-world-data");

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {
	/* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
	let reqBody = "";
	req.on("data", (data) => {
		reqBody += data;
	});

	req.on("end", () => {
		// After the assembly of the request body is finished
		/* ==================== PARSE THE REQUEST BODY ====================== */
		if (reqBody) {
			req.body = reqBody
				.split("&")
				.map((keyValuePair) => keyValuePair.split("="))
				.map(([key, value]) => [key, value.replace(/\+/g, " ")])
				.map(([key, value]) => [key, decodeURIComponent(value)])
				.reduce((acc, [key, value]) => {
					acc[key] = value;
					return acc;
				}, {});
		}

		/* ======================== ROUTE HANDLERS ========================== */
		// Phase 1: GET /
		if (req.method === "GET" && req.url === "/") {
			const htmlFile = fs.readFileSync("./views/new-player.html", "utf-8");

			const roomOptions = worldData.rooms.reduce((str, room) => {
				return (str += `<option value=${room.id}>${room.name}</option>`);
			}, "");

			const modHtml = htmlFile.replace(/#{availableRooms}/g, roomOptions);

			res.statusCode = 200;
			res.setHeader("Content-Type", "text/html");

			return res.end(modHtml);
		}

		// Phase 2: POST /player
		if (req.method === "POST" && req.url === "/player") {
			const { name, roomId } = req.body;

			const startingRoom = world.rooms[roomId];

			player = new Player(name, startingRoom);

			res.statusCode = 302;
			res.setHeader("Location", `/rooms/${roomId}`);

			return res.end();
		}

		if (player) {
			// Phase 3: GET /rooms/:roomId
			if (req.method === "GET" && req.url.startsWith("/rooms")) {
				const splitUrl = req.url.split("/");
				if (splitUrl.length === 3) {
					const roomId = splitUrl[2];

					const currentRoom = world.rooms[roomId];

					const htmlFile = fs.readFileSync("./views/room.html", "utf-8");

					const itemsHtml = currentRoom.itemsToString();
					const exitsHtml = currentRoom.exitsToString();
					const inventoryHtml = player.inventoryToString();

					const modHtml = htmlFile
						.replace(/#{roomName}/g, currentRoom.name)
						.replace(/#{inventory}/g, inventoryHtml)
						.replace(/#{roomItems}/g, itemsHtml)
						.replace(/#{exits}/g, exitsHtml);

					res.statusCode = 200;
					res.setHeader("Content-Type", "text/html");

					return res.end(modHtml);
				}
			}
			// Phase 4: GET /rooms/:roomId/:direction
			// Phase 5: POST /items/:itemId/:action
			// Phase 6: Redirect if no matching route handlers
		}

		res.statusCode = 302;
		res.setHeader("Location", "/");
		return res.end();
	});
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
