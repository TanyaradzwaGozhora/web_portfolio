import React from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      
      <LinkList>
        <LinkColumn>
          <LinkTitle >
          <LinkItem href="mailto:tanyaradzwagozhora@gmail.com">tanyaradzwagozhora@gmail.com </LinkItem>
          
          </LinkTitle>
          <p></p>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Small wins ~ Julius Nanai<br></br>
          {/* <Slogan>An <em>attempted</em> commit a day keeps the boredom away :)<br></br> */}

          <br></br>
          
          
          Strongly inspired by <a  href="https://github.com/adrianhajdin/portfolio_website"> 
          this repo</a>
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/TanyaradzwaGozhora">
        <AiFillGithub size="3rem"/>
      </SocialIcons>

      <SocialIcons href="https://www.linkedin.com/in/tanyaradzwa-gozhora-8941b519a/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>

{/* Not on twitter anymore :( */}
      {/* <SocialIcons href="https://twitter.com/MeTaGeGo">
        <AiFillTwitterCircle size="3rem"/>
      </SocialIcons> */}
        </SocialContainer>
      </SocialIconsContainer>
      <style jsx>{`
        a {
          color: aliceblue;
        }
      `}
      </style>
    </FooterWrapper>
  );
};

export default Footer;
