import gsap from 'gsap';
import React, { useEffect } from 'react'
import style from "./style.module.scss"

export default function AboutInfo() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-product", 1.4, {
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
    <section className={style.aboutInfo}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <h1 className="text-white text-center">
              <div className='animation-block'>
                <div className="title2 animation-product">Our Product & Services</div>
              </div>
              <div className='animation-block'>
                <div className="title2 animation-product"><span className='text-gradient'> solves problems</span></div>
              </div>
            </h1>
          </div>
          <div className="col-sm-12">
            <div className={style.aboutInfo}>
              <div className={style.textSection}>
                <div className={style.textFocus}>
                  What Makes us special ?
                </div>

                <div className={style.makesSec}>
                  <div>
                    <h4 className={`${style.titleCustom} title4 text-white`}>Goal focussed</h4>
                    <p className="subtext">With concepts that incite, engage, and excite, we aim to give you the best of what we do. With this goal, we generate ideas that go against the grain and influence trends. </p>
                  </div>

                  <div>
                    <h4 className={`${style.titleCustom} title4 text-white`}>Continuous improvement</h4>
                    <p className="subtext">We believe in continuous learning and improving to offer our enterprise clients cutting-edge engineering solutions and untangling the complicated problems that inevitably crop up during their digital evolution journeys.  </p>
                  </div>
                </div>
              </div>

              <div className={style.banner} style={{
                backgroundImage: `url("https://images.pexels.com/photos/2566581/pexels-photo-2566581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`
              }}>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
