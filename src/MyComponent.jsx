function myComponent(props) {
    var user = props.user || 'User';
    console.log(props);
    return <div>
        {/* @toNote: javascript expression under jsx code can be written under {} */}
      <h3>Hello, {user} {props.age && <span>Your age is {props.age}</span>}</h3>
    </div>
}

export default myComponent;

// named export 
// default export