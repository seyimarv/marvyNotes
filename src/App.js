import React, {useState, useEffect}from 'react';
import HomePage from './HomePage/HomePage'
import { Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import NotePageCon from './Notepage/notePageCon'
import Notes from './components/Notes/Notes';
import Footer from './components/Footer/Footer';
import {auth, createUserProfile} from './firebase/Firebase'
import HomeHeader from './HomePage/HomeHeader';
import Login from './components/LogIn/Login';




const App = () => {
  const [user, setUser] = useState(null)
  let unsubscribeFromAuth = null;

  useEffect(() => { 
  
     
  auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot => {
          setUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
       
    });

    
 }, [])
 
 console.log(user)
  return (
    <div className="App">
   
     <HomeHeader user={user} />
      <Switch>
      <Route user={user} exact path = '/' render={() =>
              user ? (
                <Redirect to='/Homepage'/>
              ) : (
                 <Login user={user}/>
              )
            }/>
       <Route exact path = '/Homepage' component={HomePage}/>
       
       <Route  exact path = '/Notepage' render={() => ( <NotePageCon user={user} /> )} />
       <Route  exact path='./Notes' component={Notes} />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
