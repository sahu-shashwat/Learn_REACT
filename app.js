
import React  from "react";
import ReactDOM from "react-dom";
const heading = React.createElement("h1", {}, "hello world from REact lets learn react");

console.log(heading)//object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)
