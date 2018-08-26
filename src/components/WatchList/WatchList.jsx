import React from 'react';
import PropTypes from 'prop-types';
import './WatchList.css';
import WatchlistCard from '../WatchlistCard/WatchlistCard';

export default class WatchList extends React.Component {
	static propTypes = {
		watchlist: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string.isRequired,
			id: PropTypes.string.isRequired,
			age: PropTypes.number.isRequired,
		}).isRequired).isRequired,
		DeleteCardProps: PropTypes.func.isRequired	
	};

	render() {
		const { watchlist, DeleteCardProps } = this.props;
			return (
				<div className="WatchList">
					<h2 className="WatchList__title">WatchList</h2>
					<p className="WatchList__msg">Add users to watchlist...</p>
					{watchlist.map((likeList) => (<WatchlistCard key={likeList.id} DeleteMovieCard={() => {DeleteCardProps(likeList.id)}} {...likeList}/>))}
				</div>		
			)					
	}	
}
