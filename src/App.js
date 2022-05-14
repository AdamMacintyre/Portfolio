
import React, { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Footer, Home, Websites, Contact} from './helpers/pageImporter';

import { motion, AnimatePresence } from "framer-motion"
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSun } from "@fortawesome/free-solid-svg-icons"
import { faMoon } from "@fortawesome/free-solid-svg-icons"
import { gsap } from "gsap"


const animation = gsap.timeline({
  paused: true,
  reversed: true,
  ease: "expo.inOut",
  duration: 0.01,
})



const Path = (props) => (
  < motion.path 
      strokeWidth="3" 
      fill="transparent" 
      strokeLinecap="round" 
      {...props} />
);
const transition = { duration: 0.3 };


function App() {




    const menuRef = useRef()


    const [links, setLinks] = useState(false);

          const TogglerHandler = (event) => {
              setTimeout(()=>{ 
                (setLinks(!links))
            }, 300)
              
          };


        

    
    
  





       


          const wrapperRef = useRef()

          useEffect(() => {
        
            const circle = wrapperRef.current.querySelector(".circle")       

            animation
              .to(circle, { x: "2.38rem" })       
              .to(document.body, { backgroundColor: "#212121" }, "<")   
              .to(document.body, { color: "var(--color-lightmode)" }, "<")     

          })
        

          const circleClickHandler = () => {
            animation.reversed() ? animation.play() : animation.reverse()
          }






  return (
  
   

    <div className="App">
   
      <Router>
        <Nav> 

        <AnimatePresence initial={false} >
        {links && (

          <motion.div className='motionMenu' 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1,  
            x: ['-100px',  '0px'] 
          
          }}
          exit={{ x: -100, opacity: 0, transition: { duration: 0.5 } }}
          transition={{
            ease: [0.03, 0.01, 0.01, .01],
            
            duration: 0.2,
          
            
            
            
          }}
          >

            <NavListHidden onClick={() => setLinks(!links)}  >
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

        </motion.div>
        )}
      </AnimatePresence>


          {/* className={`navbarLinks ${links ? 'true' :'navbarLinks__show'}`} */}
          <NavList >
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
       



            <Wrapper ref={wrapperRef}>
              <Toggle onClick={circleClickHandler}>
                <div>
                  <FontAwesomeIcon icon={faSun} className="sun" />
                </div>
                <div>
                  <FontAwesomeIcon icon={faMoon} className="moon" />
                </div>
                <Circle className={'circle'}></Circle>
              </Toggle>
            </Wrapper>

            <Toggler onClick={TogglerHandler}>
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
            </Toggler>

        </Nav>     
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='websites' element={<Websites />} />
          <Route exact path='contact' element={<Contact />} />

        </Routes>

        
      </Router>
        
      <Footer />
    </div>


  );
}

export default App;





const Nav = styled.nav`
  height: 70px;
  position: fixed;
  display:flex;
  align-items: center;
  padding: 0 20px;
  background-color: #201f1f;
  position: fixed;
  top:0;
  left:0;
  right:0;
  z-index:1000;

  border-bottom: 1px solid;
  border-color: var(--color-mainpurple);
  

@media screen and (max-width: 768px) { 


}

`;

const NavList = styled.ul`

  list-style: none;
  padding: 15px 0;
  padding-right: 35px;
  display: flex;
  flex: 1;
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

 

    span{
      position: relative;

        &:after{
        content:"";
        height: 2px;
        background: var(--gradient-background);  
        position: absolute;
        left: 0;
        right: 0;   
        bottom: -6px;
        opacity: 0;
        transform-origin: left center; 
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);              
        }
      }

        &:hover {
          span:after{
            transform: scaleX(1);
            opacity: 1;
          }
        } 
  }
  

`

const NavListHidden = styled.ul`
display: none;
list-style: none;
width: 100vw;
position: absolute;
padding: 25px 0 25px 25px;
letter-spacing: 0.12rem;
left: 0;
background: #fff;
top: 2.2rem;
left: -2rem;
width:335px;
text-transform: capitalize;

@media screen and (min-width: 281px) and (max-width: 768px){
display: flex;
flex-direction: column;
align-items: flex-start;

}

li{
    cursor: pointer;
    list-style: none;
    color: var(--dark-purpleText);
    font-size: 1.1rem;
    font-weight: 400;
    text-decoration: none;
    margin: 5px 0;
    padding: 3px 0;
   
   

        span{
            display: flex;
        }
  
}


`



const Wrapper = styled.div`



`

const Toggle = styled.div`

width: 3.5rem;
height: 1rem;
border-radius: 3rem;
position: relative;
cursor: pointer;
display: flex;
justify-content: space-between;
align-items: center;
justify-items: end;
padding-top: 2px;


  &:before{
    content: '';
    border-radius: 3rem;
    border: 1px solid ;
    border-color: var(--color-mainpurple);
    
    
    top: -10px;
    left: -10px;
    bottom: -10px;
    right: -10px;
    position: absolute;
    z-index:-1;

  }

   div:nth-of-type(1) {
    color: yellow;
  }

  svg{
    font-size: 1.3rem;
  }

  div:nth-of-type(1) {
    color: #ecc52a;
  }
  div:nth-of-type(2) {
    color: #d0c98b;
  }

`

const Circle = styled.div`
width: 1.1rem;
height: 1rem;
background: #fff;
border-radius: 50%;
position: absolute;
top: 50%;
left:0%;
transform: translateY(-50%);
box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.6);

  &:before{
    border-radius: 3rem;
    content: '';
    background: var(--gradient-background);
    top: -10px;
    left: -10px;
    bottom: -10px;
    right: -10px;
    position: absolute;
    z-index:-1;
    

  }

`

const Toggler = styled.div`

  outline: 0;
	border: none;
	cursor: pointer;
	background-color: transparent;
	position: absolute;
	top: 1rem;
	right: 0;
	height: 55px;
	width: 70px;
	display: none;
    padding: 10px 35px 16px 0px;

    @media screen and (max-width: 768px) { 
      display: flex;
    
    }

`

const ToggleSpan = styled.span`

cursor: pointer;
border-radius: 1px;
height: 3px;
width: 30px;
background: #ffffff;
position: absolute;
display: block;
content: '';
transition: all 300ms ease-in-out;

    &:before{
      top: -10px;
    }
    &:after{
      bottom: -10px;
    }


`

