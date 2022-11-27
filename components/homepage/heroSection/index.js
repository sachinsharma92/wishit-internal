import React, { useEffect } from 'react'
import gsap from "gsap/dist/gsap";
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowDown } from "react-icons/fa";
import style from "./style.module.scss"

export default function HeroSection() {
  const tl = gsap.timeline();
  useEffect(() => {
    tl.from(".animation-block .animation-text", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
    })
  }, [tl])

  return (
    <section className={style.heroSection}>
      <div className="container">
        <div className={`${style.rowCustom} row`}>
          <div className="col-sm-6">
            <h1 className="text-white">
              <div className='animation-block'>
                <div className="title1 animation-text">Bring every</div>
              </div>
              <div className='animation-block'>
                <div className="title1 animation-text"><span className='text-gradient'> idea to life</span></div>
              </div>
            </h1>
            <div className={style.heroBtn}>
              <Link href="/">
                <a className='btn btn-info btn-lg mt-5'>
                  View our work <FaArrowDown size={18} />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-sm-6">
            <Image
              src="/images/hero-img.svg"
              alt="Picture of the author"
              width={639}
              height={360}
              className={style.heroImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
