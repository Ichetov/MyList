import { Photo } from "../../../components/Photo"
import photo from '../../../assets/images/photo.webp'
import { SectionTitle } from "../../../components/SectionTitle"
import { ListTechnologies } from "./ListTechnology"
import { Container } from "../../../Container"
import { S } from "./About_Styles"
import { Fade } from "react-awesome-reveal";


export const About: React.FC = () => {
    return (
        <S.StyleAbout id='about'>
            <Container>
                <S.Wrapper>
                    <S.PhotoWrapper>
                        <Photo width={280} height={420} src={photo} />
                    </S.PhotoWrapper>
                    <SectionTitle align="left" bottom="37">About Me</SectionTitle>
                    <Fade cascade={true} duration = {3000}>
                        <S.AboutTest>
                            <S.AboutText>
                                Hello! My name is Vadim Ichetowkin and I am a <S.Text>UX/UI designer </S.Text>
                                and <S.Text>Front End Developer</S.Text>. I enjoy creating things that live on the internet.
                                An experienced Software Engineer with a demonstrated history of working in the
                                Computer Software industry. Skilled in Web Design, UX/UI design, and Front-end
                                Development. Specialize in Information Security and software engineering, creating
                                dynamic and beautiful web pages. I have been in the field for nearly 5 years, and
                                have been loving every minute of it.
                            </S.AboutText>
                            <S.AboutTechnologies>

                                <span>Here are a few technologies I’ve been working with recently:</span>
                                <ListTechnologies />
                            </S.AboutTechnologies>
                        </S.AboutTest>
                    </Fade>
                </S.Wrapper>
            </Container>
        </S.StyleAbout>
    )
}

