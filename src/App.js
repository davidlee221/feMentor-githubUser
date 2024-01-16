import axios from 'axios';
import './App.css';
import { useState } from 'react';
import iconMoon from './assets/icon-moon.svg';
import iconSearch from './assets/icon-search.svg';
import iconCompany from './assets/icon-company.svg';
import iconTwitter from './assets/icon-twitter.svg';
import iconSun from './assets/icon-sun.svg';
import iconWebsite from './assets/icon-website.svg';
import iconLocation from './assets/icon-location.svg';

// import IconSearch from './assets/icon-search.svg';

const darkToggle = () => {
  console.debug('this')
}

const handleSubmit = () => {
  const username = document.getElementById('username').value
  console.debug(username)
  const url = `https://api.github.com/users/${username}`
  console.debug(axios.get(url))
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error('noooo!, ', error)
    })
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <>
      <div className="title-area">
          <div className="title-text">
            <h1>devfinder</h1>
          </div>
          <div className="dark-toggle d-flex" onClick={(event) => darkToggle(event)}>
            <div className="body">DARK</div>
            <img src={iconMoon} alt="moon icon" />
          </div>
      </div>
      <div className="card search-container d-flex">
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="input-group">
            <img className="glass" src={iconSearch} height="24" alt="glass_icon"/>
            <input name="username" id="username" type="text" className="form-control" placeholder="Search Github username..."/>
            <button className="btn btn-primary search-button" type="submit" >Search</button>
          </div>
        </form>
      </div>

  <div className="card main-card"></div>
  <img id="user-icon" src="./placeholder.jpg" width="117" height="117"   />
  <div className="username h3">The Octocat</div>
  <div className="join-date h4">1234</div>
  <div className="handle-name h4">asfd</div>
  <div className="bio-area body">This profile has no bio</div>

  <div className="col-6 stats-over">
    <div className="row gray-stats-over">
      <div className="col-4">
        <div className="stats-measure">Repos</div>
        <div className="stats-value h4">0</div>
      </div>
      <div className="col-4">
        <div className="stats-measure">Followers</div>
        <div className="stats-value h4">0</div>
      </div>
      <div className="col-4">
        <div className="stats-measure">Following</div>
        <div className="stats-value h4">0</div>
      </div>
    </div>
    <div className="row">
      <div className="col-1">
        <img className="location" src={iconLocation} height="20"/>
      </div>
      <div className="col-5">
        <div className="location-data">0</div>
      </div>
      <div className="col-1">
        <img className="twitter" src={iconTwitter} height="20"/>
      </div>
      <div className="col-5">
        <div className="twitter-data">0</div>
      </div>
    </div>
    <div className="row">
      <div className="col-1">
        <img className="website" src={iconWebsite} height="20"/>
      </div>
      <div className="col-5">
        <div className="website-data">0</div>
      </div>
      <div className="col-1">
        <img className="company" src={iconCompany} height="20"/>
      </div>
      <div className="col-5">
        <div className="company-data">0</div>
      </div>
    </div>    
  </div>
    </>
  ); 
}

export default App;
