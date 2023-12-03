import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import polygon from '../../../assets/Polygon1.svg'

const StyledAssist = styled.section`
padding-top: 40px;
padding-bottom: 40px;
position:relative;
background-color: #fff;
 ${FlexWrapper}{
    @media ${({ theme }) => theme.media.desctop}{
        justify-content: space-around;
    }
    @media ${({ theme }) => theme.media.tablet}{
        justify-content: center;
    }
 }
`
const BlockAssist = styled.div`
border-radius: 15px;
background: #0FBF61;
padding: 72px 50px 72px 45px;
transform: translateY(120px);
background-image: url(${polygon});
background-repeat: no-repeat;
background-position: 65% bottom;
@media ${({ theme }) => theme.media.desctop}{
    text-align: center;
    transform: translateY(0);
    padding: 40px 25px 40px 25px;
}
@media ${({ theme }) => theme.media.mobile}{
    padding: 20px 15px 20px 15px;
}
 `


const SectionTitle = styled.h2`
font-size: 45px;
@media ${({ theme }) => theme.media.mobile}{
    font-size: 25px;
}
`
const TextInner = styled.div`
 color: #FFF;
 font-family: Roboto;
 font-weight: 500;
`

const SectionText = styled.p`
font-size: 18px;
line-height: 30px;
margin-bottom: 15px;
margin-top: 24px;
`

export const S = {
    StyledAssist,
    BlockAssist,
    SectionTitle,
    TextInner,
    SectionText
}