import { useEffect } from 'react';
import { useStateValue } from '../contextAPI/StateProvider';
import { auth } from '../firebase.config';
import AppRouter from './router';

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
  // will only run once when the app component loads..
   
   auth.onAuthStateChanged(authUser => {
     console.log('THE USER IS >>>', authUser);

     if (authUser) {
      //  The user just logged in / the user was logged in
       dispatch({
         type: 'SET_USER',
         user: authUser
       })
     } else {
      //  The user in  logged out
       dispatch({
         type: 'SET_USER',
         user: null
       })
     }
   })
 }, [])
  
  
  
  return (
    // BEM
    <div className="App">
     <AppRouter/>
    </div>
  );
}

export default App;
