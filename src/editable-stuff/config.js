// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  firstName: "Dinudya",
  middleName: "Heshan",
  lastName: "Amarasooriya",
  message: " Maybe this is the way to the future! ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/Dinudya-Amarasooriya",
    },
    {
      image: "fa-facebook",
      url: "https://web.facebook.com/profile.php?id=61552217804704",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/dinudya-heshan-b70874277/",
    },
  ],
};


const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Dinudya.png"),
  imageSize: 375,
  message:
    "I am Dinudya Amarasooriya. I'm learning a full-stack web development course initiated by Extraordinary Thinkers. I also have knowledge about progamming languages like Python, Java, C and more. I'm educating in R/Mahinda Vidyalaya",
  resume: "https://drive.google.com/file/d/1RVNQf3092czy_TIsij7GPZxYP08hlOml/view?usp=sharing",
};


const repos = {
  show: true,
  heading: "Projects",
  gitHubUsername: "Dinudya-Amarasooriya",
  reposLength: 20,
  specificRepos: [],
};
// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML", value: 90 },
    { name: "CSS", value: 75 },
    { name: "JavaScript", value: 45 },
    { name: "Java", value: 45 },
    { name: "Python", value: 85 },
    { name: "UI/UX", value: 50 },
    { name: "MYSQL", value: 70 },
    { name: "WordPress", value: 80 },
  ],
  softSkills: [
    { name: "Logo designinig", value: 95 },
    { name: "poster designe", value: 75 },
    { name: "cover page", value: 65 },
    { name: "Visiting card", value: 75 },
    { name: "invitation card", value: 75 },
    { name: "thank you card", value: 80 },
    { name: "calender designe", value: 60 },
    { name: "3D Modeling", value: 90 },
  ],
};


// CONTACTS SECTION
const contact = {
  show: true,
  heading: "Contacts",

};

// FOOTER
const getInTouch = {
  show: true,
  message:
    "I am willing to work as a web developer. If you have any available positions, have any questions, or just want to say hello, please email me at ",
  email: "dinudyaheshanofficial@gmail.com",
};


export { navBar, mainBody, about, repos, skills, contact, getInTouch };
