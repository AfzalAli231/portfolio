import React from "react";
import "./About.css";
import aboutImg from "./img/about.jpg";
function About() {
  //  Up To Top Btn
    window.addEventListener("scroll", function(){
      const upToTop = document.querySelector("a.bottom__to__top");
       upToTop.classList.toggle("active", window.scrollY > 0)
    });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                My name is Afzal Ali and I am here to design websites and make them responsive. Started with CSS Grid, Flexbox, ReactJS, Node JS, MongoDB, Express JS and Firebase. I also have plans to make it updated in the future. I have an experience of 2 year in MERN Stack Developer.
              </p>
              <div className="about__button d__flex align__items__center">
                <a href="https://drive.google.com/file/d/1ec6qp1fgyMeeBakiQVfM28APN4l0Bq-O/view?usp=sharing">
                  <button className="about btn pointer">Download Cv</button>
                </a>
                <a href="mailto:abroimdad38@gmail.com">
                  <button className="about btn pointer">Hire Me</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <button className="bottom__to__top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-up white"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
          />
        </svg>
        </button>
      </div>
    </div>
  );
}

export default About;
