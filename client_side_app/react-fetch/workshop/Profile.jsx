import React from "react";
import { ReposList } from "./ReposList";
// const USER_URL = "https://api.github.com/users/";

// function Profile(props) {
//   const [user, setUser] = React.useState();

//   React.useEffect(() => {
//     fetch(USER_URL + props.name)
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, [props.name]);

//   if (!user) return <div>Loading...</div>;
//   return (...);
// }



function Profile({ name }) {
    const [gitData, setgitData] = React.useState('');
    console.log(name, "name in profile<--");
  
    React.useEffect(() => {
      fetch(`https://api.github.com/users/${name}`)
        .then((res) => res.json())
        .then((data) => setgitData(data));
    },[name]);  

    console.log(gitData, 'gitData');

    <ReposList  URL={gitData.repos_url} /> 

    if (!gitData) {
        return <div>Loading...</div>;
      } else {
        return (
        <div>
        {gitData.repos_url}
        {gitData.name}
        <img src={gitData.avatar_url} alt="" />
        </div>);

      }
  
  }





export {Profile}