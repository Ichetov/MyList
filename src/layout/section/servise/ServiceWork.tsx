import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { ServiseInner } from "./ServiseInner"
import { Photo } from "../../../components/Photo"
import { S } from "./Service_Styles"


type ServiceWorkPropsType = {
    width: number | string
    src: string
    alt: string
    title: string
    text: string
}

export const ServiceWork = ({ width, src, alt, title, text}: ServiceWorkPropsType) => {
    return (
        <S.StyledServiceWork>
            <FlexWrapper  wrap='wrap' justify = 'space-around'>
                <ServiseInner title={title} text={text} />
                <S.ServisePhoto  width = {width} src={src} alt={alt} />
            </FlexWrapper>
        </S.StyledServiceWork>
    )
}


