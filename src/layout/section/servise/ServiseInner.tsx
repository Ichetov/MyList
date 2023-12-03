import styled from "styled-components"
import { S } from "./Service_Styles"


type ServiseInnerPropsType = {
  text: string
  title: string
}

export const ServiseInner = ({text, title}: ServiseInnerPropsType)=>{
    return(
      <S.ServiseWrapper>
        <S.ServiseText>{text}</S.ServiseText>
        <S.ServiseHeading>{title}</S.ServiseHeading>
        <S.ServiseLink href='#'>Learn More</S.ServiseLink>
      </S.ServiseWrapper>
    )
}


