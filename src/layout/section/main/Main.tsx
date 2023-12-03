import styled, { css } from 'styled-components'
import man from '../../../assets/images/my.webp'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Photo } from '../../../components/Photo'
import { Button } from '../../../components/Button'
import { Container } from '../../../Container'
import { Icon } from '../../../components/icon/Icon'
import { S } from './Main_Styles'
import Typewriter from 'typewriter-effect'
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (
        <S.StyledMain id = 'home'>
            <Container>
                <FlexWrapper wrap='wrap' justify='space-around'>
                    <S.StylesText>
                        <S.MainGreeting>Hello, I’m</S.MainGreeting>
                    
                        <S.MainName><Typewriter
                            options={{
                                strings: ['Ichetowkin Vadim'],
                                autoStart: true,
                                loop: true,
                                delay: 200,
                            }}
                        /></S.MainName>
                        <S.MainText>I’m a UX/UI designer and Front End Developer based in
                            Moscow, Russia! <span><Icon viewBox="0 0 512 512" iconId='flag' width='15' height='15' /></span>.  I love designing, coding, creating
                            and building stuff.
                        </S.MainText>
                        <Button bottom={15} name='Send Email' color='#151D41' />
                    </S.StylesText>
                    <Tilt  tiltAngleXInitial={20} tiltAngleYInitial={20}>
                       <Photo width='548' height='390' src={man} alt="Фото 'призадумался'" /> 
                    </Tilt>
                    
                </FlexWrapper>
            </Container>
        </S.StyledMain>
    )
}

