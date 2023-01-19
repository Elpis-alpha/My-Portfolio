import styled from "styled-components"

import { skills, services } from "../../utils"

import { sendSmallMessage } from "../../controllers/MessageCtrl"

import Link from "next/link"


const StackPage = () => {

  const skillsClick = skill => {

    sendSmallMessage({

      heading: { text: skill.title, style: { padding: '.5pc' } },

      content: { text: skill.description, style: {} },

      style: {}

    }, 5000)
  }

  return (

    <StackPageStyle>

      <section className="skills-segmment" id="skills-segmment">

        <div className="intro">

          <h1>My Skills:</h1>

          <h1 className="dis">What do I use?</h1>

        </div>

        <div className="all-skills">

          {skills.map(skill => <div key={skill._kid} className="skill-hol" title={skill.description}>

            <div className="skill-asp" onClick={() => skillsClick(skill)}>

              <div className="img-prt">

                <img src={`/images/ext-logo/${skill.logo}`} alt={skill.title + " logo"} />

              </div>

              <div className="txt-prt">

                <h3>{skill.title}</h3>

                <small>{skill.shortDesc}</small>

              </div>

            </div>

          </div>)}

        </div>

      </section>

      <section className="service-segmment" id="service-segmment">

        <div className="intro">

          <h1>The services I render:</h1>

          <h1 className="dis">What do you need?</h1>

        </div>

        <div className="all-roles">

          {services.map(service => <div key={service._sid} className="service-hol">

            <div className="service-asp">

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <Link href="/contact"><a>Request Service</a></Link>

            </div>

          </div>)}

        </div>

      </section>

    </StackPageStyle>

  )

}

const StackPageStyle = styled.div`

  width: 100%;
  padding: 0.5pc;
  animation: opacity 1s 1;

  section.skills-segmment{

    .intro{
      font-size: 1.5pc;
      line-height: 3pc;
      padding: 0 1pc;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 600px) {
        .dis{
          display: none;
        }
      }
    }

    .all-skills{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .skill-hol{
        padding: 1pc;
        display: flex;
        
        .skill-asp{
          padding: 1pc;
          border-radius: 1pc;
          background: linear-gradient(145deg, #ffffff, #dadcdd);
          box-shadow:  18px 18px 36px #919293,-18px -18px 36px #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transform: scale(1);
          transition: transform .5s;

          &:hover{
            transform: scale(1.1);
          }

          .img-prt{
            height: 4pc;

            img{
              height: 100%;
            }
          }

          .txt-prt{
            padding-left: 0.5pc;
            display: flex;
            flex-direction: column;

            h3{
              font-size: 1.2pc;
              line-height: 2pc;
            }
  
            small{
              font-size: .8pc;
              line-height: 1.5pc;
              display: inline-block;
            }
          }

        }
      }
    }
  }

  section.service-segmment{

    padding-top: 2pc;

    .intro{
      font-size: 1.5pc;
      line-height: 3pc;
      padding: 0 1pc;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 600px) {
        .dis{
          display: none;
        }
      }
    }

    .all-roles{
      display: flex;
      flex-wrap: wrap;

      .service-hol{
        width: 50%;
        padding: 1pc;
        display: flex;
        
        .service-asp{
          padding: 1pc;
          border-radius: 1pc;
          background: linear-gradient(145deg, #ffffff, #dadcdd);
          box-shadow:  18px 18px 36px #919293,-18px -18px 36px #ffffff;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: column;

          h2{
            font-size: 1.2pc;
            padding: 0.3pc 0;
          }

          p{
            font-size: .9pc;
            flex: 1;
          }

          a {
            margin: .3pc 0;
            display: block;
            text-decoration: none;
            background: #f2f4f5;
            border: 0 none;
            border-radius: 0.3pc;
            padding: .2pc .8pc;
            box-shadow: inset 8px 8px 30px #c2c3c4, inset -8px -8px 30px #ffffff;
            transition: box-shadow .5s;

            &:hover{
              box-shadow: inset 8px 8px 60px #b2b3b4, inset -8px -8px 60px #d4d5d6;
            }
          }
        }
      }

      @media screen and (max-width: 1000px) {
        
        .service-hol{
          width: 100%;
        }
      }
    }
  }

`


export default StackPage
