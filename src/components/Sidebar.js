import React,{Fragment} from 'react';


const Sidebar = () => {
    return (
      <Fragment>
        <div className="col-3 sidebar_sec mt-3">
          <ul className="pl-0">
            <li className="d-flex mb-1">
              <div className="col-auto">
                <i class="fas fa-house-user"></i>
              </div>
              <div className="col-auto">Home</div>
            </li>
            <li className="d-flex mb-1">
              <div className="col-auto">
                <i class="fas fa-handshake"></i>
              </div>
              <div className="col-auto">Deals</div>
            </li>
            <li className="d-flex mb-1">
              <div className="col-auto">
                <i class="fas fa-exchange-alt"></i>
              </div>
              <div className="col-auto">Transactions</div>
            </li>
          </ul>

          <div className="sidebar_title_sec ml-4 mb-2">Products and Services</div>
          <ul className="pl-0">
            <li className="d-flex mb-1">
              <div className="col-auto">
                <i class="fab fa-wordpress"></i>
              </div>
              <div className="col-auto">World Services</div>
            </li>
            <li className="d-flex mb-1">
              <div className="col-auto">
                <i class="fas fa-users"></i>
              </div>
              <div className="col-auto">My Network</div>
            </li>
            <li className="d-flex sidebar_column_sec mb-1">
              <div className="col-auto">
                <i class="fas fa-tag"></i>
              </div>
              <div className="col-auto">Tags</div>
            </li>
            <li className="d-flex">
              <div className="col-auto">
                <i class="fas fa-image"></i>
              </div>
              <div className="col-auto">Images & Videos</div>
            </li>
          </ul>
        </div>
      </Fragment>
    );
}
export default Sidebar;