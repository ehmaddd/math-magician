import { PropTypes } from 'prop-types';
import { useState } from 'react';
import calculate from '../logic/calculate';
import Quotes from './quotes';

const ans = document.querySelector('.answer');

const Calculator = () => {
  const [totalVal, setTotalVal] = useState(null);
  const [nextVal, setNextVal] = useState(null);
  const [operationVal, setOperationVal] = useState(null);

  const onClickHandler = (e) => {
    const res = calculate({
      total: totalVal,
      next: nextVal,
      operation: operationVal,
    }, e.target.innerHTML);
    const ans = document.querySelector('.answer');
    setTotalVal(res.total);
    setNextVal(res.next);
    setOperationVal(res.operation);
    ans.innerHTML = (!res.next) ? res.total : res.next;
  };

  const onHandleKeyDown = () => {
    ans.innerHTML = 'E';
  };

  return (
    <>
      <div className="calculator">
        <div className="grid-container">
          <div className="grid-item" id="answer-div">
            <Result val="0" />
          </div>
          <Item val="AC" onClick={onClickHandler} />
          <Item val="+/-" onClick={onClickHandler} />
          <Item val="%" onClick={onClickHandler} />
          <Operators val="÷" onClick={onClickHandler} />
          <Item val="7" onClick={onClickHandler} />
          <Item val="8" onClick={onClickHandler} />
          <Item val="9" onClick={onClickHandler} />
          <Operators val="x" onClick={onClickHandler} />
          <Item val="4" onClick={onClickHandler} />
          <Item val="5" onClick={onClickHandler} />
          <Item val="6" onClick={onClickHandler} />
          <Operators val="-" onClick={onClickHandler} />
          <Item val="1" onClick={onClickHandler} />
          <Item val="2" onClick={onClickHandler} />
          <Item val="3" onClick={onClickHandler} />
          <Operators val="+" onClick={onClickHandler} onKeyDown={onHandleKeyDown} />
          <Zero onClick={onClickHandler} />
          <Item val="." onClick={onClickHandler} onKeyDown={onHandleKeyDown} />
          <Operators val="=" onClick={onClickHandler} />
        </div>
      </div>
      <Quotes />
    </>
  );
};

const Item = (props) => {
  const { val, onClick, onHandleKeyDown } = props;
  return (<div className="grid-item light-grey" role="button" tabIndex={-1} onClick={onClick} onKeyDown={onHandleKeyDown}>{val}</div>);
};

const Result = () => (<p className="answer">0</p>);

Item.propTypes = {
  val: PropTypes.string.isRequired,
};

const Operators = (props) => {
  const { val, onClick, onHandleKeyDown } = props;
  return (<div className="grid-item orange" role="button" tabIndex={-1} onClick={onClick} onKeyDown={onHandleKeyDown}>{val}</div>);
};

Operators.propTypes = {
  val: PropTypes.string.isRequired,
};

const Zero = (props) => {
  const { onClick, onHandleKeyDown } = props;
  return (<div className="grid-item zero light-grey" role="button" tabIndex={-1} onClick={onClick} onKeyDown={onHandleKeyDown}>0</div>);
};

Zero.propTypes = {
  onClick: PropTypes.string.isRequired,
  onHandleKeyDown: PropTypes.string.isRequired,
};

Item.propTypes = {
  onClick: PropTypes.string.isRequired,
  onHandleKeyDown: PropTypes.string.isRequired,
};

Operators.propTypes = {
  onClick: PropTypes.string.isRequired,
  onHandleKeyDown: PropTypes.string.isRequired,
};

export default Calculator;
