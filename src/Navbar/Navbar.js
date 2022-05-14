import React, { useState } from 'react';
import { Link } from 'react-router-dom';



import '../global.css'
import './Navbar__toggler.css'

import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion"

const Path = (props) => (
  < motion.path 
      strokeWidth="3" 
      fill="transparent" 
      strokeLinecap="round" 
      {...props} />
);
const transition = { duration: 0.3 };


const Navbar = () => {
    const [links, setLinks] = useState("false");

 

          const TogglerHandler = (event) => {
              setLinks(!links);
              event.target.classList.toggle('togglerActive');
          };



    
   

  return (

       
      <Container> 

        <NavListHidden>
          <li>
				    <Link to="/"><span>Home</span></Link>
			    </li>
			    <li>
				    <Link to="/websites"><span>Websites</span></Link>
			    </li>
			    <li>
				    <Link to="/contact"><span>Contact</span></Link>
			    </li>
        </NavListHidden>
      

        <NavList className={`navbarLinks ${links ? 'true' :'navbarLinks__show'}`}>
		      <li>
				    <Link to="/"><span>Home</span></Link>
			    </li>
			    <li>
				    <Link to="/websites"><span>Websites</span></Link>
			    </li>
			    <li>
				    <Link to="/contact"><span>Contact</span></Link>
			    </li>
		    </NavList>

   

        <Toggle onClick={TogglerHandler}>
             <svg width="23" height="23" veiwBox="0 0 23 23">
                <Path animate={links ? "open" : "closed"} 
                initial={false} 
                variants={{
                     closed: { d: "M 2 2.5 L 20 2.5", stroke: "hsl(268, 100%, 37.6%)"},
                     open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(268, 100%, 37.6%)" }
                
                }} transition={transition}  
                />

                <Path 
                d="M 2 9.423 L 20 9.423"
                stroke="hsl(268, 100%, 37.6%)"
                animate={links ? "open" : "closed"}
                initial={false}
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                    transition={transition}  
                    />

                <Path animate={links ? "open" : "closed"} 
                initial={false} 
                variants={{
                     closed: { d: "M 2 16.346 L 20 16.346", stroke: "hsl(268, 100%, 37.6%)"},
                     open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(268, 100%, 37.6%)" }
                
                }} transition={transition}  
                />
            </svg>
        </Toggle>

    </Container>     

  );
};

export default Navbar;


const Container = styled.div`
width:100%;
height:fit-content;
background-color: #201f1f;
position: sticky;
display: block;


@media screen and (max-width: 768px) { 
  width:100%;
  height:50px;
  background-color: #201f1f;
  position: sticky;

}

`;

const NavList = styled.ul`

  list-style: none;
  padding: 15px 0;
  display: flex;
  justify-content: space-evenly;

  background: var(--gradient-background);
  -webkit-background-clip: text;

  @media screen and (max-width: 768px) { 
    display:none;
  }

  a {
    text-decoration: none;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: var(--font-family);
    font-size: 1.2rem;
    font-weight: 400;
    letter-spacing: .05rem;

 

   


      
    
}
  

`

const NavListHidden = styled.ul`


`


const Toggle = styled.div`


  border: 3px solid;
  border-color: var(--main-purple);
  margin-right: 15px;
  padding: 5px;
  background-color: transparent;
  cursor: pointer;
  height: 35px;
  width: 35px;
  display: none;
  align-self: center;

  @media screen and (max-width: 768px) { 
      display:flex;
  }


`










