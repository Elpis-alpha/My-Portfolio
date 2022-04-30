import styled from "styled-components"

import { FaEnvelope, FaTelegramPlane, FaPhone } from "react-icons/fa"

import { SiUpwork } from "react-icons/si"

import { dev, social, roles, elpis } from "../../utils"

import Link from "next/link"


const IndexPage = () => {

  return (

    <IndexPageStyle>

      <div className="cute-text">

        <p className="hello">Hi, I'm</p>

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

          <strong className="hext">I occupy these roles</strong>

          {roles.map(role => <Link key={role.hook} href="/works"><a><div className="role-hol">

            <h2>{role.name}</h2>

            <p>{role.description}</p>

          </div></a></Link>)}

        </div>

      </div>

      <div className="cute-icons">

        <div className="four-iholder">

          <div className="icon-hol" title="My Mail">

            <a href={"mailto:" + social.email} target="_blank" rel="noopener noreferrer"> <FaEnvelope size="1.1rem" /> </a>

          </div>

          <div className="icon-hol" title="My Telegram Link">

            <a href={social.telegram} target="_blank" rel="noopener noreferrer"> <FaTelegramPlane size="1.1rem" /> </a>

          </div>

          <div className="icon-hol" title="My Phone Line">

            <a href={"tel:" + social.phoneLine} target="_blank" rel="noopener noreferrer"> <FaPhone size="1.1rem" /> </a>

          </div>

          <div className="icon-hol" title="My Upwork Link">

            <a href={social.upwork} target="_blank" rel="noopener noreferrer"> <SiUpwork size="1.1rem" /> </a>

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
  padding: 0 0.5rem;
  animation: opacity 1s 1;
  display: flex;

  .cute-text{
    width: 40vw;
    padding: 1rem;
    margin: auto 0;
    z-index: 10;

    .hello{
      font-size: 1.5rem;
      font-weight: bold;
    }

    h1{
      font-size: 2.5rem;
      line-height: 4rem;
      white-space: nowrap;
    }

    .divider{
      width: 100%;
      height: 2px;
      background-color: #a5a5a5;
      margin: .5rem auto;
    }

    p{
      font-size: .8rem;
    }

    a.hir{
      text-decoration: none;
      color: inherit;
      display: inline-block;
      margin-top: .5rem;
      border: 0 none;
      padding: 0 1rem;
      border-radius: 0.2rem;
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
    padding: 1rem;
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
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 10;

    .title-elpis{
      border-radius: 1rem;
      padding: 1.3rem 1.5rem;
      box-shadow:  30px 30px 60px #a7a8a9, -30px -30px 60px #ffffff;
      background-color: #f2f4f5;

      h1.hext, strong.hext{
        font-size: 1.5rem;
        display: flex;
      }
    }

    .title-skills{
      border-radius: 1rem;
      padding: 1.3rem 1.5rem;
      box-shadow:  30px 30px 60px #a7a8a9, -30px -30px 60px #ffffff;
      background-color: #f2f4f5;
      margin-top: 1rem;

      a{
        padding: .3rem 0;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        display: block;
  
        &:hover{
          text-decoration: underline;
        }
      }


      h1.hext, strong.hext{
        font-size: 1.5rem;
        display: flex;
      }

      h2{
        font-size: .8rem;
        line-height: 1.5rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5rem;
      }
    }
  }

  img{
    width: 50vw;
  }

  .cute-icons{
    position: fixed;
    left: 1.5rem; bottom: 2rem;

    .four-iholder{
      display: flex;

      .icon-hol{
        margin: 0 .5rem;
        
        a{
          display: inline-block;
          width: 3rem; height: 3rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #323232;
          background: linear-gradient(145deg, #dadcdd, #ffffff);
          box-shadow:  30px 30px 60px #a7a8a9, -30px -30px 60px #ffffff;
          transform: scale(1);
          transition: transform .5s;
          
          @media screen and (max-width: 500px) {
            width: 4rem; height: 4rem;
          }

          &:hover{
            transform: scale(1.2);
          }
        }
      }
    }
  }

`


export default IndexPage
