import React, { Component } from 'react';
import "./Bitcoin.scss";
import axios from "axios";

/* const getBitcoinPrice = async () => {
try{    const rep = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json',);


return await rep.json();

} catch (e) {

    console.error(e);
 }
}; */





export default class Bitcoin extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            bitcoinInfo: null,
            date: new Date().toLocaleString(),
            isLoading:true
          }
        }

componentDidMount() {
    this.setState({isLoading:true});
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((rep) => {
            this.setState({bitcoinInfo: rep.data.bpi, isLoading: true,});
            console.log(this.state)
            });
    }
/* componentDidUpdate(){
    setInterval( () => {
        this.setState({
            date: new Date().toLocaleString(),
            bitcoinInfo: rep.data.bpi      
        })
      },1000) 
    } */
    
componentDidUpdate(prevProps, prevState) { 
        if (prevState.bitcoinInfo!== this.state.bitcoinInfo || prevState.date !== this.state.date  ) { 
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((rep) => {
            this.setState({bitcoinInfo: rep.data.bpi, isLoading: true, date:new Date().toLocaleString()}) ;            
    })
   }
 
}


      
    render() {

        if (this.state.bitcoinInfo) {

            const btcPrice = this.state.bitcoinInfo;
            let nomBtc = ` ${btcPrice.USD.code}  ${btcPrice.USD.description} `;
            let priceBtc = ` ${btcPrice.USD.rate}`;

        
         return (
            <div>
                
                <h5>Bitcion : {nomBtc}  </h5>             
                <h2>dernier changement de prix: {priceBtc}</h2>
                <span>{this.state.date}</span>
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
