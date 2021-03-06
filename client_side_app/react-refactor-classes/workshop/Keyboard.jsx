

import React, { useState } from "react";


function Keyboard () {
  
  const [key, setKey]= React.useState(null)

  React.useEffect(() => {
    const handleKeyDown = (e) => setKey(e.key);
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  return  <div>{key || "Press any key"}</div>;
}

// class Keyboard extends React.Component {
//   state = {
//     key: "",
//   };
//   handleKeyDown = (event) => {
//     this.setState({ key: event.key });
//   };
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleKeyDown);
//   }
//   componentWillUnmount() {
//     // stops the event listener continuing to fire
//     // when the component has left the page
//     window.removeEventListener("keydown", this.handleKeyDown);
//   }
//   render() {
//     return <div>{this.state.key || "Press any key"}</div>;
//   }
// }

export default Keyboard;
