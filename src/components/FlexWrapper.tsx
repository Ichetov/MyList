import styled from "styled-components";



type FlexWrapperPropsType = {
  direction?: string
  justify?: string
  align?: string
  wrap?: string
  gap?: string | number
  bottom?: string | number
  top?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
display: flex;
flex-direction: ${({direction})=> direction ?? 'row'};
justify-content:${({justify})=> justify ?? 'flex-start'};
align-items:    ${({align})=> align ?? 'stretch'};
flex-wrap:      ${({wrap})=> wrap ?? 'nowrap'};
gap:            ${({gap})=> gap ?? '0'}px;
margin-bottom:  ${({bottom})=> bottom ?? '0'}px;
margin-top:     ${({top})=> top ?? '0'}px;
height: 100%;
align-content: center;
`