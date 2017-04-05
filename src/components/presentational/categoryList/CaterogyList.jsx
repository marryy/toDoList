import React, { PropTypes } from 'react';
import Category from '../category/Category.jsx';

class CategoryList extends React.Component {

	render() {
		const {categories, level} = this.props;

		return (
			<div className="categories">
				{
					categories.map(category => {
						const categories = category.categories || [];
						return (
							<Category key={category.id} level={category.level || level} title={category.title} categories={categories}/>
						);
					})
				}
			</div>
		);
	}
}

CategoryList.PropTypes = {
	categories: PropTypes.object.isRequired
};

export default CategoryList;