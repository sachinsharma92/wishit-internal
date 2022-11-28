import React, { useEffect } from 'react'
import Image from 'next/image'
import style from "./style.module.scss"
import gsap from 'gsap';

export default function HeroTechSection() {

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-technology-stack", 1.4, {
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
    ScrollReveal().reveal(".scaleUpTech", {
      duration: 4000,
      scale: 0.75
    });
  }, [])



  return (
    <section className={style.heroTechSection}>
      <div className="container">
        <div className={`${style.rowCustom} row`}>
          <div className="col-sm-6">
            <h1 className="text-white">
              <div className="animation-block">
                <div className={`${style.titleCustom} title4 animation-technology-stack`}>A look at wide variety of</div>
              </div>
              <div className="animation-block">
                <div className="title2 animation-technology-stack"><span className='text-gradient'>Technology Stack</span></div>
              </div>
            </h1>
            <div className="animation-block">
              <p className="subtext mt-4 animation-technology-stack">WishIT is a leading IT services provider which has established a name in the industry by delivering great bespoke web and mobile applications. </p>
            </div>
          </div>
          <div className="col-sm-6">
            <div className={`${style.imageBox} scaleUpTech`}>
              <Image
                src="/images/hero-img-3.svg"
                alt="Picture of the author"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
