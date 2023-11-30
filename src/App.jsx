// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './App.css';
import RepoCard from './component/repos/RepoCard';

function App() {
  const [username, setUsername] = useState('');
  const [searchedUsername, setSearchedUsername] = useState('');
  const [showBody, setShowBody] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(true);
  const [user, setUser] = useState(null);


  useEffect(() => {
    if (!username) return; 
    
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUser(data);
      })
      .catch(error => console.error('Error fetching user data:', error));

  
    
  }, [username]);

  const handleSearch = () => {
    
    setSearchedUsername(username);
  
    setShowBody(true);
    
    setShowSearchBar(false);
  };

  return (
    <div className='main'>
      {showSearchBar && (
        <div className="search">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      )}

      {showBody && (
        <div className='body' style={{ height: '190px' }}>
          <div className='card'>
            <div className="imgBox">
              <img src={user.avatar_url} alt="User" />
            </div>
            <div className="content">
              <div className="details">
                <h2>{user.name}<br /></h2>
                <div className="data">
                  
                  <h3>{user.followers}<br /><span>followers</span></h3>
                  <h3>{user.following}<br /><span>following</span></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    
      <RepoCard username={searchedUsername} />
    </div>
  );
}

export default App;
