import React from 'react'
import Image from 'next/image'
import style from "./style.module.scss"

export default function PrivacyPolicy() {
  const cardData = [
    {
      imgUrl: '/icons/services/icon1.svg',
      numbers: '15+',
      title: 'On Time Delivery',
      description: 'Through True Rich Attended does no end it his mother since real had half every him'
    },
    {
      imgUrl: '/icons/services/icon1.svg',
      numbers: '500+',
      title: 'Clients served',
      description: 'Through True Rich Attended does no end it his mother since real had half every him'
    },
    {
      imgUrl: '/icons/services/icon1.svg',
      numbers: '34',
      title: 'Employees',
      description: 'Through True Rich Attended does no end it his mother since real had half every him'
    },
    {
      imgUrl: '/icons/services/icon4.svg',
      numbers: '15+',
      title: 'On Time Delivery',
      description: 'Through True Rich Attended does no end it his mother since real had half every him'
    },
    {
      imgUrl: '/icons/services/icon5.svg',
      numbers: '500+',
      title: 'Clients served',
      description: 'Through True Rich Attended does no end it his mother since real had half every him'
    },
    {
      imgUrl: '/icons/services/icon6.svg',
      numbers: '34',
      title: 'Employees',
      description: 'Through True Rich Attended does no end it his mother since real had half every him'
    },
    {
      imgUrl: '/icons/services/icon7.svg',
      numbers: '15+',
      title: 'On Time Delivery',
      description: 'Through True Rich Attended does no end it his mother since real had half every him'
    },
    {
      imgUrl: '/icons/services/icon8.svg',
      numbers: '500+',
      title: 'Clients served',
      description: 'Through True Rich Attended does no end it his mother since real had half every him'
    },
    {
      imgUrl: '/icons/services/icon9.svg',
      numbers: '34',
      title: 'Employees',
      description: 'Through True Rich Attended does no end it his mother since real had half every him'
    },
  ]

  return (
    <section className={style.privacyPolicy}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h3 className={`${style.title4} title4 text-white`}>Privacy Policy</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className={style.cardCustom}>
              <h3 className={`${style.title4} title4 text-white`}>Lorem ipsum dolor.</h3>
              <p className={`${style.subtextCustom} subtext mt-4`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <p className={`${style.subtextCustom} subtext mt-2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
              <h3 className={`${style.title4} title4 text-white mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
              <p className={`${style.subtextCustom} subtext mt-4`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
              <ul className={style.listStyle}>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
              </ul>
              <p className={`${style.subtextCustom} subtext mt-2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
