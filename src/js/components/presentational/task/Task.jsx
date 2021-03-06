import React from 'react';

class Task extends React.Component {
	handleClick() {
		console.log("checked");
	}

	render() {
		const {task} = this.props;
		return (
			<div className="task">
				<input type="checkbox" checked={task.done} onChange={this.handleClick}/>
				{task.title}
				<button className="edit-btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
			</div>
		);
	}
}

export default Task;