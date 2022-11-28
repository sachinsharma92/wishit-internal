import React, { useEffect } from 'react'
import style from "./style.module.scss"
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive'
import gsap from "gsap";

export default function OurWork() {
  const cardSlides = [
    {
      projectImage: '/images/banners/mealq.jpg',
      projectTitle: 'Workhub office Webflow Webflow Design',
    },
    {
      projectImage: '/images/banners/study-torch.jpg',
      projectTitle: 'Workhub office Webflow Webflow Design',
    },
    {
      projectImage: '/images/banners/my-merch.jpg',
      projectTitle: 'Workhub office Webflow Webflow Design',
    },
    {
      projectImage: '/images/banners/one-tracker.jpg',
      projectTitle: 'Workhub office Webflow Webflow Design',
    }
  ]

  const LargeDevice = useMediaQuery({ query: '(min-width: 1024px)' })

  useEffect(() => {
    if (LargeDevice) {
      var controller = new ScrollMagic.Controller();
      var wipeAnimation = new TimelineMax()
        .to("#slideContainer", 1, { x: "-24%" }, { x: "0%", ease: Linear.easeNone })
        .to("#slideContainer", 1, { x: "-48%" }, { x: "0%", ease: Linear.easeNone })
        .to("#slideContainer", 1, { x: "-72%" }, { x: "0%", ease: Linear.easeNone })
        .to("#slideContainer", 1, { x: "-192%" }, { x: "0%", ease: Linear.easeNone })

      // create scene to pin and link animation
      new ScrollMagic.Scene({
        triggerElement: "#pinContainerPortfolio",
        triggerHook: 0,
        duration: "400%"
      })
        .setPin("#pinContainerPortfolio")
        .setTween(wipeAnimation)
        // .addIndicators()
        .addTo(controller);

    }

  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-title", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 0,
      stagger: {
        amount: 1
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#heading',
        start: 'center bottom',
        markers: false
      },
    })
  }, [])

  return (
    <section id='pinContainerPortfolio' className={`${style.ourWork} tab-vertical-image`}>
      <div className="container">
        <div id='heading' className={style.heading}>
          <div className='animation-block'>
            <h2 className="title2 text-white animation-title">Some of our works...</h2>
          </div>
          <Link href="/portfolio">
            <a className='btn-link-custom'>
              View More <FaArrowRight size={15} />
            </a>
          </Link>
        </div>
        <div id='slideContainer' className="horizontal-card-slider">
          {cardSlides.map((item, index) => (
            <Card key={index} className="card-custom">
              <div className='card-image-box'>
                <Card.Img variant="top" src={item.projectImage} className="card-image" />
              </div>
              <Card.Body className='card-body-custom'>
                <Card.Text>
                  {item.projectTitle}
                </Card.Text>
                <Link href="/">
                  <a className='btn-link-custom'>
                    View project <FaArrowRight size={15} />
                  </a>
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
