import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import style from "./style.module.scss"

export default function PortfolioDetail() {
  const portfolioData = [
    {
      projectBanner: '/images/banners/study-torch.jpg',
      projectName: 'Study Torch',
      projectSubtile: 'Add project sub-title',
      websiteUrl: 'www.website.com',
      projectDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
  ];

  return (
    <section className={style.portfolioDetail}>
      <div className={`${style.customContainer} container`}>
        <div className="row align-items-center">
          <div className={style.cardRowSection}>
            <div className="col-sm-12">
              {portfolioData.map((item, index) => (
                <div className={style.cardRow} key={index}>
                  <div className={style.actionRow}>
                    <div className={style.headingRow}>
                      <h4 className={`${style.titleCustom} title4 text-white mt-0`}>{item.projectName}</h4>
                      <p className="subtext mb-0">{item.projectSubtile}</p>
                    </div>
                  </div>

                  <div className={style.cardRowBanner}>
                    <Image
                      src={item.projectBanner}
                      alt="Picture of the author"
                      layout='fill'
                    />
                  </div>

                  <div className={style.cardRowInfo}>
                    <div>
                      <div className="subtext">Client</div>
                      <div className="text2 text-medium mt-2">studytorch.com</div>
                    </div>
                    <div>
                      <div className="subtext">Service</div>
                      <div className="text2 text-medium mt-2">Product Design</div>
                    </div>
                    <div>
                      <div className="subtext">Deliverable</div>
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

                  <div className={style.cardRowBanner}>
                    <Image
                      src={item.projectBanner}
                      alt="Picture of the author"
                      layout='fill'
                    />
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

                  <div className={style.cardRowBanner}>
                    <Image
                      src={item.projectBanner}
                      alt="Picture of the author"
                      layout='fill'
                    />
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
