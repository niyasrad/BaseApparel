import React from 'react';
import logo from './assets/images/logo.svg';
import bg from './assets/images/bg-pattern-desktop.svg';
import woman1 from './assets/images/hero-desktop.jpg';
import woman2 from './assets/images/hero-mobile.jpg';
import './App.css';


function ValidateEmail(mail: string) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
function App() {
  return (
    <div className="App">
      <div className="flex-one">
        <img className="bg" src={bg} alt="bg"/>
        <img src={logo} alt="logo" className='logo' />
        <img src={woman2} alt='woman'className="woman-mobile"/>
        <div className="bottom">
          <h1><span className="brawn">WE'RE</span><br></br>COMING<br></br>SOON</h1>
          <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        </div>
        <div className="email">
          <input className="input" type='email' placeholder="Email Address" name="email"></input>
          <input className='button' type='submit' value='&gt;' />
        </div>
      </div>
      <img src={woman1} alt="woman" className="woman" />
    </div>
  );
}

export default App;
