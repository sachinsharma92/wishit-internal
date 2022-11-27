import Link from 'next/link'
import React from 'react'

export default function BuildGreatBanner() {
  return (
    <div className="banner-style-section">
      <div className="container">
        <div className='build-great-banner'>
          <div className='content-wrapper'>
            <div className='content-section'>
              <h4 className="title4">Let&apos;s build something great together</h4>
              <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            </div>
            <div>
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
