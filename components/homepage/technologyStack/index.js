import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
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

  return (
    <section className={`${style.technologyStack}`}>
      <div className="container">
        <div className={style.heading}>
          <h2 className="title2 text-white">Heading about <br /> Technology stack</h2>
          <Link href="/" className='btn-link-custom'>
            View All tech<FaArrowRight size={15} />
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
