import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function BuildGreatBanner() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-build-great", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#buildGreat',
        start: 'top bottom',
        markers: false
      },
    })
  }, [])
  return (
    <div id='buildGreat' className="banner-style-section">
      <div className="container">
        <div className='build-great-banner'>
          <div className='content-wrapper'>
            <div className='content-section'>
              <div className='animation-block'>
                <h4 className="title4 animation-build-great">Let&apos;s build something great together</h4>
              </div>
              <div className='animation-block'>
                <p className="subtext animation-build-great">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            </div>
            <div className='animation-block'>
              <Link href="/">
                <a className='btn btn-info animation-build-great'>
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
