/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'

 const Profile=()=> {
    const[data,setData]=useState({});
    const [username,setUsername]=useState("");
    const [repositories,setRepositories]=useState([]);

    const onChangeHandler=e=>{
        setUsername(e.target.value);
    }

    const submitHandler = async e=>{
        e.preventDefault();

        const profile=await fetch(`https://api.github.com/users/${username}`);
        const profileJson=await profile.json();
        //console.log(profileJson);

        const repositories=await fetch(profileJson.repos_url);
         const repoJson= await repositories.json();
        //console.log(repoJson);


        if(profileJson){
            setData(profileJson);
            setRepositories(repoJson);
        }
    }
  return (
    <div>
      <input type='tect' value={username} onChange={(onChangeHandler)}/>
      <button type='submit' onClick={submitHandler}>Search</button>
    </div>
  )
}


export default Profile