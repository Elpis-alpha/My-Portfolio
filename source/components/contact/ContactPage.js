import styled from "styled-components"

import { social } from "../../utils"

import { FaPhone, FaEnvelope, FaTelegramPlane, FaStackOverflow, FaLinkedin, FaInstagram } from "react-icons/fa"

import { SiFiverr, SiUpwork, SiTwitter, SiGithub, SiWhatsapp, SiReddit } from "react-icons/si"


const ContactPage = () => {

  return (

    <ContactPageStyle>

      <section className="contact-items">

        <h2>Contact me through any of the following platforms</h2>

        <div className="all-plat">

          <div className="plat-item" dataInfo="Phone Line">

            <a href={"tel:" + social.phoneLine} title="Phone Line" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaPhone size="1rem" /></div>

              <div className="text">Call</div>

            </a>

          </div>

          <div className="plat-item" dataInfo="Whatsapp Link">

            <a href={social.whatsapp} title="Whatsapp Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiWhatsapp size="1rem" /></div>

              <div className="text">Whatsapp</div>

            </a>

          </div>

          <div className="plat-item" dataInfo="Email Link">

            <a href={"mailto:" + social.email} title="Email Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaEnvelope size="1rem" /></div>

              <div className="text">Mail</div>

            </a>

          </div>

          <div className="plat-item" dataInfo="Telegram Link">

            <a href={social.telegram} title="Telegram Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaTelegramPlane size="1rem" /></div>

              <div className="text">Telegram</div>

            </a>

          </div>

          <div className="plat-item" dataInfo="Stack Overflow Link">

            <a href={social.stackOverflow} title="Stack Overflow Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaStackOverflow size="1rem" /></div>

              <div className="text">Stack Overflow</div>

            </a>

          </div>

          <div className="plat-item" dataInfo="Fiverr Link">

            <a href={social.fiverr} title="Fiverr Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiFiverr size="2rem" /></div>

              {/* <div className="text">Fiverr</div> */}

            </a>

          </div>

          <div className="plat-item" dataInfo="Upwork Link">

            <a href={social.upwork} title="Upwork Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiUpwork size="1rem" /></div>

              <div className="text">Upwork</div>

            </a>

          </div>

          <div className="plat-item" dataInfo="Linkedin Link">

            <a href={social.linkedin} title="Linkedin Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaLinkedin size="1rem" /></div>

              <div className="text">Linkedin</div>

            </a>

          </div>

          <div className="plat-item" dataInfo="Instagram Link">

            <a href={social.instagram} title="Instagram Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><FaInstagram size="1rem" /></div>

              <div className="text">Instagram</div>

            </a>

          </div>

          {/* <div className="plat-item" dataInfo="Twitter Link">

            <a href={social.twitter} title="{/* <div className="plat-item" dataInfo="Twitter Link">" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiTwitter size="1rem" /></div>

              <div className="text">Twitter</div>

            </a>

          </div> */}

          <div className="plat-item" dataInfo="Github Link">

            <a href={social.github} title="Github Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiGithub size="1rem" /></div>

              <div className="text">Github</div>

            </a>

          </div>

          <div className="plat-item" dataInfo="Reddit Link">

            <a href={social.reddit} title="Reddit Link" target="_blank" rel="noopener noreferrer">

              <div className="icon"><SiReddit size="1rem" /></div>

              <div className="text">Reddit</div>

            </a>

          </div>

        </div>

        <p>Or send a message in the form provided</p>

      </section>

      <section className="contact-form">

        <div className="intro">

          <h1>Say Hi to Elpis</h1>

        </div>

        <div className="cont">

          <form>

            <div className="form-pack">

              <label htmlFor="elp-port-name">Name</label>

              <input type="text" id="elp-port-name" name="elp-port-name" />

            </div>

            <div className="form-pack">

              <label htmlFor="elp-port-email">Email</label>

              <input type="email" id="elp-port-email" name="elp-port-email" />

            </div>

            <div className="form-pack">

              <label htmlFor="elp-port-msg">Message</label>

              <textarea name="elp-port-msg" id="elp-port-msg"></textarea>

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
  padding: 0.5rem;
  animation: opacity 1s 1;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  flex: 1;

  section{
    width: 50%;
    padding: 1rem;

    &.contact-items{
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;

      h2{
        font-size: 1.2rem;
        padding-bottom: 0.5rem;
      }

      & > p{
        padding-top: .5rem;
      }

      .all-plat{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        margin: 0 auto;
        max-width: 100%;

        .plat-item{
          padding: 0.5rem;
          
          a{
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0.5rem 1rem;
            border-radius: 1rem;
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
              padding-left: 0.5rem;
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
      text-align: center;
      flex-direction: column;

      h2{
        font-size: 1.2rem;
        padding-bottom: 0.5rem;
      }

      & > p{
        padding-top: .5rem;
      }
    }
  }

`


export default ContactPage
