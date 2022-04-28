import styled from "styled-components"

import { roles, allRoles } from "../../utils"


const WorksPage = () => {

  const getWork = (level, works) => works.split('')[level]

  return (

    <WorksPageStyle>

      {[allRoles].concat(roles).map(role => <div key={role.hook} className="role-hol">

        <div className="role-asp">

          <h1>{role.name}</h1>

          <h2>{role.altName}</h2>

          <p>{role.projectDescription}</p>

        </div>

      </div>)}

    </WorksPageStyle>

  )

}

const WorksPageStyle = styled.div`

  width: 100%;
  padding: 0.5rem;
  animation: opacity 1s 1;
  flex: 1;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: space-between;

  .role-hol{
    width: 50%;
    padding: 1rem;
    
    .role-asp{
      padding: 1rem;
      background: #f2f4f5;
      box-shadow:  20px 20px 60px #cecfd0, -20px -20px 60px #ffffff;
      border-radius: 1rem;
      /* white-space: nowrap; */
      overflow: hidden;
    }
  }



`

export default WorksPage
