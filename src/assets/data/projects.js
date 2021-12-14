import { v4 as uuidv4 } from 'uuid';
import Freak from '../images/freak-app.jpg';
import AddictX from '../images/addictx-app.jpg';
import NetworkFoster from '../images/networkFoster.jpg';
import VCanvas from '../images/virtualCanvas.jpg';
import SVisualiazer from '../images/sorting-visualizer.jpg';
import RPortfolio from '../images/portfolio.jpg';
import Webgenix from '../images/webgenix.jpg';
import ChatApp from '../images/chatApp.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Freak - Your AI Fitness Assistant App',
    desc:
      'FREAK APP is primarily intended to boost a persons immune system, which is critical in the Covid 19 pandemic that the globe is currently dealing with.The app aims to improve people physical and mental health in order to boost their immune systems and overall well-being.',
    img: Freak,
    link: 'https://github.com/RuchikaSuryawanshi7/AI-Fitness_Assistant',
  },
  {
    id: uuidv4(),
    name: 'AddictX - Online Addiction Recovery App',
    desc: 'Addict-X is a team project that my team and I developed for the Google Solurtion Challenge, where our project was chosen as one of the top 50 teams from around the world to solve the UN SDG goal of good health and well-being.',
    img: AddictX,
    link: 'https://github.com/RuchikaSuryawanshi7/AddictX-App_Google_Solution_Challenge_2021',
  },
  {
    id: uuidv4(),
    name: 'Sorting Visualizer',
    desc: 'This project sorting visualizer has a very basic user interface that allows users to choose the sort method, the amount of inputs in the range, and divide them randomly before displaying a bar graph visualisation by sorting them using the algorithm chosen.',
    img: SVisualiazer,
    link: 'https://github.com/RuchikaSuryawanshi7/Sorting-Visualizer',
  },
  {
    id: uuidv4(),
    name: 'NetworkFoster - Students Networking Platform',
    desc: 'Its a social networking platform for students to connect with other students who share their interests, as well as discover mentors in their field and ask them questions. They can also use their feed to share content and achievements.',
    img: NetworkFoster,
    link: 'https://github.com/RuchikaSuryawanshi7/Network_Foster',
  },
  {
    id: uuidv4(),
    name: 'Virtual Canvas',
    desc: 'Its a virtual paint application that allows us to draw various shapes, figures, and text on a canvas with our fingertips in the air. I used the python mediapipe hand tracking module to detect hand movement and openCV to capture the visual of hands for this.',
    img: VCanvas,
    link: 'https://github.com/RuchikaSuryawanshi7/VRDraw',
  },
  {
    id: uuidv4(),
    name: 'React Portfolio Website',
    desc: 'Its a personal portfolio website including all of my professional experience, accomplishments, and educational information. To create this website, I used the React javascript framework, which has features such as DOM, props, and routers.',
    img: RPortfolio,
    link: 'https://github.com/RuchikaSuryawanshi7/Portfolio_Website',
  },
  {
    id: uuidv4(),
    name: 'Encrypted Chap Application',
    desc: 'Ita PHP - based chat application in which users can communicate with one another and all data is protected.To store the data, we created our own custom encrypted method',
    img: ChatApp,
    link: 'https://github.com/RuchikaSuryawanshi7/Encrypted-Chap-Application',
  },
  {
    id: uuidv4(),
    name: 'Webgenix-Learning Site',
    desc: 'Our team built Webgenix while participating in the Vodafone Girls in STEM Program, where we learnt HTML, CSS, and Javascript. The website was built in about four hours.',
    img: Webgenix,
    link: 'https://github.com/RuchikaSuryawanshi7/Webgenix',
  },
];

export default projects;
