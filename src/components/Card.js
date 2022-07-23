import { Modal } from 'bootstrap';
import React, { Component } from 'react'
import form from './form'

class Card extends Component {

    constructor(props){
        super(props)
        this.state = {
            showForm:false
        }
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.setState({showForm:true});
    }
    
    renderForm = () => {
        return (
            
            <div className='container'>
          <div><form className="row g-3">
    <div className="col-md-4">
      <label for="validationDefault01" className="form-label">First name</label>
      <input type="text" className="form-control" id="validationDefault01" value="Mark" required/>
    </div>
    <div className="col-md-4">
      <label for="validationDefault02" className="form-label">Last name</label>
      <input type="text" className="form-control" id="validationDefault02" value="Otto" required/>
    </div>
    <div className="col-md-4">
      <label for="validationDefaultUsername" className="form-label">Room No.</label>
      <div className="input-group">
        
        <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
      </div>
    </div>
   
    
    <div className="col-12">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
        <label className="form-check-label" for="invalidCheck2">
          Please check if you would like to get informed about new items being added to inventory.
        </label>
      </div>
    </div>
    <div className="col-12">
      <button className="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form></div>
    </div>
            );
    }
render() {
    const { showForm } = this.state;

  return (
    <div className='container'>
    <div className="card text-center">
    <div className="card-header">
      Excited !!
    </div>
    <div className="card-body">
      <h5 className="card-title"></h5>
      <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <button  onClick={ this.onClick } data-toggle="modal" >Subscribe</button>
      {showForm && this.renderForm()}
    </div>
    
  </div>
  </div>
  )
}

}

export default Card;