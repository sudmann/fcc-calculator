import { useState } from 'react';

import Display from './Display';
import Buttons from './Buttons';

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
      <Buttons setCalcState={setCalcState} />
    </div>
  );
};

export default Calculator;