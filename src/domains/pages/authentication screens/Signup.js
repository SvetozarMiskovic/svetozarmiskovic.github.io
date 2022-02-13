import Container  from 'react-bootstrap/Container'
import Form  from 'react-bootstrap/Form'
import Button  from 'react-bootstrap/Button'

function Signup(){
    return(
        <Container fluid className='w-100 justify-content-center' style={{height: '100vh'}} >
            <div style={{backgroundColor: '#2375ab',padding: '1rem',color: '#fff', maxWidth: '1140px', borderRadius: '0.2rem', minHeight: 500,position: 'relative', bottom: '-50%',right: '-50%',transform: 'translate(-50%, -50%)'}}>
                <h1 className='text-center mb-4' style={{padding: '0.4rem'}}>Sign up</h1>
                <h4 className='text-center mb-3'>Create your account!</h4>
                <Form style={{borderTop: '1px solid white', width: '100%',}}>
                    <Form.Group className='mb-3' controlId='formBasicEmail' style={{padding: '0.6rem'}}>
                        
                        <Form.Label style={{fontSize: '2rem',}}>Enter email</Form.Label>
                        <Form.Control type='email' placeholder='Enter email'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicPassword' style={{padding: '0.6rem'}}>
                        
                        <Form.Label style={{fontSize: '2rem',}}>Enter password</Form.Label>
                        <Form.Control type='password' placeholder='Enter password'></Form.Control>
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='formBasicConfirmPassword' style={{padding: '0.6rem'}}>
                        
                        <Form.Label style={{fontSize: '2rem',}}>Confirm password</Form.Label>
                        <Form.Control type='password' placeholder='Confirm password'></Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='light' className='w-100' >Submit</Button>
                </Form>
            </div>
        </Container>
    )
}

export default Signup