import React from "react";


function ReposList(props) {
    const [UrlName, setUrlName] = React.useState('');
    console.log(props.URL);
      
    React.useEffect(() => {
        fetch(props.URL)
          .then((res) => res.json())
          .then((data) => setgitData(data));
      },[]);  

    return {}
}

export{ReposList}