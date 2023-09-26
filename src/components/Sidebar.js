import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
    
      <ul className='navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
        id='accordionSidebar'
      >
        
        {/* Sidebar Brand */}
        <a className='sidebar-brand d-flex align-items-center justify-content-center'
          href='/'>

          <div className='sidebar-brand-icon rotate-n-15'>
            <i className='fas fa-laugh-wink'></i>
          </div>
          <div className='sidebar-brand-text mx-3'>
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* Divider */}

        <hr className='sidebar-divider my-0' />

        <li className='nav-item active'>
          <Link className='nav-link' to='/'>
            <i className='fas fa-fw fa-tachometer-alt'></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <li className='nav-item'>
          <Link className='nav-link' to='/tables'>
            <i className='fas fa-fw fa-table'></i>
            <span>Tables</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/buttons">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Buttons</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/cards">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Cards</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/colors">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Colors</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/login">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Login</span>
          </Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="/charts">
            <i class="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div class="text-center d-none d-md-inline">
          <img class="rounded-circle border-0" id="sidebarToggle" src="https://cdn-icons-png.flaticon.com/512/1549/1549454.png"></img>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div class="sidebar-card d-none d-lg-flex">
          <img
            class="sidebar-card-illustration mb-2"
            src="https://cdn-icons-png.flaticon.com/512/9794/9794145.png" alt="Space Icon Png, Transparent Png@kindpng.com"
          />
          <p class="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            class="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </>
  )
}

export default Sidebar