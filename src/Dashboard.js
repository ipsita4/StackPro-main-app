import React, { useState, useEffect } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [style, setStyle] = useState(
    "navbar-nav bg-white sidebar sidebar-dark accordion"
  );

  const changeStyle1 = () => {
    if (style === "navbar-nav bg-white sidebar sidebar-dark accordion") {
      setStyle("navbar-nav bg-white sidebar sidebar-dark accordion toggled1");
    } else {
      setStyle("navbar-nav bg-white sidebar sidebar-dark accordion");
    }
  };

  return (
    <div>
      <body id="page-top">
        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/*  <!-- Sidebar --> */}
          <ul className={style} id="accordionSidebar">
            {/*  <!-- Sidebar - Brand --> */}
            <a
              className="sidebar-brand d-flex align-items-center justify-content-center"
              href="#"
            >
              <div className="sidebar-brand-icon">
                <img src="img/dummy_logo.svg" />
              </div>
              <div className="sidebar-brand-text mx-3 text-black">StackPro</div>
              <div className="text-center d-none d-md-inline"></div>
            </a>

            {/*   <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Charts --> */}

            {/* <!-- Nav Item - Charts --> */}
            <div className="nav-item">
              <a className="nav-link" href="charts.html">
                <img src="img/pie.png" width="20%" height="20%" />
                {/* <img src="img/pie.svg" /> */}
                <span className="ml-3 text-black">Dashboard</span>
              </a>
            </div>

            <div className="nav-item">
              <a className="nav-link" href="charts.html">
                <img src="img/Group.svg" />
                <span className="ml-3 text-black ">Leaderboard</span>
              </a>
            </div>

            <div className="nav-item">
              <a className="nav-link" href="charts.html">
                <img src="img/shopping-cart.svg" />
                <span className="ml-3 text-black">Order</span>
              </a>
            </div>

            <div className="nav-item">
              <a className="nav-link" href="charts.html">
                <img src="img/shop.svg" />
                <span className="ml-3 text-black">Products</span>
              </a>
            </div>

            <div className="nav-item">
              <a className="nav-link" href="charts.html">
                <img src="img/report.svg" />
                <span className="ml-3 text-black">Sales Report</span>
              </a>
            </div>

            <div className="nav-item">
              <a className="nav-link" href="charts.html">
                <img src="img/chat.svg" />
                <span className="ml-3 text-black">Message</span>
              </a>
            </div>

            <div className="nav-item">
              <a className="nav-link" href="charts.html">
                <img src="img/settings.svg" />
                <span className="ml-3 text-black">Settings</span>
              </a>
            </div>

            <div class="nav-item">
              <a class="nav-link">
                <img src="img/log_out.svg" />
                <span class="ml-3 text-black">Sign Out</span>
              </a>
            </div>
          </ul>
          {/*  <!-- End of Sidebar --> */}

          {/*  <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/*  <!-- Main Content --> */}
            <div id="content">
              {/*  <!-- Topbar --> */}
              <nav className="navbar navbar-expand navbar-red bg-white topbar mb-4 static-top shadow">
                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  onClick={changeStyle1}
                >
                  <i className="fa fa-bars"></i>
                </button>

                <span
                  className="text-black"
                  style={{ fontWeight: "bold", fontSize: "20px" }}
                >
                  Dashboard
                </span>

                {/*  <!-- Topbar Search --> */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="mx-4 input-group">
                    <div className="input-group-append">
                      <button className="btn btn-white" type="button">
                        <i
                          className="fas fa-search fa-sm"
                          style={{ color: "blue" }}
                        ></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      className=" form-control bg-red border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                  </div>
                </form>

                {/*  <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                  {/*  <!-- Nav Item - Alerts --> */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="alertsDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="mx-4 notification-icon">
                        <i
                          className="far fa-bell fa-fw fa-lg"
                          style={{ color: "yellow", position: "relative" }}
                        >
                          <span className="dot-notification"></span>
                        </i>
                      </div>
                    </a>
                  </li>

                  {/* <!-- Nav Item - User Information --> */}
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        className="img-profile rounded-circle"
                        src="img/undraw_profile.svg"
                      />
                      <ul className="list-unstyled d-flex flex-column mx-4">
                        <li>
                          <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                            Musfiq
                          </span>
                        </li>
                        <li>
                          <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                            Admin
                          </span>
                        </li>
                        {/* Add more <li> elements as needed */}
                      </ul>
                      <img className="mr-2" src="img/down.svg" />
                    </a>
                    {/*  <!-- Dropdown - User Information --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Settings
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Activity Log
                      </a>
                      <div className="dropdown-divider"></div>
                      <a
                        className="dropdown-item"
                        href="#"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </nav>
              {/*  <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/*   <!-- Content Row --> */}
                <div className="row">
                  {/*   <!-- Content Column --> */}
                  <div className="col-lg-6 mb-4">
                    {/* <!-- Color System --> */}
                  </div>
                </div>
              </div>
              {/*   <!-- /.container-fluid --> */}
            </div>
            {/*   <!-- End of Main Content -->

                                        <!-- Footer --> */}
          </div>
          {/*  <!-- End of Content Wrapper --> */}
        </div>
        {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>
      </body>
    </div>
  );
}

export default Dashboard;
