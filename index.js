const slackName = 'Sunday Gbenga';
const stack = 'Frontend Stack';
const slack = document.querySelector('.slack-name');
const day = document.querySelector('.w-day');
const time = document.querySelector('.d-time');
const track = document.querySelector('.track');

slack.innerHTML = slackName;
track.innerHTML = stack;

// Date Api

const updateTime = () => {
	const now = new Date();

	const options = {
		weekday: 'long',
	};

	// const option = {
	// 	hour: 'numeric',
	// 	minute: 'numeric',
	// 	second: 'numeric',
	// 	// day: 'numeric',
	// 	// month: 'long', // long, 2-digit,short
	// 	// year: 'numeric',
	// 	// weekday: 'long',
	// };

	// getting the locale from user browser
	const locale = navigator.language;
	// console.log(locale);

	const labelDay = new Intl.DateTimeFormat(locale, options).format(now);
	day.innerHTML = `${labelDay} -`;

	// const labelTime = new Intl.DateTimeFormat(locale, option).format(now);
	// time.innerHTML = labelTime;

	// const utcTime = now.getTime();
	const utcTime = Date.now();
	time.innerHTML = utcTime;
};

// setInterval(updateTime, 1000);
updateTime();
