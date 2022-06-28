import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const CashBlock = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)

    const addCash = (cash) => {
        dispatch({ type: "ADD_CASH", payload: cash })
    }

    const getCash = (cash) => {
        dispatch({ type: "GET_CASH", payload: cash })
    }

    return (
        <Row className='mb-4 pt-4 pb-4'>
            <Row><Col className='mb-4 fs-1'>{cash}</Col></Row>
            <Row>
                <Col>
                    <Button onClick={() => getCash(Number(prompt()))} className='me-4'>Уменьшить</Button>
                    <Button onClick={() => addCash(Number(prompt()))}>Увеличить</Button>
                </Col>
            </Row>
        </Row>
    )
}
