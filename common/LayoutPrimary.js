import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useRouter } from "next/router";

export default function LayoutPrimary(props) {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      {/* Main Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container">
            <div className='navbar-row'>
              <Link className="navbar-brand" href="/">
                <Image
                  src="/images/logo.svg"
                  alt="Picture of the author"
                  width={110}
                  height={28}
                />
              </Link>
              <button onClick={() => setToggle(!toggle)} className={`navbar-toggler ${toggle ? "active-toggle" : ''}`}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </button>
              <div className={`navbar-collapse ${toggle ? "navbar-collapsed" : ''}`}>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link href="/" className={`nav-link ${router.pathname == "/" ? "active" : ""}`}>
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about" className={`nav-link ${router.pathname == "/about" ? "active" : ""}`}>
                      About us
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/services" className={`nav-link ${router.pathname == "/services" ? "active" : ""}`}>
                      Services
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/portfolio" className={`nav-link ${router.pathname == "/portfolio" ? "active" : ""}`}>
                      Portfolio
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/tech-stack" className={`nav-link ${router.pathname == "/tech-stack" ? "active" : ""}`}>
                      Technology Stack
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact" className='btn btn-info btn-sm'>
                      Contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Container */}
      <main>
        {props.children}
      </main>

      {/* Main Footer */}
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
