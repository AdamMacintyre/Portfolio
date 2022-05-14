import React from 'react';
import styled from 'styled-components';

import emailjs from 'emailjs-com';
import{ init } from '@emailjs/browser';
init("K0CvYnvf774TqbG36");



const Contact = () => {

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_nbaznpm', '010101_Template_id', e.target, 'K0CvYnvf774TqbG36')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		e.target.reset();
		};

  return (
    		<Container style={{ paddingTop: "70px" }}>
			<h1> Contact </h1>
			<Form onSubmit={sendEmail} id="contact-form" method="POST">
				<input type="text" className="form-control" placeholder='subject' name='subject' />
					
					<input name="name" placeholder="Enter name..." type="text" />
				
					<input name="email" placeholder="Enter email..." type="email" />
				
					<textarea rows="5" placeholder="Enter message..." name="message" required />
					<button type="submit"> Send Message</button>
				</Form>
			</Container>
  );
};

export default Contact;


const Container = styled.div `
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction:column;
  	align-items: center;
	padding-top: 50px;
	
	

	& h1{
		color: var(--color-darkLight);
		font-size: 3.5rem;
		letter-spacing: 0.3rem;
		font-weight: 100;
	}

`

const Form = styled.form`

		display: flex;
		flex-direction: column;
    	width: min(500px, 100%, 50vw);  
		height: auto;
		padding: 30px;

		& input{
			cursor: pointer;
			height: 80px;
			width: 100%;
			background: transparent;
			border: none;
			border-bottom: 1px solid #a5a5a5;
			border-color: grey;
			color: grey;
			font-size: 1.3rem;
			transition: all 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

				&:hover {
					color: var(--color-lightmode);
					border-color:var(--color-lightmode);
				}
				&:focus {
					color: var(--color-lightmode);
					border-color: var(--color-lightmode)
				}
		}

		& textarea{
		resize: none;
		color: var(--color-lightmode);
		font-size: 1rem;
		cursor: pointer;
		margin-top: 15px;
		height: auto;
		width: 100%;
		background: transparent;
		border: none;

		border-bottom: 1px solid #a5a5a5;
		color: #9d9d9d;
		text-align: center;
		transition: all 550ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
		text-transform: capitalize;

		&:hover {
			color: var(--color-lightmode);
					border-color:var(--color-lightmode);
		}
		&:focus {
			color: var(--color-lightmode);
			border-color: #9d9d9d;
		}

		}


		& input::placeholder,
		textarea::placeholder {
			font-weight: 400;
			font-family: var(--font-family);
			text-transform: capitalize;
			font-size: var(--fontsize-regular);
			letter-spacing: 0.1rem;

		
		}

		


	& input:focus,
	textarea:focus {
		outline: none;
	}

	& label {
		margin-top: 15px;
		color: grey;
	}

	& button {
		margin-top: 40px;
		width: 140px;
		height: 40px;
		border-radius: 6px;
		background-color: var(--color-dark);
		color: whitesmoke;
		font-size: var(--fontsize-regular);
		cursor: pointer;
		border: 1px solid;
		border-color:var(--color-mainpurple);
		transition: all 750ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

		&:hover{
		background-color: var(--color-darkLight);
		border:var(--color-darkLight);
		

	}
	}
	

	
	

`



