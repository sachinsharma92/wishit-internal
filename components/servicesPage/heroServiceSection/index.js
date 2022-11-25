import React from 'react'
import Image from 'next/image'
import style from "./style.module.scss"

export default function HeroServiceSection() {

  return (
    <section className={style.heroServiceSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h1 className="animation-block text-white text-center">
              <div className={`${style.titleCustom} title4 animation-text`}>A look at our </div>
              <div className="title3 animation-text"><span className='text-gradient'> service palette</span></div>
            </h1>
          </div>
          <div className="col-sm-6">
            <Image
              src="/images/hero-img-2.svg"
              alt="Picture of the author"
              width={639}
              height={360}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
