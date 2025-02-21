//import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const navItems=[
    {label:"Home" ,href:"#hero"},
    {label:"About Me",href:"#aboutMe"},
    {label:"Work",href:"#work"},
    {label:"Contact",href:"#contact"},
]

export const skills=[
    "HTML","CSS", "SQL", "JAVA", "C++"
]

export const education=[
    {
        College:"St. Joseph Engineering College, Mangaluru",
        Degree: "B.E - Computer Science and Engineering",
        CGPA:"9.43 CGPA",
    },
    {
        College:"St. Aloysius PU College, Mangaluru",
        Degree: "PUC- PCMB",
        CGPA:"96.6%",
    },
    {
        College:"Carmel English School, Mangaluru",
        Degree: "School",
        CGPA:"93.8%",
    }
]

export const experience=[
    {title:"CyberSpaiens",
    Description:" Gained hands-on experience in Google Dorking, OSINT tools, and DNS records analysis to identify and report potential security vulnerabilities",
    Duration: "Oct 2023– Nov 20232"
    }
]

export const work=[
    {title:"Food Delivery System",
    description:" Developed a user-friendly food ordering website with streamlined home delivery and efficient driver management.",
    Tools:[" HTML,","CSS,","PHP,","mySQL,"],
},
{title:"Arecanut Disease Detection Web Application",
    description:"Developed a web application for predicting arecanut diseases using advanced machine learning models, enabling farmers to upload images of arecanut crops and receive accurate disease diagnoses and preventive measures.",
    Tools:["Python,", "Streamlit,", "Tensorflow,", "Macine Learning Models"],
},
]

export const socials=[
    {
        href:"#",
        logo:<FaLinkedin />
    },
    {
        href:"#",
        logo:<FaGithub />
    },
]