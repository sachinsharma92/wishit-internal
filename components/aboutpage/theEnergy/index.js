import Image from 'next/image'
import React from 'react'
import style from "./style.module.scss"


const experienceData = [
  {
    numbers: '15+',
    title: 'Awards received',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.'
  },
  {
    numbers: '500+',
    title: 'Clients served',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.'
  },
  {
    numbers: '34',
    title: 'Employees',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.'
  },
  {
    numbers: '130+',
    title: 'Custom solutions',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscin. Curabitur sit amet eros elit et.'
  }
]
export default function TheEnergy() {

  return (
    <section className={style.theEnergy}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h4 className="title4 text-white">The energy of a start-up combined with 30 years of experience</h4>
          </div>
          <div className="col-sm-6">
            <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet eros blandit, hendrerit elit et, mattis purus. Vivamus commodo suscipit tellus et pellentesque.</p>
          </div>
        </div>

        <div className={style.counterSection}>
          <div className="row align-items-center">
            {experienceData.map((item, index) => (
              <div key={index} className="col-sm-3">
                <div className="title3 text-primary">{item.numbers}</div>
                <h4 className={`${style.titleSpace} title4 text-white`}>{item.title}</h4>
                <p className="subtext text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>


        <div className={style.ourMissionVision}>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <div className={style.cardCustom}>
                <div className={style.iconAlign}>
                  <div>
                    <div className="subtext text-white">Our Vision</div>
                    <h4 className={`${style.titleSpace} text1 text-white`}>Laser focus</h4>
                  </div>
                  <Image
                    src="/icons/vision.svg"
                    alt="Picture of the author"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="text4 text-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
            <div className="col-sm-6">
              <div className={style.cardCustom}>
                <div className={style.iconAlign}>
                  <div>
                    <div className="subtext text-white">Our Vision</div>
                    <h4 className={`${style.titleSpace} text1 text-white`}>Inspire, Innovate, Share</h4>
                  </div>
                  <Image
                    src="/icons/mission.svg"
                    alt="Picture of the author"
                    width={48}
                    height={48}
                  />
                </div>
                <p className="text4 text-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}