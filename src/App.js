import React from 'react';
import Activite from './Activite';
import './App.scss';
import Bitcoin from './Bitcoin';
import Chien from './Chien';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chiens:[]
    }
  }

ajouterChien() {
    let chien = (<Chien/>);
    let chiens = this.state.chiens.concat(chien);
    this.setState({chiens:chiens});
}
  
render() {  
    return (
      <div className="App">
        <header className="App-header">
          <h1>Mon Tp 2 en react app</h1>
        </header>

       
        <div class="">
          <Bitcoin />
          <Activite/>
          
            <button onClick={() => this.ajouterChien() }>Ajouter une chien</button>
            <div className="photochien">
             {this.state.chiens}
            </div>  
        </div>


      </div>
    );
  }
  
}

export default App;

