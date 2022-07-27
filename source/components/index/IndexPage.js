import styled from "styled-components"

import { FaEnvelope, FaTelegramPlane, FaPhone } from "react-icons/fa"

import { SiUpwork } from "react-icons/si"

import { dev, social, roles, elpis } from "../../utils"

import Link from "next/link"


const IndexPage = () => {

  return (

    <IndexPageStyle>

      <div className="cute-text">

        <p className="hello">{dev.intro}</p>

        <h1>{dev.firstName + " " + dev.lastName}</h1>

        <div className="divider"></div>

        <p>{dev.description}</p>

        <Link href="/contact"><a className="hir">Hire Me</a></Link>

      </div>

      <div className="cute-mid-space"></div>

      <div className="cute-image">

        <div className="img-hol">

          <img src="/images/elpis-s-t.png" alt="Picture of Elpis (Festus Gbolade)" />

        </div>

      </div>

      <div className="cute-bats">

        <div className="title-elpis">

          <h1 className="hext">{elpis.title}</h1>

          <p>{elpis.description}</p>

        </div>

        <div className="title-skills">

          <strong className="hext">Information</strong>

          <Link href="/docs/current-resume.pdf"><a target="_blank"><div className="role-hol">

            <p>A copy of my resume here</p>

          </div></a></Link>

          <Link href="/about"><a><div className="role-hol">

            <p>More about me here</p>

          </div></a></Link>

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

  .cute-text{
    width: 40vw;
    padding: 3pc 1pc;
    margin: auto 0;
    z-index: 10;

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
    }

    a.hir{
      text-decoration: none;
      color: inherit;
      display: inline-block;
      margin-top: .5pc;
      border: 0 none;
      padding: 0 1pc;
      border-radius: 0.2pc;
      margin-bottom: 10vh;
      box-shadow:  10px 10px 20px #d2d3d4, -10px -10px 20px #ffffff;
      transform: scale(1);
      transition: transform .5s;

      &:hover{
        transform: scale(1.1);
      }
    }
  }

  .cute-mid-space{
    width: 20vw;
  }

  .cute-image{
    position: fixed;
    width: 30vw;
    height: 90vh;
    top: 15vh; bottom: 5vh;
    left: 35vw; right: 35vw;
    padding: 1pc;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (orientation: portrait) {
      left: 40vw; right: 30vw;
    }

    img{
      max-width: 30vw;
      max-height: 80vh;
      object-fit: contain;
    }
    /* overflow: hidden; */
  }

  .cute-bats{
    width: 40vw;
    padding: 1pc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;

    .title-elpis{
      border-radius: 1pc;
      padding: 1.3pc 1.5pc;
      box-shadow:  30px 30px 60px #a7a8a9, -30px -30px 60px #ffffff;
      background-color: #f2f4f5;

      h1.hext, strong.hext{
        font-size: 2pc;
        line-height: 2.5pc;
        padding: 0.5pc 0;
        display: flex;
      }

      p{
        font-size: 1pc;
      }
    }

    .title-skills{
      position: fixed;
      bottom: 1.5pc; right: 1.5pc;
      border-radius: 1pc;
      padding: 1.3pc 1.5pc;
      box-shadow:  30px 30px 60px #a7a8a9, -30px -30px 60px #ffffff;
      background-color: #f2f4f5;
      margin-top: 1pc;
      width: calc(40vw - 2pc);

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

      p{
        font-size: .9pc;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5pc;
      }
    }
  }

  img{
    width: 50vw;
  }

  .cute-icons{
    position: fixed;
    left: 1.5pc; bottom: 2pc;
    z-index: 50;

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
          box-shadow:  30px 30px 60px #a7a8a9, -30px -30px 60px #ffffff;
          transform: scale(1);
          transition: transform .5s;

          &:hover{
            transform: scale(1.2);
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    .cute-image, .cute-mid-space {
      display: none;
    }    

    .cute-text {
      width: 50vw;
    }

    .cute-bats {
      width: 40vw;
      margin-left: auto;
    }

    @media screen and (max-width: 750px) {
      .cute-bats {
        width: 45vw;
        margin-left: auto;

        .title-skills{
          width: calc(45vw - 2pc);
        }
      }
    }

    @media screen and (max-width: 650px) {
      .cute-text {
        width: 80%;
      }

      .cute-bats {
        display: none;
      }

      @media screen and (max-width: 550px) {
        .cute-text {
          width: 100%;
        }
      }

      @media screen and (max-width: 380px) {
        .cute-text{ 
        
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
  }
`


export default IndexPage
