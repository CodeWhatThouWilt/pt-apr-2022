class Factory {
	constructor(name, brand) {
		this.name = name;
		this.brand = brand;
	}

	lunchBreak() {
		console.log(`LUNCH TIME!!!`);
	}

	factoryDetails() {
		console.log(`Factory name: `, this.name);
		console.log(`Factory brand: `, this.brand);
	}
}

// const yakeFactory = new Factory("Cool Factory", "Ford");

// console.log(yakeFactory);

// yakeFactory.factoryDetails();

module.exports = Factory;
