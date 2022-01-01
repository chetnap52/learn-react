function MyComponent({user:name = 'User', age, ...restProps}) {
    // var user = props.user || 'User';
    console.log(restProps);
    return <div>
        {/* @toNote: javascript expression under jsx code can be written under {} */}
      <h3>Hello, {name} {age && <span>Your age is {age}</span>}</h3>
      <h4>{restProps.welcomeMsg}</h4>
    </div>
}

export default MyComponent;

// named export 
// default export