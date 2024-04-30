/*function Hello(props) {
  return (
    <div>
      <h1>
        {props.message} {props.name} {props.age} {props.emoji}
      </h1>
    </div>
  );
}
export default Hello;
*/
/*

this is the example to show how we pass arguments through the props
*/

/*function Hello({ name, age, message, emoji, array }) {
  return (
    <div>
      <h1>
        {message}
        {name}
        {age}
        {emoji}
        {array}
      </h1>
    </div>
  );
}
export default Hello;*/

//this is how we pass array as a arguments by destructuring
/*function Hello(props) {
  return (
    <div>
      <h1>
        {props.person.message}
        {props.person.name}
        {props.person.age}
        {props.person.emoji}
        {props.person.array}
      </h1>
    </div>
  );
}
export default Hello;
*/
//this is how we can pass object through props

/*function Hello(props) {
  return (
    <div>
      <h1>
        {props.message}
        {props.name}
        {props.age}
        {props.emoji}
        {props.array}
      </h1>
    </div>
  );
}
export default Hello;
*/
function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.message}
        {person.name}
        {person.age}
        {person.emoji}
        {person.array}
      </h1>
    </div>
  );
}
export default Hello;
//how to object to component through props
