import './App.css';

import Navbar from './Navbar';

import Home from './Home';

function App() {
  const title = 'Welcome to the TechWorld!';
  const likes = 50;
  // const person = {name: 'Nayan', age: 23}; //error

  const link = "https://google.com";

  return (
    <div className="App">
      <Navbar />

      {/* yeah this is a update */}
      <div className="content">
        <Home />
        <h1>{ title }</h1>
        <p>liked { likes } times</p>

        {/* <p>person details { person }</p> //error */}

        <p>{ 10 }</p>
        <p>{ "Hello form anyone!" }</p>
        <p>{ [10, 20, 30, 40, 50] }</p>
        <p>{ Math.random() * 5 }</p>

        <a href={link}> google site</a>
      </div>      
    </div>
  );
}

export default App;