import React from 'react';
import Logo from './newlogo.bmp';
import svecw from './svecw.jpg';
import { useNavigate } from 'react-router-dom';
const Pagenotfound = () => {
    const nav = useNavigate()
    // const [name,setName]=useState
    const handle = () => {
        nav('Home');
    }
    return (
        <div>
            <div>
                <table align='center' >
                    <tr>
                        <td><img class="image" src={Logo} height={100} width={200} /></td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <td><h1>SHRI VISHNU ENGINEERING COLLEGE FOR WOMEN(AUTONOMOUS)<br /></h1>
                            <h3>Approved By AICTE, New Delhi., Affiliated to JNTUK, Kakinada.<br />
                                BHIMAVARAM - 534202 West Godavari District, Andhra Pradesh, India.<br />
                                Tel : 08816 - 250864
                            </h3></td>
                    </tr>
                </table>
                <img src={svecw} alt="image" id='img' class="center" />
                
                <div class="centered1">
                    <table align="center" className="t" border='1'>
                        <div className="login">

                            <br></br>
                            <tr>
                                <td>
                                    <h1>Student Login</h1>
                                    <form>
                                        <div className="text_area" align="center">
                                            <i class="user icon"></i><input
                                                type="text"
                                                placeholder="Username"
                                                className="text_input"

                                            />
                                        </div>
                                        <div className="text_area" align="center">
                                            <i class="lock icon"></i><input
                                                type="password"
                                                placeholder="Password"
                                                className="text_input"

                                            />
                                        </div>

                                        <button class="btn" onClick={handle}>Login</button>
                                    </form>

                                </td>

                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <td>
                                    <h1>Warden Login</h1>
                                    <form>
                                        <div className="text_area" align="center">
                                            <i class="user icon"></i><input
                                                type="text"
                                                placeholder="Username"
                                                className="text_input"

                                            />
                                        </div>
                                        <div className="text_area" align="center">
                                            <i class="lock icon"></i><input
                                                type="password"
                                                placeholder="Password"
                                                className="text_input"

                                            />
                                        </div>

                                        <button className='btn'>Login</button>
                                    </form>

                                </td>
                            </tr>


                        </div>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Pagenotfound;


// import React from 'react';
// import ss from './head.jpg';
// import cc from './helmet.jpg';
// import h1 from './h1.jpg';
// import h2 from './h2.jpg';
// import h3 from './h3.jpg';
// import h4 from './h4.jpg';




// const Pagenotfound = () => {
//     return (
//         <div>
//             <img  class="road" src={ss} id="img1" alt="img"/>
//             <table cellPadding={20} cellSpacing="40">
//                 <tr>
//                     <td class="c1">
//                         <h3>No matter which luxury car you have, the sense of
// freedom that you get by riding a motorcycle is
// inexpressible. To experience that feeling again and
// again we must take some safety precautions. A
// healthy brain is of major criterion for a healthy body
// and needs to be protected at a higher rate. We know
// that helmet is the only weapon we have to protect
// our head. Most of the deaths in accidents were
// caused due to severe injuries to the head and brain.</h3><br>
// </br>
//         <h2>WHY WEARING A HELMET IS IMPORTANT?
// </h2><br></br>
// <h3>A helmet works in three ways:</h3><br></br>
// <ul>
//     <li>It reduces the deceleration of the skull, and
// hence the brain movement, by managing the
// impact. The soft material incorporated in the
// helmet absorbs some of the impacts, and the
// head comes to a halt more slowly therefore, the
// brain does not hit the skull with much greater
// force</li>
// <li>
// It helps in equalizing the force of a hit which
// eventually results in lesser impact over any part
// of the head in particular.
// </li>
// <li>
// It prevents direct contact between the skull and
// the impacting object by acting as a mechanical
// barrier.

// </li>
// </ul>

//                     </td>
//                     <td class="c2">
//                         <h2>SECTION AND FINES</h2><br></br>
//                         <ul>
//                             <li>As per Section 129 of the
// Motor Vehicle Act (2019), every
// person, above four years of
// age, driving or riding or being
// carried on a motorcycle of any
// class or description shall,
// while in a public place, wear
// protective headgear
// conforming to ISI standards.</li>
// <li>
// The traffic fine for riding a
// two-wheeler without wearing
// an ISI-approved helmet has
// been increased from 100 INR
// earlier to 1,000 INR now.
// </li>
//                         </ul>
                        
//                     </td>
//                 </tr>
//             </table><br>
//             </br>

//             <table cellPadding={20} cellSpacing="40">
//                 <td className='c2'>
//                     <h2>BENEFITS OF WEARING A HELMET
// </h2><br></br>
// <h3>When a motorcycle is involved in a collision, the
// rider is often thrown from the cycle. If the rider’s
// head hits an object, the head’s forward motion is
// stopped, but the brain, having its own mass,
// continues to move forward until it strikes the
// inside of the skull. It then rebounds, striking the
// opposite side of the skull. This type of injury can
// result in anything from a minor head injury, such
// as a concussion, to a fatal head injury.
// </h3><br></br>
// <img src={cc} id="img" className='img1'></img><br></br>
// <h2>Helmet Protects your Eyes</h2><br></br>
// <h3>A full-face helmet covers your entire face,
// providing you complete protection in case you go
// through an accident. This type of helmet protects
// your eyes from dust and high beam lights when
// driving your two-wheeler. Also, the design of this
// helmet allows you to have a maximum sight range
// while driving.</h3><br></br>
// <img src={h2} id="img" className='img1'></img><br></br>
// <h2>Helmet Protects you from the Cold Breeze
// </h2><br></br>
// <h3>Wearing a helmet not only covers your head but
// also covers your ears. This layer of safety blocks the
// cool breeze to enter your ears and thus helps you
// to stay healthy & prevent you from getting sick in
// the cold weather</h3>
//                 </td>
//                 <td className='c1'>
//                     <br></br>
//                     <img src={h1} id="img" className='img1'></img><br></br>

//                     <h2>Helmet Ensures Better Control of the
// Vehicle</h2><br></br>
// <h3>It is observed that wearing a helmet
// improves your attention while riding your
// bike. You tend to be more cautious and
// control your speed when wearing a helmet
// while driving your two-wheeler. This lowers
// the chances of an accident to a great extent.
// </h3><br></br>
// <img src={h3} id="img" className='img1'></img><br></br>
// <h2>INTERNATIONAL SUPPORT FOR
// HELMET USAGE</h2><br></br>
// <h3>International recommendations provide strong
// support for countries to implement programs
// that legislate for mandatory helmet use. Some
// countries are using the international policy
// environment and international law as a means
// of providing the necessary impetus for
// developing national policies on helmet use.
// International agreements were also used by
// civil societies to advocate for helmet law
// reform in their own countries.</h3>
//                 </td>
//             </table>
//             <table align='center'>
//             <img src={h4} id="img" className='img2'></img><br></br>
//             </table>

            
//         </div>
        
//     );
// };

// export default Pagenotfound;