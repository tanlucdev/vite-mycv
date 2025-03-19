import { Col, Row } from 'antd'
import tsIcon from '@/assets/img/skill/typescript.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";
import "tailwindcss";
import html from '@/assets/img/skill/html.svg'
import css from '@/assets/img/skill/css.svg'
import js from '@/assets/img/skill/js.svg'
import react from '@/assets/img/skill/react.svg'
import express from '@/assets/img/skill/express.svg'
import figma from '@/assets/img/skill/figma.svg'
import framer from '@/assets/img/skill/framer.svg'
import github from '@/assets/img/skill/github.svg'
import mongo from '@/assets/img/skill/mongo.svg'
import mysql from '@/assets/img/skill/mysql.svg'
import next from '@/assets/img/skill/next.svg'
import node from '@/assets/img/skill/node.svg'
import npm from '@/assets/img/skill/npm.svg'
import postgresql from '@/assets/img/skill/postgresql.svg'
import postman from '@/assets/img/skill/postman.svg'
import redux from '@/assets/img/skill/redux.svg'
import tailwind from '@/assets/img/skill/tailwind.svg'
import typescript from '@/assets/img/skill/typescript.svg'

const logos = [
    {
        name: 'HTML',
        url: html,
    },
    {
        name: 'CSS',
        url: css,
    },
    {
        name: 'JS',
        url: js,
    },
    {
        name: 'React',
        url: react,
    },
    {
        name: 'Express',
        url: express,
    },
    {
        name: 'Figma',
        url: figma,
    },
    {
        name: 'Framer',
        url: framer,
    },
    {
        name: 'Github',
        url: github,
    },
    {
        name: 'Mongo',
        url: mongo,
    },
    {
        name: 'MySQL',
        url: mysql,
    },
    {
        name: 'Next',
        url: next,
    },
    {
        name: 'Node',
        url: node,
    },
    {
        name: 'NPM',
        url: npm,
    },
    {
        name: 'PostgreSQL',
        url: postgresql,
    },
    {
        name: 'Postman',
        url: postman,
    },
    {
        name: 'Redux',
        url: redux,
    },
    {
        name: 'Tailwind',
        url: tailwind,
    },
    {
        name: 'Typescript',
        url: typescript,
    },
]

const Skill = (props: any) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, margin: "-100px" })

    const containerVariants = {
         hidden: { opacity: 0 },
         visible: {
              opacity: 1,
              transition: {
                   staggerChildren: 0.2,
                   delayChildren: 0.2
              }
         }
    }

    const headerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
             opacity: 1,
             y: 0,
             transition: {
                  duration: 0.6,
                  ease: [0.4, 0.02, 0.2, 0.97]
             }
        }
   }

    return (
        <>
            {/* <div className="arlo_tm_section" id="skills" data-aos={props.animation}>
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Frontend Skills</h4>
                                </div>
                                <li>Interface design using Figma</li>
                                <li>Framework/Library: Bootstrap, JQuery, Antd, ReactJs</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <Row gutter={16}>
                                        <Col span={6}>
                                            <span>
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/html.svg" alt="" />
                                                <p>HTML</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span>
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg" alt="" />
                                                <p>CSS</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span>
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg" alt="" />
                                                <p>JavaScript</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span>
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg" alt="" />
                                                <p>React</p>
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Backend Skills</h4>
                                </div>
                                <li>Programming languages: Typescript</li>
                                <li>Framework: Express.js</li>
                                <li>Database: SQL, MongoDB</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <Row gutter={16}>
                                        <Col span={6}>
                                            <span>
                                                <img src={tsIcon} alt="" />
                                                <p>TypeScript</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span >
                                                <img src="https://img.icons8.com/nolan/64/express-js.png" alt="" />
                                                <p>ExpressJs</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span >
                                                <img src="https://img.icons8.com/color/480/mongodb.png" alt="" />
                                                <p>MongoDB</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span>
                                                <img src="https://img.icons8.com/color/480/my-sql.png" alt="" />
                                                <p>MySQL</p>
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> */}
            <motion.section ref={sectionRef} initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="w-full mx-auto min-h-screen bg-[#0F1012]  rounded-t-[80px] flex items-center justify-center flex-col overflow-hidden">
                    <div className="flex justify-center items-center h-full px-14">
                         <div className="grid gap-8 w-full mx-auto">
                              <motion.div variants={headerVariants} className="space-y-2 text-center">
                                   <p className="text-4xl font-bold text-green-300">🎉 SUPERPOWER 🎉</p>
                                   <p className="text-sm font-bold text-[#bababb]">which I have</p>
                              </motion.div>
                              <motion.h1 variants={headerVariants} className="text-2xl md:text-3xl lg:text-4xl font-medium leading-tight tracking-tight lg:leading-[1.2]  text-white text-center">
                                   Turning ideas into functional, user-friendly web experiences with a blend of logic, creativity, and innovation
                              </motion.h1>
                         </div>
                    </div>

                    <div
                         className="group relative mt-16 flex gap-6 overflow-hidden p-2"
                         style={{
                              maskImage:
                                   'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
                         }}
                    >
                         {Array(5)
                              .fill(null)
                              .map((index) => (
                                   <div
                                        key={index}
                                        className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
                                   >
                                        {logos.map((logo, key) => (
                                             <img
                                                  key={key}
                                                  src={logo.url}
                                                  className="h-10 w-28 px-2 "
                                                  alt={`${logo.name}`}
                                             />
                                        ))}
                                   </div>
                              ))}
                    </div>
               </motion.section>
        </>
    )
}
export default Skill;