import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { manifestoBannerImage } from "../../../assets/pngs";

const Banner = () => {
  return (
    <Wrapper className="container">
      <section className="container__sub subb">
        <h2 data-aos="fade-up">MAKE YOUR MARK </h2>
        <h1 data-aos="fade-up">Financial Support</h1>

        <img
          data-aos="fade-up"
          src={manifestoBannerImage}
          className="banner__image"
          alt="Ashish Arora"
        />

        <div className="mission">
          <h3 className="mission__header" data-aos="fade-up">
            Board of Director
          </h3>
          <article className="mission__body">
            <p className="mission__body--text" data-aos="fade-up">
              The Board of Directors is a group of elected representatives responsible for making high-level decisions that impact an organization. 
              In the context of Sheridan College, the Board of Directors consists of 12 elected student representatives, with four members from each campus: Davis, HMC, and Trafalgar. 
              Their primary role is to represent the interests of all students and make strategic decisions that shape the future of student life at Sheridan.
            </p>
            <p data-aos="fade-up" className="mission__body--text">
            As a dedicated student leader, my mission is to represent and advocate for the diverse student body at Sheridan College by ensuring their voices are heard in key decision-making processes. I am committed to fostering a supportive and inclusive environment where students' needs, concerns, and aspirations shape the policies and initiatives that impact their academic and campus life. Through strategic planning, financial oversight, and collaboration with fellow directors and institutional leaders, I aim to drive meaningful changes that enhance student experiences—both now and for future generations. My focus is on transparency, accountability, and long-term improvements that empower students and strengthen our college community.            </p>
            <p data-aos="fade-up" className="mission__body--text">
              I'll leave the decision in your hands. Make the right choice and choose the right candidate. #MakeYourMark
            </p>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.section`
  background-color: #f8f1e6;
  overflow-x: hidden;
  border-bottom: 3.5px solid #e4caa0;
  padding-top: 80px;
  overflow-y: scroll;

  .container {
    &__sub {
      padding: 80px 0;

      @media screen and (min-width: 960px) {
        padding: 100px 0;
      }
      @media screen and (min-width: 1024px) {
        padding: 120px 0;
      }
      @media screen and (min-width: 1200px) {
        padding: 140px 0;
      }
    }
  }

  /* Mission */
  .banner {
    &__image {
      width: 100%;
      margin-top: 30px;
      border-radius: 20px; /* Add this line to make the corners rounded */
      @media screen and (min-width: 720px) {
        margin-top: 40px;
      }
      @media screen and (min-width: 960px) {
        width: 390px;
        max-width: 40%;
        margin-top: 50px;
      }
      @media screen and (min-width: 1024px) {
        margin-top: 60px;
      }
    }
  }

  h2 {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 148%;
    color: #0b4734;
    font-family: Poppins;

    @media screen and (min-width: 640px) {
      font-size: 2.4rem;
    }
    @media screen and (min-width: 800px) {
      font-size: 3.2rem;
    }
    @media screen and (min-width: 960px) {
      font-size: 4rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 58px;
    }
  }

  h1 {
    font-weight: 800;
    font-size: 5.4rem;
    line-height: 110%;
    color: #0b4734;
    margin-top: 8px;
    font-family: Poppins, Inter, sans-serif;

    @media screen and (min-width: 640px) {
      font-size: 6.2rem;
    }
    @media screen and (min-width: 800px) {
      font-size: 6.8rem;
    }
    @media screen and (min-width: 960px) {
      font-size: 7.2rem;
      margin-top: 0;
    }
    @media screen and (min-width: 1200px) {
      font-size: 8.8rem;
    }
  }

  .mission {
    width: 100%;
    max-width: 670px;
    margin: 0 auto;

    margin-top: 30px;
    @media screen and (min-width: 720px) {
      margin-top: 40px;
    }
    @media screen and (min-width: 960px) {
      margin-top: 50px;
    }
    @media screen and (min-width: 1024px) {
      margin-top: 60px;
    }

    &__header {
      font-weight: 600;
      font-size: 48px;
      line-height: 116%;
      text-align: center;
      color: #171d17;
      font-size: 2.8rem;
      margin-bottom: 20px;
      @media screen and (min-width: 640px) {
        font-size: 3.2rem;
      }
      @media screen and (min-width: 800px) {
        font-size: 3.6rem;
        margin-bottom: 30px;
      }
      @media screen and (min-width: 960px) {
        font-size: 4rem;
      }
      @media screen and (min-width: 1024px) {
        font-size: 4.4rem;
        margin-bottom: 40px;
      }
      @media screen and (min-width: 1200px) {
        font-size: 4.8rem;
      }
    }

    &__body {
      &--text {
        font-weight: 600;
        line-height: 150%;
        text-align: center;
        color: #747774;
        font-size: 1.4rem;
        margin-bottom: 14px;
        @media screen and (min-width: 960px) {
          font-size: 1.6rem;
          margin-bottom: 16px;
        }

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;
