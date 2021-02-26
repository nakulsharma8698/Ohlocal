import React,{useState,useEffect} from 'react';
import prod from './prod.json'
import './style.scss';

export default class Products extends React.Component {
   
    render()
    {
        
        return(
            <div className="body"> 
                    <table className="tableee" >
                    
                   {prod.map(s => ( <div ><ul className="prod" >
                   <li><img className="img" src={s.image} alt="prod" /></li><br/>
                   <li className="title">{s.brand} {s.title}</li><br/>
                   
                   <li className="disc">Discounted Price: ₹{Math.round(s.price-(s.price*s.discount*0.01))}</li>
                   <li className="price discount" style={{float:'right'}}>Flat {s.discount}% Off</li>
                   <li className="price">Price: ₹{s.price}</li><br/><br/><br/>
                   <li className="seller">Seller: {s.seller}</li><br/>

                   </ul></div> ) )}
                   
                    </table>


            </div>
        );
    }
}