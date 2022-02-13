import Container  from 'react-bootstrap/Container'
import { Routes, Route } from 'react-router-dom';
import Signup from './domains/pages/authentication screens/Signup';

import Welcome from './domains/pages/welcome/Welcome';


function App() {
  return (
    <Container  fluid style={{width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
     
      <Routes>
        <Route exact path="/" element={ <Welcome/>}>
        </Route>
        <Route path="/signup" element={<Signup/>}>

        </Route>
      </Routes>

    </Container >
  );
}

export default App;
