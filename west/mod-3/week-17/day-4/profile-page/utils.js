export const clockTimeHandler = () => {
	const fullTimeStr = new Date().toTimeString();
	const time = fullTimeStr.split(" ")[0];

	const timeSplit = time.split(":");
	let hours = parseInt(timeSplit[0]);

	let timeOfDay = "AM";

	if (hours > 12) {
		timeOfDay = "PM";
		hours = hours - 12;

		if (hours < 10) {
			hours = "0" + hours;
		}
	} else if (hours === 0) {
		hours = 12;
	}

	timeSplit[0] = hours;

	return timeSplit.join(":") + " " + timeOfDay;
};

export const addToSection = (sectionStr, el) => {
	const section = document.getElementById(sectionStr + "-page");
	section.appendChild(el);
};

export const borderColors = () => {
	const sections = document.querySelectorAll(".page-section section");

	const colors = ["#f23645", "#089981"];

	sections.forEach((section) => {
		const index = Math.floor(Math.random() * 2);
		section.style.borderColor = colors[index];
	});
};

export const countdownTimes = () => {
	const now = new Date();
	const year = now.getFullYear();
	const birthdayDate = new Date(`${year}-08-02`);

	if (now > birthdayDate) {
		birthdayDate.setFullYear(year + 1);
	}

	let diffSeconds = Math.floor((birthdayDate - now) / 1000);

	const days = Math.floor(diffSeconds / 86400);
	diffSeconds -= days * 86400;

	const hours = Math.floor(diffSeconds / 3600) % 24;
	diffSeconds -= hours * 3600;

	const minutes = Math.floor(diffSeconds / 60) % 60;
	diffSeconds -= minutes * 60;

	const seconds = diffSeconds;

	return {
		days,
		hours,
		minutes,
		seconds,
	};
};
