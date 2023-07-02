import React from 'react';
import { useNavigate } from 'react-router-dom';
const Hotel = () => {
                  const nav=useNavigate()
                  const bed2=()=>{
                          nav('Bed2')
                  }
                  return (
                                    <div>
                                                      <h1>Rooms Alloted:</h1>
<button onClick={bed2}class="buttons1">101</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={bed2}class="buttons3">102</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buttons3"onClick={bed2}>103</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buttons2"onClick={bed2}>104</button><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
<br></br>

        <button class="buttons2"onClick={bed2}>201</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buttons3"onClick={bed2}>202</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buttons2"onClick={bed2}>203</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buttons3"onClick={bed2}>204</button><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br></br>

        <button class="buttons3"onClick={bed2}>301</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buttons2"onClick={bed2}>302</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buttons1"onClick={bed2}>303</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buttons3"onClick={bed2}>304</button><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br></br>

        <button class="buttons1"onClick={bed2}>401</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buttons3"onClick={bed2}>402</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buttons2"onClick={bed2}>403</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button class="buttons1"onClick={bed2}>404</button><br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              
                                    </div>
                  );
};

export default Hotel;