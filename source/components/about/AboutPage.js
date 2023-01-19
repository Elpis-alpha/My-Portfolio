import Link from "next/link"

import styled from "styled-components"

import { dev, facts } from "../../utils"

import ElpisImage from "../general/ElpisImage"


const AboutPage = () => {

  return (

    <AboutPageStyle>

      <section className="side-by">

        <div className="container">

          <div className="img-prt">

            <div className="black-overflow"></div>

            <ElpisImage src="/images/blur/me.jpg" alt="Elpis" title="Elpis" />

          </div>

          <div className="txt-prt">

            <h2>Hi there,</h2>

            <p>

              I&apos;m Festus, but you can also call me <strong>Elpis</strong>.

              I&apos;m curently a freelance full stack (MERN Stack) web developer working at Upwork and Fiverr.

              Feel free to <Link href="/contact" title="Contact Page"><a>contact me</a></Link> if

              my <Link href="/stack" title="My Stack"><a>services</a></Link> are required.

            </p>

          </div>

        </div>

      </section>

      <section className="middle">

        <div className="container">

          <div className="txt-prt">

            <h2>What drives me?</h2>

            <p>

              As an indivudial, I&apos;ve always had a passion for creation in general. That was what probably drove

              me to study Mechanical Engineering (Design & Manufacturing) but during the pandemic, I started hearing

              about web development and I came in contact with a world in which I could freely create, edit, update,

              and &quot;destroy&quot; components. It was at that moment I knew that web development was for me and till today, it&apos;s

              still that passion that drives me.

            </p>

          </div>

          <div className="img-prt">

            <div className="black-overflow"></div>

            <ElpisImage src="/images/blur/universe.png" alt="Universe" title="The beautiful universe" />

          </div>

        </div>

      </section>

      <section className="side-by">

        <div className="container">

          <div className="txt-prt">

            <h2>My Current Life</h2>

            <p>

              I&apos;m currently in school studying Mechanical Engineering and in my fourth year. I also just recently finished

              an internship at Chemical & Allied Products PLC.

              I&apos;m actively taking jobs from anyone who needs my services.

            </p>

          </div>

          <div className="img-prt">

            <div className="black-overflow"></div>

            <ElpisImage src="/images/blur/student.jpg" alt="Gbolade Festus" title="Gbolade Festus" />

          </div>

        </div>

      </section>

      <section className="middle">

        <div className="container">

          <div className="img-prt">

            <div className="black-overflow"></div>

            <ElpisImage src="/images/blur/interest.png" alt="Elpis" title="Elpis" />

          </div>

          <div className="txt-prt">

            <h2>My Interests</h2>

            <p>

              As for my interests, Web Development is a given as well as Engineering. On the other hand, I there are

              some things that pique my interest such as concepts like &quot;The Big Bang&quot;, &quot;The Grandfather Paradox&quot;, &quot;Evolution&quot;,

              &quot;Antimatter&quot;, &quot;The Human Mind&quot;, &quot;The Fourth Dimension&quot; and other similar ones. I am also in love with musical

              instruments and I currently own a keyboard (piano). Others will be added at the end of this page

            </p>

          </div>

        </div>

      </section>

      <section className="side-by">

        <div className="container">

          <div className="img-prt">

            <div className="black-overflow"></div>

            <ElpisImage src="/images/blur/career.png" className="side-by-side" alt="Gbolade Festus" title="Gbolade Festus" />

          </div>

          <div className="txt-prt">

            <h2>My Career</h2>

            <p>

              So far with a total of {dev.experienceYears}+ year(s) of experience, I&apos;m still in the early years of my career as a Web Developer.

              I am currently freelancing to gain more experience but my main goal is to get a full time job as a MERN Stack Developer.

            </p>

          </div>

        </div>

      </section>

      <section className="middle">

        <div className="container">

          <div className="img-prt" style={{ opacity: ".25" }}>

            <div className="black-overflow"></div>

            <ElpisImage src="/images/blur/story.png" alt="Elpis" title="Elpis" />

          </div>

          <div className="txt-prt">

            <h2>A Short Story</h2>

            <p>

              More or less a short story on how I got to where I am. While I was studying at OAU,

              my first year there was pretty uneventful, but when the second year began, I took a course

              that involves programming. From there, I acquired curiosity and started researching about

              programming specifically web development. I started learning HTML, CSS and Javascript.

              Then I proceeded to learn Python and Django Framework. However, I was not satisfied with the

              websites I built, then I (because of a friend&apos;s advice) decided to invest in Javascript by shifting

              both backend and frontend to Javascript by using React, Node.js, Mongodb and Express.

              Then I learnt Next.js when I discovered about it.

            </p>

          </div>

        </div>

      </section>

      <section className="facts">

        <div className="container">

          <div className="intro">

            <h2>Facts About Me</h2>

          </div>

          <div className="all-facts">

            {facts.map(fact => fact)}

          </div>

        </div>

      </section>

      <section className="exit">

        <p>Now that you know a little about me, why not reach out and let&apos;s build your dream together.</p>

        <Link href="/contact"><a>Contact Me</a></Link>

      </section>

    </AboutPageStyle >

  )

}

const AboutPageStyle = styled.div`

  width: 100%;
  padding: 0.5pc 0;
  animation: opacity 1s 1;

  section.side-by{
    padding: 2pc 3pc;

    .container{
      display: flex;
      align-items: center;
    }

    .img-prt{
      width: 45%;
      padding: 0 1.5pc;
      display: flex;
      max-width: 350px;

      img{
        width: 100%;
        display: flex;
        object-fit: contain;
        z-index: 20;
      }

      img.absolute-position{
        display: none;
      }
    }
    
    .txt-prt{
      flex: 1;
      z-index: 50;

      h2{
        font-size: 1.8pc;
        line-height: 3pc;
      }

      a{
        color: inherit;
        text-decoration: none;
        font-style: italic;
        
        &:hover{
          text-decoration: underline;
        }
      }
    }

    @media screen and (max-width: 550px) {

      padding: 2pc 0;

      .img-prt{
        width: 100%;
        padding: 0;
        max-width: 100%;
        
        img.absolute-position{
          display: flex;
        }

        img.side-by-side{
          display: none;
        }
      }

      .txt-prt{
        position: absolute;
        bottom: 1pc; left: 1pc;
        right: 1pc;
        color: white;
      }

      .black-overflow{
        position: absolute;
        bottom: 0; left: 0;
        right: 0; top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .8);
        z-index: 30;        
      }
    }
  }

  section.middle{
    padding: 5pc 3pc;

    .container{
      display: flex;
      align-items: center;
    }

    .img-prt{
      display: flex;
      width: auto;
      width: 100%;
      height: 100%;
      padding: 0;
      position: absolute;
      bottom: 0; left: 0;
      right: 0; top: 0;
      opacity: .3;

      img{
        width: 100%;
        height: 100%;
        display: flex;
        object-fit: contain;
        z-index: 20;
      }
    }
    
    .txt-prt{
      flex: 1;
      z-index: 50;
      text-align: center;
      max-width: 70%;
      margin: 0 auto;

      h2{
        font-size: 1.8pc;
        line-height: 3pc;
        padding-bottom: 1pc;
      }

      a{
        color: inherit;
        text-decoration: none;
        font-style: italic;
        
        &:hover{
          text-decoration: underline;
        }
      }
    }
    
    @media screen and (max-width: 550px) {
      .txt-prt{
        max-width: 90%;
      }
    }
  }

  section.facts{
    padding: 3pc;

    .container{
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    h2{
      font-size: 1.8pc;
      line-height: 3pc;
      padding-bottom: 1pc;
    }

    .all-facts{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;

      .a-fact{
        width: 10pc;
        height: 10pc;
        padding: 1pc;
        font-size: .8pc;
        line-height: 1.8pc;
        margin: 0 .5pc;
        margin-bottom: 2pc;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: linear-gradient(145deg, #dadcdd, #ffffff);
        box-shadow:  9px 9px 18px #9b9c9d, -9px -9px 18px #ffffff;
        text-align: center;
      }
    }
  }

  section.exit{
    padding: 3pc;
    padding-top: 0;
    text-align: center;

    p{
      font-size: 1.2pc;
      line-height: 2.5pc;
      padding-bottom: 1pc;
    }

    a{
      display: inline-flex;
      padding: 0.3pc 2pc;
      text-decoration: none;
      margin: 0 auto;
      color: inherit;
      border: 0 none;
      padding: 0 1pc;
      border-radius: 0.2pc;
      box-shadow: 10px 10px 20px #d2d3d4, -10px -10px 20px #ffffff;
      transform: scale(1);
      transition: transform .5s;
    }

    a:hover{
      transform: scale(1.1);
    }
  }

`


export default AboutPage
