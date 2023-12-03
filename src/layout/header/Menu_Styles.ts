import styled, { css } from "styled-components"

type NavPropsType = {
    bottom?: string
}


const StyledMobyleMenu = styled.nav<NavPropsType>`
margin-bottom: ${({ bottom }) => bottom ?? 0}px;
padding-right: 60px;
`


const MobyleMenuWrapper = styled.div<{ isOpen: boolean }>`
height: 100%;
position: fixed;
background-color: rgba(66, 135, 96, 0.9);
top:0;
left: 0;
right: 0;
bottom: 0;
z-index: 99999;
display: flex;
align-items: center;
justify-content: center;
transform: translateY(-100%);
transition: 1s;

ul{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    gap: 0px;
    transition: 1s;
    li > a{
      padding: 30px;
      font-size: 25px;
      color: white;
    }
  }
    
    ${({ isOpen }) => isOpen && css`
    transform: translateY(0);
    ul{
      gap: 100px;
    }
    
    `}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
position: fixed;
width: 100px;
height: 100px;
top: 0;
right: 0;
z-index: 9999999;
 span{
display: block;
width: 30px;
height: 4px;
border-radius: 2px;
background-color: black;
position: absolute;
left: 40px;
bottom: 50px;


${({ isOpen }) => isOpen && css`
background-color: rgba(255,255,255,0);
`}
  &::before{
  
display: block;
content:'';
transition: 0.5s;
width: 30px;
height: 4px;
border-radius: 2px;
background-color: black;
position: absolute;
margin-top: -8px;
transition: .6s;
${({ isOpen }) => isOpen && css`
margin-top: 0px;
transform: rotate(405deg);
`}
}
&::after{
content:'';
transition: 0.5s;
display: block;
width: 30px;
height: 4px;
border-radius: 2px;
background-color: black;
position: absolute;
margin-top: 8px;
transition: .6s;
${({ isOpen }) => isOpen && css`
margin-top: 0px;
  transform: rotate(-405deg);
`}
}
}
`


export const S = {
    StyledMobyleMenu,
    MobyleMenuWrapper,
    BurgerButton,
}