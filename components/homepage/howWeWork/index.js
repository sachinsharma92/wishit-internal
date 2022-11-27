import React, { useEffect } from 'react'
import Image from 'next/image'
import style from "./style.module.scss"
import { Col, Nav, Row, Tab } from 'react-bootstrap';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import gsap from 'gsap';

export default function HowWeWork() {
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.from(".animation-block .animation-text", 1, {
    //   y: 100,
    //   ease: "power4.out",
    //   delay: 0.5,
    //   skewY: 0,
    //   stagger: {
    //     amount: 1
    //   },
    //   autoAlpha: 0,
    // })
  }, [])

  return (
    <section className={`${style.howWeWork} tab-vertical-image`}>
      <div className="container">
        <div className={style.heading}>
          <div className="animation-block">
            <h2 className="title2 text-white animation-text">How we work.</h2>
          </div>
          <Link href="/" className='btn-link-custom'>
            Get in touch with us <FaArrowRight size={15} />
          </Link>
        </div>
        <div className={style.tabSection}>
          <Tab.Container defaultActiveKey="discover">
            <Row>
              <Col sm={5}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="discover">
                      <h3 className="title3">Discover</h3>
                      <p className="text4 line3">Lorem ipsum dolor sit amet consectetur. Magna tincidunt aliquet id ut convallis adipiscing sit. Mus ut amet eget senectus posuere. Quam nunc elementum ultricies eget vel.</p>

                      <div className={`${style.imgBox} d-sm-none img-mobile`}>
                        <Image
                          src="/images/services/discover.jpeg"
                          alt="Picture of the author"
                          width={639}
                          height={360}
                        />
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="design">
                      <h3 className="title3">Design</h3>
                      <p className="text4 line3">Lorem ipsum dolor sit amet consectetur. Magna tincidunt aliquet id ut convallis adipiscing sit. Mus ut amet eget senectus posuere. Quam nunc elementum ultricies eget vel.</p>

                      <div className={`${style.imgBox} d-sm-none img-mobile`}>
                        <Image
                          src="/images/services/design.webp"
                          alt="Picture of the author"
                          width={639}
                          height={360}
                        />
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="development">
                      <h3 className="title3">Development</h3>
                      <p className="text4 line3">Lorem ipsum dolor sit amet consectetur. Magna tincidunt aliquet id ut convallis adipiscing sit. Mus ut amet eget senectus posuere. Quam nunc elementum ultricies eget vel.</p>

                      <div className={`${style.imgBox} d-sm-none img-mobile`}>
                        <Image
                          src="/images/services/development.jpeg"
                          alt="Picture of the author"
                          width={639}
                          height={360}
                        />
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="testing">
                      <h3 className="title3">Testing</h3>
                      <p className="text4 line3">Lorem ipsum dolor sit amet consectetur. Magna tincidunt aliquet id ut convallis adipiscing sit. Mus ut amet eget senectus posuere. Quam nunc elementum ultricies eget vel.</p>

                      <div className={`${style.imgBox} d-sm-none img-mobile`}>
                        <Image
                          src="/images/services/testing.webp"
                          alt="Picture of the author"
                          width={639}
                          height={360}
                        />
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="deployment">
                      <h3 className="title3">Deployment</h3>
                      <p className="text4 line3">Lorem ipsum dolor sit amet consectetur. Magna tincidunt aliquet id ut convallis adipiscing sit. Mus ut amet eget senectus posuere. Quam nunc elementum ultricies eget vel.</p>

                      <div className={`${style.imgBox} d-sm-none img-mobile`}>
                        <Image
                          src="/images/services/deployment.webp"
                          alt="Picture of the author"
                          width={639}
                          height={360}
                        />
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="support">
                      <h3 className="title3">Support</h3>
                      <p className="text4 line3">Lorem ipsum dolor sit amet consectetur. Magna tincidunt aliquet id ut convallis adipiscing sit. Mus ut amet eget senectus posuere. Quam nunc elementum ultricies eget vel.</p>

                      <div className={`${style.imgBox} d-sm-none img-mobile`}>
                        <Image
                          src="/images/services/support.webp"
                          alt="Picture of the author"
                          width={639}
                          height={360}
                        />
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={7} className="d-none d-sm-block">
                <Tab.Content>
                  <Tab.Pane eventKey="discover">
                    <div className={style.imgBox}>
                      <Image
                        src="/images/services/discover.jpeg"
                        alt="Picture of the author"
                        width={639}
                        height={360}
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="design">
                    <div className={style.imgBox}>
                      <Image
                        src="/images/services/design.webp"
                        alt="Picture of the author"
                        width={639}
                        height={360}
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="development">
                    <div className={style.imgBox}>
                      <Image
                        src="/images/services/development.jpeg"
                        alt="Picture of the author"
                        width={639}
                        height={360}
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="testing">
                    <div className={style.imgBox}>
                      <Image
                        src="/images/services/testing.webp"
                        alt="Picture of the author"
                        width={639}
                        height={360}
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="deployment">
                    <div className={style.imgBox}>
                      <Image
                        src="/images/services/deployment.webp"
                        alt="Picture of the author"
                        width={639}
                        height={360}
                      />
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="support">
                    <div className={style.imgBox}>
                      <Image
                        src="/images/services/support.webp"
                        alt="Picture of the author"
                        width={639}
                        height={360}
                      />
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </section>
  )
}
