import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import style from "./style.module.scss"

export default function TechnologyStack() {
  const techSection = [
    {
      id: 1,
      icon: '/icons/web-development.svg',
      description: 'We partner with you to create custom websites that convert and leaves the user smiling.',
      heading: 'Web Development',
      techIcons: [
        '/icons/technology/angular.svg',
        '/icons/technology/python.svg',
        '/icons/technology/react.svg',
        '/icons/technology/bootstrap.svg',
      ]
    },
    {
      id: 2,
      icon: '/icons/app-evelopment.svg',
      description: 'We partner with you to create custom websites that convert and leaves the user smiling.',
      heading: 'App Development',
      techIcons: [
        '/icons/technology/android.svg',
        '/icons/technology/react.svg',
        '/icons/technology/apple.svg',
        '/icons/technology/flutter.svg',
      ]
    },
    {
      id: 3,
      icon: '/icons/dev-ops-services.svg',
      description: 'We partner with you to create custom websites that convert and leaves the user smiling.',
      heading: 'DevOps Services',
      techIcons: [
        '/icons/technology/docker.svg',
        '/icons/technology/github.svg',
        '/icons/technology/terraform.svg',
        '/icons/technology/azure.svg',
      ]
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-Technology", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 0,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#technologyStack',
        start: 'top bottom',
        markers: false
      },
    })
  }, [])

  return (
    <section id='technologyStack' className={`${style.technologyStack}`}>
      <div className="container">
        <div className={style.heading}>
          <h2 className='title2 text-white'>
            <div className='animation-block'>
              <div className="animation-Technology">Heading about </div>
            </div>
            <div className='animation-block'>
              <div className="animation-Technology">Technology stack</div>
            </div>
          </h2>
          <Link href="/">
            <a className='btn-link-custom animation-block'>
              <div className='animation-Technology'>
                View All tech<FaArrowRight size={15} />
              </div>
            </a>
          </Link>
        </div>

        <div className="client-section">
          <div className="row gx-5">
            {techSection.map((techItem, index) => {
              return (
                <div key={index} className="col">
                  <div className='icon-heading'>
                    <Image
                      src={techItem.icon}
                      alt="Picture of the author"
                      width={32}
                      height={32}
                    />
                    <h4 className="text1">{techItem.heading}</h4>
                  </div>
                  <p className="text4">{techItem.description}</p>
                  <div className="tech-icons">
                    {techItem.techIcons.map((techIcon, index) => {
                      return (
                        <div key={index}>
                          <Image
                            key={index}
                            src={techIcon}
                            alt="Picture of the author"
                            width={32}
                            height={32}
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
