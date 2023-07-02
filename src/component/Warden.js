import React from 'react';
import { useNavigate } from 'react-router-dom';
const Warden = () => {
    const nav=useNavigate()
    const hostel1=()=>{
                      nav('Hostel1')
    }

const nav1=useNavigate()
    const srujana1=()=>{
      nav('Srujana1')
    }
    return (      
       
        
        <div >
            
        <h1 align="center"> Hostel Details</h1><br/>
        <table className='tb'>
            <tr>
                <td className='col'>           
        
        <font size="+3">AC Hostels:</font>             
        <br></br>
        <button class="ui blue button" onClick={hostel1}>Rajeshwari</button><br></br>
        <button class="ui blue button" onClick={srujana1}>Srujana</button><br></br>
        <button class="ui blue button" onClick={hostel1}>Sadhana</button><br></br>
        <button class="ui blue button" onClick={srujana1}>Medha</button>
        </td>

        <td className='col'>

        <font size="+3">Non-AC Hostels:</font>         
        <br></br>
        <button class="ui blue button"  onClick={hostel1}>Rajeshwari </button><br></br>
        <button class="ui blue button"  onClick={srujana1}>Neelima</button><br></br>
        <button class="ui blue button"  onClick={hostel1}>Narmada</button><br></br>
        <button class="ui blue button"  onClick={srujana1}>Green Meadows</button>
        </td>
        </tr>
        </table>

        <h3></h3>
        </div>
    );
};

export default Warden;