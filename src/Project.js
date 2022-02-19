import React from "react";
import "./Project.css";

function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          There are many variations of passages of Lorem Ipsum available,
        </p>
        <p className="heading p__color">
          but the majority have suffered alteration.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
            

                  <div className="col__3">
                      <div className="project__box pointer relative">
                          <div className="project__box__img pointer relative">
                              <div className="project__img__box">
                                  <img src='img/images/c.png' alt="" className="project__img" />
                              </div>
                              <div className="mask__effect"></div>
                          </div>
                          <div className="project__meta absolute">
                              <h5 className="project__text">Project CyptoVerse Web</h5>
                              <h4 className="project__text">Getting tickets to the big show</h4>
                              <a href="https://react-redux-crypto-currency.vercel.app/" className="project__btn">View Project</a>
                          </div>
                      </div>
                  </div>

                  <div className="col__3">
                      <div className="project__box pointer relative">
                          <div className="project__box__img pointer relative">
                              <div className="project__img__box">
                                  <img src='img/images/asd.png' alt="" className="project__img" />
                              </div>
                              <div className="mask__effect"></div>
                          </div>
                          <div className="project__meta absolute">
                              <h5 className="project__text">Project Contact Book</h5>
                              <h4 className="project__text">Getting tickets to the big show</h4>
                              <a href="http://redux-toolkit-student-contacts.vercel.app/" className="project__btn">View Project</a>
                          </div>
                      </div>
                  </div>

                  <div className="col__3">
                      <div className="project__box pointer relative">
                          <div className="project__box__img pointer relative">
                              <div className="project__img__box">
                                  <img src='img/images/mov.png' alt="" className="project__img" />
                              </div>
                              <div className="mask__effect"></div>
                          </div>
                          <div className="project__meta absolute">
                              <h5 className="project__text">Project Movies Web</h5>
                              <h4 className="project__text">Getting tickets to the big show</h4>
                              <a href="http://redux-toolkit-movie-app.vercel.app/" className="project__btn">View Project</a>
                          </div>
                      </div>
                  </div>

             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
