import gsap from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import style from "./style.module.scss"

export default function PortfolioDetail() {
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
    <section className={style.portfolioDetail}>
      <div className={`${style.customContainer} container`}>
        <div className="">
          <div className={`${style.cardRowSection} row `}>
            <div className="col-sm-10">
              <div className={style.cardRow}>
                <div className={style.actionRow}>
                  <div className={style.headingRow}>
                    <h4 className={`${style.titleCustom} title4 text-white mt-0`}>Study Torch</h4>
                    <p className="subtext mb-0">Add project sub-title</p>
                  </div>
                </div>

                <div className={style.cardRowRadius}>
                  <div className={`${style.cardRowBanner} reveal`}>
                    <Image
                      src="/images/banners/study-torch.jpg"
                      alt="Picture of the author"
                      layout='fill'
                    />
                  </div>
                </div>

                <div className={style.cardRowInfo}>
                  <div>
                    <div className={`subtext`}>Client</div>
                    <div className="text2 text-medium mt-2">studytorch.com</div>
                  </div>
                  <div>
                    <div className={`subtext`}>Service</div>
                    <div className="text2 text-medium mt-2">Product Design</div>
                  </div>
                  <div>
                    <div className={`subtext`}>Deliverable</div>
                    <div className="text2 text-medium mt-2">UI Screens, UX Flow & Prototype</div>
                  </div>
                </div>

                <div>
                  <h4 className="title4">About the project</h4>
                  <p className={style.subtextCustom}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                  <ul className={style.listStyle}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</li>
                  </ul>
                </div>

                <div className={style.cardRowRadius}>
                  <div className={`${style.cardRowBanner} reveal`}>
                    <Image
                      src="/images/banners/study-torch2.jpg"
                      alt="Picture of the author"
                      layout='fill'
                    />
                  </div>
                </div>

                <div className={style.detailSection}>
                  <div className={`${style.rowCustom} row`}>
                    <div className="col-sm-3">
                      <div className="text3 text-medium text-white">Challenge</div>
                    </div>
                    <div className="col-sm-9">
                      <p className="subtext opacity-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>

                  <div className={`${style.rowCustom} row`}>
                    <div className="col-sm-3">
                      <div className="text3 text-medium text-white">Discover</div>
                    </div>
                    <div className="col-sm-9">
                      <p className="subtext opacity-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>

                  <div className={`${style.rowCustom} row`}>
                    <div className="col-sm-3">
                      <div className="text3 text-medium text-white">Define</div>
                    </div>
                    <div className="col-sm-9">
                      <p className="subtext opacity-primary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>

                <div className={style.cardRowRadius}>
                  <div className={`${style.cardRowBanner} reveal`}>
                    <Image
                      src="/images/banners/study-torch3.jpg"
                      alt="Picture of the author"
                      layout='fill'
                    />
                  </div>
                </div>


                <div className={style.keywordSection}>
                  <div className="text3 text-bold text-secondary">Keywords</div>
                  <div className={style.keywordList}>
                    <Link href="/">Design </Link>
                    <Link href="/">UI/UX  </Link>
                    <Link href="/">Wireframing </Link>
                    <Link href="/">Branding </Link>
                    <Link href="/">Development </Link>
                    <Link href="/">webflow </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
