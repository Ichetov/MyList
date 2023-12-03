import styled from "styled-components"
import { SectionTitle } from "../../../components/SectionTitle"
import { Cards } from "./Cards"
import phone from '../../../assets/images/phone.webp'
import gerls from '../../../assets/images/gerls.webp'
import time from '../../../assets/images/time.webp'
import { Text } from "../../../components/Text"
import { Container } from "../../../Container"
import { FlexWrapper } from "../../../components/FlexWrapper"
import { ServiseInner } from "./ServiseInner"
import { S } from "./Service_Styles"
import { Fade } from "react-awesome-reveal";

const ServiseData = [
    { id: 1, width: 554, src: phone, title: 'Research, Design, Prototype, and Animation', text: 'UX/ UI DESIGN' },
    { id: 2, width: 554, src: gerls, title: 'Implement UX design into live and user friendly', text: 'FRONT END DEVELOPMENT' },
    { id: 3, width: 554, src: time, title: 'I build landing pages and responsive websites and web App', text: 'RESPONSIVE DESIGN' },
]

export const Service: React.FC = () => {
    return (

        <StyleService id='service'>
            <Container>
                <Text bottom='16'>My service</Text>
                <SectionTitle bottom={95}>What I Do </SectionTitle>
                <Fade cascade={true} duration={2000}>
                    <Cards />
                </Fade>
                <Fade cascade={true} duration={1000}>
                    <S.StyledServiceWork>
                        {ServiseData.map((item) => {
                            return (
                                <S.Wrapper key = {item.id}>
                                    <FlexWrapper wrap='wrap' justify="space-around">
                                        <ServiseInner title={item.title} text={item.text} />
                                        <S.ServisePhoto width={item.width} src={item.src} />
                                    </FlexWrapper>
                                </S.Wrapper>
                            )
                        })}
                    </S.StyledServiceWork>
                </Fade>
            </Container>
        </StyleService>

    )
}



const StyleService = styled.section`
padding-top: 140px;
padding-bottom: 140px;
position: relative;
background-color: #fff;

@media ${({ theme }) => theme.media.tablet}{
    padding-bottom: 5px;
}


 @media ${({ theme }) => theme.media.desctop}{
    padding-top: 0;
}
`

