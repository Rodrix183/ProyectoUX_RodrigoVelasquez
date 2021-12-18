import React, { Component } from "react";
import Post from "./Posts";
import { apuntes } from "./Usuario.json";
import styled from 'styled-components';

const Styles = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: black;
`;

export default class Lista extends Component {
  constructor() {
    super();
    this.state = {
      apuntes,
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(apuntes) {
    var datosJson = JSON.stringify(this.state.apuntes);
    localStorage.setItem("datosJson ", datosJson);
    this.setState({
      apuntes: [...this.state.apuntes, apuntes],
    });
  }

  render() {
    const apuntes = this.state.apuntes.map((apuntes, i) => {
      return (
        <Styles>
            <div className="card" key={i}>
                <div className="card-body">
                    <div className="card-content">
                        <span className="card-title">
                        <h5>{apuntes.title}</h5>
                        </span>
                        <div className="card-action">{apuntes.description}</div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </Styles>
      );
    });

    return (
    <Styles>
      <div className={this.props.col}>
        <Post onAddTodo={this.handleAddTodo}></Post>
        <br />
        <div className="conteiner d-flex justify-content-center">
          <div className="row">
            <div className="card">
              <span className="card-title">Apuntes creados</span>
              {apuntes}
            </div>
          </div>
        </div>
      </div>
    </Styles>
    );
  }
}