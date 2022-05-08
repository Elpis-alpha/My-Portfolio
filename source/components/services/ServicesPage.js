import styled from "styled-components"

import { skills, services } from "../../utils"

import { sendMiniMessage, sendNormalMessage, sendSmallMessage, sendXMessage } from "../../controllers/MessageCtrl"

import { useDispatch, useSelector } from "react-redux"

import { setServiceMessage } from "../../store/slice/emailSlice"

import { postApiJson } from "../../controllers/APICtrl"

import { sendMail } from "../../api"
import { hostEmail, mailToken } from "../../__env"


const ServicesPage = () => {

  const dispatch = useDispatch()

  const { serviceMessage } = useSelector(store => store.email)

  const requestServiceHandler = async service => {

    const xRequest = await sendXMessage({

      heading: { text: "Service Request for " + service.title, style: {} },

      content: { text: "part" },

      buttons: [

        { text: 'Back', waitFor: 'reject-mail', style: { backgroundColor: 'teal' } },

        { text: 'Send', waitFor: 'send-mail', style: { backgroundColor: 'green' } },

      ],

      style: {}

    })

    if (xRequest === 'reject-mail') return dispatch(setServiceMessage(""))

    sendMiniMessage({

      icon: { name: "loading", style: {} },

      content: { text: "Sending Message", style: {} },

    })

    dispatch(setServiceMessage(""))

    try {

      const msgRes = await postApiJson(sendMail(), {

        title: "A Mail from Your Portfolio",

        address: hostEmail,

        content: `

          <h1>Service Request Boss</h1>

          <h3>Request Info:</h3>

          <h4>${service.title}</h4>

          <p>${service.description.props.children}</p>

          <h3>Client Info:</h3>

          <p>${serviceMessage}</p>

          <small>Congrats Boss 🥰</small>

        `

      }, mailToken)

      if (msgRes.error) throw new Error()

      sendMiniMessage({

        icon: { name: "ok", style: {} },

        content: { text: "Message Sent", style: {} },

      }, 2000)

    } catch (error) {

      return sendMiniMessage({

        icon: { name: "times", style: {} },

        content: { text: "An Error Occured", style: {} },

      }, 2000)

    }

  }

  const skillsClick = skill => {

    sendSmallMessage({

      heading: { text: skill.title, style: { padding: '.5rem' } },
    
      content: { text: skill.description, style: {} },
    
      style: {}
    
    }, 5000)
  }

  return (

    <ServicesPageStyle>

      <section className="service-segmment">

        <div className="intro">

          <h1>The services I render:</h1>

          <h1 className="dis">What do you need?</h1>

        </div>

        <div className="all-roles">

          {services.map(service => <div key={service._sid} className="service-hol">

            <div className="service-asp">

              <h2>{service.title}</h2>

              <p>{service.description}</p>

              <button onClick={() => requestServiceHandler(service)}>Request Service</button>

            </div>

          </div>)}

        </div>

      </section>

      <section className="skills-segmment">

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

    </ServicesPageStyle>

  )

}

const ServicesPageStyle = styled.div`

  width: 100%;
  padding: 0.5rem;
  animation: opacity 1s 1;

  section.service-segmment{

    .intro{
      font-size: 1.5rem;
      line-height: 3rem;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 250px) {
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
        padding: 1rem;
        display: flex;
        
        .service-asp{
          padding: 1rem;
          border-radius: 1rem;
          background: linear-gradient(145deg, #ffffff, #dadcdd);
          box-shadow:  18px 18px 36px #919293,-18px -18px 36px #ffffff;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-direction: column;

          h2{
            font-size: 1.2rem;
            padding: 0.3rem 0;
          }

          p{
            font-size: .8rem;
            flex: 1;
          }

          button{
            margin: .3rem 0;
            background: #f2f4f5;
            border: 0 none;
            border-radius: 0.3rem;
            padding: 0 .5rem;
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

  section.skills-segmment{
    padding-top: 2rem;

    .intro{
      font-size: 1.5rem;
      line-height: 3rem;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media screen and (max-width: 250px) {
        .dis{
          display: none;
        }
      }
    }

    .all-skills{
      display: flex;
      flex-wrap: wrap;

      .skill-hol{
        padding: 1rem;
        display: flex;
        
        .skill-asp{
          padding: 1rem;
          border-radius: 1rem;
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
            height: 4rem;

            img{
              height: 100%;
            }
          }

          .txt-prt{
            padding-left: 0.5rem;
            display: flex;
            flex-direction: column;

            h3{
              font-size: 1.2rem;
              line-height: 2rem;
            }
  
            small{
              font-size: .8rem;
              line-height: 1.5rem;
              display: inline-block;
            }
          }

        }
      }
    }
  }

`


export default ServicesPage
