import React,{Fragment} from 'react';
import arrowdown from '../asserts/icons/arrowdown.png'
// import {WorldRef} from '../asserts/images/'
const Navbar = () => {
    return (
      <Fragment>
        <div className="row pt-1">
          <div className="col-12">
            <div className="row align-items-center justify-content-between navbar_sec">
              <div className="col-2">
                <img
                  className="navbar-brand"
                  id="logo"
                  src={
                    "https://worldref.co/wp-content/uploads/2021/01/WorldRef-black.svg"
                  }
                  alt="WorldRef Logo"
                />
              </div>
              <div className="col-4 d-flex border border-dark rounded p-0 text-center">
                <div class="btn btn-outline-primary d-flex align-items-center">
                  <i class="fas fa-chevron-down"></i>&nbsp;<span>Products</span>
                </div>
                
                <div className="input-group rounded border-0">
                  <i className="fas fa-search search-icon"></i>
                  <input
                    type="search"
                    className="form-control rounded border-0"
                    placeholder="What are you looking ?"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                </div>
              </div>
              <div className="col-4 d-flex text-center">
                <div className="col-auto">
                  <i className="fas fa-question-circle"></i>
                </div>
                <div className="col-auto">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="col-auto">
                  <i className="fas fa-bell"></i>
                </div>
                <div className="col d-flex">
                  <div className="col-auto">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="col-auto d-flex p-0">
                    <div className="col-auto p-0">Hi Jaideep</div>
                    <div className="col-auto">
                      <img className="dropdown_logo" src={arrowdown} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
}

export default Navbar;
