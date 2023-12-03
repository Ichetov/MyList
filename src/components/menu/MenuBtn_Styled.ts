import styled from "styled-components"

type NavPropsType = {
    bottom?: string
}

const StyledMenu = styled.nav<NavPropsType>`
margin-bottom: ${({bottom})=> bottom ?? 0}px;
ul{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
    li > a{
      
    }

}
`

export const S = {
    StyledMenu,
}