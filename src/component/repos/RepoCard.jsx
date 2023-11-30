// RepoCard.js
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import Card from './Card';


export default function RepoCard({ username }) {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (!username) return; 

   
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setUser(data);
      })
      .catch(error => console.error('Error fetching user data:', error));

    
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(data => {
        setRepos(data);
      })
      .catch(error => {
        console.error('Error fetching repositories:', error);
      });
  }, [username]); 

  return (
    <div className="container">

      {user && (
        <>
          {/* Pass a single repository to the Card component */}
    <div className="box">
          {repos.map(repo => (
            <Card key={repo.id} repo={repo} />
            ))}
    </div>
        </>
      )}
      </div>
  );
}
