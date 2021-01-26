import React from 'react'

const Header = () => {
  return <header>
    <nav className="navbar navbar-expand-md navbar-dark fixed-top  " style={ { background: '#141414' } } >
      <div className="container">
        <a className="navbar-brand " href="/" style={ { fontWeight: '700' } }>
          <i className="fas fa-shopping-cart" />  BestBuy90 </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href='/'>Coming Soon... </a>
            </li>
          </ul>
          <form className="form-inline mt-2 mt-md-0">
            <input
              className="form-control mr-sm-2 text-center" type="text"
              placeholder="ابحث عن منتج"
              aria-label="Search" />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">ابحث</button>
          </form>
        </div>
      </div>
    </nav>
  </header>

}

export default Header
