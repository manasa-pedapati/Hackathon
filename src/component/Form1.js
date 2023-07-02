import React, { useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

const Form1 = () => {
  const notify=()=>toast("inserted successfully");
  const [first, setfirst] = useState("");
  const [reg,setReg]=useState("")

  const handle = (e) => {
    e.preventDefault();

    const m=window.confirm("do you want to insert..?");
    if(m)
    {
    
    Axios.post("http://localhost:8080/signup", {
      firstname: first,
      reg:reg
    }).then(function(response) {
      console.log(response);
      alert("success");
    });
  }
  else{
  }
  };
  return (
    <div>
      <div className="form">
        <div className="ui cards">
          <form className=" ui form" onSubmit={handle}>
            <div className="sixteen wide field">
              <label htmlFor="">Resistration number</label>
              <input type="text" placeholder="Resistration no" onChange={(e)=>{
                setReg(e.target.value)
              }}/>
            </div>
            <div className="sixteen wide field">
              <label htmlFor="">Name</label>
              <input type="text" placeholder="Name" onChange={(e)=>{
                setfirst(e.target.value)
              }}/>
            </div>
            <br />
            <br />
            <button className="ui primary button" type="submit" onClick={()=>{
              notify()
            }}>
              SUBMIT
            </button>
            <ToastContainer/>
        
          </form>
        </div>
      </div>
    </div>
  );
};
export default Form1;