import React from 'react'
import style from "./style.module.scss"

export default function AboutInfo() {

  return (
    <section className={style.aboutInfo}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <h1 className="text-white text-center">
              <div className="title2">Our Product & Services</div>
              <div className="title2"><span className='text-gradient'> solves problems</span></div>
            </h1>
          </div>
          <div className="col-sm-12">
            <div className={style.aboutInfo}>
              <div className={style.textSection}>
                <div className={style.textFocus}>
                  What Makes us special ?
                </div>

                <div className='d-flex'>
                  <div>
                    <h4 className={`${style.titleCustom} title4 text-white`}>Goal focussed</h4>
                    <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>

                  <div>
                    <h4 className={`${style.titleCustom} title4 text-white`}>Continuous improvement</h4>
                    <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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
