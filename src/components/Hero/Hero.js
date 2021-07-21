import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typist from 'react-typist';
import {AiOutlineDownload} from 'react-icons/ai'




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
            Front-end Developer and<br/> ML Engineer
          <Typist.Backspace count={11} delay={200} />
            aspiring ML Engineer :)
          </SectionText>
        </Typist>
        
        <Button onClick={()=>(window.location.href="documents/Tanya.pdf")} target="_blank">
          Download Resume
          <AiOutlineDownload/>
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;