import React from 'react'
import Image from 'next/image'
import style from "./style.module.scss"

export default function OurExpertise() {
  const cardData = [
    {
      imgUrl: '/icons/services/icon1.svg',
      numbers: '15+',
      title: 'IoT',
      description: 'WishIT is a worldwide recognized IoT app development company capable of building one-of-a-kind IoT apps that extend the connected ecosystem of gadgets with a unique user experience and smooth performance.'
    },
    {
      imgUrl: '/icons/services/icon2.svg',
      numbers: '500+',
      title: 'Artificial Intelligence ',
      description: 'Using our AI analytical mindset and hard-earned skills, we assist your business in leveraging the optimal potential of AI systems by converting your ideas into workable solutions through technical execution. '
    },
    {
      imgUrl: '/icons/services/icon3.svg',
      numbers: '34',
      title: 'Agile Method and DevOps ',
      description: 'Integrating Agile and DevOps is a sure shortcut to long-term success. In order to assist you in achieving that, we offer DevOps services that can optimize team productivity and equip them to create quality products faster for great customer satisfaction. '
    },
    {
      imgUrl: '/icons/services/icon4.svg',
      numbers: '15+',
      title: 'New Feature Development ',
      description: 'We are not confined to a specific domain; at WishIT, we provide full-stack custom and feature development services for web, desktop, and mobile, maintaining scalability and responsiveness at every stage of the development process.'
    },
    {
      imgUrl: '/icons/services/icon5.svg',
      numbers: '500+',
      title: 'Project management ',
      description: 'Empower your team and take your project management to next level with our project management services. We involve our planning, managing, skills, tools and best innovative strategies to guarantee your organization’s projects are completed on time and within budget.'
    },
    {
      imgUrl: '/icons/services/icon6.svg',
      numbers: '34',
      title: 'UX/UI Design ',
      description: 'We know the power of design, the power to compel users to continue using a product. So with a human-centred design process, we bring power to our design by not only keeping the users in mind but also by incorporating the users in the process. Resulting to deliver a design that wow our users. '
    },
    {
      imgUrl: '/icons/services/icon7.svg',
      numbers: '15+',
      title: 'Enterprise Mobility ',
      description: `We will take the load off your shoulder by using zero-touch and self-enrollment techniques to automate device enrollment. Based on the users' roles in the company, we enrol the furnished devices with the necessary security rules, apps, and resources.`
    },
    {
      imgUrl: '/icons/services/icon8.svg',
      numbers: '500+',
      title: 'Solution Architect',
      description: 'Your business is on the right page when we are accountable for your solution architect. By combining our IT, engineering, DevOps, network, and expertise, we ensure that we are speaking to the right people, addressing the right issues, and offering feasible solutions. '
    },
    {
      imgUrl: '/icons/services/icon9.svg',
      numbers: '34',
      title: 'Data Structure Algorithm ',
      description: 'Big adieu to all those hassles, because we are here to tackle your data structuring and organizing tasks. We crunch the information and formulate the best architecture for the requirement. '
    },
  ]

  return (
    <section className={style.ourExpertise}>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <p className="subtext-semibold text-secondary text-uppercase">Our expertise</p>
            <h3 className={`${style.title4} title4 text-white`}>We create software solutions that are uniquely designed to address your business challenges.</h3>
          </div>
          <div className="col-sm-6">
            <p className={`${style.subtextCustom} subtext mt-4`}>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
          </div>
        </div>

        <div className={style.cardSection}>
          <div className="row gy-5 gx-5">
            {cardData.map((item, index) => (
              <div key={index} className="col-sm-4">
                <div className={style.cardItem} data-aos="flip-down" data-aos-duration={1000}>
                  <div className={style.iconBox}>
                    <Image
                      src={item.imgUrl}
                      alt="Picture of the author"
                      width={64}
                      height={64}
                    />
                  </div>
                  <div className={style.contentSec}>
                    <h3 className="text4 text-white text-semibold">{item.title}</h3>
                    <p className='subtext mb-0'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
