const heading = React.createElement("h1", {}, "hello world from REact");

console.log(heading)//object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading)
