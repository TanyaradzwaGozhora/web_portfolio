import React ,{useEffect, useState} from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';




function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}


// Our project constants
const Unify = [{
  title: 'Unify',
  description: "This project was submitted for HackED 2021, with Akrash Sharma, Abeer Waheed, and David Parise. Due to the pandemic, we created a site that allows students to submit their discord handles and courses so that they can connect with students with similar courses as normal and so keeping the classroom socialization aspect that many students missed about in-person learning ongoing.",
    image: '/images/unify.png',
    tags: ['MongoDB', 'Express', 'Nodejs'],
  source: 'https://github.com/TanyaradzwaGozhora/unify',
  visit: 'https://github.com/TanyaradzwaGozhora/unify',
  id: 0,
}];
const Stats265 =[{
  title: 'stats265',
description:"This package was inspired by Stats 265. As we went through the course we learned lots of distributions. I then decided to make a package capable of playing around with all the distributions, (visualisations showing models, how accurately those model estimates given data and calculating statistics of data e.g mean, standard deviation, etc). Currently, it offers 28% of the distributions we learnt.",
image:'/images/265.png',
tags: ['Python', "MatPlotlib",'Unittest'],
source: 'https://github.com/TanyaradzwaGozhora/stats265',
visit: 'https://pypi.org/project/stats265/',
id: 1}];


// to be added
const StemData =[{
  
  title: 'Stem Big data challenge',
  description: "Inspired by the Covid-19 pandemic, which was at the time yet to really unfold in Africa. Akrash Sharma,Xhiang Zhang, and I decided to investigate the correlation between flights and covid cases in these African countries. We figured that there should be a decent correlation by observing that the two most plagued countries at the time were SA and Egypt(the two most busy countries airwise). We were pleased with the results as the linear regressions yielded some strong correlations (R-squared 95%+)",
  image: '/images/4.jpg',
  tags: ['R','Latex', 'Pandas', 'Python'],
  source: 'https://google.com',
  visit: 'https://google.com',
  id: 3,
}
];


const Projects =() =>  {
 
  const { height, width } = useWindowSize();

  if (width > 910){ 
  return (
  <Section grid nopadding id="projects">
    <div>
    <SectionDivider/>
    <SectionTitle main>Projects</SectionTitle>
    
    </div>
    <div></div>
    




    {/* Only if the screen is large enough width is > 650px */}
    <div data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          >
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
    </div>

    <div data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          >
    <GridContainer>
      {Stats265.map(({id, image, title, description, tags, source, visit}) =>(
        <BlogCard key={id}>
          <Img src="images/265.png"/>
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
    </div>
    </Section>
  )}

    else{
      return (
  <GridContainer>
    {projects.map(({id, image, title, description, tags, source, visit}) =>(
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
        </BlogCard>))}
    </GridContainer>
      )
    }
    



};

export default Projects;