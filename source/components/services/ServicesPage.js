import styled from "styled-components"

import { skills, services } from "../../utils"


const ServicesPage = () => {

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

              <button>Request Service</button>

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

          {skills.map(skill => <div key={skill._kid} className="skill-hol">

            <div className="skill-asp">

              <h2>{skill.title}</h2>

              <p>{skill.description}</p>

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
        width: 25%;
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
          width: 50%;
        }
      }

      @media screen and (max-width: 500px) {
        
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
        width: 25%;
        padding: 1rem;
        display: flex;
        
        .skill-asp{
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
        
        .skill-hol{
          width: 50%;
        }
      }

      @media screen and (max-width: 500px) {
        
        .skill-hol{
          width: 100%;
        }
      }
    }
  }

`


export default ServicesPage
