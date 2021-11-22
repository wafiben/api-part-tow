import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [user,setUser]=useState({name:'',job:''});
  const [responseFromServer,setresponseFromServer]=useState({data:''})
  function  handleChange(event){
    setUser({...user,[event.target.id]:event.target.value})
  }
 
 
  function onSubmit(event){
    event.preventDefault();
    axios.post('https://reqres.in/api/users',user).then((response)=>{
      setresponseFromServer({...responseFromServer,data:response.data}) 
    })
    .catch((error)=>{
      console.log(error)
    })
  }

 
  return (
   <> 
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label for="name">name</label>
        <input type="text" className="form-control" id="name" placeholder="name"  onChange={handleChange}
        value={user.name}/>
      </div>
      <div className="form-group">
        <label for="job">job</label>
        <input type="text" className="form-control" id="job" placeholder="job"   onChange={handleChange}
        value={user.job}/>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
    <div>
      user {responseFromServer.data.name} is createrd 
      he is {responseFromServer.data.job}
    </div>
    </>
  
  );
}
export default App;
