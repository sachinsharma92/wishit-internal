import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

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
      <footer className='main-footer'>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="title3 text-white">
                Wishit
              </h3>
              <p className="subText max-subtext">
                We are always open to discuss your project and improve your online presence.
              </p>

              <div className="card-contact">
                <div className="info">
                  <div className="subtext">Email me at</div>
                  <div className="text4 text-semibold mt-2">contact@website.com</div>
                </div>

                <div className="info">
                  <div className="subtext">Call us</div>
                  <div className="text4 text-semibold mt-2">0927 6277 28525</div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <h3 className="title3 text-white">
                Lets Talk!
              </h3>
              <p className="subText max-subtext">
                We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
              </p>

              <div className="social-icons">
                <a href=""><FaFacebook /></a>
                <a href=""><FaTwitter /></a>
                <a href=""><FaInstagram /></a>
                <a href=""><FaLinkedin /></a>
              </div>
            </div>
          </div>

          <div className='copyright'>
            <div className="row">
              <div className="col-sm-4">
                <div className='copyright-text'> Copyright 2022, wishit.com</div>
              </div>
              <div className="col-sm-8 text-right">
                <ul className="footer-nav">
                  <Link href="/" className='nav-link'>
                    Home
                  </Link>
                  <Link href="/" className='nav-link'>
                    About us
                  </Link>
                  <Link href="/" className='nav-link'>
                    Features
                  </Link>
                  <Link href="/" className='nav-link'>
                    Pricing
                  </Link>
                  <Link href="/" className='nav-link'>
                    FAQ
                  </Link>
                  <Link href="/" className='nav-link'>
                    Blog
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
