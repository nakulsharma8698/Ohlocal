import React, { Component } from 'react';
//import { Link, Redirect } from "react-router-dom";
import './style.css'
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [] };

    }

    renderEditForm() 
    {    
        if (this.state.edit) 
        {      
            return <form onSubmit={this.onUpdateHandle.bind(this)}>        
            <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} />        
    <button className="update-add-item">Update</button>      
    </form>    }  }
componentDidMount()
{
    fetch('https://randomuser.me/api/?results=50').then(res => res.json()).then(res => {
        console.log(res.results);
        this.setState({items: res.results});
        //console.log(this.state.items);
      });
}
    render() {
        return (
            <div> <div className='Header'> Random User </div>
            <div className="body">
               
            <br/> <br/> <br/> <br/> <br/> <br/>
               {this.state.items.map(s=><p>
                   <div className="card">
                      <img src={s.picture.large} /><br/>
                      <h3>{s.name.title} {s.name.first} {s.name.last}</h3>
                      <p className="gender"><b>{s.gender}</b></p>
                      <p className="Email">{s.email}</p>
                      <p>{s.dob.date}</p>
                      <p className="Email"><b className="gender">Address: </b>{s.location.city}, {s.location.state}</p><br/>
                      
                     
                   </div>
                   </p>)}
                  
            </div></div>
        );
    }
}
export default Search;