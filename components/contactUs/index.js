import gsap from 'gsap';
import React, { useEffect } from 'react'
import style from "./style.module.scss"

export default function ContactUs() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-contact", 1.4, {
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
    <section className={style.contactUs}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <h1 className="text-white text-center">
              <div className='animation-block'>
                <div className="title2 animation-contact">Have a Project ?</div>
              </div>
              <div className='animation-block'>
                <div className="title2 animation-contact"><span className='text-gradient'>contact us</span></div>
              </div>
            </h1>
          </div>
        </div>

        <div className={`${style.contactForm} contact-form`}>
          <form>
            <div className="row row-for-form">
              <div className="col-sm-6">
                <div className="form-item">
                  <label className="form-label">Name</label>
                  <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-item">
                  <label className="form-label">* Email </label>
                  <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-item">
                  <label className="form-label">Phone No.</label>
                  <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-item">
                  <label className="form-label">City</label>
                  <input type="email" className="form-control" placeholder="name@example.com" />
                </div>
              </div>

              <div className="col-sm-12">
                <div className="form-item">
                  <label className="form-label">What service do you need?</label>

                  <div className='radio-sec'>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" />
                      <label className="form-check-label">
                        Web Design
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" />
                      <label className="form-check-label">
                        App Design
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" />
                      <label className="form-check-label">
                        Digital Marketing
                      </label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" />
                      <label className="form-check-label">
                        Other
                      </label>
                    </div>


                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" checked />
                      <label className="form-check-label">
                        App Design
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div className="form-item">
                  <label className="form-label">*Message</label>
                  <textarea className="form-control" rows="6"></textarea>
                </div>
              </div>
            </div>

            <button className="btn btn-info mt-5">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
