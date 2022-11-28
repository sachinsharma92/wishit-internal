import React, { useEffect } from 'react'
import Image from 'next/image'
import style from "./style.module.scss"
import gsap from 'gsap';

export default function HeroTechSection() {

  const technologyStack = [
    {
      id: 1,
      firstImgUrl: "/icons/web-dev.svg",
      heading: 'Web Development',
      description: "At WishIT, we design and develop websites and web apps that can make sure you’re seen and heard in the right circles",
      techDevs: [
        {
          heading: 'Frontend Development',
          description: "We love working with these Frontend frameworks and libraries",
          techImages: [
            {
              imageUrl: '/icons/technology/angular.svg',
              techTitle: 'Angular',
              animationDuration: 500,
            },
            {
              imageUrl: '/icons/technology/react.svg',
              techTitle: 'React',
              animationDuration: 600,
            },
            {
              imageUrl: '/icons/technology/css3.svg',
              techTitle: 'CSS3',
              animationDuration: 700,
            },
            {
              imageUrl: '/icons/technology/vue.svg',
              techTitle: 'Vue.js',
              animationDuration: 800,
            },
            {
              imageUrl: '/icons/technology/nextjs.svg',
              techTitle: 'Next.js',
              animationDuration: 900,
            },

            {
              imageUrl: '/icons/technology/jquery.svg',
              techTitle: 'JQuery',
              animationDuration: 1000,
            },
            {
              imageUrl: '/icons/technology/bootstrap.svg',
              techTitle: 'Bootstrap',
              animationDuration: 1100,
            },
            {
              imageUrl: '/icons/technology/html5.svg',
              techTitle: 'HTML5',
              animationDuration: 1200,
            }
          ]
        },
        {
          heading: 'Backend Development',
          description: "We enjoy extensive experience with these Backend frameworks and libraries",
          techImages: [
            {
              imageUrl: '/icons/technology/angular.svg',
              techTitle: 'Angular'
            },
            {
              imageUrl: '/icons/technology/react.svg',
              techTitle: 'React'
            },
            {
              imageUrl: '/icons/technology/css3.svg',
              techTitle: 'CSS3'
            },
            {
              imageUrl: '/icons/technology/vue.svg',
              techTitle: 'Vue.js'
            },
            {
              imageUrl: '/icons/technology/nextjs.svg',
              techTitle: 'Next.js'
            },

            {
              imageUrl: '/icons/technology/jquery.svg',
              techTitle: 'JQuery'
            },
            {
              imageUrl: '/icons/technology/bootstrap.svg',
              techTitle: 'Bootstrap'
            },
            {
              imageUrl: '/icons/technology/html5.svg',
              techTitle: 'HTML5'
            }
          ]
        }
      ],
    },
    {
      id: 2,
      firstImgUrl: "/icons/app-development.svg",
      heading: 'App Development',
      description: "At WishIT, we design and develop websites and web apps that can make sure you’re seen and heard in the right circles",
      techDevs: [
        {
          heading: 'Native apps',
          description: "We love working with these Frontend frameworks and libraries",
          techImages: [
            {
              imageUrl: '/icons/technology/android.svg',
              techTitle: 'Angular'
            },
            {
              imageUrl: '/icons/technology/apple.svg',
              techTitle: 'React'
            },
          ]
        },
        {
          heading: 'Hybrid apps',
          description: "We enjoy extensive experience with these Backend frameworks and libraries",
          techImages: [
            {
              imageUrl: '/icons/technology/ionic.svg',
              techTitle: 'Ionic'
            },
            {
              imageUrl: '/icons/technology/react.svg',
              techTitle: 'React Native'
            },
            {
              imageUrl: '/icons/technology/flutter.svg',
              techTitle: 'Flutter'
            },
          ]
        }
      ],
    },
  ];

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



  return (
    <section className={style.heroTechSection}>
      <div className="container">
        <div className="row align-items-center">
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
            <div className={`${style.imageBox} reveal`}>
              <Image
                src="/images/hero-img-3.svg"
                alt="Picture of the author"
                layout="fill"
                data-aos="zoom-in"
                data-aos-duration="600"
              />
            </div>
          </div>
        </div>


        <div className={style.tectInfoSection}>
          <div className="row align-items-center">
            <div className="col-sm-12">
              {technologyStack.map((techMain, index) => {
                return (
                  <div key={index} className={style.techWrapper}>
                    <div className={style.iconSec}>
                      <Image
                        src={techMain.firstImgUrl}
                        alt="Picture of the author"
                        width={32}
                        height={32}
                      />
                      <h4 className="text1 text-primary">{techMain.heading}</h4>
                    </div>
                    <p className="subtext mt-2">{techMain.description}</p>
                    {techMain.techDevs.map((techDev, index) => {
                      return (
                        <div className="col-sm-12 mt-5" key={index}>
                          <h4 className="text2">{techDev.heading}</h4>
                          <p className="subtext mt-2">{techDev.description}</p>

                          <div className={style.techListSection}>
                            <ul className={style.techList}>
                              {techDev.techImages.map((techImage, index) => {
                                return (
                                  <li key={index} data-aos="zoom-in" data-aos-duration={techImage.animationDuration}>
                                    <Image
                                      src={techImage.imageUrl}
                                      alt="Picture of the author"
                                      width={48}
                                      height={48}
                                    />
                                    <p className="subtext-semibold mt-2">{techImage.techTitle}</p>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
