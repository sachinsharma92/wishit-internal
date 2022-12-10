import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function BuildGreatBanner() {
  useEffect(() => {
    ScrollReveal().reveal(".slide-up", {
      duration: 500,
      origin: "bottom",
      distance: "100px",
      easing: "cubic-bezier(.37,.01,.74,1)",
      opacity: 0.3,
      scale: 0.9
    });

  }, [])
  return (
    <div id='buildGreat' className="slide-up">
      <div className='animation-block'>
        <div className="banner-style-section animation-build-great">
          <div className="container">
            <div className='build-great-banner'>
              <div className='content-wrapper'>
                <div className='content-section'>
                  <h4 className="title4">Let&apos;s build something great together</h4>
                  {/* <p className="subtext">Request a price quote for our services.</p> */}
                </div>
              </div>
              <Link href="/">
                <a className='btn btn-info'>
                  Get Started
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
