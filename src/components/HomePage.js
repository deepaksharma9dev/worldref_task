import React, { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <div className="col my-4">
        <div className="d-flex">
          <div className="col-auto border border-primary rounded-left bg-primary text-light">
            Buying
          </div>
          <div className="col-auto border border-primary text-primary rounded-right">
            Selling
          </div>
        </div>

        <div className="d-inline-block border border-primary text-primary rounded p-1 my-3">
          Tag Management
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="d-inline-block text-primary my-1 col-6">
                Products
              </div>
              <div className="d-inline-block text-primary my-1 col-6">
                Suggested Tags
              </div>
            </div>
            <div className="row">
              <div className="col-6 row">
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name</div>
                  <div className="col-auto p-0">
                    <i class="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name Short</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name Long Name</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center add_tag_sec text-primary mx-2 my-2">
                  <div className="col-auto p-0">
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="col-auto">Add Tag</div>
                </div>
              </div>
              <div className="col-6 row">
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name Short</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name Long Name</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center add_tag_sec text-primary mx-2 my-2">
                  <div className="col-auto p-0">
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="col-auto">Add Tag</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="d-inline-block text-primary my-1 col-6 align-items-center">
                Services
              </div>
              <div className="col-6">
                <div
                  className="d-inline-block text-primary my-1 col-auto border border-primary "
                  id="suggested_tag_sec"
                >
                  Suggested Tags
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6 row">
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name Short</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name Long Name</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center add_tag_sec text-primary mx-2 my-2">
                  <div className="col-auto p-0">
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="col-auto">Add Tag</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="d-inline-block text-primary my-1 col-auto align-items-center">
                Territories
              </div>
            </div>
            <div className="row">
              <div className="col-6 row">
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name Short</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name Long Name</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center add_tag_sec text-primary mx-2 my-2">
                  <div className="col-auto p-0">
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="col-auto">Add Tag</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="d-inline-block text-primary my-1 col-auto align-items-center">
                Industries
              </div>
            </div>
            <div className="row">
              <div className="col-6 row">
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name Short</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div className="col-auto d-flex border border-primary align-items-center home_page_tag_sec text-primary mx-2 my-2 py-1">
                  <div className="col-auto">Tag Name Long Name</div>
                  <div className="col-auto p-0">
                    <i className="fas fa-times"></i>
                  </div>
                </div>
                <div
                  className="col-auto d-flex border border-primary align-items-center add_tag_sec
                 text-primary mx-2 my-2"
                >
                  <div className="col-auto p-0">
                    <i className="fas fa-plus"></i>
                  </div>
                  <div className="col-auto">Add Tag</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
