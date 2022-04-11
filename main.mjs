import { UI_ELEMENTS, startWork } from './view.mjs'

UI_ELEMENTS.FORM.addEventListener('submit', (e) => {
	e.preventDefault();

	startWork();
});

export function getInputDate() {
	return new Date(UI_ELEMENTS.INPUT.value)
}

export function getNowDate() {
	return new Date();
}

export function showUI(Obj) {
	UI_ELEMENTS.DATE.textContent = Obj;
}
