import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>"{education.school}"</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
          <a href="https://soyhenry.com/webfullstack/">Click aquí para mas informacion</a>
        </div>
      );
    });
    var work = data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Educación</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      {/* <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{work}</div>
      </div> */}

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Habilidades</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p className="text-lad">{skillmessage}</p>

          <div className="bars">
            <ul className="skills">
              <li className="HTML">
                <div className="hover html-div">
                  <h2 className="html-txt">HTML</h2>
                  <img src="./images/HTML.png" alt="HTML IMG" className="html-img" />
                </div>
              </li>
              <li className="CSS">
                <div className="hover css-div">
                  <h2 className="css-text">CSS</h2>
                  <img src="./images/CSS.png" alt="" className="css-img" />
                </div>
              </li>
              <li className="JS">
                <div className="hover js-div">
                  <h2 className="js-text">JavaScript</h2>
                  <img src="./images/JS.jpg" alt="" className="js-img" />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="three columns header-col">
          <br />
          <br />
          <h1 className="tit">
            <span>Frameworks/Librerias</span>
          </h1>
        </div>
        <div className="nine columns main-col">
          <br />
          <br />
          <p className="text-lad lat">Los Frameworks/Librerias que se utilizar</p>
          <br />
          <div className="frameworks">
            <ul className="skillss">
              <li className="react">
                <div className="hoverf div-react">
                  <h2 className="react-text">React</h2>
                  <img src="./images/React.png" alt="" className="react-img" />
                </div>
              </li>

              <li className="redux">
                <div className="hoverf div-redux">
                  <h2 className="redux-text">Redux</h2>
                  <img src="./images/Redux.png" alt="" className="redux-img" />
                </div>
              </li>

              <li className="express">
                <div className="hoverf div-express">
                  <h2 className="express-text">Express</h2>
                  <img src="./images/Express.png" alt="" className="express-img" />
                </div>
              </li>

              <li className="sequalize">
                <div className="div-sequalize">
                  {/* <h2 className="sequalize-text">Sequelize</h2> */}
                  <img src="./images/Sequelize.png" alt="" className="sequalize-img" />
                </div>
              </li>
            </ul>
          </div>
        </div>




      </div>
    </section>
  );
};

export default Resume;
