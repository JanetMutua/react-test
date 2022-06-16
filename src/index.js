import React from "react";
import ReactDom from 'react-dom';

// capitalize name for react to know its a component
// stateless functional component
//always return JSX
//where js is being injected to the html div hence use render

function Greeting(){
  return <h4>HI JANET</h4>;
}

ReactDom.render(<Greeting/>, document.getElementById('root'));