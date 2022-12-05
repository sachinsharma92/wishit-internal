import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import style from "./style.module.scss"
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';

export default function HowWeWork() {
  const [count, setCount] = useState(5);
  const [activeTitle, setActiveTitle] = useState(1)

  const dataList = [
    {
      imgUrl: "/images/services/discover.jpeg",
      title: "Discover",
      description: "Sticking with our clients, we gather information to determine your target audience, their issues, and your business's needs.",
      id: 1,
    },
    {
      imgUrl: "/images/services/design.webp",
      title: "Design",
      description: "With the help of our tech-savvy team, we produce/create outlines that are specifically tailored to your business's demands. ",
      id: 2,
    },
    {
      imgUrl: "/images/services/development.jpeg",
      title: "Development",
      description: "In this phase, we get the tech work started and create the application in accordance with the earlier design outline and laid-out specifications.",
      id: 3
    },
    {
      imgUrl: "/images/services/testing.webp",
      title: "Testing",
      description: "Our programmers fine-tooth comb the software to ensure that there are no bugs and that the end-user experience won't be compromised in any way.",
      id: 4
    },
    {
      imgUrl: "/images/services/deployment.webp",
      title: "Deployment",
      description: "The tried and tested software comes to an end and goes into the deployment phase. Here we make our work live for the end users. ",
      id: 5
    },
    {
      imgUrl: "/images/services/support.webp",
      title: "Support",
      description: "Now we move to maintenance mode and begin practicing any operations needed to handle end-user difficulties. Additionally, make any changes that the software might require after deployment.",
      id: 6
    },
  ];


  const [imageSource, setImageSource] = useState(dataList[0].imgUrl);

  useEffect(() => {
    let ImageSourceInterval;
    if (count < dataList.length) {
      ImageSourceInterval = setInterval(() => setCount(count + 1), 2500);

    }
    if (count >= dataList.length) {
      setCount(0);
    }

    setImageSource(dataList[count]?.imgUrl);
    setActiveTitle(dataList[count]?.id)
    return () => clearInterval(ImageSourceInterval);
  }, [count]);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".animation-block .animation-how-work", 1.4, {
      y: 100,
      ease: "power4.out",
      delay: 1,
      skewY: 7,
      stagger: {
        amount: 0.3
      },
      autoAlpha: 0,
      scrollTrigger: {
        trigger: '#howWeWork',
        start: 'top bottom',
        markers: false
      },
    })
  }, [])

  return (
    <section id='howWeWork' className={`${style.howWeWork} tab-vertical-image`}>
      <div className="container">
        <div className={style.heading}>
          <div className="animation-block">
            <h2 className="title2 text-white animation-how-work">How we work.</h2>
          </div>
          <Link href="/">
            <a className='btn-link-custom animation-block'>
              <div className="animation-how-work">
                Get in touch with us <FaArrowRight size={15} />
              </div>
            </a>
          </Link>
        </div>

        <div className="row mt-5 custom-row">
          <div className="col-sm-7" id="contentSection">
            <ul className={style.howWeWorkSection}>
              {dataList.map((data, index) => (
                <li
                  key={index}
                  className={`list ${data.id === activeTitle ? 'active' : ''}`}
                  id={`item${index + 1}`}
                >
                  <div className={`title3 ${style.titleStyle} ${data.id === activeTitle ? style.activeText : ''}`}>{data.title}</div>
                  {data.id === activeTitle ? <p className="text4 line3">{data.description}</p> : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-5">
            <div className={`${style.imageSection}`} id="imageSection">
              {imageSource && (
                <div className={`${style.imgBox}`}>
                  <Image
                    key={imageSource}
                    src={imageSource}
                    alt="Picture of the author"
                    layout="fill"
                    className={`${style.imgStyle}`}
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
