import React from 'react';
import './App.css';
import Header from '../Header/Header';
import AppBody from '../AppBody/AppBody';
import { fetchDataStart,deleteID,addUser } from 'API';
import Sidebar from '../Sidebar/Sidebar';
import UserList from '../UserList/UserList';
import Form from '../Form/Form';
import PostForm from 'components/PostForm';
import WatchList from '../WatchList/WatchList';

class App extends React.Component {
  state = {
    userCardsState: [],
    watchlist: JSON.parse(localStorage.getItem("localStorFilm")) || []
  };

  componentDidMount() {
    fetchDataStart().then(data => {
      this.setState({
        userCardsState: data
      });
    });
  }
  deleteIDAPP = query => {
    deleteID(query);
  };
  postRequest = (name, age) => {
    addUser(name, age);
  };
  addUserCard = cards => {
    const addCard = cards;

    if (this.state.watchlist.every(film => film.id !== addCard.id)) {
      this.setState({
        watchlist: [...this.state.watchlist, addCard]
      });
    } else {
      alert("User is already added");
    }
  };

  deleteUserCard = id => {
    this.setState({
      watchlist: this.state.watchlist.filter(card => card.id !== id)
    });
  };

  render() {
    const { userCardsState, watchlist } = this.state;
    localStorage.setItem("localStorFilm", JSON.stringify(this.state.watchlist));
    return (
      <div className="App">
        <Header text="Users" />
        <AppBody>
          <Sidebar>
            <Form deleteById={this.deleteIDAPP} />
            <PostForm onFormSubmit={this.postRequest} />
            <WatchList
              watchlist={watchlist}
              DeleteCardProps={this.deleteUserCard}
            />
          </Sidebar>
          <UserList
            userCardsProps={userCardsState}
            AddCardProps={this.addUserCard}
          />
        </AppBody>
      </div>
    );
  }
}

export default App;