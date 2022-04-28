import Link from "next/link"

import { useRouter } from "next/router"

import styled from "styled-components"

import { useEffect, useRef, useState } from "react"

import { useSelector } from "react-redux"

import { creator } from "../../__env"


const NavBar = () => {

  const router = useRouter()

  const navChildrenRef = useRef(null)

  const { showNav } = useSelector(store => store.display)

  const [currentURL, setCurrentURL] = useState("")

  useEffect(() => {

    const handleRouteChange = url => setCurrentURL(url)

    handleRouteChange(router.asPath)

    router.events.on("routeChangeStart", handleRouteChange)

    return () => {

      router.events.off('routeChangeComplete', handleRouteChange)

    }

  }, [])

  return (

    <NavStyle className={showNav ? 'show-nav' : 'hide-nav'}>

      <div className="heading">

        <Link href="/"><a>

          <div className="head-image">

            <img src="/images/logo_small.png" alt="" />

          </div>

          <div className="head-text">

            <h1>{creator}</h1>

          </div>

        </a></Link>

      </div>

      <div className="children" ref={navChildrenRef}>

        <ul>

          <div className="one-nav">

            <li><Link href="/"><a className={currentURL === "/" ? "active" : ""}>

              Home

            </a></Link></li>

          </div>

          <div className="two-nav">

            <li><Link href="/works"><a className={currentURL === "/works" ? "active" : ""}>

              Works

            </a></Link></li>

            <li><Link href="/services"><a className={currentURL === "/services" ? "active" : ""}>

              Services

            </a></Link></li>

          </div>

          <div className="two-nav">

            <li><Link href="/contact"><a className={currentURL === "/contact" ? "active" : ""}>

              Contact me

            </a></Link></li>

            <li><Link href="/about"><a className={currentURL === "/about" ? "active" : ""}>

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
      padding: 1.5rem 0;
      line-height: 2rem;
      display: block;
      color: black;
      text-decoration: none;
      font-weight: bold;
      display: flex;
      align-items: baseline;

      .head-image{
        width: 15rem;

        img{
          width: 100%;
        }
      }
      
      .head-text{
        min-height: 50%;
        font-size: 2rem;
        left: -2rem;
        top: -0.5rem;
      }
    }
    
  }

  .children{
    display: flex;

    ul{
      display: flex;
      list-style-type: none;
      text-align: center;

      .two-nav{
        display: flex;
        flex-direction: column;
        font-size: .8rem;
        align-items: stretch;
      }

      .one-nav{
        display: flex;
        font-size: .8rem;
        align-items: center;
        justify-content: center;
      }

      @media screen and (min-width: 1000px) {

        &{
          padding-right: 5rem;
        }

        .two-nav{
          display: flex;
          flex-direction: row;
        }
      }

      li{
        margin: .3rem .3rem;
        
        a{
          padding: .3rem 1rem; 
          border-radius: 1rem;
          color: black;
          text-decoration: none;
          line-height: .9rem;
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
          margin: .3rem .1rem;
  
          a{
            padding: .3rem .8rem; 
          }
        }
      }
    }
  }

`

export default NavBar
