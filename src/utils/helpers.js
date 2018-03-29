export function getDate(timestamp) {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
	const dateObj = new Date(timestamp * 1000);
	const date = {
		day: days[dateObj.getDay()],
		month: months[dateObj.getMonth()],
		date: dateObj.getDate(),
	}

	return `${date.day}, ${date.month} ${date.date}`;
}
