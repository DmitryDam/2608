
 export function fetchDataStart(query) {
    return fetch(`https://test-users-api.herokuapp.com/users/`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error while fetching ' + response.statusText)
    })
    .then(data => {
      const users = data.data.map(user => ({
        name: user.name,
        id: user.id,
        age: user.age
      }));
      console.log(data);
      return users;
    })
    .catch(err => console.error(err));
  }

export function deleteID(query) {
     return fetch(`https://test-users-api.herokuapp.com/users/${query}`,{
      method: 'DELETE',
    })
      .then(() => {
        console.log('removed');
      })
      .catch(error => console.log('ERROR' + error));
  }
