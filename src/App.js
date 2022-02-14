import Container  from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom';
import Signin from './domains/pages/authentication screens/Signin';
import Signup from './domains/pages/authentication screens/Signup';
import { onAuthStateChanged } from 'firebase/auth';
import Welcome from './domains/pages/welcome/Welcome';
import { useState } from 'react';

function App() {
  const [signedIn, setSignedIn] = useState(false)
  
  onAuthStateChanged((user)=>{
    if(user){
      return setSignedIn(true)
    }
    setSignedIn(false)
  })

  console.log(signedIn)
  return (
      <Container  fluid style={{width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
      
        <Routes>
          <Route exact path="/" element={ <Welcome/>}>
          </Route>
          <Route path="/signup" element={<Signup/>}>

          </Route>
          <Route path='/signin' element={<Signin/>}>

          </Route>
        </Routes>

      </Container >
   
  );
}

export default App;
