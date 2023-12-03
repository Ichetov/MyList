import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Button } from "../../../components/Button"

import { Container } from "../../../Container"
import { S } from "./Assis_Styles"

export const Assist:React.FC = () => {
    return (
        <S.StyledAssist>
            <Container>
                <S.BlockAssist>
                    <FlexWrapper align='center' justify={'space-between'} wrap = 'wrap'>
                        <S.TextInner>
                            <S.SectionTitle>Have any project in mind?</S.SectionTitle>
                            <S.SectionText>Let’s work together and I will help you by all my best.</S.SectionText>
                        </S.TextInner>
                        <Button name='Let’s talk' background='#FFF' color='#0FBF61' />
                    </FlexWrapper>
                </S.BlockAssist>
            </Container>
        </S.StyledAssist>
    )
}

