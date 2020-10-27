import React from 'react';
import HomePage from './HomePage/HomePage'
import { Switch, Route} from 'react-router-dom';
import './App.css';
import NotePage from './Notepage/Notepage'
import Notes from './components/Notes/Notes';
import Footer from './components/Footer/Footer';
import HomeHeader from './HomePage/HomeHeader';


function App() {
  return (
    <div className="App">
     <HomeHeader />
      <Switch>
      <Route exact path = '/' component={HomePage}/>
      <Route exact path = '/Notepage' component={NotePage} />
      <Route  exact path='./Notes' component={Notes} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
