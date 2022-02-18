import React, { Component } from 'react';
import "./Activite.scss";
import axios from 'axios';

export default class Activite extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activites : [],
            isLoading: true
        }
      }

    componentDidMount(){
        this.setState({isLoading:true});
        axios.get('https://www.boredapi.com/api/activity')
        .then((rep) => {
            let activite1 = rep.data.activity;
            let activite2 = rep.data.activity;
            let activite3 = rep.data.activity;

            console.log(rep);
            this.setState({activites:[activite1, activite2, activite3], isLoading:true});
        });
    }

      
    render() {

       
        if ( this.state.activites) {
            let mesLi = this.state.activites.map(
                (valeur) => {return (<li>{valeur}</li>); }             
            );

        
        return (
            <div className="activite">
                <ul>
                   <li>{mesLi}</li>
                </ul>
            </div>
        )
    }
    
}
}

