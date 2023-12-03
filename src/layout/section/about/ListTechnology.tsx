import styled from "styled-components"
import arrow from '../../../assets/arrow.svg'




// const textTehnology = [{ id: 1, name: 'Angular' }, { id: 2, name: 'CSS,SASS' }, { id: 3, name: 'HTML' },
// { id: 4, name: 'Bootstrap 4,5' }, { id: 5, name: 'Figma' }, { id: 6, name: 'Adobe XD' }];

export const ListTechnologies = () => {
    return (
        <ListingTechnologies>
            <li>
                <ListItem>
                    <NameTechnology>Angular</NameTechnology>
                    <NameTechnology>HTML</NameTechnology>
                    <NameTechnology>Figma</NameTechnology>
                </ListItem>
            </li>
            <li>
                <ListItem>
                    <NameTechnology>Bootstrap 4,5</NameTechnology>
                    <NameTechnology>CSS,SASS</NameTechnology>
                    <NameTechnology>Adobe XD</NameTechnology>
                </ListItem>
            </li>
        </ListingTechnologies>
    )
}


const ListItem = styled.ul`
&:last-child{
    margin-right: 140px;
}
& > li{
  margin-bottom: 22px;
}
@media screen and (max-width: 930px){
    &:last-child{
        margin-right: 0;
    }
}
`

const ListingTechnologies = styled.ul`
display: flex;
justify-content: space-between;
margin-left: 30px;
margin-top: 25px;
@media screen and (max-width: 930px){
    justify-content: space-around;
}
`

const NameTechnology = styled.li`
position: relative;
  &::before{
  content:'';
  background-image: url(${arrow});
  position: absolute;
  top: 6px;
  left: -27px;
  width: 14px;
  height: 11px;

  }
`

