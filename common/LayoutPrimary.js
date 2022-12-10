import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { useRouter } from "next/router";
import ScrollButton from './scrollButton';

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
                    <Link href="/technology">
                      <a className={`nav-link ${router.pathname == "/technology" ? "active" : ""}`}>
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
              <Link href="/" >
                <a className="footer-brand">
                  <Image
                    src="/images/logo.svg"
                    alt="theme logo"
                    layout='fill'
                  />
                </a>
              </Link>

              <p className="subText max-subtext">
                We are always open to discuss your project and improve your online presence.
              </p>

              <div className="card-contact">
                <div className='flex-sec'>
                  <div className="info">
                    <div className="subtext">Email me at</div>
                    <div className="text4 text-semibold mt-2 ">
                      <a href="mailto:hello@wishit.au" className='email-text'>hello@wishit.au</a>
                    </div>
                  </div>

                  <div className="info">
                    <div className="subtext">Call us</div>
                    <div className="text4 text-semibold mt-2">0927 6277 28525</div>
                  </div>
                </div>

                <div className="info">
                  <div className="subtext">Our Address</div>
                  <div className="text4 text-semibold mt-2">903/9 Parnnell St, Strathfield, NSW, 2135</div>
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
              <div className="col-sm-6">
                <div className='copyright-text'> Copyright © 2022, Wish IT Pty Ltd - ABN 31657846314</div>
              </div>
              <div className="col-sm-6 text-right">
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
                  <Link href="/services">
                    <a className='nav-link'>
                      Services
                    </a>
                  </Link>
                  <Link href="/portfolio">
                    <a className='nav-link'>
                      Portfolio
                    </a>
                  </Link>
                  <Link href="/technology">
                    <a className='nav-link'>
                      Technology Stack
                    </a>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ScrollButton />
    </div>
  )
}
