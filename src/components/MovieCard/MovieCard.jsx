import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';


export default class MovieCard extends React.Component {
	static PropTypes = {
		name: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		addUserCard: PropTypes.func
	};

	static defaultProps = {
		addUserCard: () => {}
	};

	render() {
		const { name, id, age, addUserCard } = this.props;

		return (
			<div className="MovieCard">
				<p className="MovieCard__rating">ID:{id}</p>			
				<div className="MovieCard__info">
					<p className="MovieCard__descr">Name:{name}</p>
					<p className="MovieCard__release">Age: {age}</p>
				</div>
				<button className="MovieCard__btn" onClick={addUserCard}>+</button>
			</div>
		);
	}
};