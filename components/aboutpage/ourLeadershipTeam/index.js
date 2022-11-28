import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect } from 'react'
import style from "./style.module.scss"

export default function OurLeadershipTeam() {
  const imageGallery = [
    {
      imgUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Jenny Wilson',
      subText: 'Viverra ut potenti '
    },
    {
      imgUrl: 'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Floyd Miles',
      subText: 'Viverra ut potenti '
    },
    {
      imgUrl: 'https://images.pexels.com/photos/2122276/pexels-photo-2122276.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Cameron Williamson',
      subText: 'Viverra ut potenti '
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-leadership", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 0,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
    })
  }, [])

  return (
    <section className={`${style.theValuesAbout}`}>
      <div className="container">
        <div className="client-say">
          <div className="row">
            <div className='col-sm-12'>
              <div className='animation-block'>
                <h3 className={`${style.titleStyle} title3 text-white animation-leadership`}>
                  Our Leadership Team
                </h3>
              </div>
              <div className='animation-block'>
                <p className={`${style.subtextCustom} subtext animation-leadership`}>Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum diam quam. Scelerisque mus vel egestas justo, purus consequat nibh eget. Non risus feugiat porta integer.</p>
              </div>
            </div>
          </div>
          <div className={style.trustSec}>
            <div className={`${style.customRow} row gx-5 gy-5`}>
              {imageGallery.map((item, index) => (
                <div key={index} className='col-6 col-sm-4'>
                  <div className={style.imgItem}>
                    <div className={style.imgBox}>
                      <Image
                        src={item.imgUrl}
                        alt="Picture of the author"
                        width={140}
                        height={140}
                        layout="fill"
                      />
                    </div>
                    <div className={style.content}>
                      <h4 className="text3 text-white">{item.title}</h4>
                      <p className="subtext mb-0">{item.subText}</p>
                    </div>
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
