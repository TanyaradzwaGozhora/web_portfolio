import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import Header from '../Header/Header';
const Unify = [{
  title: 'Unify',
  description: "This project was submitted for HackED 2021, with Akrash Sharma, Abeer Waheed, and David Parise. Due to the pandemic, we created a site that allows students to submit their discord handles and courses so that they can connect with students with similar courses as normal and so keeping the classroom socialization aspect that many students missed about in-person learning ongoing. I was involved across the stack",
    image: '/images/unify.png',
    tags: ['MongoDB', 'Express', 'Nodejs'],
  source: 'https://github.com/TanyaradzwaGozhora/unify',
  visit: 'https://github.com/TanyaradzwaGozhora/unify',
  id: 0,
}]
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {Unify.map(({id, image, title, description, tags, source, visit}) =>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>
              {title}
              <Hr/>
            </HeaderThree>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Deployment </ExternalLinks>
            <ExternalLinks href={source}>Code </ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;