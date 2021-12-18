import React from "react"
import Row from "./Row";
import './App.css';
import requests from "./request";
import Banner from "./Banner";
import Navbar from './Navbar';
// fa is the reference to the font-awesome library
import {FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title="MOVIES-FLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending}></Row>
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActioMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANTIC MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentries} />
      <h3 className="footer">Copyright©️ 2021, Created by @KUNAL VIRDI</h3>
      <div className="icons">
      <a href="https://www.instagram.com/_mr_kunal7/" target="_blank"><FaInstagram /></a>
      <a href="https://www.linkedin.com/in/kunal-virdi-b51a431b2/" target="_blank"><FaLinkedin /></a>
      <a href="https://twitter.com/KunalVirdi07" target="_blank"><FaTwitter /></a>
      </div>
      
    </div>
  );
}


export default App;
