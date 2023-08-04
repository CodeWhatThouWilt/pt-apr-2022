import {
	renderHobbies,
	renderName,
	renderClock,
	renderSplitSections,
	renderChart,
	renderBirthdayCountdown,
} from "./render-elements.js";

import { borderColors } from "./utils.js";

window.onload = () => {
	renderSplitSections();
	renderChart();
	renderName();
	renderClock();
	renderHobbies();
	renderBirthdayCountdown();

	setInterval(() => {
		borderColors();
	}, 1000);
};
