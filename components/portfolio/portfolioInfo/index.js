import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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
  ];

  return (
    <section className={style.portfolioInfo}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <h1 className="text-white text-center">
              <div className="title2">A look at our</div>
              <div className="title2"><span className='text-gradient'> Amazing Projects</span></div>
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
                    <Link href="/" className='btn-link-custom'>
                      View More <FaArrowRight size={15} />
                    </Link>
                  </div>

                  <div className={style.cardRowBanner}>
                    <Image
                      src={item.projectBanner}
                      alt="Picture of the author"
                      width={1000}
                      height={1000}
                    />
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
