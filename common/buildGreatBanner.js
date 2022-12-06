import gsap from 'gsap';
import Link from 'next/link'
import React, { useEffect } from 'react'

export default function BuildGreatBanner() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-build-great", 1.2, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 0,
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
    <div id='buildGreat'>
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
