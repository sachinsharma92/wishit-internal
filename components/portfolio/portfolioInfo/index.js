import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import style from "./style.module.scss"

export default function PortfolioInfo() {
  const portfolioData = [
    {
      projectBanner: '/images/banners/study-torch.jpg',
      projectName: 'Study Torch',
      projectSubtile: 'Add project sub-title',
      websiteUrl: 'www.website.com',
      projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
      projectBanner: '/images/banners/mealq.jpg',
      projectName: 'MealQ',
      projectSubtile: 'Add project sub-title',
      websiteUrl: 'www.website.com',
      projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
      projectBanner: '/images/banners/my-merch.jpg',
      projectName: 'My-merch',
      projectSubtile: 'Add project sub-title',
      websiteUrl: 'www.website.com',
      projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
      projectBanner: '/images/banners/one-tracker.jpg',
      projectName: 'One Tracker',
      projectSubtile: 'Add project sub-title',
      websiteUrl: 'www.website.com',
      projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-projects", 1.4, {
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset"
        }
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out
      });
    });
  }, [])


  return (
    <section className={style.portfolioInfo}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <h1 className="text-white text-center">
              <div className="animation-block">
                <div className="title3 animation-projects">A look at our</div>
              </div>
              <div className="animation-block">
                <div className="title2 animation-projects"><span className='text-gradient'> Amazing Projects</span></div>
              </div>
            </h1>
          </div>

          <div className={style.cardRowSection}>
            <div className="col-sm-12">
              {portfolioData.map((item, index) => (
                <div className={style.cardRow} key={index}>
                  <div className={style.actionRow}>
                    <div className={style.headingRow}>
                      <h4 className={`${style.titleCustom} title4 text-white mt-0`}>{item.projectName}</h4>
                      <p className="subtext mb-0">{item.projectSubtile}</p>
                    </div>
                    <Link href="portfolio/portfolio-detail">
                      <a className='btn-link-custom'>
                        View More <FaArrowRight size={15} />
                      </a>
                    </Link>
                  </div>

                  <div className={style.cardRowRadius}>
                    <div className={`${style.cardRowBanner} reveal`}>
                      <Image
                        src={item.projectBanner}
                        alt="Picture of the author"
                        layout='fill'
                      />
                    </div>
                  </div>

                  <div className={style.cardRowAction}>
                    <a className={style.webisteLink} href="www.website.com" target="_blank">
                      {item.websiteUrl}
                    </a>
                    <div className={`${style.subtextCustom} subtext`}>
                      {item.projectDescription}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
