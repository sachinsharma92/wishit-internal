import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowDown } from "react-icons/fa";
import style from "./style.module.scss"
import gsap from 'gsap';

export default function HeroSection() {
  useEffect(() => {
    // const tl = gsap.timeline();

    // tl.from(".animation-block .animation-text", 1.8, {
    //   y: 100,
    //   ease: "power4.out",
    //   delay: 1,
    //   skewY: 7,
    //   stagger: {
    //     amount: 0.3
    //   }
    // })
  }, [])

  return (
    <section className={style.heroSection}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <h1 className="animation-block text-white">
              <div className="title1 animation-text">Bring every</div>
              <div className="title1 animation-text"><span className='text-gradient'> idea to life</span></div>
            </h1>
            <div className={style.heroBtn}>
              <Link href="/" className='btn btn-info btn-lg mt-5'>
                View our work <FaArrowDown size={18} />
              </Link>
            </div>
          </div>
          <div className="col-sm-6">
            <Image
              src="/images/hero-img.svg"
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
