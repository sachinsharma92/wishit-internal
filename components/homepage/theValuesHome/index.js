import Image from 'next/image'
import React from 'react'
import style from "./style.module.scss"

export default function TheValuesHome() {
  const imageGallery = [
    {
      imgUrl: '/icons/trust.svg',
      title: 'Trust',
      subText: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
    },
    {
      imgUrl: '/icons/security.svg',
      title: 'Security',
      subText: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
    },
    {
      imgUrl: '/icons/privacy.svg',
      title: 'Privacy',
      subText: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .'
    }
  ];

  return (
    <section className={`${style.theValuesHome}`}>
      <div className="container">
        <div className="client-say">
          <div className="row">
            <div className='col-sm-6'>
              <h3 className="title3 text-white">
                The values that hold us
                true & to account
              </h3>
            </div>
          </div>
          <div className={style.trustSec}>
            <div className="row gx-5">
              {imageGallery.map((item, index) => (
                <div key={index} className='col-sm-4'>
                  <div className={style.imgItem}>
                    <Image
                      src={item.imgUrl}
                      alt="Picture of the author"
                      width={64}
                      height={64}
                    />
                    <div className={style.content}>
                      <h4 className="text2 text-white">{item.title}</h4>
                      <p className="subtext mb-0">{item.subText}</p>
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
