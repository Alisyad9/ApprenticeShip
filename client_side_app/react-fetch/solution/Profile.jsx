import React from "react";
// import ReposList from "./ReposList.jsx";

const USER_URL = "https://jsonplaceholder.typicode.com/users";

function Profile() {

  const [name, setName] = React.useState("Ali");
  const [user, setUser] = React.useState('');
  const [followers, setFollow] = React.useState('');

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${name}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [name]);

  React.useEffect(() => {
    fetch(`https://api.github.com/users/${name}/followers`)
      .then((res) => res.json())
      .then((data) => setFollow(data));
  }, [name]);

  console.log(user); 
  console.log(name);
  console.log(user); 
  console.log(followers);


  if (!followers) return <div>Loading...</div>;
  if (!user) return <div>Loading...</div>;
  return (
    
    <div>
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
      <h1>{user.name}</h1>
      <img src={user.avatar_url} alt="" width="128" height="128"  />
      <h2>{followers.map(follow => (<p>{follow.login} <img
              src={follow.avatar_url}
              alt=""
              width="128"
              height="128"
              key={follow.id}
            /></p>))}</h2>
      {/* <ReposList url={user.repos_url} /> */}
    
    </div>
  );
}

export default Profile;
