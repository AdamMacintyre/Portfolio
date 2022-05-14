import React from 'react'
import styled from 'styled-components';



function WebsiteCard({image, link, title, desc, tags, visit, id}) {
  return (

    <CardContainer id="projects" key={id}>
        
        <WebCardContainer >
		    <WebCardImg src={image} alt={title}/>

		    <CardTitle>
		    	<h2>{title}</h2>
		    </CardTitle>

		    <CardInfo className="card-info">{desc}</CardInfo>
            <MadeWith>
            <div>
                {tags}
            </div></MadeWith>
		    
		    <CardLinks>
		    	<div href={visit}>Code</div>

		    	<a href={link}>
                <div >Source</div>
                </a>
		    </CardLinks>

        </WebCardContainer>
        


   
    </CardContainer>

  )
}

export default WebsiteCard

const CardContainer = styled.div`
    width: 100%;
    max-width: 400px;

`

const WebCardContainer = styled.div`


background: #fff;
border: 1px solid;
border-color: var(--color-mainpurple);
border-radius: 0.5rem;
box-shadow: rgb(0 0 0/ 49%) 0px 26px 30px -10px, rgb(0 0 0/ 53%) 0px 16px 10px -10px;
text-align: center;
color: var(--color-dark)
`

const WebCardImg = styled.img`
    max-height: 100%;
    max-width: 100%;
    margin: 0;
    border-radius: 0.5rem;
`
const CardTitle = styled.div`
    padding: 15px 0;
`
const CardInfo = styled.div`

`
const MadeWith = styled.div`

`

const CardLinks = styled.div`
    display: flex;
    justify-content: space-around;

`


