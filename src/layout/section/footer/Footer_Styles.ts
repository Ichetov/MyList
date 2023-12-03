import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"

const StyledFooter = styled.section`
background-color: rgba(15, 191, 97, 0.10);
margin-bottom: 0px;
`

const TextFooter = styled.div`
color: #000;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 30px;
@media ${({ theme }) => theme.media.desctop}{
    margin-bottom: 15px;
 }
 @media ${({ theme }) => theme.media.mobile}{
    text-align: center;
 }
`

const SocialIconsList = styled.ul`
 display: flex;
 & li + li{
margin-left: 20px;
 } 
`

const Wrapper = styled.div`
padding: 185px 0 60px 0;
${FlexWrapper}{
    @media ${({ theme }) => theme.media.desctop}{
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
@media ${({ theme }) => theme.media.desctop}{
    padding: 50px 0 50px 0;
}
`


const SocialItem = styled.li`
 cursor: pointer;
 position: relative;
 &:hover{
    transform: scale(1.5);
 }
`

export const S = {
    StyledFooter,
    TextFooter,
    SocialIconsList,
    Wrapper,
    SocialItem
}