import React from 'react';
import PropTypes from 'prop-types';
import './WatchlistCard.css';


export default class WatchlistCard extends React.Component {
	static PropTypes = {
		name: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		age: PropTypes.number.isRequired,
		DeleteMovieCard: PropTypes.func
	};

	static defaultProps = {
		DeleteMovieCard: () => {}
	};

	render() {
		const { name, id, age, DeleteMovieCard } = this.props;

		return (
			<div className="WatchlistCard">			
				<div className="WatchlistCard__body">
					<h3 className="WatchlistCard__title">Name:{name}</h3>
					<p className="WatchlistCard__release">Age: {age}</p>
					<p className="WatchlistCard__release">ID {id}</p>
					<button className="WatchlistCard__btn" onClick={DeleteMovieCard}>-</button>	
				</div>
			</div>
		);
	}
};