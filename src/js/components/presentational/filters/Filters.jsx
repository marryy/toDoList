import React from 'react';

class Filters extends React.Component {
	render() {
		return (
			<div className="filters">
				<input type="checkbox" />
				<label>Show done</label>
				<div className="search">
					<input type="text" placeholder="Search"/>
					<button className="remove-btn"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
				</div>
			</div>
		);
	}
}

export default Filters;
