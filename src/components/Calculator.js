import { useState } from 'react';

import Display from './Display';

import './calculator.css';

export const initialCalcState = {
  formula: [],
  currNumber: '0',
  currOp: undefined,
};

const Calculator = () => {
  const [calcState, setCalcState] = useState(initialCalcState);

  return (
    <div id="calculator">
      <Display calcState={calcState} />
    </div>
  );
};

export default Calculator;