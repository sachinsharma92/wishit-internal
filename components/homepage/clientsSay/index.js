import gsap from 'gsap'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { FaStar } from 'react-icons/fa'
import style from "./style.module.scss"

export default function ClientsSay() {
  const clientSay = [1, 2, 3, 4, 5];
  const imageGallery = [
    "https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3220360/pexels-photo-3220360.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/886283/pexels-photo-886283.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/718978/pexels-photo-718978.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-client-say", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#clientSay',
        start: 'top bottom',
        markers: false
      },
    })
  }, [])

  return (
    <section id='clientSay' className={`${style.clientsSay}`}>
      <div className="container">
        <div className="client-say">
          <div className="row gx-5">
            <div className='col-sm-6'>
              <div className="img-flow-style">
                {imageGallery.map((item, index) => (
                  <div key={index} className='img-item'>
                    <Image
                      src={item}
                      alt="Picture of the author"
                      width={109}
                      height={109}
                      layout="fill"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='animation-block '>
                <h3 className="title3 text-white animation-client-say">
                  What our Clients have to say...
                </h3>
              </div>
              <Carousel variant="dark" indicators={false}>
                {clientSay.map((item, index) => (
                  <Carousel.Item key={index}>
                    <p className={`${style.subtextInner} subtext mt-4`}>Ultricies amet vulputate nulla in elit elit orci vitae tortor. Nunc ut pretium lectus aliquet varius pretium. Nec convallis morbi sapien aliquet augue. Nulla nulla integer pellentesque neque cum amet, turpis lacus, massa. Eu velit nunc adipiscing tincidunt blandi.</p>

                    <div className='rating-sec'>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <div className='profile-sec'>
                      <div className="img-box">
                        <Image
                          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                          alt="Picture of the author"
                          width={60}
                          height={60}
                        />
                      </div>
                      <div>
                        <div className='text3'>Gwen Stacy</div>
                        <p className='subtext mb-0'>Cloudexter</p>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
