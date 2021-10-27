import React from "react";
// import { Greeting } from "./Greeting";



import {Profile} from "./Profile"

function App() {

  const [name, setName] = React.useState('');

  return (
    <main>
      <div>GitHub user profile goes here</div>
      <section>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setName(event.target.username.value);
        }}
      >
        <input
          type="search"
          aria-label="Search users"
          placeholder="Search users"
          name="username"
        />
      </form>
      <Profile name={name} />

        {/* <form>
        <label htmlFor="text">
              search
              <input
                type="text"
                id="tex"
                placeholder="please enter name"
                
                name={name}
                value={name}
                onChange={e => setName(e.target.value)}
              />
  
            </label>
            <button type="submit">sumbit</button>
      </form>
      <Profile name={name}  />  */}

    
      
       </section>
      
      
    </main>
  );
}

export default App;
