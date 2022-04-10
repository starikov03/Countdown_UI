import { UI_ELEMENTS } from './view.mjs'
import { intervalToDuration, formatDuration, isFuture } from 'date-fns'
let curentDate = "";


UI_ELEMENTS.FORM.addEventListener('submit', (e) => {
	e.preventDefault();


	if (isFuture(getInputDate())) {
		curentDate = getInputDate();
		getTimeUntilDate();
	} else {
		curentDate = "";
		showUI("The date has already passed");
	}
});

function getInputDate() {
	return new Date(UI_ELEMENTS.INPUT.value)
}

function getNowDate() {
	return new Date();
}

function getTimeUntilDate() {

	let timeObject = intervalToDuration({
		start: getNowDate(),
		end: curentDate,
	})

	showUI(formatDuration(timeObject));

	setTimeout(() => { getTimeUntilDate(curentDate) }, 1000)
}

function showUI(Obj) {
	UI_ELEMENTS.DATE.textContent = Obj;
}
