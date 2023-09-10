import React from 'react'
import './Navbar.css'
import PreNav from '../PreNav';

const Navbar = () => {
  return (


    <div>

<PreNav/>
        <div class="container-fluid">
    <div class="row ">
      <div class="col-12 d-flex justify-content-center mt-2">
        <img style={{height: "10vh"}} src="https://www.junaidjamshed.com/media/logo/stores/1/new_logo.png" alt="" />
      </div>
    </div>
  </div>
  
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#preNavMenu" aria-controls="preNavMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="preNavMenu">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
      
          <li class="nav-item dropdown hover-dropdown">
            <a class="nav-link fw-2" href="#" role="button">
              NEW ARRIVALS
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown hover-dropdown">
  <a class="nav-link" href="#" role="button">
    ONLINE EDITION
  </a>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Something else</a></li>
  </ul>
</li>
<li class="nav-item dropdown hover-dropdown">
            <a class="nav-link fw-2" href="#" role="button">
            CAST & CREW
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown hover-dropdown">
            <a class="nav-link fw-2" href="#" role="button">
            WOMEN
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown hover-dropdown">
            <a class="nav-link fw-2" href="#" role="button">
            MEN
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else</a></li>
            </ul>
          </li>

          <li class="nav-item dropdown hover-dropdown">
            <a class="nav-link fw-2" href="#" role="button">
            BOYS & GIRLS
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown hover-dropdown">
            <a class="nav-link fw-2" href="#" role="button">
            FRAGRANCES
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown hover-dropdown">
            <a class="nav-link fw-2" href="#" role="button">
            MAKEUP
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown hover-dropdown">
            <a class="nav-link fw-2" href="#" role="button">
            CATALOGUE
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="#">Something else</a></li>
            </ul>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
    </div>

  )
}

export default Navbar;
