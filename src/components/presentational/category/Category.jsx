import React from 'react';
import CategoryList from '../categoryList/CaterogyList.jsx';
//

class Category extends React.Component {

	render() {
		return (
			<div className="category" >
				<div className="title">
					<label>{this.props.title}</label>
					<button className="edit-btn"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
					<div className="action-btns">
						<button className="delete-btn"><i className="fa fa-trash-o" aria-hidden="true"></i></button>
						<button className="add-btn"><i className="fa fa-plus-square-o" aria-hidden="true"></i></button>
					</div>

				</div>
				<CategoryList categories={this.props.categories} />
			</div>
		);
	}
}

export default Category;