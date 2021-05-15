import './display.css'

const Display = (props) => (
  <div id="display">
    <div class="row" id="formula">
      {
        props.calcState.formula.join(' ')
        + (props.calcState.currOp !== undefined ? props.calcState.currOp : '')
      }
    </div>
    <div className="row" id="calcState">
        {props.calcState.currNumber}
      </div>
  </div>
);

export default Display;