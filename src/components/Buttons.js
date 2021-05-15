import './buttons.css';
import { initialCalcState } from './Calculator';

const actionTypes = {
  operator: "OP",
  clear: "AC",
  eval: "EVAL",
  decimal: "DECIMAL"
};

const buttons = [
  { id: "clear", value: "AC", action: actionTypes.clear },
  { id: "divide", value: "/", action: actionTypes.operator },
  { id: "multiply", value: "*", action: actionTypes.operator },
  { id: "seven", value: 7 },
  { id: "eight", value: 8 },
  { id: "nine", value: 9 },
  { id: "subtract", value: "-", action: actionTypes.operator },
  { id: "four", value: 4 },
  { id: "five", value: 5 },
  { id: "six", value: 6 },
  { id: "add", value: "+", action: actionTypes.operator },
  { id: "one", value: 1 },
  { id: "two", value: 2 },
  { id: "three", value: 3 },
  { id: "equals", value: "=", action: actionTypes.eval },
  { id: "zero", value: 0 },
  { id: "decimal", value: ".", action: actionTypes.decimal },
];

const Buttons = (props) => {

  // To be honest, this is function is horrible
  const assignAction = (button) => {
    switch (button.action) {
      case actionTypes.clear:
        return () => {
          props.setCalcState(initialCalcState)
        }
      case actionTypes.decimal:
        return () => {
          props.setCalcState(state => {
            const newNumber = state.currNumber.includes('.') ? state.currNumber : state.currNumber + '.'
            return {
              formula: [...state.formula],
              currNumber: newNumber,
              currOp: undefined,
            };
          });
        }
        case actionTypes.eval:
          return () => {
            props.setCalcState(state => {
              const expr = [...state.formula, state.currOp, state.currNumber].join('');
              console.log(expr, eval(expr));
              return {
                formula: [],
                currNumber: eval(expr),
                currOp: undefined,
              };
            });
          }
          case actionTypes.operator:
            return () => {
              props.setCalcState(state => {
                if (state.currOp === undefined) {
                  return {
                    formula: [...state.formula, state.currNumber],
                    currNumber: '0',
                    currOp: button.value,
                  }
                } if (button.value === '-') {
                  return {
                    formula: [...state.formula],
                    currNumber: state.currNumber.startsWith('-')
                      ? state.currNumber.substring(1)
                      : '-' + state.currNumber,
                    currOp: state.currOp,
                  };
                }
                return {
                  formula: [...state.formula],
                  currNumber: '0',
                  currOp: button.value,
                };
              });
            }
            default:
              return () => {
                props.setCalcState(state => {
                  if(button.value === 0 && (state.currNumber.match(/-?0$/) !== null)){
                    return {
                      formula: [...state.formula],
                      currNumber: state.currNumber,
                      currOp: state.currOp,
                    }
                  }

                  const newFormula = [...state.formula];
                  let newNumber = state.currNumber + button.value.toString();
                  if (state.currNumber === '0') {
                    newNumber = button.value.toString();
                  }
                  if (state.currNumber === '-0') {
                    newNumber = '-' + button.value.toString();
                  }

                  if(state.currOp !== undefined) {
                    newFormula .push(state.currOp);
                  }

                  return {
                    formula: newFormula,
                    currNumber: newNumber,
                    currOp: undefined,
                  }
                });
              };
    }
  }

  return (
    <div id="buttons">
      {
        buttons.map(button => (
          <button
            id={ button.id }
            key={ button.id }
            onClick={ assignAction(button) }
          >
            { button.value }
          </button>
        ))
      }
    </div>
  )
}

export default Buttons;