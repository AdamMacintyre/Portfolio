import React from 'react'

import styled from 'styled-components';

import Button from '../Button'

import Fade from 'react-reveal/Fade';
import WebsiteCard from '../components/WebsiteCard';
import ContactForm from '../components/ContactForm';
import BackgroundAnimation from '../helpers/BackgroundAnimation';

import { projects } from '../helpers/websitecardIndex';





const Home = () => {





  return (
    <Container style={{ paddingTop: "70px" }}>

      <Section>
        
      <TitlePageContainer>
        <Fade top delay={200}> 
        <p> Are you looking for Responsive, Fast Websites </p>
        </Fade>

        <Fade top delay={1200}>
        <p>No Unnecessary Bloated Files</p>
        </Fade>

        <Fade top delay={2400}>
        <p>Designs firstly with mobile and seo practises </p>
        </Fade>
      </TitlePageContainer>

        {/* <BackgroundAnimation /> */}
        <DownArrow src="./images/down-arrow.svg" />

        {/* <LineWrap >
          <LineReveal id="line-a">
            <div className='overlay'></div>
            <div className='line'></div>
          </LineReveal>

          <LineReveal id="line-b">
            <div className='overlay'></div>
            <div className='line' ></div>
          </LineReveal>

          <LineReveal id="line-c">
            <div className='overlay'></div>
            <div className='line' ></div>
          </LineReveal>
        </LineWrap> */}
      </Section>


      <Section>
     
      {projects.map((i) => {
        
				return (
          <Fade bottom delay={400} duration={2000}>
        <WebsiteCard 
          image={i.image}
          link={i.link}
          title={i.title}
          desc={i.desc}
          tags={i.tags}
          source={i.source}
          id={i.id}
        
        
        />
      </Fade>
        );
       
			})}

       

      </Section>


      <Section>
      <Fade left delay={550} duration={2000}>
        <ContactFormWrap>
          <ContactForm/>
        </ContactFormWrap>
        </Fade>
      </Section>


    </Container >
  )
}

export default Home;

const Container = styled.div`

`

const Section = styled.section`

position: relative;
height: 100vh;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;


padding-top: 50px;
 
&:nth-of-type(1){
  background: url("data:image/svg+xml,%3Csvg width='1280' height='710' xmlns='http://www.w3.org/2000/svg'%3E %3Cg fill='%237F7BFB' fill-rule='evenodd'%3E %3Cpath d='M0 63.354c47.677-2.931 102.14 12.343 163.387 45.822 91.87 50.22 126.954 158.927 248.81 226.016 121.856 67.09 217.644 28.645 324.582 86.582C843.72 479.71 882.997 594 979.392 646.458c64.263 34.971 130.87 56.185 199.821 63.641H0V63.354z'/%3E %3Cpath d='M0 1.393C50.612-3.2 109.835 13.082 177.667 50.234c101.749 55.73 130.439 163.5 265.397 237.95 134.958 74.45 204.648 26.67 323.085 90.963 118.436 64.293 142.832 176.85 249.59 235.062 71.173 38.808 167.927 70.771 290.261 95.89H0V1.393z' opacity='.7'/%3E %3C/g%3E %3C/svg%3E") left bottom/100% no-repeat fixed;
}
&:nth-of-type(2){
  background: url("data:image/svg+xml,%3Csvg width='615' height='554' xmlns='http://www.w3.org/2000/svg'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M463.283 528.726c45.144 0 95.716 8.237 151.717 24.712V0H41.584C28.58 76.038-4.694 126.702.957 203.448c16.342 221.959 215.179 325.278 462.326 325.278z' fill='%239592FB'/%3E %3Cpath d='M382.319 485.092c54.57 14.534 187.124 6.139 232.681-13.977V0H122.36c-16.232 41.585 18.088 107.04 18.088 154.372 0 203.855 45.087 278.309 241.87 330.72z' fill='%238B87FA'/%3E %3Cpath d='M443.883 440.71c54.208 0 128.702-54.567 171.117-81.896V0H231.198c-21.166 38.7-14.497 103.867-14.497 151.086 0 150.221 76.96 289.624 227.182 289.624z' fill='%237F7BFB'/%3E %3C/g%3E %3C/svg%3E") top right no-repeat fixed;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(2, minmax(0, 2fr));
  justify-items:center; 




}
&:nth-of-type(3){
  background: url("data:image/svg+xml,%3Csvg width='1280' height='233' xmlns='http://www.w3.org/2000/svg'%3E %3Cg fill='none' fill-rule='evenodd'%3E %3Cpath d='M1280 0c-167.463 0-449.312 114.933-639.815 114.933C449.68 114.933 173.4 0 0 0v233h1280V0z' fill='%237F7BFB'/%3E %3Cpath d='M1280 140.13C1112.537 140.13 830.503 42 640 42S173.4 140.13 0 140.13v93h1280v-93z' fill='%236E6ADD'/%3E %3C/g%3E %3C/svg%3E ") bottom/100% no-repeat fixed;
}
 

`


const TitlePageContainer = styled.div`

    & p{
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.18rem;
      padding: 25px 0;
    }

`


const DownArrow = styled.img`
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    display: block;
    margin auto;
    margin-bottom:5rem;
    
    @keyframes animateDown {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      
      40%{
        transform: translateY(5px);
      }
      
      60% {
        transform: translateY(3px)
      }
      
      }
`

const ContactFormWrap = styled.div`
  width: 100%;
  padding: 100px 0;
`


const LineWrap = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

`


const LineReveal = styled.div`
width: 120%;
height: 3px;
overflow:hidden;
position:absolute;


  .line{
    border: 3px dashed white;
    backface-visibility:hidden;
  }


 &#line-a {  
    
  left: 0;
  top: 60%;
  transform-origin: 0 0;
  transform: rotate(-50deg);
  
  .line {
    border-color: #ff9900;
  }
}

&#line-b {
  
  left: 0;
  bottom: 20%;
  transform-origin: 0 0;
  transform: rotate(-5deg);
  
  .overlay {
    animation-delay: .5s;
  }

  .line {
    border-color: #ff0099;
  }
}

 &#line-c {
  
  right: 10%;
  bottom: 0;
  transform-origin: 100% 0;
  transform: rotate(70deg);
  
  .overlay {
    animation-delay: 1s;
  }
  
  .line{
    border-color: #0099ff;
  }
}



.overlay{
  background: var(--color-dark);
  height: 10px;
  position: absolute;
  top:-5px;
  width: 100%;
  transform-origin: 100% 0;
  animation: wipe 3s ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1.000); // cubic
  //animation-timing-function: cubic-bezier(1.000, 0.000, 0.000, 1.000); // expo

}

@keyframes wipe {
  to {
    transform: scaleX(0);
  }
}




`


