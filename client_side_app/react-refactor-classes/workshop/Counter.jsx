import React from "react";

function Counter () {
 const [count, setcount]= React.useState(0);
//  const decrement = () => setcount((oldCount) => oldCount - 1);
//   const increment = () => setcount((oldCount) => oldCount + 1);

  //  function decrement() {
  //    return setcount((oldCount) => oldCount - 1);
  //  }

  //  function increment() {
  //    return setcount((oldCount) => oldCount + 1);;
  //  }
  //  console.log(count);
  // decrement = () => {
  //   this.setState((oldState) => {
  //     return { count: oldState.count - 1 };
  //   });
  // };
  // increment = () => {
  //   this.setState((oldState) => {
  //     return { count: oldState.count + 1 };
  //   });
  // };

  
    return (
      <div>
        <button onClick={()=> setcount(count-1)} aria-label="Decrement count">
          -
        </button>
        <span>Count is {count}</span>
        <button onClick={()=> setcount(count+1)} aria-label="Increment count">
          +
        </button>
      </div>
    );
  
}

export default Counter;
