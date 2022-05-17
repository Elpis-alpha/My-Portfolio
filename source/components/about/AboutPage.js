import Link from "next/link"
import styled from "styled-components"
import { dev, elpis } from "../../utils"


const AboutPage = () => {

  return (

    <AboutPageStyle>

      <section className="side-by">

        <div className="container">

          <div className="img-prt">

            <div className="black-overflow"></div>

            <img src="/images/me.jpg" alt="Elpis" title="Elpis" />

          </div>

          <div className="txt-prt">

            <h2>Hi there,</h2>

            <p>

              I'm Festus, but you can also call me <strong>Elpis</strong>.

              I'm curently a freelance full stack (MERN Stack) web developer working at Upwork and Fiverr.

              Feel free to <Link href="/contact" title="Contact Page"><a>contact me</a></Link> if

              my <Link href="/services" title="My Services"><a>services</a></Link> are required.

            </p>

          </div>

        </div>

      </section>

      <section className="middle">

        <div className="container">

          <div className="txt-prt">

            <h2>What drives me?</h2>

            <p>

              As an indivudial, I've always had a passion for creation in general. That was what probably drove

              me to study Mechanical Engineering (Design & Manufacturing) but during the pandemic, I started hearing

              about web development and I came in contact with a world in which I could freely create, edit, update,

              and "destroy" components. It was at that moment I knew that web development was for me and till today, it's

              still that passion that drives me.

            </p>

          </div>

          <div className="img-prt">

            <div className="black-overflow"></div>

            <img src="/images/universe.png" alt="Universe" title="The beautiful universe" />

          </div>

        </div>

      </section>

      <section className="side-by">

        <div className="container">

          <div className="txt-prt">

            <h2>My Current Life</h2>

            <p>

              I'm currently in school studying Mechanical Engineering and in my fourth year. I also just recently finished

              an internship at Chemical & Allied Products PLC.

              I'm actively talking jobs from anyone who needs my services.

            </p>

          </div>

          <div className="img-prt">

            <div className="black-overflow"></div>

            <img src="/images/student.jpg" alt="Gbolade Festus" title="Gbolade Festus" />

          </div>

        </div>

      </section>

      <section className="middle">

        <div className="container">

          <div className="img-prt">

            <div className="black-overflow"></div>

            <img src="/images/interest.png" alt="Elpis" title="Elpis" />

          </div>

          <div className="txt-prt">

            <h2>My Interests</h2>

            <p>

              As for my interests, Web Development is a given as well as Engineering. On the other hand, I there are

              some things that pique my interest such as concepts like "The Big Bang", "The Grandfather Paradox", "Evolution",

              "Antimatter", "The Human Mind", "The Fourth Dimension" and other similar ones. I am also in love with musical

              instruments and I currently own a keyboard (piano). Others will be added at the end of this page

            </p>

          </div>

        </div>

      </section>

      <section className="side-by">

        <div className="container">

          <div className="img-prt">

            <div className="black-overflow"></div>

            <img src="/images/career.png" className="side-by-side" alt="Gbolade Festus" title="Gbolade Festus" />

            <img src="/images/career.jpg" className="absolute-position" alt="Gbolade Festus" title="Gbolade Festus" />

          </div>

          <div className="txt-prt">

            <h2>My Career</h2>

            <p>

              So far with a total of {dev.experienceYears}+ year(s) of experience, I'm still in the early years of my career as a Web Developer.

              I am currently freelancing to gain more experience but my main goal is to get a full time job as a MERN Stack Developer.

            </p>

          </div>

        </div>

      </section>

      <section className="middle">

        <div className="container">

          <div className="img-prt" style={{ opacity: ".25" }}>

            <div className="black-overflow"></div>

            <img src="/images/story.png" alt="Elpis" title="Elpis" />

          </div>

          <div className="txt-prt">

            <h2>A Short Story</h2>

            <p>

              More or less a short story on how I got to where I am. While I was studying at OAU,

              my first year there was pretty uneventful, but when the second year began, I took a course

              that involves programming. From there, I acquired curiosity and started researching about

              programming specifically web development. I started learning HTML, CSS and Javascript.

              Then I proceeded to learn Python and Django Framework. However, I was not satisfied with the

              websites I built, then I (because of a friend's advice) decided to invest in Javascript by shifting

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

            <div className="a-fact">I love cats but don't have one</div>

            <div className="a-fact">My favourite color is white</div>

            <div className="a-fact">I'm so into latest tech</div>

            <div className="a-fact">I love anime</div>

            <div className="a-fact">I'm an INTJ-T</div>

            <div className="a-fact">I'm my role model (yeah! yeah!!)</div>

            <div className="a-fact">I'm 19 years old</div>

            <div className="a-fact">I'm still in school</div>

            <div className="a-fact">I love sweets (hope I don't get diabetes)</div>

            <div className="a-fact">I love designing (both web and structural)</div>

            <div className="a-fact">I don't have a girlfriend (yet!)</div>

            <div className="a-fact">I wish I can fly (who doesn't)</div>

            <div className="a-fact">I'm close two meters (1.96m)</div>

            <div className="a-fact">I love video games</div>

            <div className="a-fact">I workout everyday</div>

            <div className="a-fact">I love country music</div>

            <div className="a-fact">I love pizza (who doesn't, except the healthy ones)</div>

            <div className="a-fact">Star wars is awesome (like seriously)</div>

            <div className="a-fact">I'm a bit wierd (like who isn't)</div>

            <div className="a-fact">I really love cats (really really)</div>

            <div className="a-fact">I've been to the Moon (now that's a lie)</div>

          </div>

        </div>

      </section>

    </AboutPageStyle >

  )

}

const AboutPageStyle = styled.div`

  width: 100%;
  padding: 0.5rem 0;
  animation: opacity 1s 1;
  font-size: 1rem;
  line-height: 2.5rem;

  section.side-by{
    padding: 2rem 3rem;

    .container{
      display: flex;
      align-items: center;
    }

    .img-prt{
      width: 45%;
      padding: 0 1.5rem;
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
      line-height: 2rem;

      h2{
        font-size: 1.8rem;
        line-height: 3rem;
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

      padding: 2rem 0;

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
        bottom: 1rem; left: 1rem;
        right: 1rem;
        color: white;
      }

      .black-overflow{
        position: absolute;
        bottom: 0; left: 0;
        right: 0; top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .4);
        z-index: 30;        
      }
    }
  }

  section.middle{
    padding: 5rem 3rem;

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
      opacity: .4;

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
        font-size: 1.8rem;
        line-height: 3rem;
        padding-bottom: 1rem;
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
    padding: 5rem 3rem;

    .container{
      display: flex;
      align-items: center;
      flex-direction: column;
    }

    h2{
      font-size: 1.8rem;
      line-height: 3rem;
      padding-bottom: 1rem;
    }

    .all-facts{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      .a-fact{
        width: 10rem;
        height: 10rem;
        padding: 1rem;
        font-size: .8rem;
        line-height: 1.8rem;
        margin: 0 .5rem;
        margin-bottom: 2rem;
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

`


export default AboutPage
