import Card  from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom';
import '../../../styles/Welcome.css'
import  Button  from 'react-bootstrap/Button';
import {auth} from '../../../Firebase'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const welcomeStyle = {maxWidth: 900, minHeight: 'auto',backgroundColor: '#2375ab', color: '#fff', position: 'relative', bottom: '-50%',right: '-50%',transform: 'translate(-50%, -50%)'}
const navLink = {
    color: '#2375ab',
    padding: '0.7rem',
    border: '1px solid #fff',
    outline: 'none',
    borderRadius: '0.4rem',
    backgroundColor: '#fff',
    textAlign: 'left'
}


function Welcome(){

    const signInWithGoogle = (e)=> {
        e.preventDefault()
      
         const googleProvider = new GoogleAuthProvider();

         signInWithPopup(auth, googleProvider).then((result)=>{
             console.log(result)
             console.log("Signed in succesfully!")
         }).catch((err)=>{
             console.log('Something went wrong!')
             console.log(err)
         })
     
       
     }

    return (
        <Container fluid style={{backgroundColor: '#C1B4AE', height: '100vh',}}>
        <Card className='welcome-comp' style={welcomeStyle}>
            
            <Card.Body >
            <Card.Title>Welcome visitor</Card.Title>
            <Card.Text>In order to access my website, you can create an account or log in as a guest.Or if you you already have an account, you can proceed with loging in. </Card.Text>
            <Stack className='mt-3' gap={3}>
                <Link className='nav-link' to='/signup' style={navLink}>Sign up</Link>
                <Link className='nav-link' to='/signin' style={navLink} >Log in</Link>
                <Button className='nav-link' onClick={signInWithGoogle} style={navLink}>Log in with Google</Button>
                <Link className='nav-link' to='/home' style={navLink} >Log in as a guest</Link>
            </Stack>
            </Card.Body>

        </Card>
        </Container>
    )
}

export default Welcome