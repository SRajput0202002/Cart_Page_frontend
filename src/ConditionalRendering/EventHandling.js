export default function EventHandling() {
  function HandleClick() {
    alert("Button Clicked");
    console.log("button clicked");
    
  }
  return (
    <div>
      <button onClick={HandleClick}>Click here to get a message</button>
    </div>
  );
}
