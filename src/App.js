import React from 'react';

import ContainerFluid from './components/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { CashBlock } from './components/CashBlock';

function App() {


  return (
    <div className="App">
      <ContainerFluid>
        <CashBlock />
      </ContainerFluid>
    </div>
  );
}

export default App;
