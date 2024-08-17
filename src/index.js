import ReactDOM from 'react-dom';
import React,{useState,useEffect} from 'react';

function Demo(){
  const [users,setUser]=useState([]);
  const [loading,setLoading]=useState(true);
useEffect(()=> {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    setUser(data);
    setLoading(false);
  })
  .catch(errors=>{
    console.error("Error");
    setLoading(false);
  });
},[]);
if(loading){
  return<p>Loading</p>
}
  return(
     <div>List Of Users in API
     <ul>
         {users.map(user=>(<li key={user.id}>{user.name }</li>))}
     </ul>
     </div>
  );
}
ReactDOM.render(<Demo />,document.getElementById('root'));