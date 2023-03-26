import React from "react"
import './Nav.css'
import image1 from "../images/logo_nitp.png"

export default function Navbar() {
  return (
    <>
    <header id="header" className="fixed-top ">
    <div className="container d-flex align-items-center">

    <a href="index.html"><img className="logo" src={image1} style={{height:"70px",width:"70px"}}/></a>
      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="#hero">Home</a></li>

          <li className="dropdown"><a href="#"><span>Alumni Corner</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/">ReUnions</a></li>
              <li className="dropdown"><a href="#"><span>Distinguished Alumni</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Alumni Awards</a></li>
              <li><a href="#">Blogs from Alumni</a></li>
            </ul>
          </li>

          <li className="dropdown"><a href="#"><span>Alumni Student Interaction Corner</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/">Alumni Talks</a></li>
              <li className="dropdown"><a href="#"><span>Alumni Mentorship</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><a className="nav-link   scrollto" href="/">Donate</a></li>
          
          <li className="dropdown"><a href="#"><span>Events</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li className="dropdown"><a href="#"><span>Upcoming Events</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span>Events from Past</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>

            </ul>
          </li>

          <li className="dropdown"><a href="#"><span>Resources</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Institute Publication</a></li>
              <li className="dropdown"><a href="#"><span>Associated Bodies</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
            </ul>
          </li>

          <li className="dropdown"><a href="#"><span>Team</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Director</a></li>
              <li className="dropdown"><a href="#"><span>Dean Alumni</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li className="dropdown"><a href="#"><span>Alumni Web Team</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>

            </ul>
          </li>


          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          {/* <li><a className="getstarted scrollto" href="#about">Search</a></li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>





  <section id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Alumni-Cell-NIT-Patna</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <div className="d-flex justify-content-center justify-content-lg-start">
            <a href="#about" className="btn-get-started scrollto">Get Started</a>
            <a href="/" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
          </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src="/" className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>

  </section>
    </>
  )
}
