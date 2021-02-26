import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from './logo.jpeg';
import img1 from './img1.jpg';
import h1 from './h1.jpg';
import h2 from './h2.jpg';
import h3 from './h3.jpg';
import pl2 from './play.jpeg';
import pl3 from './merchants.jpeg';
import './style.scss'
import Comments from './Components/Comments/comments';
class Home extends Component {
    
    render() {
        return (
            <div>
                <div className="header">
                <ul className="ull">
                    <li className='lii'>Home</li>
                    <Link to="/products"><li className='lii'>Personal Circular</li></Link>
                    <li className='lii' >Our Services</li>
                    <li className='lii'>Contact</li>
                    <li className='lii'>Blogs</li>
                    <li className='lii' style ={{float: 'right'}}>Login/Register</li>
                
                </ul><br/><br/><br/><br/><br/>
                <table>
                <tr>
                <td><img className ="logo" src={logo} alt="logo"/>
                <br/>
                <div className="tag">NEW WAY OF SHOPPING</div>
                </td>
                <td><div><h1>WELCOME</h1><br/><br/><br/><br/>
                <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque eu nibh ac arcu porttitor consectetur et sit amet nisi. Phasellussed justo vel nulla vestibulum dapibus. Curabitur consequat lacus risus, ac tempus metus porttitor a. Quisquelobortis faucibus mauris, et consequat eros vehicula a. Quisque hendrerit pharetra augue sed fermentum. Orci varius natoquepenatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis tellus interdum, rutrum mi id, consectetur est.
                 </p></div><br/><br/>
                 <div className="contact">www.ohlocal.com/support</div><br/>
                    <div className="contact">+91 256-793-74</div><br/>  <br/>  <br/>  <br/>  
                 </td>
                </tr>
                </table>
                </div>
                <div className="social">
                    <p href="#" className="fa fa-facebook"></p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p href="#" className="fa fa-twitter"></p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p href="#" className="fa fa-instagram"></p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p href="#" className="fa fa-linkedin"></p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p href="#" className="fa fa-youtube"></p>&nbsp;&nbsp;&nbsp;&nbsp;
                    <p href="#" className="fa fa-github"></p>
                </div>
                    
                <h1 className="how">How It Works</h1>
                <table>
                    <tr>
                        <td><img className="howImage" src={h1} alt="img"/></td>
                        <td><img className="howImage" src={h2} alt="img"/></td>
                        <td><img className="howImage" src={h3} alt="img"/></td>
                    </tr>
                    <tr >
                        <td className="thead">Find Products on Amazon</td>
                        <td className="thead">Post on OhLocal app to get bids from Local Dealers</td>
                        <td className="thead">Contact lowest Bidder or Nearest Dealer</td>
                    </tr>
                    <tr >
                        <td className="tdhead">Search for the product on amazon and copy the URL Link</td>
                        <td className="tdhead">Post the amazon link on OhLocal and local dealers will Bid in a span of <b>60 minutes</b> </td>
                        <td className="tdhead">Browse through all the bids submitted by local dealers along with the Maps Location as well as Contact Details</td>
                    </tr>
                </table> 
               <br/><br/>
                <div className="find">
                    <br/>
                    <p className="findhead">Find Us On Play Store</p>
                <table>
                    <td><img className="limg" src={logo} alt="img"/></td>
                    <td><img className="limg" src={pl2} alt="img"/></td>
                    <td><img className="limg" src={pl3} alt="img"/></td>
                </table>
                <br/><br/><br/>
                </div>
                   <ul>
                       <li></li>
                       <li></li>
                       <li></li>
                   </ul>
                   
            </div>
        );
    }
}

export default Home;