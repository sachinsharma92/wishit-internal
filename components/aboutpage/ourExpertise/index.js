import Image from 'next/image'
import React from 'react'
import style from "./style.module.scss"


const cardData = [
  {
    imgUrl: '/icons/timer.svg',
    title: 'On-time delivery ',
    description: 'Our mission is to make you fall in love with your brand with our breathtaking personal touch!',
    animationDuration: 500
  },
  {
    imgUrl: '/icons/like.svg',
    title: 'Best quality',
    description: 'We have built a process that balances corporate goals, user needs, & capabilities at every step.',
    animationDuration: 800
  },
  {
    imgUrl: '/icons/support.svg',
    title: 'Support Assist',
    description: `We have built a process that balances corporate goals, user needs, & capabilities at every step of the way so that we can deliver you best of best.`,
    animationDuration: 1000
  },
]
export default function OurExpertise() {

  return (
    <section className={style.ourExpertise}>
      <div className="container">
        <div className={`${style.customRow} row`}>
          <div className="col-sm-6">
            <p className="subtext-semibold text-primary text-uppercase">Our expertise</p>
            <h3 className="title3 text-white"> You wish it, and wishIT will make it come true.</h3>
            <p className={`${style.subtextCustom} subtext mt-4`}>With our top-notch service and cutting-edge high-tech solutions, we want to build recognition in every corner of the globe.</p>
          </div>
          <div className="col-sm-6">
            <div className={style.cardStyle}>
              {cardData.map((item, index) => (
                <div key={index} className={style.cardItem} data-aos="fade-left" data-aos-duration={item.animationDuration}>
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
                    {item.description2 && <p className='subtext mt-3'>{item.description2}</p>}
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
