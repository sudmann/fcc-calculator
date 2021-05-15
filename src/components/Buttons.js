
import './buttons.css';

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
  return (
    <div id="buttons">
      {
        buttons.map(button => (
          <button
            id={ button.id }
            key={ button.id }
          >
            { button.value }
          </button>
        ))
      }
    </div>
  )
}

export default Buttons;