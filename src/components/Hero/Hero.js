import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome to <br/>
          my portfolio(to be replaced)
        </SectionTitle>
        <SectionText>
          # my bio (I'm dadada)
        </SectionText>
        #If someone wants to hire you or check out more of your work 
        <Button onClick={()=>window.location="#about"}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;