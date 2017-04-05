import React, { PropTypes } from 'react';
import Task from '../task/Task.jsx';

class TasksList extends React.Component {
	render() {
		const {tasks} = this.props;

		return (
			<div className="tasks">
				{
					tasks.map(task => {
					return (
					<Task key={task.id} task={task}/>
					);
				})
				}
			</div>
		);
	}
}

TasksList.PropTypes = {
	categories: PropTypes.object.isRequired
}

export default TasksList;