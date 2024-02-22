
import React  from "react";
import ReactDOM from "react-dom/client";
const heading = React.createElement("h1", {}, "hello world from REact lets learn react");


const jsxheading=(<h1 className="heading">learn REact from jsx</h1>)
const root = ReactDOM.createRoot(document.getElementById('root'));

const root2=ReactDOM.createRoot(document.getElementById('root2'));


const a=231
const Title = ()=>(
    <div>
    <h1 className="head">componet compositon</h1>
    <Subheaidng />
    </div>    

) 
const Subheaidng =() =>(
    <div>
    <h1 className="subhead"> Sub heading</h1>
    </div>
)  
const HeadingComponent = () =>(
    <div id="Contener">
        <Title />
        {jsxheading}
        {Title()}
        {Fun1()}
    <h2 className="heading">functional componet</h2>
         <Subheaidng />
        {a}
    </div>
)

const Fun1 =() =>(
    <div className="container">
        <h1>function 1</h1>
        {heading}
        {elm1}
    </div>
)
const elm1=(<h1>elm1 element </h1>)


const root3=ReactDOM.createRoot(document.getElementById('root3'));
// root.render(heading)
root.render(jsxheading)
root2.render(<Fun1/>)
root3.render(<HeadingComponent />);

