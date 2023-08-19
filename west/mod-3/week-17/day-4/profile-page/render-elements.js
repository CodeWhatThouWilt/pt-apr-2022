import { clockTimeHandler, addToSection, countdownTimes } from "./utils.js";

export const renderSplitSections = () => {
	const left = document.createElement("section");
	left.id = "left-page";
	left.classList.add("page-section");

	const right = document.createElement("section");
	right.id = "right-page";
	right.classList.add("page-section");

	document.body.append(left, right);
};

export const renderName = () => {
	const h1 = document.createElement("h1");
	h1.id = "name";
	h1.innerText = "Yake";
	h1.className = "name";

	addToSection("left", h1);
};

export const renderHobbies = () => {
	const section = document.createElement("section");

	const h2 = document.createElement("h2");
	h2.innerText = "Some of my hobbies are...";
	section.appendChild(h2);

	const ul = document.createElement("ul");
	ul.classList.add("my-details");

	const hobbies = [
		"exercise",
		"reading",
		"beach",
		"coding",
		"trading / investing",
	];

	hobbies.forEach((hobby) => {
		const li = document.createElement("li");
		li.innerText = hobby;
		li.classList.add("detail");
		ul.appendChild(li);
	});

	section.appendChild(ul);

	addToSection("left", section);
};

export const renderClock = () => {
	const section = document.createElement("section");
	section.id = "clock";

	const clockDiv = document.createElement("div");
	clockDiv.innerText = clockTimeHandler();

	section.appendChild(clockDiv);

	addToSection("left", section);

	const stockText = document.querySelector(".valueValue-l31H9iuA");
	console.log(stockText);

	setInterval(() => {
		clockDiv.innerText = clockTimeHandler();
	}, 1000);
};

export const renderChart = async () => {
	const section = document.createElement("div");
	section.id = "tradingview_22e4a";

	addToSection("right", section);

	const script1 = document.createElement("script");
	script1.src = "https://s3.tradingview.com/tv.js";

	const script2 = document.createElement("script");
	script2.text = `
    new TradingView.widget({
        autosize: true,
        symbol: "CME_MINI:ES1!",
        interval: "D",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_22e4a", // This should match the ID of the section element
    });
`;

	document.body.appendChild(script1);

	script1.onload = function () {
		document.body.appendChild(script2);
	};
};

export const renderBirthdayCountdown = () => {
	const section = document.createElement("section");

	const times = countdownTimes();

	const daysDiv = document.createElement("div");
	daysDiv.innerText = `${times.days} days.....`;
	section.appendChild(daysDiv);

	const hoursDiv = document.createElement("div");
	hoursDiv.innerText = `${times.hours} hours....`;
	section.appendChild(hoursDiv);

	const minutesDiv = document.createElement("div");
	minutesDiv.innerText = `${times.minutes} minutes...`;
	section.appendChild(minutesDiv);

	const secondsDiv = document.createElement("div");
	secondsDiv.innerText = `${times.seconds} seconds..`;
	section.append(secondsDiv);

	const h2 = document.createElement("h2");
	h2.innerText = "UNTIL MY BIRTHDAY!";

	section.append(h2);

	addToSection("left", section);

	setInterval(() => {
		const times = countdownTimes();
		daysDiv.innerText = `${times.days} days.....`;
		hoursDiv.innerText = `${times.hours} hours....`;
		minutesDiv.innerText = `${times.minutes} minutes...`;
		secondsDiv.innerText = `${times.seconds} seconds..`;
	}, 1000);
};
