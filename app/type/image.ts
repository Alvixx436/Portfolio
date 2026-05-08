import { FaReact } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { FaBootstrap, FaWindows } from "react-icons/fa";
import { SiDotnet, SiLaravel, SiMysql, SiTailwindcss } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
export type TechStack = {
  name: string;
  logo: IconType;
  color: string;
};
export type Project = {
  ID: number;
  image: string;
  title: string;
  description: string;
  About?: string;
  Overview?: string;
  techStack?: TechStack[];
};
export const images: Project[] = [
  {
    ID: 1,
    image: "/image/ts1.png",
    title: "Ticketing System",
    description: "Manage and track support tickets efficiently.",
    About:
      "This Ticketing System is designed to streamline and automate the entire support process by allowing teams to efficiently create, assign, monitor, and resolve tickets in a centralized platform that improves communication and workflow organization.",
    Overview:
      "A comprehensive system built to manage and track support tickets efficiently from creation to resolution while improving team collaboration, accountability, and response time.",
    techStack: [
      { name: "ASP.NET (MVC)", logo: SiDotnet, color: "text-purple-500" },
      { name: "Bootstrap", logo: FaBootstrap, color: "text-purple-600" },
      { name: "SQL Server", logo: SiMysql, color: "text-blue-600" },
    ],
  },

  {
    ID: 2,
    image: "/image/Hr1.png",
    title: "HR Management System",
    description: "Centralized employee and payroll management.",
    About:
      "The HR Management System is built to centralize all human resource operations including employee records, attendance tracking, leave management, and payroll processing into a single efficient platform that reduces manual workload and improves accuracy.",
    Overview:
      "A centralized HR solution that helps organizations efficiently manage employees, attendance, leave requests, and payroll processes while improving productivity and simplifying administrative tasks.",
    techStack: [
      { name: "React", logo: FaReact, color: "text-sky-500" },
      { name: "Laravel", logo: SiLaravel, color: "text-red-500" },
      { name: "SQL Server", logo: SiMysql, color: "text-blue-600" },
      { name: "Tailwind", logo: SiTailwindcss, color: "text-cyan-400" },
      { name: "Filament", logo: SiLaravel, color: "text-pink-500" },
    ],
  },

  {
    ID: 3,
    image: "/image/Ms1.png",
    title: "Production Monitoring System",
    description: "Real-time monitoring of production workflows.",
    About:
      "This Production Monitoring System is developed to provide real-time visibility into manufacturing processes by tracking workflow status, machine performance, and production output to ensure efficiency and quick decision-making.",
    Overview:
      "A real-time monitoring platform that tracks production workflows, performance metrics, and operational status to help improve efficiency and ensure smooth manufacturing operations.",
    techStack: [
      { name: "C# WinForms", logo: TbBrandCSharp, color: "text-purple-600" },
      { name: "SQL Server", logo: SiMysql, color: "text-blue-600" },
    ],
  },

  {
    ID: 4,
    image: "/image/PTS.png",
    title: "Trim Cover Recording System",
    description: "Record and manage trim cover data for production.",
    About:
      "The Trim Cover Recording System is built to accurately record, store, and manage trim cover production data in an organized database, helping ensure consistency, traceability, and efficiency in manufacturing operations.",
    Overview:
      "A production data management system designed to record and organize trim cover information efficiently, ensuring accurate tracking and improved production workflow management.",
    techStack: [
      { name: "C# WinForms", logo: TbBrandCSharp, color: "text-purple-600" },
      { name: "SQL Server", logo: SiMysql, color: "text-blue-600" },
    ],
  },

  {
    ID: 5,
    image: "/image/BLS.png",
    title: "Box Label Recording System",
    description: "Record and manage box label data for production.",
    About:
      "The Box Label Recording System is designed to digitally capture, store, and manage box label information used in production and logistics processes, ensuring better accuracy, traceability, and organization of labeling data.",
    Overview:
      "A system that manages box label records in production environments by digitizing label data to improve tracking accuracy and streamline warehouse and manufacturing operations.",
    techStack: [
      { name: "C# WinForms", logo: TbBrandCSharp, color: "text-purple-600" },
      { name: "SQL Server", logo: SiMysql, color: "text-blue-600" },
    ],
  },

  {
    ID: 6,
    image: "/image/AiMonitoring.png",
    title: "Vision Suite Monitoring System",
    description: "Monitor and manage vision suite data for production.",
    About:
      "The Vision Suite Monitoring System is developed to monitor and analyze vision-based inspection data in real time, helping production teams detect issues early, maintain quality standards, and improve overall system reliability.",
    Overview:
      "A monitoring system that tracks vision suite data in real time to support quality control processes and enhance production accuracy through continuous data analysis and reporting.",
    techStack: [
      { name: "C# WinForms", logo: TbBrandCSharp, color: "text-purple-600" },
      { name: "SQL Server", logo: SiMysql, color: "text-blue-600" },
    ],
  },
  {
    ID: 7,
    image: "/image/ouMon.png",
    title: "Line Output Monitoring",
    description: "Monitor and manage vision suite data for production.",
    About:
      "The Vision Suite Monitoring System is developed to monitor and analyze vision-based inspection data in real time, helping production teams detect issues early, maintain quality standards, and improve overall system reliability.",
    Overview:
      "A monitoring system that tracks vision suite data in real time to support quality control processes and enhance production accuracy through continuous data analysis and reporting.",
    techStack: [
      { name: "React", logo: FaReact, color: "text-sky-500" },
      { name: "Laravel", logo: SiLaravel, color: "text-red-500" },
      { name: "SQL Server", logo: SiMysql, color: "text-blue-600" },
      { name: "Tailwind", logo: SiTailwindcss, color: "text-cyan-400" },
    ],
  },
];
