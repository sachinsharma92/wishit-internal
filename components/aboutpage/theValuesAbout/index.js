import gsap from 'gsap';
import Image from 'next/image'
import React, { useEffect } from 'react'
import style from "./style.module.scss"

export default function TheValuesAbout() {
  const imageGallery = [
    {
      imgUrl: '/icons/trust.svg',
      title: 'Trust',
      subText: 'Because we’ve been there and earned it. '
    },
    {
      imgUrl: '/icons/security.svg',
      title: 'Friendly support',
      subText: 'Because we will be there for you at all stages of the procedure, and even after delivery.'
    },
    {
      imgUrl: '/icons/privacy.svg',
      title: 'Domain expertise',
      subText: 'Because we have a tech-savvy crew.'
    },
    {
      imgUrl: '/icons/trust.svg',
      title: 'Security',
      subText: 'Because we will provide you cyber shield to save you from data theft. '
    },
    {
      imgUrl: '/icons/security.svg',
      title: 'Privacy',
      subText: 'Because we are skilled at keeping your information and data secure. '
    },
    {
      imgUrl: '/icons/privacy.svg',
      title: 'On Budget',
      subText: `Because we don't cost the earth.`
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-the-values", 1.4, {
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
            <div className='col-sm-6'>
              <h3 className="title3 text-white">
                <div className='animation-block'>
                  <div className='animation-the-values'>
                    The values that hold us <br className='d-none d-sm-block' />
                    true & to account
                  </div>
                </div>
              </h3>
            </div>
          </div>
          <div className={style.trustSec}>
            <div className={`${style.rowCustom} row`}>
              {imageGallery.map((item, index) => (
                <div key={index} className='col-6 col-sm-4'>
                  <div className={style.imgItem}>
                    <Image
                      src={item.imgUrl}
                      alt="Picture of the author"
                      width={64}
                      height={64}
                    />
                    <div className={style.content}>
                      <h4 className="text2 text-white">{item.title}</h4>
                      <p className={`${style.subTextCustom} subtext mb-0`}>{item.subText}</p>
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
