import React from 'react'

import styled from 'styled-components';


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import initFontAwesome from "../helpers/initFontAwesome";

initFontAwesome();

const Footer = () => {

  const [color, setColor] = React.useState("");
  const styles = {
    "text-align": "center",
    padding: "30px",
    color: color
  };

  return (
    <Container >
        
    <h1>Designed by Adam Macintyre</h1>

    <SocialIcons>

   <FontAwesomeIcon icon={['fab', 'facebook-f']} 
   style={styles}
   onMouseEnter={() => setColor("#3B5998")}
   onMouseLeave={() => setColor("")}
    />
    <FontAwesomeIcon icon={['fab', 'linkedin']}

    />

    <FontAwesomeIcon icon={['fab', 'github']} />

    </SocialIcons>

    </Container>
  )
}

export default Footer;


const Container = styled.div`

position: relative;
left: 0;
right: 0;
bottom:0;
background-color: var(--color-dark);
display: flex;
align-items: center;



& h1{
  padding: 10px 15px;
  font-size:var(--fontsize-small);
  font-weight: 100;
  color: var(--color-lightmode);
}

`

const SocialIcons = styled.div`

  font-size: 1.5rem;


    & svg{
      padding: 15px !important;
      color: white;
      transition: all 650ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;


        &:hover {
          transform: rotate(360deg);
          
          &:nth-child(2) {
            color:green ;
          }

        }
    }

`