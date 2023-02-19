import React from 'react'
import styled from 'styled-components'
import { useTheme } from '../../context/themeContext'
import { SectionLayout } from '../../styles/Layouts'
import ServiceItem from '../ServiceItem/ServiceItem'
import Title from '../Title/Title'
import { code, design, desktop } from '../../utils/Icons'


function Services() {
    const theme = useTheme()
    return (
        <ServicesStyled id='services' theme={theme}>
            <Title name={'Services'} desc={'I always Offer Discipline of Projects Showcasing to My Current Clients and do Whatever Instrctions They give me.'} />
            <div className="services-con">
                <ServiceItem 
                    icon={design} 
                    title={'Web Design'}
                    bg={theme.colorPurple}
                    shadow={theme.shadowPurple}
                    desc={'I love building websites with Reactjs as UI/UX design to An amazing Approach to my Potential Clients.'}
                />
                <ServiceItem 
                    icon={desktop}
                    title={'Landing Pages'}
                    bg={theme.colorGreenDark}
                    shadow={theme.shadowGreen}
                    desc={'In the Journey of Making Responsive Websites, Landing Pages with HTML, CSS, JavaScript Gives me Additional Credits.'}
                />
                <ServiceItem 
                    icon={code}
                    title={'Web Development'}
                    shadow={theme.shadowPrimary}
                    bg={theme.colorPrimary}
                    desc={'Curently am Learning about OPENai and how I can Intergrate it To My Projects To A better Approach, MERN Stack is What I have Recently Dived in.'}
                />
            </div>
        </ServicesStyled>
    )
}

const ServicesStyled = styled(SectionLayout)`
    background: ${(props) => props.theme.colorBgGrad};
    .services-con{
        margin-top: 3.5rem;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 2rem;
    }
`;

export default Services