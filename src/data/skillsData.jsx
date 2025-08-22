// Fayl: src/data/skillsData.js

// We import the icons we need from the 'react-icons' library.
// Bizga kerakli ikonalarni 'react-icons' kutubxonasidan import qilamiz.
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { MdDevices } from "react-icons/md";

export const skillsData = [
  {
    id: 1,
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 2,
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJsSquare />,
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact />,
  },
  {
    id: 5,
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    id: 6,
    name: "Responsive Design",
    icon: <MdDevices />,
  },
];
