import Image from 'next/image'
import React from 'react'
import style from "./style.module.scss"


const cardData = [
  {
    imgUrl: '/icons/timer.svg',
    numbers: '15+',
    title: 'On Time Delivery',
    description: 'Through True Rich Attended does no end it his mother since real had half every him'
  },
  {
    imgUrl: '/icons/like.svg',
    numbers: '500+',
    title: 'Clients served',
    description: 'Through True Rich Attended does no end it his mother since real had half every him'
  },
  {
    imgUrl: '/icons/support.svg',
    numbers: '34',
    title: 'Employees',
    description: 'Through True Rich Attended does no end it his mother since real had half every him'
  },
]
export default function OurExpertise() {

  return (
    <section className={style.ourExpertise}>
      <div className="container">
        <div className={`${style.customRow} row`}>
          <div className="col-sm-6">
            <p className="subtext-semibold text-primary text-uppercase">Our expertise</p>
            <h3 className="title3 text-white">We want to get local identification in every corner of the world </h3>
            <p className={`${style.subtextCustom} subtext mt-4`}>Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
          </div>
          <div className="col-sm-6">
            <div className={style.cardStyle}>
              {cardData.map((item, index) => (
                <div key={index} className={style.cardItem}>
                  <div className={style.iconBox}>
                    <Image
                      src={item.imgUrl}
                      alt="Picture of the author"
                      width={20}
                      height={20}
                    />
                  </div>
                  <div className={style.contentSec}>
                    <h3 className="text3 text-white text-semibold">{item.title}</h3>
                    <p className='subtext mb-0'>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
