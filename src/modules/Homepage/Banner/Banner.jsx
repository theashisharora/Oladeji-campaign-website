import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { bannerImage } from "../../../assets/pngs";

const Banner = () => {
  const [hideBilling, setHideBilling] = useState(false);
  function callHideBilling() {
    console.log("hide billing", hideBilling);
    setHideBilling(!hideBilling);
  }

  return (
    <Wrapper className="container">
      {console.log("hidennnn", hideBilling)}
      <input onClick={() => callHideBilling()} />
      <section className="container__sub subb">
        <div className="banner__left">
          <h2 data-aos="fade-up">MAKE YOUR MARK</h2>
          <h1 data-aos="fade-up">Financial Support</h1>
          <p data-aos="fade-up">
            Vote Ashish Arora for <br /> Board of Directors
          </p>
          <Link to="/manifesto">
            <button data-aos="fade-up" className="btn btn__filled">
              Read Manifesto
            </button>
          </Link>
        </div>
        <img
          src={bannerImage}
          className="banner__right"
          alt="Oladeji Blessing in a senatorial pose"
        />
      </section>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.section`
  background-color: #f8f1e6;
  overflow-x: hidden;
  padding-top: 80px;

  .container {
    &__sub {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      padding-top: 80px;

      @media screen and (min-width: 960px) {
        padding-top: 40px;
        flex-wrap: nowrap;
      }
    }
  }

  .banner {
    &__left {
      width: 100%;
    }
    &__right {
      width: 100%;

      @media screen and (min-width: 960px) {
        width: 542px;
        max-width: 40%;
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

  p {
    font-weight: 800;
    font-size: 1.6rem;
    line-height: 133%;
    color: #40423a;
    margin-top: 20px;

    @media screen and (min-width: 640px) {
      font-size: 1.8rem;
    }
    @media screen and (min-width: 800px) {
      font-size: 2rem;
    }
    @media screen and (min-width: 960px) {
      font-size: 2.2rem;
    }
    @media screen and (min-width: 1200px) {
      font-size: 2.8rem;
    }
  }

  .btn__filled {
    margin-top: 20px;
    width: 185px;
    max-width: 100%;

    @media screen and (min-width: 960px) {
      padding: 16px 32px;
    }
  }
`;
