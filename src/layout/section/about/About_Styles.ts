import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"

const AboutTest = styled.div`
grid-area: three;
font-size: 18px;
font-weight: 400;
line-height: 30px;
`

const PhotoWrapper = styled.div`
grid-area: two;
position: relative;
margin-top: 85px;
margin-left: 85px;
&::before{
content:'';
position:absolute;
border: 3px solid ${({ theme }) => theme?.colors.accent};
width: 280px;
height: 420px;
top: 20px;
left: -49px;
border-radius: 20px;
z-index: -1;
}
@media ${({theme})=> theme.media.desctop}{
    margin-top: 0;
    margin-bottom: 40px;
}
`

const Wrapper = styled.div`
padding-top: 140px;
padding-bottom: 60px;
display: grid;
grid-template-columns: 525px auto;
grid-template-rows: repeat(2, auto);
grid-template-areas:
'two one'
'two three';
@media ${({theme})=> theme.media.desctop}{
    grid-template-columns: minmax(200px, 1fr);
    grid-template-rows: repeat(3, auto);
    grid-template-areas:
    'one'
    'two'
    'three';
    justify-content: center;
    justify-items: center;
    padding-top: 20px;
  
}
`

const StyleAbout = styled.section`
position: relative;
background-color: #fff;
z-index:0;
${SectionTitle}{
    grid-area: one;
}
`


const AboutText = styled.p`
margin-bottom: 30px;

`

const AboutTechnologies = styled.div`
 max-width: 500px;
 margin: 0 auto;
`

const Text = styled.span`
color: #0FBF61;
`


export const S = {
    AboutTest,
    PhotoWrapper,
    Wrapper,
    StyleAbout,
    AboutText,
    AboutTechnologies,
    Text
}