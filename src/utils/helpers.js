import moment from 'moment-timezone';

export function getDate(timestamp, timezone) {
	return moment.unix(timestamp).tz(timezone).format('dddd, MMM D');
}
