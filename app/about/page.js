import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image1 from "@/Assets/Images/download.png";
import image2 from "@/Assets/Images/Microsoft_logo.jpg";
import image3 from "@/Assets/Images/download (2).png";
import image4 from "@/Assets/Images/mS.jpg";
import Arham from "@/Assets/Images/HeroIma.jpg";
import Rowan from "@/Assets/Images/1599486574612.jpeg";
import Hassan from "@/Assets/Images/122821437.png";
import Najmi from "@/Assets/Images/1713618830981.jpeg";
import Image from "next/image";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import "./about.css";
const page = () => {
  return (
    <>
      <div className="container">
        <h1 className="bold mb-4">About Us</h1>
        <b className="letter">Our Mission</b>
        <p className="paragraph my-4">
          JobPilot began as an ambitious project for the Azure Cosmos DB
          Hackathon. Our mission is to empower job seekers in their journey
          towards securing their ideal roles. We aim to increase your
          opportunities for interviews, job offers, and ultimately help you land
          your dream job. For more information on the hackathon, visit the{" "}
          <a
            style={{ textDecoration: "none" }}
            href="https://azurecosmosdb.devpost.com/"
          >
            Azure Cosmos DB Hackathon
          </a>
          .
        </p>
        <b className="letter">Participating Companies</b>
        <div className="mt-5">
          <div className="row">
            <div className="col-3">
              <Image src={image1} alt="Devpost" className="img1" />
              <p>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://devpost.com/"
                >
                  Devpost
                </a>
              </p>
            </div>
            <div className="col-3">
              <Image src={image2} alt="Microsoft" className="img1" />
              <p>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.microsoft.com/"
                >
                  Microsoft
                </a>
              </p>
            </div>
            <div className="col-3">
              <Image src={image3} alt="Reactor" className="img1" />
              <p>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://learn.microsoft.com/en-us/shows/reactor/"
                >
                  Reactor
                </a>
              </p>
            </div>
            <div className="col-3">
              <Image src={image4} alt="Microsoft" className="img1" />
              <p>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://learn.microsoft.com/en-us/"
                >
                  Microsoft Learning
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4 mb-5 d-flex justify-content-evenly">
          <b className="letter">Our Team</b>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mt-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="d-flex justify-content-center mt-3">
                <Image src={Arham} alt="Image" className="card-img-top img" />
              </div>
              <b className="d-flex justify-content-center mt-1">
                Muhammad Arham
              </b>
              <b className="d-flex justify-content-center mt-2">
                (MERN Stack Developer)
              </b>

              <div className="card-body d-flex justify-content-center">
                <a
                  href="https://www.linkedin.com/in/arhamansari12/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="custom-icon"
                    color="black"
                    icon={faLinkedinIn}
                  />
                </a>
                <a href="https://github.com/arhamansari11" target="_blank">
                  <FontAwesomeIcon
                    className="custom-icon"
                    color="black"
                    icon={faGithub}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mt-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="d-flex justify-content-center mt-3">
                <Image src={Rowan} alt="Image" className="card-img-top img" />
              </div>
              <b className="d-flex justify-content-center mt-1">Rowan Wood</b>
              <b className="d-flex justify-content-center mt-2">
                (Team Leader)
              </b>
              <div className="card-body d-flex justify-content-center">
                <a
                  href="https://www.linkedin.com/in/rowanwood/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="custom-icon"
                    color="black"
                    icon={faLinkedinIn}
                  />
                </a>
                <a href="https://github.com/mrdiamonddirt" target="_blank">
                  <FontAwesomeIcon
                    className="custom-icon"
                    color="black"
                    icon={faGithub}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mt-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="d-flex justify-content-center mt-3">
                <Image src={Hassan} alt="Image" className="card-img-top img" />
              </div>
              <b className="d-flex justify-content-center mt-1">
                Hassan Gulzar
              </b>
              <b className="d-flex justify-content-center mt-2">
                (MERN Stack Developer)
              </b>
              <div className="card-body d-flex justify-content-center">
                <a
                  href="https://linkedin.com/in/hassan-gulzar-256292267/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="custom-icon"
                    color="black"
                    icon={faLinkedinIn}
                  />
                </a>
                <a href="https://github.com/hassangulzar1" target="_blank">
                  <FontAwesomeIcon
                    className="custom-icon"
                    color="black"
                    icon={faGithub}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex justify-content-center mt-4">
            <div className="card" style={{ width: "18rem" }}>
              <div className="d-flex justify-content-center mt-3">
                <Image src={Najmi} alt="Image" className="card-img-top img" />
              </div>
              <b className="d-flex justify-content-center mt-1">
                Najmi Al Hassan
              </b>
              <b className="d-flex justify-content-center mt-2">
                (ML and AI Engineer)
              </b>

              <div className="card-body d-flex justify-content-center">
                <a
                  href="https://www.linkedin.com/in/najmihassan/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    className="custom-icon"
                    color="black"
                    icon={faLinkedinIn}
                  />
                </a>
                <a href="https://github.com/arhamansari11" target="_blank">
                  <FontAwesomeIcon
                    className="custom-icon"
                    color="black"
                    icon={faGithub}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
