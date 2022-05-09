import React ,{useEffect, useState} from 'react';

import { TitleDate, BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {papers} from '../../constants/constants';



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


// Our project constants for our large screen formatting at some point code a parity function to calculate fade direction
const Unify = [projects[0]];
const Stats265 =[projects[1]];
const StemData =[papers[0]];
const MovieAnalysis =[projects[2]];


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
      {Unify.map(({id, image, title, description, tags, source, visit, date}) =>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>
              {title}
              <TitleDate>
                <br/>
                {date}
              </TitleDate>
              <Hr/>
            </HeaderThree>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <br/>
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
      {Stats265.map(({id, image, title, description, tags, source, visit, date}) =>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>
              {title}
              <br/>
              <TitleDate>
                <br/>
                {date}
              </TitleDate>
              <Hr/>
            </HeaderThree>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <br/>
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
    <div data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          >
    <GridContainer>
      {StemData.map(({id, image, title, description, tags,  date}) =>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>
              {title}
              <TitleDate>
                <br/>
                {date}
              </TitleDate>
              <Hr/>
            </HeaderThree>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <br/>
            <TagList>
              {tags.map((tag, i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks onClick={()=>(window.location.href="documents/UNBDC_Project.pdf")}>Download </ExternalLinks>
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
      {MovieAnalysis.map(({id, image, title, description, tags, source, visit, date}) =>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>
              {title}
              <br/>
              <TitleDate>
                <br/>
                {date}
              </TitleDate>
              <Hr/>
            </HeaderThree>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <br/>
            <TagList>
              {tags.map((tag, i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
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
        <Section>
  <GridContainer>
    {projects.map(({id, image, title, description, tags, source, visit,date}) =>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>
              {title}
              <TitleDate>
                <br/>
                {date}
              </TitleDate>
              <Hr/>
            </HeaderThree>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <br/>
            <TagList>
              {tags.map((tag, i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            {/* If we have a link to a live sit then add it else don't */} 
                {visit?
                <>
                <ExternalLinks href={visit}>Deployment </ExternalLinks>
                <ExternalLinks href={source}>Code </ExternalLinks>
                </>
                :<ExternalLinks href={source}>
                  {/* If it's fillactive */}
                  {id===3?<>Article</>:<>Code</>} 
                </ExternalLinks> }
              
            
          </UtilityList>
        </BlogCard>))}
    </GridContainer>
    <GridContainer>

    {papers.map(({id, image, title, description, tags, source, visit,date}) =>(
        <BlogCard key={id}>
          <Img src={image}/>
          <TitleContent>
            <HeaderThree title>
              {title}
              <TitleDate>
                <br/>
                {date}
              </TitleDate>
              <Hr/>
            </HeaderThree>
          </TitleContent>
          <CardInfo>
            {description}
          </CardInfo>
          <div>
            <br/>
            <TagList>
              {tags.map((tag, i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks onClick={()=>(window.location.href="documents/UNBDC_Project.pdf")}>Download</ExternalLinks>
          </UtilityList>
        </BlogCard>))}

    </GridContainer>
    </Section>
      )
    }
    



};

export default Projects;