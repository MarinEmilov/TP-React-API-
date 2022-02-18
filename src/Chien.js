import React, { Component } from "react";
import axios from "axios";
import "./Chien.scss";

export default class Chien extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      isLoading: false,
      erreur: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((rep) => {
        console.log(rep);
        this.setState({ data: rep.data.message, isLoading: false });
      })
      .then((err) => {
        if (err) {
          console.log(err);
          this.setState({ isLoading: false, erreur: err.message });
        }
      });
  }

  render() {
    if (this.state.data) {
      const chien = this.state.data;

      return (
        <div className="section3">
          <p className="erreur">{this.state.error}</p>
          <div className="chien">
            <img src= {chien} width="180px" height="180px" alt="img chien"/>
          </div>
        </div>
      );
    }

    if (this.state.isLoading) {
      return <div>En chargement...</div>;
    } else {
      return <div>{this.state.erreur}</div>;
    }
  }
}
