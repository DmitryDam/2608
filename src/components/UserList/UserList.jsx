import React from 'react';
import PropTypes from 'prop-types';
import './UserList.css';
import MovieCard from '../MovieCard/MovieCard';

class MovieList extends React.Component {
	static propTypes = {
		userCardsProps: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			age: PropTypes.number.isRequired,
		}).isRequired).isRequired,
		AddCardProps: PropTypes.func.isRequired,	
	};

	render() {
		const { userCardsProps, AddCardProps } = this.props;

		if (userCardsProps.length !== 0) {
			return (
				<div className="MovieList">
					{userCardsProps.map((users) => (
						<div className="MovieList__item" key={users.id}>
							<MovieCard {...users} 
								addUserCard={() => {AddCardProps(users)}} />
						</div>))}
				</div>
			);
		}

		else {
			return (
				<div className="MovieList"><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
					<p className="MovieList__msg">Sorry, we didn't find anything <br/>(⌣́_⌣̀)</p>
				</div>
			);
		}

		
	}
}

export default MovieList;