import React, { Component } from "react";
import styled from 'styled-components';
import { NavigationBar2 } from './components/NavigationBar2';
import './Posts.css';
import { Nav, Navbar, FormControl, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Styles = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: black;
`;

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: "",
      description: "",
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (       
      
      <Styles>
        <Card style={{ width: '20rem' }}>
          <NavigationBar2/>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <h1></h1>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Agregar nuevo apunte</Form.Label>
              <Form.Control type="input" name="title" value={this.state.title}
                  onChange={this.handleInputChange} placeholder="Titulo" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control as="textarea" name="description" rows={3} value={this.state.description}
                  onChange={this.handleInputChange} placeholder="Descripcion" />
            </Form.Group>
            <Button type="submit">
              publicar
            </Button>
            <h1></h1>
          </Form>
        </Card>
        </Styles>
    );
  }
}

/*<div className="conteiner d-flex justify-content-center">
            <NavigationBar2/>
            <div className="col-sm-6">
                <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Agregar nuevo apunte</h5>
                    <form onSubmit={this.handleSubmit}>
                    <br />
                    <div>
                        <input
                        type="text"
                        name="title"
                        className="autocomplete"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="Título"
                        />
                    </div>
                    <div>
                        <br />
                        <input
                        type="textarea"
                        name="description"
                        className="autocomplete"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        placeholder="Descripción"
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn btn-dark">
                        Guardar Apunte
                    </button>
                    </form>
                    <br />
                </div>
            </div>
          </div>
        </div>*/