import React from 'react';
import PropTypes from 'prop-types';
import Day from '../components/Day';

const DayItems = ({ data }) => {
	return (
		<div className="days-items">
			{data.map( (item, index) => <Day data={item} /> )}
		</div>
	);
};

DayItems.propTypes = {
	data: PropTypes.array.isRequired,
}

export default DayItems;
