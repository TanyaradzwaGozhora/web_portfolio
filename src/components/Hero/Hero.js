import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typist from 'react-typist';




const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        
          <SectionTitle main center>
            Tanyaradzwa<br/>
            Gozhora
          </SectionTitle>
          <Typist cursor={{ show: false, hideWhenDone: true, hideWhenDoneDelay: 0 }}>

          <SectionText >
            Full-Stack Developer and<br/> ML Engineer
          <Typist.Backspace count={11} delay={200} />
            aspiring ML Engineer :)
          </SectionText>
        </Typist>
        
        <Button onClick={()=>window.location="#about"}>Learn More</Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;