import React from 'react'
import style from "./style.module.scss"
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import { Card } from 'react-bootstrap';

export default function OurWork() {
  return (
    <section className={`${style.ourWork} tab-vertical-image`}>
      <div className="container">
        <div className={style.heading}>
          <h2 className="title2 text-white">Some of our works...</h2>
          <Link href="/" className='btn-link-custom'>
            View More <FaArrowRight size={15} />
          </Link>
        </div>
        <div className="horizontal-card-slider scroll-hide">
          <Card className="card-custom">
            <Card.Img variant="top" src="/images/banners/mealq.jpg" />
            <Card.Body>
              <Card.Text>
                Workhub office Webflow Webflow Design
              </Card.Text>
              <Link href="/" className='btn-link-custom'>
                View project <FaArrowRight size={15} />
              </Link>
            </Card.Body>
          </Card>

          <Card className="card-custom">
            <Card.Img variant="top" src="/images/banners/study-torch.jpg" />
            <Card.Body>
              <Card.Text>
                Workhub office Webflow Webflow Design
              </Card.Text>
              <Link href="/" className='btn-link-custom'>
                View project <FaArrowRight size={15} />
              </Link>
            </Card.Body>
          </Card>

          <Card className="card-custom">
            <Card.Img variant="top" src="/images/banners/mealq.jpg" />
            <Card.Body className={style.cardBodyCustom}>
              <Card.Text>
                Workhub office Webflow Webflow Design
              </Card.Text>
              <Link href="/" className='btn-link-custom'>
                View project <FaArrowRight size={15} />
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  )
}
