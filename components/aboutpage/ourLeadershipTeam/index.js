import Image from 'next/image'
import React from 'react'
import style from "./style.module.scss"

export default function OurLeadershipTeam() {
  const imageGallery = [
    {
      imgUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Jenny Wilson',
      subText: 'Viverra ut potenti '
    },
    {
      imgUrl: 'https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Floyd Miles',
      subText: 'Viverra ut potenti '
    },
    {
      imgUrl: 'https://images.pexels.com/photos/2122276/pexels-photo-2122276.jpeg?auto=compress&cs=tinysrgb&w=1600',
      title: 'Cameron Williamson',
      subText: 'Viverra ut potenti '
    },
  ];

  return (
    <section className={`${style.theValuesAbout}`}>
      <div className="container">
        <div className="client-say">
          <div class="row">
            <div className='col-sm-12'>
              <h3 className="title3 text-white text-center">
                Our Leadership Team
              </h3>
              <p className={`${style.subtextCustom} subtext`}>Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum diam quam. Scelerisque mus vel egestas justo, purus consequat nibh eget. Non risus feugiat porta integer.</p>
            </div>
          </div>
          <div className={style.trustSec}>
            <div class="row gx-5 gy-5">
              {imageGallery.map((item, index) => (
                <div key={index} className='col-sm-4'>
                  <div className={style.imgItem}>
                    <div className={style.imgBox}>
                      <Image
                        src={item.imgUrl}
                        alt="Picture of the author"
                        width={140}
                        height={140}
                      />
                    </div>
                    <div className={style.content}>
                      <h4 className="text3 text-white">{item.title}</h4>
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
