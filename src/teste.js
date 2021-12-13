import ReactDOM, { render } from "react-dom";

function Teste()
{
  return(
    <button onClick={() => primeira()}>Teste</button>
  );
}

export default function primeira()
{
ReactDOM.render (<Teste/>, document.querySelector(".root"));
}