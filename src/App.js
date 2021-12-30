import "./App.css";
import MyComponent from "./MyComponent.jsx";

function App() {
  return (
    <div className="App">
      <h1>Hello My Application</h1>
      <MyComponent />
      <MyComponent user="Chetna" />
      <MyComponent user="Pandey" />
      <MyComponent user="Pandey" age="22" />
      {/* @todo: Learn how to add text inside a component tags   */}
    </div>
  );
}

export default App;
