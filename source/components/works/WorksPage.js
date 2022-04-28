import styled from "styled-components"

import { roles } from "../../utils"


const WorksPage = () => {

  return (

    <WorksPageStyle>

      {roles.map(role => <div key={role.hook}>

        {role.name}

      </div>)}

    </WorksPageStyle>

  )

}

const WorksPageStyle = styled.div`

  width: 100%;
  padding: 0.5rem;
  animation: opacity 1s 1;

`


export default WorksPage
