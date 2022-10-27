
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { PopContainer } from './PopupElements'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import axios from 'axios';

const sendEmail = (e) => {

console.log(e.target["email"].value);

  const nom = e.target["nom"].value
  const prenom = e.target["prenom"].value
  const email = e.target["email"].value
  const problem = e.target["problem"].value

    e.preventDefault();

    
saveData(nom , prenom , email , problem);

  //   emailjs.sendForm('gmail', 'template_ncbaesq', e.target, 'CYeaz6Efr08OgHc6p')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // e.target.reset()


};
  

const saveData = (nom , prenom , email , problem)=>{


  axios.post('http://localhost:3000/contact/', {
    nom: nom,
    prenom: prenom,
    email:email,
    problem : problem
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

class Modal extends Component {
  render() {
    return (
      <PopContainer style={{ background: '#444348', }} >
        <Container>
          <Form onSubmit={ sendEmail }>
              <Form.Group className="mb-3 my-2" controlId="exampleForm.ControlInput1">
                  <Form.Label className='text-light my-2'>Nom</Form.Label>
                  <Form.Control type="text" name="nom" />
            </Form.Group>
            <Form.Group className="mb-3 my-2" controlId="exampleForm.ControlInput2">
                  <Form.Label className='text-light my-2'>Prenom</Form.Label>
                  <Form.Control type="text" name="prenom"/>
              </Form.Group>
              <Form.Group className="mb-3 my-2" controlId="exampleForm.ControlInput3">
                  <Form.Label className='text-light my-2'>Email address</Form.Label>
                  <Form.Control type="email" name="email" placeholder="nom@example.com" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className='text-light my-2'>Votre Message</Form.Label>
                  <Form.Control as="textarea" name="problem" rows={6} />
              </Form.Group>
                  <Button className='my-3' variant="primary" type="submit" style={{background:'#8cc43c',border:'#8cc43c'}}>Envoyer</Button>
          </Form>
        </Container>
      </PopContainer>
    );
  }
       
}

export default Modal;