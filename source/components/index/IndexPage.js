import styled from "styled-components"

import { FaEnvelope, FaTelegramPlane, FaPhone, FaDownload } from "react-icons/fa"

import { SiUpwork } from "react-icons/si"

import { dev, social, roles, elpis, otherLinks } from "../../utils"

import Link from "next/link"


const IndexPage = () => {

  return (

    <IndexPageStyle>

      <div className="cute-text">

        <div className="inner">

          <p className="hello">{dev.intro}</p>

          <h1>{dev.firstName + " " + dev.lastName}</h1>

          <div className="divider"></div>

          <p>{dev.description}</p>

          <div className="hp-btx">

            <Link href="/docs/current-resume.pdf"><a target="_blank">

              <FaDownload size="1pc" />

              My Resume

            </a></Link>

            <Link href="/contact"><a>Contact Me</a></Link>

          </div>


        </div>

        <div className="reveal-all">

          <div>

            {otherLinks.title}

            {otherLinks.description}

          </div>

        </div>

        <div className="cute-icons">

          <div className="four-iholder">

            <div className="icon-hol" title="My Mail">

              <a href={"mailto:" + social.email} target="_blank" rel="noopener noreferrer"> <FaEnvelope size="1.1pc" /> </a>

            </div>

            <div className="icon-hol" title="My Telegram Link">

              <a href={social.telegram} target="_blank" rel="noopener noreferrer"> <FaTelegramPlane size="1.1pc" /> </a>

            </div>

            <div className="icon-hol" title="My Phone Line">

              <a href={"tel:" + social.phoneLine} target="_blank" rel="noopener noreferrer"> <FaPhone size="1.1pc" /> </a>

            </div>

            <div className="icon-hol" title="My Upwork Link">

              <a href={social.upwork} target="_blank" rel="noopener noreferrer"> <SiUpwork size="1.1pc" /> </a>

            </div>

          </div>

        </div>

      </div>

      <div className="cute-mid-space"></div>

      <div className="cute-image">

        <div className="img-hol">

          <img src="/images/elpis-s-t.png" alt="Picture of Elpis (Festus Gbolade)" />

        </div>

      </div>

      <div className="cute-bats">

        <div className="title-all">

          <div>

            {elpis.title}

            {elpis.description}

          </div>

          <div className="reveal-small">

            {otherLinks.title}

            {otherLinks.description}

          </div>

        </div>

        <div className="title-all">

          <div>

            {otherLinks.title}

            {otherLinks.description}

          </div>

        </div>

      </div>

    </IndexPageStyle>

  )

}

const IndexPageStyle = styled.div`

  flex: 1;
  height: 100%;
  width: 100%;
  padding: 0 0.5pc;
  animation: opacity 1s 1;
  display: flex;
  flex-wrap: wrap;

  .cute-text{
    display: flex;
    flex-direction: column;
    width: 40%;
    z-index: 10;

    .inner {
      animation: scale-in 1s 1;
      padding: 1.5pc 1pc;
      margin: auto 0;

      .hello{
        font-size: 1.5pc;
        font-weight: bold;
      }

      h1{
        font-size: 3pc;
        line-height: 4.5pc;
        white-space: nowrap;
      }

      .divider{
        width: 100%;
        height: 2px;
        background-color: #a5a5a5;
        margin: .5pc auto;
      }

      p{
        font-size: 1pc;
        line-height: 2.2pc;

        span {
          display: inline-block;
          padding: 0 .5pc;
        }
      }

      .hp-btx {
        margin-top: .5pc;
  
        a {
          text-decoration: none;
          color: inherit;
          display: inline-flex;
          align-items: baseline;
          justify-content: center;
          border: 0 none;
          padding: .5pc 1pc;
          padding-top: 0.7pc;
          line-height: 1pc;
          border-radius: 0.2pc;
          box-shadow:  4px 4px 8px #b5b4b4;//, -10px -10px 20px #ffffff;
          background-color: #f2f4f5;
          transform: scale(1);
          transition: transform .5s;

          svg {
            margin-right: .5pc;
          }

          &:first-of-type {
            margin-right: 1pc;
          }
  
          &:hover{
            transform: scale(1.1);
          }
        }
      }
    }

    .cute-icons{
      position: relative;
      margin-bottom: 2pc;

      .four-iholder{
        display: flex;

        .icon-hol{
          margin: 0 .5pc;
          
          a{
            display: inline-block;
            width: 3pc; height: 3pc;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #323232;
            background: linear-gradient(145deg, #dadcdd, #ffffff);
            box-shadow:  30px 30px 60px #a7a8a9, -10px -10px 20px #ffffff;
            transform: scale(1);
            transition: transform .5s;

            &:hover{
              transform: scale(1.2);
            }
          }
        }
      }
    }

    .reveal-all {
      display: none;
    }
    
    @media screen and (max-width: 900px) {
      width: 50%;
    }

    @media screen and (max-width: 650px) {
      width: 80%;

      .reveal-all {
        display: block;
        padding: 1.5pc 1pc;
        margin: auto 0;
        animation: scale-in 2s 1;
        
        h1.hext, strong.hext{
          font-size: 2pc;
          line-height: 2.5pc;
          padding: 0.5pc 0;
          display: flex;
        }

        a{
          padding: .3pc 0;
          color: inherit;
          display: block;
          font-size: .9pc;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.5pc;
          font-style: italic;
          text-decoration: none;
          transition: color .5s;

          &:hover{
            text-decoration: underline;
            color: green;
          }
        }
      }
    }

    @media screen and (max-width: 550px) {
      width: 100%;
    }

    @media screen and (max-width: 380px) {
      .inner {

        h1 {
          font-size: 2.5pc;
          line-height: 3.5pc;
        }

        p {
          font-size: .9pc;
        }
      }
    }
  }

  .cute-mid-space{
    width: 20%;

    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  .cute-image{
    position: absolute;
    /* width: 30%; */
    height: 100%;
    overflow: hidden;
    top: 0; bottom: 0;
    left: 35%; right: 35%;
    padding: 1pc;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 900px) {
      position: absolute;
      top: 0;
      opacity: .4;
      left: 20%; right: 20%;
    }

    .img-hol {
      height: 100%;
    }
    
    img{
      max-width: 100%;
      max-height: 100%;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .cute-bats{
    width: 40%;
    padding: 1.5pc 1pc;
    padding-top: 0; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;
    
    @media screen and (max-width: 900px) {
      width: 40%;
      margin-left: auto;
    }
    
    @media screen and (max-width: 750px) {
      width: 43%;
    }
    
    @media screen and (max-width: 650px) {
      display: none;
    }

    .title-all{
      border-left: 3px solid #817973;
      border-radius: 1pc;
      padding: 1.3pc 1.5pc;
      box-shadow:  30px 30px 60px #a7a8a9, -30px -30px 60px #ffffff;
      background-color: #f2f4f5;
      margin-top: 1pc;
      animation: scale-in 3s 1;

      .reveal-small {
        display: none;
      }

      h1.hext, strong.hext{
        font-size: 2pc;
        line-height: 2.5pc;
        padding: 0.5pc 0;
        display: flex;
      }

      p{
        font-size: 1pc;
      }

      &:first-of-type {
        animation: scale-in 2s 1;
        margin-top: 0;
      }

      @media screen and (max-height: 600px) {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        &:last-of-type {
          display: none;
        }

        .reveal-small {
          display: block;
          margin-top: 1pc;
        }
      }

      a{
        padding: .3pc 0;
        cursor: pointer;
        text-decoration: underline;
        color: inherit;
        display: block;
        transition: color .5s;
  
        &:hover{
          color: green;
        }
      }


      h1.hext, strong.hext{
        font-size: 2pc;
        line-height: 2.5pc;
        display: flex;
      }

      h2{
        font-size: 1pc;
        line-height: 1.5pc;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      a {
        font-size: .9pc;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5pc;
        text-decoration: none;
        font-style: italic;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`


export default IndexPage
