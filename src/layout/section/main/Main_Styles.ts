import styled from "styled-components"
import elips1 from '../../../assets/Ellipse1.svg'
import elips2 from '../../../assets/Ellipse2.svg'



const StyledMain = styled.section`
 padding: 140px 0 80px 0;
 background-color: #0FBF611A;
 min-height: 100vh;
 display: flex;
 background-image: url(${elips1}), url(${elips2});
 background-repeat: no-repeat;
 background-position: left 145px, right top;
@media screen and (max-width: 1350px){
    background-image:none;
}
@media ${({ theme }) => theme.media.mobile}{
    padding-top: 110px;
}
`

const MainGreeting = styled.span`
font-size: 30px;
font-weight: 400;
line-height: 35px;
margin-botttom: 7px;
color: #0FBF61;
@media ${({ theme }) => theme.media.mobile}{
    font-size: 25px;
}
`

const StylesText = styled.div`
 max-width: 476px;
 margin-top: 30px;
 @media ${({ theme }) => theme.media.desctop}{
 margin-top: 0;
}
`

const MainName = styled.h2`
font-family: Poppins;
font-size: 45px;
font-weight: 700;
line-height: 70px;
margin: 7px 0 21px 0;
@media ${({ theme }) => theme.media.mobile}{
    font-size: 30px;
    line-height: 20px;
    margin: 7px 0 5px 0;
}
`

const MainText = styled.p`
font-size: 18px;
font-weight: 400;
line-height: 30px;
margin: 21px 0 32px 0;



@media ${({ theme }) => theme.media.tablet}{
    margin: 15px 0 15px 0;
}
@media ${({ theme }) => theme.media.mobile}{
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
    
    margin: 10px 0 20px 0;
}
`


export const S = {
    StyledMain,
    MainGreeting,
    StylesText,
    MainName,
    MainText,
}