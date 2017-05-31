import React from 'react';
import PropTypes from 'prop-types';
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