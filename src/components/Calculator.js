import { useState } from 'react';

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
    </div>
  );
};

export default Calculator;