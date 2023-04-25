import React from 'react';

const Calculator = () => (
  <div className="calculator">
    <div className="grid-container">
      <div className="grid-item" id="answer-div">
        <Result />
      </div>
      <div className="grid-item light-grey">AC</div>
      <div className="grid-item light-grey">+/-</div>
      <div className="grid-item light-grey">%</div>
      <div className="grid-item orange">*</div>
      <div className="grid-item light-grey">7</div>
      <div className="grid-item light-grey">8</div>
      <div className="grid-item light-grey">9</div>
      <div className="grid-item orange">x</div>
      <div className="grid-item light-grey">4</div>
      <div className="grid-item light-grey">5</div>
      <div className="grid-item light-grey">6</div>
      <div className="grid-item orange">-</div>
      <div className="grid-item light-grey">1</div>
      <div className="grid-item light-grey">2</div>
      <div className="grid-item light-grey">3</div>
      <div className="grid-item orange">+</div>
      <div className="grid-item zero light-grey">0</div>
      <div className="grid-item light-grey">.</div>
      <div className="grid-item orange">=</div>
    </div>
  </div>
);

const Result = () => <p className="answer">0</p>;

export default Calculator;
