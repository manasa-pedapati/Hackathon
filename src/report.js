import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";


const Report = () => {
  const notify=() =>toast("Deleted successfully!");
  const [userdata, setUserdata] = useState([]);
  const url = "http://localhost:8080/report";
  const deleting = (Regno) => {
    const l =window.confirm("Are you sure");
    if(l){
      axios.post(`http://localhost:8080/delete/${Regno}`)
      notify();

    }
    else{

    }
   
  }
  
  useEffect(() => {
    axios.get(url).then((response) => {
      setUserdata(response.data);
      
    });
  }, [])
  return (
    <div>
      <table className="ui very basic collapsing called table">
        <tbody>
          <tr>
            <td>
              <h4 className="ui image header">
                <div className="content">Regno</div>
              </h4>
            </td>

            <td>
              <h4 className="ui image header">
                <div className="content">Name</div>
              </h4>
            </td>

            <td>
              <h4 className="ui image header">
                <div className="content">Delete</div>
              </h4>
            </td>
          </tr>

          {userdata.map((val) => {
            return (
              <tr>
                <td>{val.Regno}</td>
                <td>{val.name}</td>

                <td>
                  <button className="ui blue button" onClick={() => { deleting(val.Regno) }}>DELETE</button>

                </td>
              </tr>

            );
          })}
        </tbody>
      </table>
      <ToastContainer/>
    </div>
  );
};

export default Report;