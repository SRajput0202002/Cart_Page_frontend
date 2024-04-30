import Code from "./Code.js";
import Welcome from "./Welcome.js";

export default function ConditionComponent() {
  //let Message;
  const display = false;
  //const display = true;
  /*if (display) {
    Message = <h1>This is Message 1 😍😍😍😍</h1>;
  } else {
    Message = <h1>This is Message 2 😒😒😒😒😒</h1>;
  }
  return Message;*/
  {
    // return display ? <h1>Message 1</h1> : <h1>Message 2</h1>;
    return display ? <Welcome /> : <Code />;
  }
}
