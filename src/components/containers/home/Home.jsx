import React from 'react';
import { Link } from 'react-router';
import CategoryList from '../../presentational/categoryList/CaterogyList.jsx';
import TasksList from  '../../presentational/tasksList/TasksList.jsx';

const categories = [
    {
        id: 1,
        level: 1,
        title: 'Work',
        categories: [],
        tasks: [
            {
                id: 1,
                checked: false,
                title: 'Finish react homework first!'
            },
            {
                id:2,
                checked: false,
                title: 'Resolve other tasks'
            }
        ]
    },
    {
        id: 2,
        level: 1,
        title: 'Home Stuff',
        categories: [
            {id: 1, title: 'Vacuum cleaner'},
            {id: 2, title: 'Shopping'},
            {id: 3, title: 'Call mom'}
        ],
        tasks: []
    },
    {
        id: 3,
        level: 1,
        title: 'Children',
        categories: [
            {id: 1, title: 'Take 1 from kindergarten',
                categories: [
                    {id: 8, title: 'Call the teacher'},
                    {id: 9, title: 'Arrive at time'},
                    {id: 23, title: 'Drive home'}
                ]
            },
            {id: 2, title: 'Write homeworks'},
            {id: 3, title: 'Prepare for school'},
            {id: 4, title: 'Play chess'}
        ],
        tasks: [
            {
                id: 1,
                checked: false,
                title: 'Clean the car'
            },
            {
                id:2,
                checked: false,
                title: 'Take a vacationday'
            },
            {
                id:3,
                checked: false,
                title: 'Call the teacher'
            }
        ]
    }
];

class Home extends React.Component {
    render() {
        return (
            <div className="homepage">
                <div className="filters">
                    <input type="checkbox" />
                    <label>Show done</label>
                    <div className="search">
                        <input type="text" placeholder="Search"/>
                        <button className="remove-btn">X</button>
                    </div>
                </div>
                <progress className="progress-bar" value="46" max="100"></progress>
                <div className="input-add-fields">
                    <div className="add-category">
                        <input type="text" placeholder="Enter Category title"/>
                        <button>Add</button>
                    </div>
                    <div className="add-smth">
                        <input type="text" placeholder="Input With btn" />
                        <button>Add</button>
                    </div>
                </div>
                <div className="tasks">
                    <div className="categories-list">
                        <CategoryList categories={categories} />
                    </div>
                    <div className="tasks-list">
                        <div className="tasks">
                            {
                                categories.map(category => {
                                    const tasks = category.tasks || [];
                                    return (
                                        <TasksList key={category.id} tasks={tasks}/>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
