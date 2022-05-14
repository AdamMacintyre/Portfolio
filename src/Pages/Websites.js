import React from 'react'
import styled from 'styled-components';


import WebsiteCard from '../components/WebsiteCard';
import { projects } from '../helpers/websitecardIndex';


const Websites = () => {
  return (
    <Container className='website__container' style={{ paddingTop: "70px" }}>
   {projects.map((i) => {
				return (
        <WebsiteCard 
          image={i.image}
          link={i.link}
          title={i.title}
          desc={i.desc}
          tags={i.tags}
          source={i.source}
          id={i.id}
        
        
        />
        );
			})}
      

  
    </Container>
  )
}

export default Websites;


const Container = styled.div `
display: grid;
grid-template-columns: repeat(2, [col-start] 1fr);
grid-gap: 10px;
justify-items:center; 
padding:50px 10px;

& .website__card {
  width: min(500px, 100%, 50vw);  
  height: fit-content;
  border: 1px solid black;
  height:fit-content;
  }

& img{
  max-width:100%;
  max-height:100%;
}


`