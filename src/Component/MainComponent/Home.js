// Niralawebsolution.com / Website design & Development service Noida India
import React from 'react'
export default function Home() {
  return (
    <div>
    <div className="slider">
          <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="false">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="img/c2.jpg" className="d-block w-100 ih" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h4>Welcome to our website!</h4>
                  <p className="fs-5">We provide you best placement opportunities here.</p>
                  <a href="/Apply"><button type="button" className="btn btn-danger">Apply Now</button></a>
                </div>
              </div>
              <div className="carousel-item">
                <img src="img/c3.jpg" className="d-block w-100 ih" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h4>If you have skill,</h4>
                  <p className="fs-5">dont worry we are here for you.</p>
                  <a href="/Apply"><button type="button" className="btn btn-danger">Apply Now</button></a>
                </div>
              </div>
              <div className="carousel-item">
                <img src="img/c1.jpg" className="d-block w-100 ih" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h4>choose a job you love,</h4>
                  <p className="fs-5">and you will never have to work a day in your life.</p>
                  <a href="/Apply"><button type="button" className="btn btn-danger"> Apply Now </button></a>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="scroll container">
          <h2 style={{color: 'white', marginTop: '40px', textAlign: 'center'}}> <b> Our Leading Recruiters </b></h2>
          <div className="row_companys">
            <img src="img/microsoft.png" alt="" className="row_company" />
            <img src="img/mindtree.jpg" alt="" className="row_company" />
            <img src="img/mphais.png" alt="" className="row_company" />
            <img src="img/oracle.png" alt="" className="row_company" />
            <img src="img/paypal.png" alt="" className="row_company" />
            <img src="img/sap.png" alt="" className="row_company" />
            <img src="img/swiggy.png" alt="" className="row_company" />
            <img src="img/syntel.png" alt="" className="row_company" />
            <img src="img/tcs.png" alt="" className="row_company" />
            <img src="img/tech-mahindra.jpg" alt="" className="row_company" />
            <img src="img/wipro.png" alt="" className="row_company" />
            <img src="img/wns.jpg" alt="" className="row_company" />
            <img src="img/zomato.png" alt="" className="row_company" />
            <img src="img/amazone.png" alt="" className="row_company" />
            <img src="img/cisco.png" alt="" className="row_company" />
            <img src="img/facebook.png" alt="" className="row_company" />
            <img src="img/flipkart.png" alt="" className="row_company" />
            <img src="img/hcl.jpg" alt="" className="row_company" />
            <img src="img/hp.png" alt="" className="row_company" />
            <img src="img/infosys.jpg" alt="" className="row_company" />
            <img src="img/lti.png" alt="" className="row_company" />
          </div>
        </div>
        <section className="section-work-data">
          <div className="container container-num">
            <div className="p-3">
              <h2 className="counter-numbers " data-number={2000}>2000+</h2>
              <h4>PRESTIGIOUS RECRUITERS</h4>
            </div>
            <div className="p-3">
              <h2 className="counter-numbers " data-number={2500}>2500+</h2>
              <h4>RECORD PLACEMENT (BATCH 2022)</h4>
            </div>
            <div className="p-3">
              <h2 className="counter-numbers " data-number={5000}>5000+</h2>
              <h4>ALUMNI SERVING TO CORPORATE WORLD</h4>
            </div>
            <div className="p-3">
              <h2 className="counter-numbers " data-number={24}>48 LPA</h2>
              <h4>HIGHEST PACKAGE OFFERED</h4>
            </div>
          </div>
        </section>
        <div className="container mt-5 mb-5">
          <div className="h-1">
            <div className="h-1-1 divhome">
              <h4>Highest Package (last 5 years trends)</h4>
              <img src="img/hi1.jpg" alt="img" className="hig" />
            </div>
            <div className="h-1-2 divhome">
              <h4>Average Package (Last 5 Years Trend)</h4>
              <img src="img/hi2.jpg" alt="img" className="hig" />
            </div>
          </div>
          <div className="h-1">
            <div className="h1-1 divhome">
              <h4>Students Selected (Last 5 Years Trend)</h4>
              <img src="img/hi3.jpg" alt="img" className="hig" />
            </div>
            <div className="h1-2 divhome">
              <h4>Companies Visited (Last 5 Years Trend)</h4>
              <img src="img/hi4.jpg" alt="img" className="hig" />
            </div>
          </div>
        </div>
        <div className="contact ">
          <section className="contacts">
            <div className="container ">
              <div className="row">
                <div className="nvblue-bx" />
                <div className="col-sm-12 col-md-7 col-lg-8 nvblue wow fadeInDown" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                  <div className="contact-info"><br />
                    <h3>Quick Contact</h3>
                    <form className="contact-form" method="post" name="contact_frm" id="contact_frm" action="https://formspree.io/f/xrgdzbvl">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="md-form mb-0"><input type="text" id="name" name="name" className="form-control frm-name" placeholder="Name" required /></div>
                        </div>
                        <div className="col-md-4">
                          <div className="md-form mb-0"><input type="tel" id="phone" name="phone" className="form-control frm-mob" placeholder="Phone" pattern="^\d{10}$" required /></div>
                        </div>
                        <div className="col-md-4">
                          <div className="md-form mb-0"><input type="email" id="email" name="email" className="form-control frm-email" placeholder="Email" required /></div>
                        </div>
                        <div className="col-md-12">
                          <div className="md-form mb-0"><textarea name="message" id="message" className="form-control frm-msg" placeholder="Message" required defaultValue={""} /></div>
                        </div>
                        <div className="col-md-12">
                          <div className="my-4"><input type="submit" name="contact-submit" className="form-btn" defaultValue="Submit" /></div>
                          <br />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="bgc col-sm-12 col-md-5 col-lg-4 ltblue wow fadeInDown" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
                  <div className="addrs-info"><br />
                    <h3 id="contactm">Contact Us</h3><br />
                    <ul>
                      <li className="map"><i className="bi bi-geo-alt icony" />
                        <p>ABC , Priya Darshani Nagar, Kaliket Nagar, Danapur , Patna, Bihar
                          801503 </p>
                      </li>
                      <li className="mob"><i className="bi bi-phone icony" />
                        <p>+91 9123193296</p>
                      </li>
                      <li className="mail"><i className="bi bi-envelope icony" />
                        <p>deepakkumarj924@gmail.com</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ltblue-bx" />
              </div>
            </div>
          </section>
        </div>
        <div className="container-fluid back p-4 text-white text-center">
          <h2>About Us</h2>
          <div className="a-1 container contain  text-center">
            <div className="a-1-1 p-4">
              <h4>What We Do?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae ullam laboriosam repellat
                doloribus soluta, culpa consequuntur aliquid nemo quibusdam fugiat dolores, omnis vitae debitis itaque!
                Repellat vero sequi ipsam alias aspernatur iste aperiam deserunt rem dicta ut, ad doloribus saepe ea animi
                fuga soluta, exercitationem cumque aliquam eaque provident?</p>
            </div>
            <div className="a-1-2 p-4">
              <h4>Why Choose This Website?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae ullam laboriosam repellat
                doloribus soluta, culpa consequuntur aliquid nemo quibusdam fugiat dolores, omnis vitae debitis itaque!
                Repellat vero sequi ipsam alias aspernatur iste aperiam deserunt rem dicta ut, ad doloribus saepe ea animi
                fuga soluta, exercitationem cumque aliquam eaque provident?</p>
            </div>
            <div className="a-1-3 p-4">
              <h4>What's Our Motive?</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae ullam laboriosam repellat
                doloribus soluta, culpa consequuntur aliquid nemo quibusdam fugiat dolores, omnis vitae debitis itaque!
                Repellat vero sequi ipsam alias aspernatur iste aperiam deserunt rem dicta ut, ad doloribus saepe ea animi
                fuga soluta, exercitationem cumque aliquam eaque provident?</p>
            </div>
          </div>
        </div>
      </div>
      
    
  )
}
