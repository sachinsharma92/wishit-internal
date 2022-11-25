import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LayoutPrimary(props) {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg sticky-top navbar-custom">
          <div className="container">
            <div className='navbar-row'>
              <a className="navbar-brand" href="#">
                <Image
                  src="/images/logo.svg"
                  alt="Picture of the author"
                  width={110}
                  height={28}
                />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link href="/" className='nav-link active'>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className='nav-link'>
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className='nav-link'>
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className='nav-link'>
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className='nav-link'>
                      Technology Stack
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className='btn btn-info btn-sm'>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <main>
        {props.children}
      </main>
      <footer></footer>
    </div>
  )
}
