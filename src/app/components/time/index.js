function component () {
	return {
		restrict: 'E',
		scope: {},
		controller: Time,
		controllerAs: 'ctrl',
		template: `
			{{ ctrl.time }}
		`
	};
}

class Time {
	constructor () {
		let time = new Date();

		let day = time.getDate();
		let dayName = 'friday';
		let monthName = 'october';

		this.time = `${dayName} the ${day}nd of ${monthName}`;
	}
}

export default component;