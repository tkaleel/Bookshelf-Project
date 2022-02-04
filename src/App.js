import './App.css';
import { Switch, Route, useHistory } from "react-router-dom";
import React, { useState } from 'react';
import Search from './components/Search';
import Title from './components/Title';
import Author from './components/Author';


function App() {
  const [type, setType] = useState("title");
  const [userQuery, setUserQuery] = useState("");
  const history = useHistory();

  const navStyle = {
    zIndex: "3",
    width: "250px",
    fontWeight: "bold",
    display: "none",
    right: "0"
  }

  const mainstyle = {
    marginLeft: "300px"
  }
  const aboutstyle = {
    maxWidth: "600px"
  }

  const bodystyle = {
    maxWidth: "1600px"
  }

  const smallstyle = {
    marginTop: "83px"
  }

  const blogstyle = {
    width: "50px"
  }

  const sendSearch = (e) => {
    e.preventDefault();
    history.push("/" + type + "/" + userQuery);
  }

  const w3_open = (e) => {
    e.preventDefault();
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";


  }

  const w3_close = (e) => {
    // e.preventDefault();
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";


  }

  return (
    <div className="App">
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" />
      <body class="w3-light-grey w3-content" style={bodystyle}>

        {/* SIDEBAR */}
        <nav class="w3-sidebar w3-bar-block w3-white w3-animate-right w3-text-grey w3-collapse w3-top w3-center" style={navStyle} id="mySidebar">
          <h3>📚📚 Bookshelf</h3>
          <a href="" onclick={w3_close} class="w3-bar-item w3-button w3-center w3-padding-32">CLOSE</a>
          <a href="#about" onclick={w3_close} class="w3-bar-item w3-button w3-center w3-padding-16">ABOUT THIS APP</a>
          <a href="#contact" onclick={w3_close} class="w3-bar-item w3-button w3-center w3-padding-16">CONTACT US</a>
        </nav>



        {/* MENU */}
        <header class="w3-container w3-top w3-white w3-xlarge w3-padding-16 w3-hide-large">
          <span class="w3-left w3-padding"><h1>📚📚</h1>
          </span>
          <a href="" class="w3-right w3-button w3-white" onClick={w3_open}>☰</a>
        </header>
        {/* OVERLAY */}
        <div class="w3-overlay w3-animate-opacity" onclick={w3_close} title="close side menu" id="myOverlay"></div>

        <br></br>
        <br />
        <br />
        <div class="w3-main" style={mainstyle}>
          <div class="w3-hide-large" style={smallstyle}></div>
          <form onSubmit={sendSearch}>
            <label>Select: </label>
            <select value={type} id="type" onChange={(e) => setType(e.target.value)}>
              <option value="title">Title</option>
              <option value="author">Author</option>
            </select>
            <input placeholder='Your Search here...' value={userQuery} type="text" onChange={(e) => setUserQuery(e.target.value)}></input>
            <button>Search!</button>
          </form>


          <Switch>
            <Route path="/title/:userQuery">
              <Title />
            </Route>

            <Route path="/author/:userQuery">
              <Author />
            </Route>

            <Route path="/">
              <Search />
            </Route>
          </Switch>
        </div>
        <br />
        <br />
        {/* ABOUT */}
        <div class="w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32" id="about">
          <h4><b>About Us</b></h4>
          {/* <img src="/w3images/avatar_hat.jpg" alt="Me" class="w3-image w3-padding-32" width="600" height="650" /> */}
          <div class="w3-content w3-justify" style={aboutstyle}>
            <h4>Example Library</h4>
            <p>We are lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>mail: example@example.com</p>
            <p>tel: XXX XXXX XXXX</p>
          </div>
        </div>

        {/* FOOTER */}
        <footer class="w3-container w3-padding-32 w3-grey">
          <div class="w3-row-padding">
            <div class="w3-third">
              <h3>INFO</h3>
              <p>Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div class="w3-third">
              <h3>BLOG POSTS</h3>
              <ul class="w3-ul">
                <li class="w3-padding-16 w3-hover-black">
                  <img src="/w3images/workshop.jpg" class="w3-left w3-margin-right" style={blogstyle} alt="Blog Icon" />
                  <span class="w3-large">Lorem</span><br />
                  <span>Sed mattis nunc</span>
                </li>
                <li class="w3-padding-16 w3-hover-black">
                  <img src="/w3images/gondol.jpg" class="w3-left w3-margin-right" style={blogstyle} alt="Blog Icon" />
                  <span class="w3-large">Ipsum</span><br />
                  <span>Praes tinci sed</span>
                </li>
              </ul>
            </div>
            <div class="w3-third">
              <h3>POPULAR SEARCHES</h3>
              <p>
                <span class="w3-tag w3-black w3-margin-bottom">John Grisham</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">New York</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Stephen King</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">DIY</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Andy Weir</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom"></span>
                <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Sally Rooney</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Emily Henry</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">All That She Carried</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">People</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">W.E.B. Du Bois</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Klara and the Sun</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Agatha Christie</span> <span class="w3-tag w3-dark-grey w3-small w3-margin-bottom">Paulo Coelho</span>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </div>
  );
}

export default App;
