import React from 'react'

export default function navbar(props) {
    return (
        <div>
        <nav id="navbar-example2" className="navbar bg-dark px-3 mb-3">
     
        <a className="navbar-brand text-success" href="#">{props.title}</a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link btn btn-outline-primary" href="#scrollspyHeading1">Music Inventory</a>
            
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">Sports Inventory</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">Tech Inventory</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#scrollspyHeading1">Contact Us</a>
          </li>
         
        </ul>
      </nav>
      <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" className="scrollspy-example bg-light p-3 rounded-2" tabindex="0">
        <h4 id="scrollspyHeading1">Rakesh</h4>
        <p>"  Inventory helped us to improve our inventory capabilities and customizations as needed. The integration with other apps in the  Ecosystem made data sharing easier, and the implementation process was fast and comprehensive."</p>
        <h4 id="scrollspyHeading2">Aman</h4>
        <p>"We have been able to simplify our in-house inventory management with increased efficiency and flexibility across the stock distribution process, and this has helped us keep our captains engaged using  Inventory. At Rapido, we take immense pride in our user experience framework, supported by the  ecosystem."</p>
        <h4 id="scrollspyHeading3">Rohan</h4>
        <p>" Inventory has helped us very much in regard to streamlining our online and B2B orders. The shipping integrations are a breeze to use in the app, and the customer support is amazing. They are always a call or chat away and never fail to surprise me with their expertise."</p>
        
      </div>
      </div>
    )
}
