export const UI_ELEMENTS = {
	FORM: document.querySelector('.countdown__form'),
	INPUT: document.querySelector('.countdown__input'),
	DATE : document.querySelector('.date')
}

import { intervalToDuration, formatDuration, isFuture } from 'date-fns';
import { getInputDate, getNowDate, showUI } from './main.mjs';

let curentDate = "";

export function startWork(){
	if (isFuture(getInputDate())) {
		curentDate = getInputDate();
		getTimeUntilDate();
	} else {
		curentDate = "";
		showUI("The date has already passed");
	}
}

function getTimeUntilDate() {

	let timeObject = intervalToDuration({
		start: getNowDate(),
		end: curentDate,
	})

	showUI(formatDuration(timeObject));

	setTimeout(() => { getTimeUntilDate(curentDate) }, 1000)
}