import Image from 'next/image'
import React from 'react'
import style from "./style.module.scss"

export default function Clients() {
  const clientCard = [
    {
      imgUrl: '/icons/clients/new/img1.png',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/new/img2.png',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/new/img4.png',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/new/img3.png',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/new/img5.png',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/new/img6.png',
      duration: 1000
    },
    {
      imgUrl: '/icons/clients/new/img8.png',
      duration: 1200
    },
    {
      imgUrl: '/icons/clients/new/img7.png',
      duration: 1200
    },
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
                layout="fill"
                className={style.imageSec}
              />
            </div>
          )
          )}
        </div>
      </div>
    </section>
  )
}
