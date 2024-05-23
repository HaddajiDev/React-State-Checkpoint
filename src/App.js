import React, {useEffect, useState} from 'react';
import './App.css';

import Person from './components/Person';

function App(){
  const person = {
    full_Name: "Ahmed Haddaji",
    bio: "some guy",
    imgSrc: "https://th.bing.com/th/id/OIP.RVS7A90AUbKJPG0scgW7NQHaFz?rs=1&pid=ImgDetMain",
    job: "Nan"      
  };

  const [shows, setValue] = useState(true);
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevCounter) => prevCounter + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  
  
  return(
      <div className="App">
        <h1>Hello</h1>
        <Person person={person} shows={shows}/>
        <button onClick={()=> setValue(!shows)}>Toggle</button>     
        <h1>{timer}</h1>
      </div>
  );
}

export default App;
