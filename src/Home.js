import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import  Lista  from './lista';
import { NavigationBar } from './components/NavigationBar';
import { useFirestoreDocData, useFirestore, useFirestoreCollectionData, useAuth, useUser, auth} from 'reactfire';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from 'react-router-dom';
import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    text-align: center;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: white;
`;
/*auth.onAuthStateChanged((user) => {
    if (user) {
        <NavigationBar2/>
    } else {
        <NavigationBar/>
    }
  });*/
//export const Home = () => (
export function Home(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const auth = useAuth();
      

    function registrar() {
        auth.createUserWithEmailAndPassword(email, password).catch(err => console.log(err));
    };

    console.log(email);
    console.log(password);
    const { data: user } = useUser();
    const history = useHistory();
    function handleClick(path) {
        history.push(path);
    }
    function ingresar() {
        auth.signInWithEmailAndPassword(email, password).then(() => handleClick("/lista")).catch(err => console.log(err));
    //    var user = auth.currentUser;
    };
    return(
    <Styles>
        <div>
            <NavigationBar/>
            <h1>
                x

            </h1>
            <h1>
                x
            </h1>
            <Card style={{ width: '20rem' }}>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label></Form.Label>
                    <Form.Control type="email" placeholder="Ingrese email"  value={email} onChange={e => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
               
                    <Button onClick={ingresar} >
                        Ingresar
                    </Button>
 
                <h1>
                </h1>
                <Button onClick={registrar}>
                    Registrar
                </Button>
                <h1></h1>
            </Form>
            </Card>
        </div>
    </Styles>
    );    
}
//)