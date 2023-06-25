import React, { useEffect, useRef } from 'react';
import ProjectBox from './ProjectBox';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface Project {
  position: string;
  image: string;
  projectName: string;
  projectType: string;
}

// Initialize GSAP and register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const projects: Project[] = [
  {
    position: "left",
    image: "https://assets.website-files.com/63340fda42637d92b8eadc6c/63b749fdbb5fc662c26df00c_custom.png",
    projectName: "Custom Production",
    projectType: "Video Production"
  },
  {
    position: "right",
    image: "https://assets.website-files.com/63340fda42637d92b8eadc6c/63b74b10bb5fc652446dfef0_foxy.png",
    projectName: "Ecommerce Website",
    projectType: "Web Development"
  },
  {
    position: "left",
    image: "https://assets.website-files.com/63340fda42637d92b8eadc6c/63e69b1be6f45752980a7300_main%20-%C2%A0rave.png",
    projectName: "Mobile App Design",
    projectType: "UI/UX Design"
  },
  {
    position: "right",
    image: "https://assets.website-files.com/63340fda42637d92b8eadc6c/63b74b22cfd7c2c854ac9408_elgroup.png",
    projectName: "Logo Redesign",
    projectType: "Graphic Design"
  },
  {
    position: "left",
    image: "https://assets.website-files.com/63340fda42637d92b8eadc6c/63e69b2bce4fe75bd9c3658d_main%20%E2%80%93%C2%A0aiwa.png",
    projectName: "Social Media Campaign",
    projectType: "Marketing"
  }
];

const ProjectsShowcase: React.FC = () => {
  const containerRef = useRef(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const container = containerRef.current;

      const tl = gsap.timeline();
      tl.to('.left', {
          x: '5%',
          scrollTrigger: {
            trigger: container,
            scrub: 1.6,
            start: 'top center',
            end: 'bottom center',
          },
        })
        .to('.right', {
          x: '-5%',
          scrollTrigger: {
            trigger: container,
            scrub: 1.6,
            start: 'top center',
            end: 'bottom center',
          },
        })
        .play();

      return () => {
        if (tl) {
          tl.kill();
        }
      };
    }
  }, []);

  return (
    <div className="w-screen bg-primary-dark flex justify-center">
      <div className="w-10/12 work-container flex flex-col" ref={containerRef}>
        {projects.map((project, index) => (
          <ProjectBox key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
