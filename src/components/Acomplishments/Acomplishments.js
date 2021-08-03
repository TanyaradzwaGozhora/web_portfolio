import React from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import {CountUp} from 'use-count-up';

const data = [
  { number: 23, text: 'Open Source Projects'},
  { number: 2, text: 'Freelance Projects' },
  {number: 1, text:"Package"},
  {number:1, text:"Academic Paper"}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Projects Summary</SectionTitle>
    <Boxes>
      {data.map((card, index)=>(
        <Box key={index}>
          <BoxNum>
          <CountUp isCounting end={card.number} duration={4.5} /></BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
