import "./App.css";
import MyComponent from "./MyComponent.jsx";

function App() {
  // console.log(process.env);
  return (
    <div className="App">
      <h1>Hello My Application - {process.env.NODE_ENV}</h1>
      <MyComponent />
      <MyComponent user="Chetna" />
      <MyComponent user="Pandey" />
      <MyComponent user="Pandey" age="22" welcomeMsg="Hey there" />
      {/* @todo: Learn how to add text inside a component tags   */}
      {/* @todo: Learn to add custom environment variable in cra */}
    </div>
  );
}

export default App;
