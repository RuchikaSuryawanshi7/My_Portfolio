import { v4 as uuidv4 } from 'uuid';
import HackHarvard from '../images/hackharvard.jpg';
import SmartHack from '../images/smart-hack.jpg';
import DataGrind from '../images/dat-grindWinner.jpg';
import Devfest from '../images/devfest.jpg';
import Stem from '../images/Vodafone-stem.jpg';
import GoogleSolutionChallenge from '../images/gsc.png';
import Scholarship from '../images/girlscript.jpg';
import HapeAI from '../images/shapeAI.jpg';
import WAppreciation from '../images/womenTechNetwork.jpg';

const achivement = [
  {
    id: uuidv4(),
    name: 'Google Solution Challenge 2021',
    desc:
      'Selected as one of the top 50 semi-finalist teams from around the world for the Google Solution Challenge 2021. Google provided mentorship to help us improve our final project. We also released our project on the Playstore and received over 500+ downloads.',
    img: GoogleSolutionChallenge,
  },
  {
    id: uuidv4(),
    name: 'HackHarvard Hackathon Winner',
    desc:
      'Won HACK HARVARD Hackathon 2021. It is global hackathon hosted by Harvard University. I worked on Heathcare theme and worked on a Project for 36 hours with Flutter, tensorflow, Google cloud and lot more.',
    img: HackHarvard,
  },
  {
    id: uuidv4(),
    name: 'Smart Hack Stage I Winner',
    desc:
      'IIT Kanpur selected me for the Smart Hack Hackathon Finale. I received the top grade in the entire college and won the Smart Hack Stage 1 competition.',
    img: SmartHack,
  },
  {
    id: uuidv4(),
    name: 'Data Day Grind 2.0 hackathon Winner',
    desc:
      'Won Data Day Grind 2.0 Hackathon 2021 fo best use of Google Cloud.  Because the hackathons topic is data, we must use the data to produce something valuable.For the healthcare subject, I worked on the Yoga poses dataset',
    img: DataGrind,
  },
  {
    id: uuidv4(),
    name: 'Devfest Flutter Quiz Winner',
    desc:
      'DevFest India is the largest yearly developer festival in India, hosted by Google Developer Groups. I won the Flutter Quiz and some GDG India goods.',
    img: Devfest,
  },
  {
    id: uuidv4(),
    name: 'Best Website Winner',
    desc:
      ' My team and I won Best Website Presentation for a website we built in less than four hours for Vodafone’s Global Code Like a Girl programme #codelikeagirl to Encourage more girls in STEM.',
    img: Stem,
  },
  {
    id: uuidv4(),
    name: 'GirlScript Scholarship',
    desc:
      'Got a scholarship from Girlscript Foundation to improve my technical abilities and learn new skills with the help of mentors assigned to our Batch',
    img: Scholarship,
  },
  {
    id: uuidv4(),
    name: 'WomenTech Network Letter of Appreciation',
    desc:
      'Got a letter of appreciation from WomenTech Network​ to support womens in Technology, WomenTech Network​ is a​ community that promotes​ gender diversity in tech.',
    img: WAppreciation,
  },
  {
    id: uuidv4(),
    name: 'ShapeAI Letter of Appreciation',
    desc:
      'Got appreciation from Shape AI for performing well in the course project.',
    img: HapeAI,
  },
];

export default achivement;
