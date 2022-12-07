import React, { useEffect } from 'react'
import Image from 'next/image'
import style from "./style.module.scss"
import gsap from 'gsap';

export default function HeroServiceSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-service", 1.4, {
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

  useEffect(() => {
    ScrollReveal({ reset: true });
    ScrollReveal().reveal(".scaleUpService", {
      duration: 4000,
      scale: 0.75
    });
  }, [])


  return (
    <section className={style.heroServiceSection}>
      <div className="container">
        <div className={`${style.rowCustom} row align-items-center`}>
          <div className="col-sm-6">
            <h1 className="text-white text-center">
              <div className='animation-block'>
                <div className={`${style.titleCustom} title4 animation-service`}> Take a tour of our</div>
              </div>
              <div className='animation-block'>
                <div className="title2 animation-service"><span className='text-gradient'> service palette </span></div>
              </div>
            </h1>
          </div>
          <div className="col-sm-6">
            <div className={`${style.imgStyle} scaleUpService`}>
              <Image
                src="/images/hero-img-2.svg"
                alt="Picture of the author"
                width={639}
                height={360}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
