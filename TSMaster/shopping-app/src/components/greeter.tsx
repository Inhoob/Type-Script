import React from "react";
interface GreeterProps {
  person: string;
}
// function Greeter(props: GreeterProps): JSX.Element {
//   return <h1>Hello {props.person}</h1>;
// }
function Greeter({ person }: GreeterProps): JSX.Element {
  return <h1>Hello {person}</h1>;
}

export default Greeter;
