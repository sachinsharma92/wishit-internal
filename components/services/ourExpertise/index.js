import React from 'react'
import Image from 'next/image'
import style from "./style.module.scss"

export default function OurExpertise() {
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
    <section className={style.ourExpertise}>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <p className="subtext-semibold text-secondary text-uppercase">Our expertise</p>
            <h3 className={`${style.title4} title4 text-white`}>We Build Software Solution that Solve Clients Business Challenges</h3>
          </div>
          <div className="col-sm-6">
            <p className={`${style.subtextCustom} subtext mt-4`}>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
          </div>
        </div>

        <div className={style.cardSection}>
          <div className="row gy-5 gx-5">
            {cardData.map((item, index) => (
              <div key={index} className="col-sm-4">
                <div className={style.cardItem} data-aos="flip-down" data-aos-duration={1000}>
                  <div className={style.iconBox}>
                    <Image
                      src={item.imgUrl}
                      alt="Picture of the author"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className={style.contentSec}>
                    <h3 className="text4 text-white text-semibold">{item.title}</h3>
                    <p className='subtext mb-0'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
