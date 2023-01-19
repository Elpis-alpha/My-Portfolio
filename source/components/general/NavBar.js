import Link from "next/link"

import { useRouter } from "next/router"

import styled from "styled-components"

import { useEffect, useRef, useState } from "react"

import { Sling as Hamburger } from "hamburger-react"

import { creator } from "../../__env"

import ElpisImage from "./ElpisImage"


const NavBar = () => {

  const router = useRouter()

  const navChildrenRef = useRef(null)

  const [isNavOpened, setIsNavOpened] = useState(false)

  const [currentURL, setCurrentURL] = useState("")

  useEffect(() => {

    const handleRouteChange = url => setCurrentURL(url)

    handleRouteChange(router.asPath)

    router.events.on("routeChangeStart", handleRouteChange)

    return () => {

      router.events.off('routeChangeComplete', handleRouteChange)

    }

  }, [router])

  return (

    <NavStyle className={'show-nav'}>

      <div className="heading">

        <Link href="/"><a>

          <div className="head-image">

            <ElpisImage src="/images/blur/logo_small.png" alt="Elpis Logo" title="My Logo" />

          </div>

          <div className="head-text">

            <h1>{creator}</h1>

          </div>

        </a></Link>

      </div>

      <div className="children" ref={navChildrenRef}>

        <div className="nav-ham">

          <Hamburger color="black" size="35" toggled={isNavOpened} toggle={setIsNavOpened} duration={1} distance="sm" rounded />

        </div>

        <ul className={isNavOpened ? "show-nev" : ""}>

          <div className="nav-ham innie">

            <Hamburger color="black" size="35" toggled={isNavOpened} toggle={setIsNavOpened} duration={1} distance="sm" rounded />

          </div>

          <div className="one-nav">

            <li className="reveal-1"><Link href="/"><a className={currentURL === "/" ? "active" : ""} onClick={() => setIsNavOpened(false)}>

              Home

            </a></Link></li>

          </div>

          <div className="two-nav">

            <li className="reveal-2"><Link href="/works"><a className={currentURL === "/works" ? "active" : ""} onClick={() => setIsNavOpened(false)}>

              Works

            </a></Link></li>

            <li className="reveal-3"><Link href="/stack"><a className={currentURL === "/stack" ? "active" : ""} onClick={() => setIsNavOpened(false)}>

              Stack

            </a></Link></li>

          </div>

          <div className="two-nav">

            <li className="reveal-4"><Link href="/contact"><a className={currentURL === "/contact" ? "active" : ""} onClick={() => setIsNavOpened(false)}>

              Contact me

            </a></Link></li>

            <li className="reveal-5"><Link href="/about"><a className={currentURL === "/about" ? "active" : ""} onClick={() => setIsNavOpened(false)}>

              About me

            </a></Link></li>

          </div>

        </ul>

      </div>

    </NavStyle>

  )

}

const NavStyle = styled.nav`

  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  animation: opacity 1s 1;
  width: 100%;

  @keyframes slide-opacity {
    from {
      transform: translateX(-10pc);
      opacity: 0;
    }
    to {
      transform: translateX(0pc);
      opacity: 1;
    }
  }

  &.hide-nav{
    /* display: none; */
    height: 0;

    & > div{
      opacity: 0;
      visibility: hidden;
      z-index: -1;
    }

  }

  .heading {

    a{
      padding: 1.5pc 0;
      line-height: 2pc;
      display: block;
      color: black;
      text-decoration: none;
      font-weight: bold;
      display: flex;
      align-items: baseline;

      .head-image{
        width: 15pc;

        img{
          width: 100%;
        }
      }
      
      .head-text{
        min-height: 50%;
        font-size: 2pc;
        left: -2pc;
        top: -0.5pc;
      }
    }
    
  }

  .children{
    display: flex;

    .nav-ham {
      display: none;
    }

    ul{
      display: flex;
      list-style-type: none;
      text-align: center;

      .two-nav{
        display: flex;
        flex-direction: column;
        font-size: .8pc;
        align-items: stretch;
      }

      .one-nav{
        display: flex;
        font-size: .8pc;
        align-items: center;
        justify-content: center;
      }

      @media screen and (min-width: 1000px) {

        &{
          padding-right: 5pc;
        }

        .two-nav{
          display: flex;
          flex-direction: row;
        }
      }

      li{
        margin: .3pc .3pc;
        
        a{
          padding: .3pc 1pc; 
          border-radius: 1pc;
          color: black;
          text-decoration: none;
          line-height: .9pc;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
          transition: color .5s, box-shadow .5s, border .5s;
          
          &:hover{
            box-shadow:  1px 1px 2px #c4c6c6, -1px -1px 2px #ffffff;
          }
          
          &.active{
            box-shadow:  4px 4px 8px #c4c6c6, -4px -4px 8px #ffffff;
            border: 1px solid transparent;
          }
        }
      }

      
      @media screen and (max-width: 400px) {

        li{
          margin: .3pc .1pc;
  
          a{
            padding: .3pc .8pc; 
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {

    .heading {

      a{

        .head-image{
          width: 13pc;
        }
        
        .head-text{
          font-size: 1.7pc;
          left: -1.7pc;
          top: -0.5pc;
        }
      }
    }

    .children {

      .nav-ham {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1pc;
        z-index: 50;

        &.innie {
          position: absolute;
          top: 2pc; right: 1.3pc;
          margin-right: 0;
          display: none;
        }
      }

      ul {
        display: none;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: fixed;
        top: 0; bottom: 0;
        left: 0; right: 0;
        background-color: #e7e7e7;
        animation: slide-opacity .5s 0s 1;
        
        &.show-nev {
          display: flex;
        }

        .one-nav, .two-nav {
          display: contents;
        }

        li {

          &.reveal-1 { animation: slide-opacity 0.3s 0s ease-in-out 1 }
          &.reveal-2 { animation: slide-opacity 0.5s 0s ease-in-out 1 }
          &.reveal-3 { animation: slide-opacity 0.7s 0s ease-in-out 1 }
          &.reveal-4 { animation: slide-opacity 0.8s 0s ease-in-out 1 }
          &.reveal-5 { animation: slide-opacity 0.9s 0s ease-in-out 1 }
           
          a {
            padding: 0.5pc 2pc;
          }
        }
      }
    }
  }
  
  @media screen and (max-width: 400px) {

    .heading {

      a{

        .head-image{
          width: 10pc;
        }
        
        .head-text{
          font-size: 1.5pc;
          left: -1.5pc;
          top: -0.5pc;
        }
      }
    }
  }
`

export default NavBar
