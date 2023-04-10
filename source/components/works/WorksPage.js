import styled from "styled-components"

import { roles, allRoles, works as projects } from "../../utils"

import { backWorks, frontWorks, sideWorks } from "../../store/slice/displaySlice"

import { useRef } from "react"

import { useDispatch, useSelector } from "react-redux"

import { FaEye, FaEyeSlash, FaGitAlt } from "react-icons/fa"

import Select from "react-select"


const WorksPage = () => {

  const parentAll = useRef(null)

  const dispatch = useDispatch()

  const { works } = useSelector(store => store.display)

  const rolesClick = hook => {

    if (getWorkLevel(works) === 1) { // if its on roles preview

      dispatch(frontWorks(hook))

    } else { // not on roles preview

      if (getWork(2, works) === hook || hook === "rapsy dooog") { // if clicked on the same role

        dispatch(backWorks())

      } else { // not clicked on the same role

        dispatch(sideWorks(hook))

      }

    }

  }

  const options = [allRoles].concat(roles).map(role => { return { value: role.hook, label: role.name } }).concat({ value: "rapsy dooog", label: "Go Back" })

  return (

    <WorksPageStyle ref={parentAll} className={getWorkLevel(works) === 2 ? "hit-up" : ""}>

      <div className="all-mi-rols">

        {getWorkLevel(works) === 1 && <div className="heading">

          <h1>Choose which projects you wish to see</h1>

        </div>}

        <div className="all-rols-cont">

          {[allRoles].concat(roles).map(role => <div key={role.hook} className={"role-hol " + (getWork(2, works) === role.hook ? "active" : "")}>

            <div className="role-asp" onClick={() => rolesClick(role.hook)} title={role.projectDescription}>

              <h1>{role.name}</h1>

              <h2>{role.altName}</h2>

            </div>

          </div>)}

          <div className="role-select">

            <Select options={options} value={options.find(opt => opt.value === getWork(2, works))} onChange={({ value }) => rolesClick(value)} />

          </div>

        </div>

        {getWorkLevel(works) === 1 && <div className="footing">

          <p>Click them to view their projects and again to return to this state</p>

        </div>}

      </div>

      {<div className={"all-mi-works " + ((getWorkLevel(works) === 2) ? "show" : "")}>

        <div className="absolute-works">

          {projects.map(project => <div className={"work-hol " + (project.type.includes(getWork(2, works)) ? "show" : "")} key={project._wid}>

            <div className="work-asp">

              <h1>{project.title}</h1>

              <div className="p-img">

                {/* <img src={project.imageurl} alt={project.title} /> */}

              </div>

              <p>{project.description}</p>

              <div className="asp-end">

                <div className="asp-live">

                  <a href={project.liveURL} target="_blank" rel="noopener noreferrer">

                    <span className="icon"><FaEye size="1pc" /></span>

                    <span className="text">Live Link</span>

                  </a>

                </div>

                <div className="asp-src">

                  {project.sourceCode !== "" && <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">

                    <span className="icon"><FaGitAlt size="1pc" /></span>

                    <span className="text">Source Code</span>

                  </a>}

                  {project.sourceCode === "" && <a style={{ opacity: ".5", color: "blue", cursor: "not-allowed" }}>

                    <span className="icon"><FaEyeSlash size="1pc" /></span>

                    <span className="text">Proprietary</span>

                  </a>}

                </div>

              </div>

            </div>

          </div>)}

        </div>

      </div>}

    </WorksPageStyle>

  )

}

const WorksPageStyle = styled.div`

  width: 100%;
  padding: 0.5pc;
  animation: opacity 1s 1;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  
  .all-mi-rols{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition: width .5s;
    width: 100%;

    @keyframes opac-im {
      from{ opacity: 0 }
      to{ opacity: 1 }
    }

    .heading{
      width: 100%;
      font-size: 1.5pc;
      text-align: center;
      padding: 1pc;
      animation: opac-im .5s 1;
    }

    .footing{
      width: 100%;
      font-size: 1pc;
      text-align: center;
      padding: 1pc;
      animation: opac-im .5s 1;
    }

    .all-rols-cont {
      width: 100%;
      display: flex;
      flex-wrap: wrap;

      .role-select {
        display: none;
      }
    }

    .role-hol{
      width: 50%;
      text-align: center;
      padding: 1pc;
      display: flex;
      align-items: stretch;
      justify-content: center;
      align-self: stretch;

      @media screen and (orientation: portrait) {
        width: 100%;
      }

      .role-asp{
        padding: 1pc;
        background: #f2f4f5;
        box-shadow:  20px 20px 60px #cecfd0, -20px -20px 60px #ffffff;
        border-radius: 1pc;
        overflow: hidden;
        cursor: pointer;
        border: 1px solid transparent;
        width: 100%;
        transition: border .5s;

        h1{
          white-space: nowrap;
          font-size: 1pc;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        h2{
          white-space: nowrap;
          font-size: .8pc;
          text-overflow: ellipsis;
          overflow: hidden;
          max-height: 2pc;
          transition: max-height .5s;
        }

        p{
          max-height: 10pc;
          overflow: hidden;
          transition: max-height .5s;
        }
      }

      &.active{

        .role-asp{
          border: 1px solid #2e4aff;
        }
      }
    }
  }

  .all-mi-works{
    display: none;
    width: 100%;
    flex: 1;
    align-self: stretch;
    
    &.show{
      display: block;
    }

    .absolute-works{
      position: absolute;
      top: 0; bottom: 0;
      left: 0; right: 0;
      height: 100%;
      width: 100%;
      overflow: auto;
      padding-top: 1pc;

      .work-hol{
        display: none;
        padding: 0 1pc;
        padding-bottom: 1.5pc;
        
        &.show{
          display: block;
          animation: scale-in 1s 1;
        }

        .work-asp{
          padding: 1pc; border-radius: 1pc;
          background: linear-gradient(145deg, #ffffff, #dadcdd);
          box-shadow:  5px 5px 9px #e8eaeb, -5px -5px 9px #fcfeff;

          h1{
            font-size: 1pc;
          }

          .p-img{
            width: 70%;
            display: none;

            img{
              width: 100%;
            }
          }
        }
      }

      .asp-end{
        display: flex;
        align-items: center;
        justify-content: space-between;

        a{
          color: green;
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: color .5s;

          &:hover{
            color: purple;
          }

          .icon{
            display: flex;
            align-items: center;
            padding-right: 0.3pc;
          }
        }
      }
    }
    
    @media screen and (orientation: landscape) {
      width: 75%;
    }
  }

  &.hit-up{

    .all-mi-rols{

      flex-wrap: nowrap;
      

      .role-hol{
        width: 25%;

        .role-asp{

          h2{
            max-height: 0;
          }
          
          p{
            max-height: 0;
          }
        }
      }

      @media screen and (orientation: portrait) {
        .role-hol {
          display: none;
        }

        .role-select {
          display: block;
          width: 100%;
          padding: .5pc 1pc;
          padding-top: 0;
        }
      }

      @media screen and (orientation: landscape) {
        flex-wrap: wrap;
        width: 25%;
        margin: auto 0;
        
        .role-hol{
          width: 100%;
        }
      }
    }
  }

  @media screen and (orientation: landscape) {
    flex-direction: row;
  }

`

const getWork = (level, works) => works.split('/')[level - 1]

const getWorkLevel = works => works.split('/').length

export default WorksPage
