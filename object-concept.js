const myObj = {
  name: "Chetna",
  title: "Pandey",
  age: 22,
  location: "Delhi",
};
myObj.job = "Web Developer";
delete myObj.age;
// myObj = 'Hello';

console.log(myObj);
console.log(Object.keys(myObj));
console.log(Object.values(myObj));

// De structuring and rest parameters
// console.log(myObj.name, myObj.location)

// const name = myObj.name;
// const loc = myObj.location;
// console.log(name, loc);

const { name, title, ...rest } = myObj;
console.log(name, title, rest);

const welcome = "Hello WOrld";

const newObj = {
  name: name,
  title: title,
  time: "Morning",
  welcome: welcome,
};

console.log(newObj);

// defining object with "variable as key"
const xyz = "Some Value";
const easyObj = {
  time: "Evening",
  title: "Pathak",
  name,
  welcome,
  xyz,
  //   date: '31 DEC'
};
console.log(easyObj);

// Providing default values while de-structuring and aliasing
const { time, date = "1 Jan", title: newTitle } = easyObj;
console.log(time, date, newTitle);
