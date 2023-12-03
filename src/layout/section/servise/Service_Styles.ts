import styled from "styled-components"
import { Photo } from "../../../components/Photo"
import arrow from '../../../assets/arrow1.svg'

const StyledServiceWork = styled.section`


`

const Wrapper = styled.div`
margin-top: 40px;
border-radius: 30px;
border: 1px solid #C4C4C4;
padding: 56px 50px 50px 14px;
height: 400px;
@media ${({ theme }) => theme.media.desctop}{
  padding: 20px 30px 20px 14px;
  height: 100%;
}
@media ${({ theme }) => theme.media.tablet}{
  padding: 10px 10px 0 10px;
}
`


const ServisePhoto = styled(Photo)`
border-radius: 20px;
max-height: 394px;
transform: translateY(-45px);
@media ${({ theme }) => theme.media.desctop}{
  transform: translateY(0);
    margin-bottom:10px;
}
`



const ServiseWrapper = styled.div`
max-width: 380px;
align-self: center;
display:inline-block;
@media ${({ theme }) => theme.media.desctop}{
  text-align: center;
}

`

const ServiseHeading = styled.h3`
margin-bottom: 70px;
color: #000;
font-family: Roboto;
font-size: 35px;
font-style: normal;
font-weight: 700;
line-height: 1.3;
margin-top: 35px;
@media ${({ theme }) => theme.media.desctop}{
  font-size: 25px;
  margin-bottom: 30px;
  margin-top: 20px;
}
@media ${({ theme }) => theme.media.mobile}{
  font-size: 18px;
  margin-bottom: 20px;
  margin-top: 10px;
}
`
const ServiseText = styled.span`
font-size: 16px;
font-weight: 400;
line-height: 30px;

@media ${({ theme }) => theme.media.mobile}{
  font-size: 12px;

}

`
const ServiseLink = styled.a`
position: relative;
padding-right: 25px;
 color: #000;
font-family: Roboto;
margin-bottom: 10px;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 30px;
text-decoration: none;
display: inline-block;
&::before{
  content:'';
  background-image: url(${arrow});
  position: absolute;
  top: 6px;
  left: 125px;
  width: 27px;
  height: 22px;

  }
`







export const S = {
    StyledServiceWork,
    ServisePhoto,
    ServiseWrapper,
    ServiseHeading,
    ServiseText,
    ServiseLink,
    Wrapper,
}
