
import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper"
import { Icon } from "../../../components/icon/Icon"
import { Container } from "../../../Container";
import { S } from "./Footer_Styles";


const Img = [{ id: 1, iconId: 'codeSvg' }, { id: 2, iconId: 'inst' }, { id: 3, iconId: 'Be' }, { id: 4, iconId: 'Pe' }];

export const Footer: React.FC = () => {
    return (
        <S.StyledFooter >
            <Container>
                <S.Wrapper>
                    <FlexWrapper  justify='space-between'>
                        <S.TextFooter>Designed and developed by Rostam Sadiqi 2021</S.TextFooter>
                        <S.SocialIconsList>
                            {Img.map(item => <S.SocialItem key={item.id}><a><Icon viewBox="0 0 25 25" iconId={item.iconId} /></a></S.SocialItem>)}
                        </S.SocialIconsList>
                    </FlexWrapper>
                </S.Wrapper>
            </Container>
        </S.StyledFooter>
    )
}


