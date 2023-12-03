import { FlexWrapper } from "../../../components/FlexWrapper"
import { SectionTitle } from "../../../components/SectionTitle"
import { Text } from "../../../components/Text"
import { InnerImg } from "./InnerImg"
import ironMan from '../../../assets/images/ironMan.webp'
import time from '../../../assets/images/time.webp'
import butsy from '../../../assets/images/basc.webp'
import gerls from '../../../assets/images/gerls.webp'
import { BtnItem, Button } from "../../../components/Button"
import { MenuBtn } from "../../../components/menu/MenuBtn"
import { Container } from "../../../Container"
import { S } from "./Works_Styles"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"


type ItemsProps = {
    id: number
    text: string
    status: string
}

const items = [{ id: 1, text: 'All', status: 'all' }, { id: 2, text: 'UX/UI Design', status: 'design' }, { id: 3, text: 'Web Design', status: 'web' }, { id: 4, text: 'Front End Development', status: 'front' }];

const images = [{ id: 1, path: ironMan, alt: 'sport', type: 'design' }, { id: 2, path: time, alt: 'time', type: 'web' }, 
{ id: 3, path: butsy, alt: 'butsy', type: 'front' },
{ id: 4, path: gerls, alt: 'gerls', type: 'web' },
{ id: 5, path: butsy, alt: 'butsy', type: 'design' },
{ id: 6, path: gerls, alt: 'gerls', type: 'front' }
    // { id: 5, path: ironMan, alt: 'sport'},{ id: 6, path: time, alt: 'time' },{ id: 7, path: gerls, alt: 'gerls' },
    // { id: 8, path: ironMan, alt: 'sport' }, { id: 9, path: time, alt: 'time' },{ id: 10, path: butsy, alt: 'butsy' }
];


export const Works: React.FC = () => {
    const [typeNum, setTypeNum] = useState('all')
    // const [text, setArrayImages] = useState(()=> images)
    // let imagesMax = arrayImages.slice(0,4);
    function a(text: string) {
        setTypeNum(text)
    }
    let r = images.filter(item => {
        if (item.type === typeNum || typeNum === 'all') {
            return true
        }
    })
    return (

        <S.StyledWorks id='work'>
            <Container>
                <Text align='left' bottom='16'>Portfolio</Text>
                <SectionTitle align='left' bottom='75' >My recent works</SectionTitle>
                <MenuBtn typeNum={typeNum} a={a} isFetch items={items} />
                <FlexWrapper top='105' bottom='100' justify='center' wrap='wrap' gap={20}>
                    <AnimatePresence>
                        {r.map(item => <motion.div
                        style = {{ maxWidth: '545px',
                            width: '100%',  objectFit: 'cover'}}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={item.id}
                        >  <InnerImg key={item.id} src={item.path} alt={item.alt} /> </motion.div>)}
                    </AnimatePresence>
                </FlexWrapper>
                <FlexWrapper justify='center'><BtnItem size='20' name='See More' padding="65" color='#FFF'>See More</BtnItem></FlexWrapper>
            </Container>
        </S.StyledWorks>
    )
}

