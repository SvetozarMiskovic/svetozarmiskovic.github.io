import {useRef} from 'react'
import Container  from 'react-bootstrap/Container'
import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

import { connectAuthEmulator, signInWithEmailAndPassword } from 'firebase/auth'


function Signup(){

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    

    

    return(
        
        <Container fluid className='w-100 justify-content-center' style={{height: '100vh'}} >
            <div style={{backgroundColor: '#2375ab',padding: '1rem',color: '#fff', maxWidth: '1140px', borderRadius: '0.2rem', minHeight: 500,position: 'relative', bottom: '-50%',right: '-50%',transform: 'translate(-50%, -50%)'}}>
                <h1 className='text-center mb-4' style={{padding: '0.4rem'}}>Sign up</h1>
                <h4 className='text-center mb-3'>Create your account!</h4>
                <Form autoComplete='off' style={{borderTop: '1px solid white', width: '100%',}}>
                    <Form.Group className='mb-3 ' controlId='formBasicEmail' style={{padding: '0.6rem'}}>
                        
                        <Form.Label style={{fontSize: '2rem',}}>Enter email</Form.Label>
                        <Form.Control required ref={emailRef} type='email' placeholder='Enter email'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword' style={{padding: '0.6rem'}}>
                        
                        <Form.Label style={{fontSize: '2rem',}}>Enter password</Form.Label>
                        <Form.Control required ref={passwordRef} type='password' placeholder='Enter password'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicConfirmPassword' style={{padding: '0.6rem'}}>
                        
                        <Form.Label style={{fontSize: '2rem',}}>Confirm password</Form.Label>
                        <Form.Control required ref={confirmPasswordRef} type='password' placeholder='Confirm password'></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='light' className='w-100' style={{cursor: 'pointer', color: '#2375ab'}}>Sign up</Button>
                </Form>
                <div className='w-100 text-center mt-2'>
                    Already have an account? <Link to='/signin' style={{color: '#94BFA7'}}>Log in</Link>
                </div>
            </div>
        </Container>
    )
}

export default Signup