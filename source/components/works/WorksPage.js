import styled from "styled-components"

import { roles, allRoles, works as projects } from "../../utils"

import { backWorks, frontWorks, sideWorks } from "../../store/slice/displaySlice"

import { useEffect, useRef, useState } from "react"

import { useDispatch, useSelector } from "react-redux"


const WorksPage = () => {

  const parentAll = useRef(null)

  const dispatch = useDispatch()

  const { works } = useSelector(store => store.display)

  const rolesClick = role => {

    if (getWorkLevel(works) === 1) { // if its on roles preview

      dispatch(frontWorks(role.hook))

    } else { // not on roles preview

      if (getWork(2, works) === role.hook) { // if clicked on the same role

        dispatch(backWorks())

      } else { // not clicked on the same role

        dispatch(sideWorks(role.hook))

      }

    }

  }

  return (

    <WorksPageStyle ref={parentAll} className={getWorkLevel(works) === 2 ? "hit-up" : ""}>

      <div className="all-mi-rols">

        {[allRoles].concat(roles).map(role => <div key={role.hook} className={"role-hol " + (getWork(2, works) === role.hook ? "active" : "")}>

          <div className="role-asp" onClick={e => rolesClick(role)}>

            <h1>{role.name}</h1>

            <h2>{role.altName}</h2>

            <p>{role.projectDescription}</p>

          </div>

        </div>)}

      </div>

      {getWorkLevel(works) === 2 && <div className="all-mi-works">

        {projects.filter(proj => proj.type.includes(getWork(2, works))).map(project => <div className="work-hol" key={project._wid}>

          <div className="work-asp">

            <h1>{project.title}</h1>

            <div className="p-img">

              <img src={project.imageurl} alt={project.title} />

            </div>

            <p>{project.description}</p>

            <div className="asp-end">

              <div className="asp-live"></div>

              <div className="asp-src"></div>

            </div>

          </div>

        </div>)}

      </div>}

    </WorksPageStyle>

  )

}

const WorksPageStyle = styled.div`

  width: 100%;
  padding: 0.5rem;
  animation: opacity 1s 1;
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  
  .all-mi-rols{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition: width .5s;
    width: 100%;

    .role-hol{
      width: 50%;
      padding: 1rem;
      display: flex;
      align-items: stretch;
      justify-content: center;
      align-self: stretch;
      
      .role-asp{
        padding: 1rem;
        background: #f2f4f5;
        box-shadow:  20px 20px 60px #cecfd0, -20px -20px 60px #ffffff;
        border-radius: 1rem;
        overflow: hidden;
        cursor: pointer;
        border: 1px solid transparent;
        transition: border .5s;

        h1{
          white-space: nowrap;
          font-size: 1rem;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        
        h2{
          white-space: nowrap;
          font-size: .8rem;
          text-overflow: ellipsis;
          overflow: hidden;
          max-height: 2rem;
          transition: max-height .5s;
        }
        
        p{
          max-height: 10rem;
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
    margin: auto 0;
    width: 75%;

    img{
      max-width: 100%;
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

`

const getWork = (level, works) => works.split('/')[level - 1]

const getWorkLevel = works => works.split('/').length

export default WorksPage
