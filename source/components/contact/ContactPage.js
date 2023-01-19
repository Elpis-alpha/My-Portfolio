import styled from "styled-components"

import { isEmail } from "validator"

import { social } from "../../utils"

import { FaPhone, FaEnvelope, FaTelegramPlane, FaStackOverflow, FaLinkedin, FaInstagram } from "react-icons/fa"

import { SiFiverr, SiUpwork, SiTwitter, SiGithub, SiWhatsapp, SiReddit, SiBinance } from "react-icons/si"

import { useDispatch, useSelector } from "react-redux"

import { setEmail, clearAll, setMessage, setName } from "../../store/slice/emailSlice"

import { postApiJson } from "../../controllers/APICtrl"

import { sendMiniMessage } from "../../controllers/MessageCtrl"

import { sendMail } from "../../api"

import { hostEmail, mailToken } from "../../__env"


const ContactPage = () => {

  const dispatch = useDispatch()

  const { name, email, message } = useSelector(store => store.email)

  const sendContactMail = async e => {

    e.preventDefault()

    if (name.trim() === "" || !isEmail(email) || message.trim === "") {

      return sendMiniMessage({

        icon: { name: "times", style: {} },

        content: { text: "Invalid Input!", style: {} },

      }, 2000)

    } else {

      sendMiniMessage({

        icon: { name: "loading", style: {} },

        content: { text: "Sending Message", style: {} },

      })

      dispatch(clearAll())

    }

    try {

      const msgRes = await postApiJson(sendMail(), {

        title: "A Mail from Your Portfolio",

        address: hostEmail,

        content: `

          <h2>Name:<br> ${name}</h2>

          <h4>Email:<br> ${email}</h4>

          <p>Message:<br> ${message}</p>


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

  return (

    <ContactPageStyle>

      <section className="contact-items">

        <h2>Contact me through any of the following platforms</h2>

        <div className="all-plat">

          <div className="plat-item" datainfo="Phone Line">

            <a href={"tel:" + social.phoneLine} title="Phone Line" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaPhone size="1pc" /></div>

              <div className="text">Call</div>

            </a>

          </div>

          <div className="plat-item" datainfo="Whatsapp Link">

            <a href={social.whatsapp} title="Whatsapp Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiWhatsapp size="1pc" /></div>

              <div className="text">Whatsapp</div>

            </a>

          </div>

          <div className="plat-item" datainfo="Email Link">

            <a href={"mailto:" + social.email} title="Email Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaEnvelope size="1pc" /></div>

              <div className="text">Mail</div>

            </a>

          </div>

          <div className="plat-item" datainfo="Telegram Link">

            <a href={social.telegram} title="Telegram Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaTelegramPlane size="1pc" /></div>

              <div className="text">Telegram</div>

            </a>

          </div>

          <div className="plat-item" datainfo="Stack Overflow Link">

            <a href={social.stackOverflow} title="Stack Overflow Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaStackOverflow size="1pc" /></div>

              <div className="text">Stack Overflow</div>

            </a>

          </div>

          <div className="plat-item" datainfo="Fiverr Link">

            <a href={social.fiverr} title="Fiverr Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiFiverr size="2pc" /></div>

              {/* <div className="text">Fiverr</div> */}

            </a>

          </div>

          <div className="plat-item" datainfo="Upwork Link">

            <a href={social.upwork} title="Upwork Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiUpwork size="1pc" /></div>

              <div className="text">Upwork</div>

            </a>

          </div>

          <div className="plat-item" datainfo="Linkedin Link">

            <a href={social.linkedin} title="Linkedin Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaLinkedin size="1pc" /></div>

              <div className="text">Linkedin</div>

            </a>

          </div>

          <div className="plat-item" datainfo="Instagram Link">

            <a href={social.instagram} title="Instagram Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaInstagram size="1pc" /></div>

              <div className="text">Instagram</div>

            </a>

          </div>

          <div className="plat-item" datainfo="Twitter Link">

            <a href={social.twitter} title="Twitter Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiTwitter size="1pc" /></div>

              <div className="text">Twitter</div>

            </a>

          </div>

          <div className="plat-item" datainfo="Github Link">

            <a href={social.github} title="Github Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiGithub size="1pc" /></div>

              <div className="text">Github</div>

            </a>

          </div>

          <div className="plat-item" datainfo="Reddit Link">

            <a href={social.reddit} title="Reddit Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiReddit size="1pc" /></div>

              <div className="text">Reddit</div>

            </a>

          </div>

          <div className="plat-item" datainfo="Binance Link">

            <a href={social.binance} title="Binance Image" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiBinance size="1pc" /></div>

              <div className="text">Binance</div>

            </a>

          </div>

        </div>

        <p>Or send a message in the form provided</p>

      </section>

      <section className="contact-form">

        <div className="form-hol">

          <div className="intro">

            <h1>Say Hi to Elpis</h1>

          </div>

          <form onSubmit={sendContactMail}>

            <div className="form-pack">

              <input type="text" id="elp-port-name" name="elp-port-name" placeholder="Name" required value={name} onInput={e => dispatch(setName(e.target.value))} />

            </div>

            <div className="form-pack">

              <input type="email" id="elp-port-email" name="elp-port-email" placeholder="Email" required value={email} onInput={e => dispatch(setEmail(e.target.value))} />

            </div>

            <div className="form-pack">

              <textarea name="elp-port-msg" id="elp-port-msg" placeholder="Message" required value={message} onInput={e => dispatch(setMessage(e.target.value))}></textarea>

            </div>

            <div className="form-pack end">

              <button>Send Message</button>

            </div>

          </form>

        </div>

      </section>

    </ContactPageStyle >

  )

}

const ContactPageStyle = styled.div`

  width: 100%;
  padding: 0.5pc;
  animation: opacity 1s 1;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;

  section{
    width: 50%;
    padding: 1pc;

    &.contact-items{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;

      h2{
        font-size: 1.2pc;
        padding-bottom: 0.5pc;
      }

      & > p{
        padding-top: .5pc;
      }

      .all-plat{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto;
        max-width: 100%;

        .plat-item{
          padding: 0.5pc;
          
          a{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5pc 1pc;
            border-radius: 1pc;
            color: inherit;
            text-decoration: none;
            background: linear-gradient(145deg, #dadcdd, #ffffff);
            box-shadow:  16px 16px 33px #c2c3c4,-16px -16px 33px #ffffff;
            
            .icon{
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .text{
              padding-left: 0.5pc;
            }

            &:hover{
              color: purple;
            }
          }
        }
      }
    }

    &.contact-form{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .form-hol{
        background: linear-gradient(145deg, #ffffff, #dadcdd);
        box-shadow:  16px 16px 33px #c2c3c4, -16px -16px 33px #ffffff;
        padding: 1.5pc;
        border-radius: 2pc;
        width: 100%;

        .intro{
          font-size: 1.2pc;
        }

        form{

          .form-pack{
            padding: 0.5pc 0;

            input, textarea{
              width: 100%;
              border: 0 none;
              outline: 0 none;
              padding: 0 .5pc;
              background: #f2f4f5;
              box-shadow: inset 8px 8px 31px #c2c3c4, inset -8px -8px 31px #ffffff;
              border-radius: 0.2pc;
              display: block;
            }

            textarea{
              height: 6pc;
            }

            &.end{

              button{
                border: 0 none;
                background-color: royalblue;
                width: 100%;
                background: linear-gradient(145deg, #ffffff, #dadcdd);
                box-shadow:  8px 8px 31px #c2c3c4, -8px -8px 31px #ffffff;
                color: inherit;
                transition: color .5s;

                &:hover{
                  color: purple;
                }
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 800px) {
    flex-direction: column;

    section{

      width: 100%;

      &.contact-form{

        .form-hol{
          width: 100%;
        }
      }
    }
  }
  
`


export default ContactPage
