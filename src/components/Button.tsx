import styled from "styled-components";
import { font } from "../styles/Common";


type LinkItemPropsType = {
    color?: string
    background?: string
    name?: string
    size?: string
    padding?: string
    bottom?: number
    height?: string
    left?: string
  
}



export const Button = ({left, size, padding, color, background, name, bottom }: LinkItemPropsType) => {
    return (
       <BtnItem  left = {left} bottom = {bottom} padding = {padding} color = {color} background={background} size = {size}>
       {name}
       </BtnItem>
    )
}

export const BtnItem = styled.button<LinkItemPropsType>`

padding: 12px ${({padding})=> padding ?? 40}px;
background-color: ${({ background }) => background ?? '#0FBF61'};
color: ${({ color }) => color ?? 'black'};
border-radius: 50px;
display: inline-block;
font-size: ${({size})=> size ?? '18'}px;
font-weight: 500;
line-height: 30px;
text-align: center;
cursor: pointer;
margin-left: 25px;
position: relative;
margin-left: ${({left})=> left ?? 0}px;
margin-bottom: ${({bottom})=> bottom?? 0}px;
@media ${({ theme }) => theme.media.mobile}{
    font-size: 15px;
    padding: 5px ${({padding})=> padding ?? 30}px;
}
`

