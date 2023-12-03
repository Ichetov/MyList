import styled from "styled-components";


type TextPropsType = {
align?: string
bottom?: string | number
}

export const Text = styled.span<TextPropsType>`
color: #494949;
font-family: Roboto;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 30px;
text-align: ${({align})=> align ?? 'center'};
margin-bottom: ${({bottom})=> bottom ?? 0 }px;
display: block;
`