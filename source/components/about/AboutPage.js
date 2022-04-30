import styled from "styled-components"
import { host, mailToken } from "../../__env"



const AboutPage = () => {

  return (

    <AboutPageStyle>

      About Page

      {JSON.stringify({ host, mailToken })}

    </AboutPageStyle>

  )

}

const AboutPageStyle = styled.div`

  width: 100%;
  padding: 0.5rem;
  animation: opacity 1s 1;

`


export default AboutPage
