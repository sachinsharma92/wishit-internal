import Image from 'next/image'
import React from 'react'
import style from "./style.module.scss"

export default function Clients() {
  const clientCard = [
    {
      imgUrl: '/icons/clients/icon1.svg',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/icon2.svg',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/icon3.svg',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/icon4.svg',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/icon5.svg',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/icon6.svg',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/icon7.svg',
      duration: 1200
    },
    {
      imgUrl: '/icons/clients/icon8.svg',
      duration: 1200
    },
    {
      imgUrl: '/icons/clients/icon9.svg',
      duration: 1200
    },
    {
      imgUrl: '/icons/clients/icon10.svg',
      duration: 1200
    },
    {
      imgUrl: '/icons/clients/icon11.svg',
      duration: 1200
    },
    {
      imgUrl: '/icons/clients/icon12.svg',
      duration: 1200
    }
  ]
  return (
    <section className={`${style.clients} tab-vertical-image`}>
      <div className="container">
        <div className={style.heading}>
          <h2 className="title2 text-white">We’ve worked with some cool Clients</h2>
          <p className="text3 mt-4">Helping new brands and start ups...</p>
        </div>
        <div className={style.upDownGrid}>
          {clientCard.map((item, index) =>
          (
            <div key={index} className={`${style.cardGrid}`} data-aos="fade-up" data-aos-duration={item.duration}>
              <Image
                src={item.imgUrl}
                alt="Picture of the author"
                width={140}
                height={28}
              />
            </div>
          )
          )}
        </div>
      </div>
    </section>
  )
}
