// JSON only uses double quotes

// JSON.stringify(data) converts to json
const data = {
	keyOne: [1, 2, 3, "SUP"],
	keyTwo: `This is
    our back tick`,
};

const jsonData = JSON.stringify(data);
console.log(jsonData);
console.log(jsonData.keyOne);

// JSON.parse(data) convert to javascript
const jsData = JSON.parse(jsonData);
console.log(jsData);
console.log(jsData.keyTwo);
