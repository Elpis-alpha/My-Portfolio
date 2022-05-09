import Link from "next/link"
import styled from "styled-components"

const AboutPage = () => {

  return (

    <AboutPageStyle>

      <section className="intro">

        <div className="img-prt">

          <img src="/images/me.jpg" alt="Elpis" />

        </div>

        <div className="txt-prt">

          <h4>Hi there,</h4>

          I'm Gbolade Festus, but you can call me <strong>Elpis</strong>.

          I'm curently a freelance web developer working at Upwork and Fiverr. For the record, I'm actually still in school.

          I use <Link href="/services#skills-segmment" title="Known Languages and Frameworks"><a>various technologies</a></Link> to

          create beautiful, responsive and optimized <Link href="/works" title="Websites I've made"><a>websites</a></Link>.

          Feel free to <Link href="/contact" title="Contact Page"><a>contact me</a></Link> if

          my <Link href="/services" title="My Services"><a>services</a></Link> are required.

        </div>

      </section>

      <h1 style={{ fontSize: "3rem", lineHeight: "5rem" }}>I need more inspiration before I can continue</h1>

    </AboutPageStyle>

  )

}

const AboutPageStyle = styled.div`

  width: 100%;
  padding: 0.5rem;
  animation: opacity 1s 1;

  section.intro{
    display: flex;
    align-items: center;
    padding: 0 1rem;
    
    .img-prt{
      width: 45%;
      max-height: 40vh;
      padding: 0 1rem;
      display: flex;

      img{
        max-width: 100%;
        max-height: 100%;
        display: flex;
        object-fit: contain;
        border-radius: 1rem;
      }
    }
    
    .txt-prt{
      width: 55%;
      font-size: 1rem;

      h4{
        font-size: 1.5rem;
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
  }

`


export default AboutPage
