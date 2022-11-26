import React, { useState } from 'react'
import style from "./style.module.scss"

export default function ContactUs() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };


  return (
    <section className={style.contactUs}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <h1 className="text-white text-center">
              <div className="title2">Have a Project ?</div>
              <div className="title2"><span className='text-gradient'>contact us</span></div>
            </h1>
          </div>
        </div>

        <div className={`${style.contactForm} contact-form`}>
          <form>
            <div className="row row-for-form">
              <div className="col-sm-6">
                <div class="form-item">
                  <label for="exampleFormControlInput1" class="form-label">Name</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
              </div>
              <div className="col-sm-6">
                <div class="form-item">
                  <label for="exampleFormControlInput1" class="form-label">* Email </label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
              </div>
              <div className="col-sm-6">
                <div class="form-item">
                  <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
              </div>
              <div className="col-sm-6">
                <div class="form-item">
                  <label for="exampleFormControlInput1" class="form-label">City</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
              </div>

              <div className="col-sm-12">
                <div class="form-item">
                  <label for="exampleFormControlInput1" class="form-label">What service do you need?</label>

                  <div className='radio-sec'>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Web Design
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        App Design
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Digital Marketing
                      </label>
                    </div>

                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label class="form-check-label" for="flexRadioDefault1">
                        Other
                      </label>
                    </div>


                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                      <label class="form-check-label" for="flexRadioDefault2">
                        App Design
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12">
                <div class="form-item">
                  <label for="exampleFormControlTextarea1" class="form-label">*Message</label>
                  <textarea class="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                </div>
              </div>
            </div>

            <button className="btn btn-info mt-5">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}
