import { Logo } from "../../components/logo/Logo"
import { FlexWrapper } from "../../components/FlexWrapper"
import { Container } from "../../Container";
import { MobileMenu } from "./MobileMenu";
import { MenuItem } from "./MenuItem";
import { S } from "./Header_Styles";
import React from "react";

const items = [{ id: 1, text: 'Home', href: 'home' }, { id: 2, text: 'About', href: 'about' }, { id: 3, text: 'Service', href: 'service' }, { id: 4, text: 'My work', href: 'work' }];

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
      }, []);
    return (
        <S.StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo />
                    {width < breakpoint ? <MobileMenu items={items} /> : <MenuItem items = {items}/>}  
                </FlexWrapper>
            </Container>
        </S.StyledHeader>
    )
}



