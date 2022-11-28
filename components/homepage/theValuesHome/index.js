import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect } from 'react'
import style from "./style.module.scss"

export default function TheValuesHome() {
  const imageGallery = [
    {
      imgUrl: '/icons/trust.svg',
      title: 'Trust',
      subText: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
    },
    {
      imgUrl: '/icons/security.svg',
      title: 'Security',
      subText: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
    },
    {
      imgUrl: '/icons/privacy.svg',
      title: 'Privacy',
      subText: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-the-value", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#theValue',
        start: 'top bottom',
        markers: false
      },
    })
  }, [])

  return (
    <section id='theValue' className={`${style.theValuesHome}`}>
      <div className="container">
        <div className="client-say">
          <div className="row">
            <div className='col-sm-6'>

              <h3 className="title3 text-white">
                <div className='animation-block'>
                  <div className='animation-the-value'>
                    The values that hold us
                  </div>
                </div>
                <div className='animation-block'>
                  <div className='animation-the-value'>
                    true & to account
                  </div>
                </div>
              </h3>
            </div>
          </div>
          <div className={style.trustSec}>
            <div className="row gx-5">
              {imageGallery.map((item, index) => (
                <div key={index} className='col-sm-4'>
                  <div className={style.imgItem}
                    data-aos="fade-up"
                    data-aos-duration="1000">
                    <Image
                      src={item.imgUrl}
                      alt="Picture of the author"
                      width={64}
                      height={64}
                    />
                    <div className={style.content}>
                      <h4 className="text2 text-white">{item.title}</h4>
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
