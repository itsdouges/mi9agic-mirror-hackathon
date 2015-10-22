function component () {
	return {
		restrict: 'E',
		controller: MirrorContent,
		controllerAs: 'ctrl',
		scope: {},
		template: `
			<div 
				ng-click="ctrl.next()" 
				ng-class="ctrl.containerStyle"
				class="mirror-container"
				ng-repeat="group in ctrl.storyGroups">
				<div
					class="mirror-content">
					<div class="content" ng-repeat="story in group">
						<div>
							<div class="date">
								{{ story.attribution }}
								{{ ctrl.parseToTime(story.dateUpdated) }}
							</div>
							<div class="kicker">{{ story.kicker }}</div>
							<div class="headline">{{ story.headline }}</div>
						</div>
					</div>
				</div>
			</div>
		`
	};
}

var currentTranslate = 0;

class MirrorContent {
	constructor ($element) {
		this.$ele = $element;

		var stories = [
			{
				attribution: 'Pickle',
				kicker: 'Giant religious idol falls on worshippers',
				headline: 'Crowd screams in shock as 9m statue crashes into packed street',
				dateUpdated: '2015-10-22 01:08 PM'
			},
			{
				attribution: 'Pickle',
				kicker: 'Zombies killed everyone',
				headline: 'Seriously this shit is whack man!',
				dateUpdated: '2015-10-22 01:08 PM'
			},
			{
				attribution: '9News',
				kicker: 'HAHAHAA',
				headline: 'But really HAHAHAHA',
				dateUpdated: '2015-10-22 01:08 PM'
			},
			{
				attribution: 'Coach',
				kicker: 'Bill Cosby takes up motivational speaking',
				headline: 'But really HAHAHAHA',
				dateUpdated: '2015-10-22 01:08 PM'
			},
			{
				attribution: 'Pickle',
				kicker: 'Giant religious idol falls on worshippers',
				headline: 'Crowd screams in shock as 9m statue crashes into packed street',
				dateUpdated: '2015-10-22 01:08 PM'
			},
			{
				attribution: 'Pickle',
				kicker: 'Zombies killed everyone',
				headline: 'Seriously this shit is whack man!',
				dateUpdated: '2015-10-22 01:08 PM'
			},
			{
				attribution: '9News',
				kicker: 'HAHAHAA',
				headline: 'But really HAHAHAHA',
				dateUpdated: '2015-10-22 01:08 PM'
			},
			{
				attribution: 'Coach',
				kicker: 'Bill Cosby takes up motivational speaking',
				headline: 'But really HAHAHAHA',
				dateUpdated: '2015-10-22 01:08 PM'
			},
			{
				attribution: 'Coach',
				kicker: 'Bill Cosby takes up motivational speaking',
				headline: 'But really HAHAHAHA',
				dateUpdated: '2015-10-22 01:08 PM'
			}
		];

		stories = stories.concat(stories);
		stories = stories.concat(stories);
		stories = stories.concat(stories);
		stories = stories.concat(stories);

		this.splitStoriesIntoGroups(stories);

		// setInterval(() => {
		// 	this.next();
		// }.bind(this), 6000);
	}

	parseToTime (dateTime) {
		let date = new Date(dateTime);
		let time = date.toLocaleTimeString();

		return `@ ${time}`;
	}

	next () {
		currentTranslate -= 100;
		this.$ele[0].style.transform = `translate3d(${currentTranslate}%, 0, 0)`
	}

	splitStoriesIntoGroups (stories) {
		const groups = [];
		const STORIES_PER_GROUP = 3;

		let counter = 0;
		let group = [];

		stories.forEach(story => {
			if (!story.attribution) {
				return;
			}

			group.push(story);
			counter += 1;

			if (counter == STORIES_PER_GROUP) {
				counter = 0;
				groups.push(group);
				group = [];
			}
		});

		this.storyGroups = groups;
	}
}

export default component;