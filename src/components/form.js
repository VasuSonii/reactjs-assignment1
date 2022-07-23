import React from 'react'

export default function form() {
  return (
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
      <label for="validationDefaultUsername" className="form-label">Username</label>
      <div className="input-group">
        <span className="input-group-text" id="inputGroupPrepend2">@</span>
        <input type="text" className="form-control" id="validationDefaultUsername"  aria-describedby="inputGroupPrepend2" required/>
      </div>
    </div>
    
    
   
    <div className="col-12">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
        <label className="form-check-label" for="invalidCheck2">
          Agree to terms and conditions
        </label>
      </div>
    </div>
    <div className="col-12">
      <button className="btn btn-primary" type="submit">Submit form</button>
    </div>
  </form></div>
  )
}
