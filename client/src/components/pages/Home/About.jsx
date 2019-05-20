import React from "react";

const About = () => {
  return (
    <div>
      <div id="about">
        <div className="jumbotron">
          <h3 className="heading">About</h3>

          <div className="row">

            <div className="col-md-4 text-center">
              <h4>About Me</h4>
              <p>I am a fullstack web developer with a passion for building web applications. I enjoy learning new things, whether it's a new technology or language, or discovering new secrets of something I already know. I consider myself a lifetime student with a professional demeanor.</p>
            </div>
            <div className="col-md-4 text-center">
              <h4>Languages</h4>
              <p>Javascript(Vanilla and ES6), Python, HTML, CSS</p>
              <h4>Frameworks/Technologies</h4>
              <p>Node.js, React, Express, GraphQl, Django, Edge.js and more...</p>
              <h4>Databases</h4>
              <p>MongoDB, PostgressQL</p>
            </div>
            <div className="col-md-4 text-center">
              <h4>Ambition</h4>
              <p>I am seeking a postion as a Jr Developer in a workplace where I can contribute my critical mindset, and my emphasis on collaborative creation is valued. If that is something you seek in a developer, feel free to contact me below.</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
