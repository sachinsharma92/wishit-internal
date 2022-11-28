import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useRouter } from "next/router";

export default function LayoutPrimary(props) {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);

  return (
    <div className='main-inner-container'>
      {/* Main Header */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container">
            <div className='navbar-row'>
              <Link href="/" >
                <a className="navbar-brand">
                  <Image
                    src="/images/logo.svg"
                    alt="theme logo"
                    layout='fill'
                  // width={110}
                  // height={28}
                  />
                </a>
              </Link>
              <button onClick={() => setToggle(!toggle)} className={`navbar-toggler ${toggle ? "active-toggle" : ''}`}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
              </button>
              <div className={`navbar-collapse ${toggle ? "navbar-collapsed" : ''}`}>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link href="/">
                      <a className={`nav-link ${router.pathname == "/" ? "active" : ""}`}>
                        Home
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/about">
                      <a className={`nav-link ${router.pathname == "/about" ? "active" : ""}`}>
                        About us
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/services">
                      <a className={`nav-link ${router.pathname == "/services" ? "active" : ""}`}>
                        Services
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/portfolio">
                      <a className={`nav-link ${router.pathname == "/portfolio" ? "active" : ""}`}>
                        Portfolio
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/tech-stack">
                      <a className={`nav-link ${router.pathname == "/tech-stack" ? "active" : ""}`}>
                        Technology Stack
                      </a>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/contact">
                      <a className='btn btn-info btn-sm'>
                        Contact us
                      </a>
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
                  <Link href="/">
                    <a className='nav-link'>
                      Home
                    </a>
                  </Link>
                  <Link href="/about">
                    <a className='nav-link'>
                      About us
                    </a>
                  </Link>
                  <Link href="/">
                    <a className='nav-link'>
                      Features
                    </a>
                  </Link>
                  <Link href="/">
                    <a className='nav-link'>
                      Pricing
                    </a>
                  </Link>
                  <Link href="/">
                    <a className='nav-link'>
                      FAQ
                    </a>
                  </Link>
                  <Link href="/">
                    <a className='nav-link'>
                      Blog
                    </a>
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
