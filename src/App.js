import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContainerFluid from './components/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  return (
    <div className="App">
      <ContainerFluid>
        <Row><Col className='mb-4 fs-1'>{cash}</Col></Row>
        <Row>
          <Col>
            <Button onClick={() => getCash(Number(prompt()))} className='me-4'>Уменьшить</Button>
            <Button onClick={() => addCash(Number(prompt()))}>Увеличить</Button>
          </Col>
        </Row>
      </ContainerFluid>
    </div>
  );
}

export default App;
