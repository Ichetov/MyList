import styled from "styled-components";
import { font } from "../styles/Common";


type SectionTitlePropsType = {
    bottom?: string | number
    align?: string
}

export const SectionTitle = styled.h2<SectionTitlePropsType>`
font-family: Roboto;
font-size: 40px;
font-weight: 700;
line-height: 30px;
color: #0FBF61;
text-align: ${({align})=> align ?? 'center'};
margin-bottom: ${({bottom})=> bottom ?? 0}px;
@media ${({ theme }) => theme.media.tablet}{
    margin-bottom: 35px;
}
@media ${({ theme }) => theme.media.mobile}{
    font-size: 35px;
}
`