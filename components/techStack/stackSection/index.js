import React, { useEffect } from 'react'
import Image from 'next/image'
import style from "./style.module.scss"
import gsap from 'gsap';

export default function StackSection() {

  const technologyStack = [
    {
      id: 1,
      firstImgUrl: "/icons/web-dev.svg",
      heading: 'Web Developement',
      description: "End-to-end custom web applications designed to address your unique business concerns",
      techDevs: [
        {
          heading: 'Front end Developmenet ',
          description: "Frontend framework and libraries we love playing around.",
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
          description: "Backend framework and libraries we integrate for our extensive knowledge",
          techImages: [
            {
              imageUrl: '/icons/technology/php.svg',
              techTitle: 'PHP'
            },
            {
              imageUrl: '/icons/technology/nextjs.svg',
              techTitle: 'ASP.net'
            },
            {
              imageUrl: '/icons/technology/c-sharp.svg',
              techTitle: 'C#'
            },
            {
              imageUrl: '/icons/technology/java.svg',
              techTitle: 'Java & JEE'
            },
            {
              imageUrl: '/icons/technology/python.svg',
              techTitle: 'Python'
            },
            {
              imageUrl: '/icons/technology/aws.svg',
              techTitle: 'AWS'
            },
            {
              imageUrl: '/icons/technology/mysql.svg',
              techTitle: 'Postgre SQL'
            },
            {
              imageUrl: '/icons/technology/postgre.svg',
              techTitle: 'Postgre SQL'
            }
          ]
        }
      ],
    },
    {
      id: 2,
      firstImgUrl: "/icons/app-development.svg",
      heading: 'App Development',
      description: "With WishIT transform your ideas into creative software solutions by leveraging best-in-class technologies.",
      techDevs: [
        {
          heading: 'Hybrid Apps',
          description: "Hybrid platforms we prefer working with for simple, lightweight cross-platform apps.",
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
        },
        {
          heading: 'Native apps',
          description: "Native platform we rely on. ",
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
      ],
    },
    {
      id: 3,
      firstImgUrl: "/icons/app-evelopment.svg",
      heading: 'DevOps Services',
      description: "Comprehensive DevOps services accelerate time to market.",
      techDevs: [
        {
          heading: 'Technologies',
          description: "Technologies we prefer ace or work. ",
          techImages: [
            {
              imageUrl: '/icons/technology/npm.svg',
              techTitle: 'NPM'
            },
            {
              imageUrl: '/icons/technology/docker.svg',
              techTitle: 'Docker'
            },
            {
              imageUrl: '/icons/technology/gitlab.svg',
              techTitle: 'Gitlab'
            },
            {
              imageUrl: '/icons/technology/terraform.svg',
              techTitle: 'Terraform'
            },
            {
              imageUrl: '/icons/technology/azure.svg',
              techTitle: 'Azure'
            },
          ]
        },
      ],
    },
  ];

  return (
    <section className={style.stackSection}>
      <div className="container">
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
                      <h4 className="text1 text-primary mb-0">{techMain.heading}</h4>
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
                                      width={56}
                                      height={56}
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
