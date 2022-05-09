export const projects = [
  {
    title: 'Unify',
    description: "This project was submitted for HackED 2021, with Akrash Sharma, Abeer Waheed, and David Parise. Due to the pandemic, we created a site that allows students to submit their discord handles and courses so that they can connect with students with similar courses as normal and so keeping the classroom socialization aspect that many students missed about in-person learning ongoing.",
      image: '/images/unify.png',
      date:"2021-01",
      tags: ['MongoDB', 'Express', 'Nodejs'],
    source: 'https://github.com/TanyaradzwaGozhora/unify',
    visit: 'https://github.com/TanyaradzwaGozhora/unify',
    id: 0,
  },
    {
      title: 'stats265',
    description:"This package was inspired by Stats 265. As we went through the course we learned lots of distributions. I then decided to make a package capable of playing around with all the distributions, (visualisations showing models, how accurately those model estimates given data and calculating statistics of data e.g mean, standard deviation, etc). Currently, it offers 28% of the distributions we learnt.",
  image:'/images/265.png',
  date:"2021-06",
    tags: ['Python','MatPlotlib', 'Unittest'],
    source: 'https://github.com/TanyaradzwaGozhora/stats265',
    visit: 'https://pypi.org/project/stats265/',
    id: 1},
   
    {
      title: "Movie sentiment analysis app",
    description: "This application was made so as to learn how to use AWS SageMaker, in particular using it with PyTorch. Our model was a very simple one, which consists of a single layer RNN, thus giving us a lot of room for improvement if needed. Deployment was fully handled by AWS services such as Lambda, API gateway, and Sagemaker. Modelling and testing were done on AWS hosted notebooks. The dataset used was the AWS Dataset. I don’t have a live site for this App as it was a bit too pricey to keep the API endpoint open for long.",
      image:"/images/sentiment_analysis.jpg",
      tags:['Python', 'AWS Sagemaker', 'Pytorch'],
      source:"https://github.com/TanyaradzwaGozhora/Review-Sentiment-Analysis-App",
      id:2

    }, 
    {
      title: "FillActive Community App",
      description: "At the start of the Fall 2021 semester, I participated in a hackathon in which we developed a web App for FillActive. The app uses incentives and gamification to promote exercise for self-worth and to build a community among students, and teachers. We won the hackathon and received 3500CAD in Amazon Gift Cards. It was a great learning experience!",
      image:"/images/fillactive.png",
      tags:["Express", "Nodejs", "SQL"],
      source:"https://www.businesswire.com/news/home/20210922005727/en/Morgan-Stanley-Code-to-Give-Hackathon-Provides-Montreal-Nonprofits-DESTA-Fillactive-and-La-Tabl%C3%A9e-des-Chefs-with-Technology-Solutions-to-Drive-their-Essential-Community-Work",
      id:3
    },
    
];

export const papers = [{
  
  title: 'Stem Big data challenge',
  date:"2020-06",
  description: "Inspired by the Covid-19 pandemic, which was at the time yet to really unfold in Africa. Akrash Sharma, Xhiang Zhang, and I decided to investigate the correlation between flights and covid cases in these African countries. We figured that there should be a decent correlation by observing that the two most affected countries at the time were South Africa and Egypt, the major air traffic centers on the continent. We were pleased with the results as the linear regressions yielded some strong correlations with an R-squared 95%+",
  image: '/images/stem.jpg',
  tags: ['Data-Scraping','Latex', 'Pandas', 'Python'],
  source: '',
  visit: 'https://google.com',
  id: 3,
},
// Need to add the 469 Paper
];

export const TimeLineData = [
  { year: 2019, text: 'First Website and First year at UAlberta', },
  { year: 2020, text: 'First Research Paper and First Hackthon', },
  { year: 2021, text: 'First Internship and First Package', },
];

