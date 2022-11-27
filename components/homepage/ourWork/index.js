import React, { useEffect } from 'react'
import style from "./style.module.scss"
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

export default function OurWork() {
  const cardSlides = [
    {
      projectImage: '/images/banners/mealq.jpg',
      projectTitle: 'Workhub office Webflow Webflow Design',
    },
    {
      projectImage: '/images/banners/study-torch.jpg',
      projectTitle: 'Workhub office Webflow Webflow Design',
    },
    {
      projectImage: '/images/banners/my-merch.jpg',
      projectTitle: 'Workhub office Webflow Webflow Design',
    },
    {
      projectImage: '/images/banners/mealq.jpg',
      projectTitle: 'Workhub office Webflow Webflow Design',
    }
  ]
  return (
    <section className={`${style.ourWork} tab-vertical-image`}>
      <div className="container">
        <div className={style.heading}>
          <h2 className="title2 text-white">Some of our works...</h2>
          <Link href="/" className='btn-link-custom'>
            View More <FaArrowRight size={15} />
          </Link>
        </div>
        <div className="horizontal-card-slider">
          {cardSlides.map((item, index) => (
            <Card key={index} className="card-custom">
              <Card.Img variant="top" src={item.projectImage} />
              <Card.Body>
                <Card.Text>
                  {item.projectTitle}
                </Card.Text>
                <Link href="/" className='btn-link-custom'>
                  View project <FaArrowRight size={15} />
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
