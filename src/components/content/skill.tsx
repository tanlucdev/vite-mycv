import { Col, Row,Popover } from 'antd'
import tsIcon from '@/assets/img/skill/typescript.png'
import { useInView, motion } from "framer-motion";
import { useRef } from "react";

import html from '@/assets/img/skill/html.svg';
import css from '@/assets/img/skill/css.svg';
import js from '@/assets/img/skill/js.svg';
import react from '@/assets/img/skill/react.svg';
import express from '@/assets/img/skill/express.svg';
import figma from '@/assets/img/skill/figma.svg';
import framer from '@/assets/img/skill/framer.svg';
import github from '@/assets/img/skill/github.svg';
import mongo from '@/assets/img/skill/mongo.svg';
import mysql from '@/assets/img/skill/mysql.svg';
import next from '@/assets/img/skill/nextjs.svg';
import node from '@/assets/img/skill/node.svg';
import npm from '@/assets/img/skill/npm.svg';
import postgresql from '@/assets/img/skill/postgresql.svg';
import postman from '@/assets/img/skill/postman.svg';
import redux from '@/assets/img/skill/redux.svg';
import tailwind from '@/assets/img/skill/tailwind.svg';
import typescript from '@/assets/img/skill/typescript.svg';
import './skill.scss'
import 'aos/dist/aos.css';
const Skill = (props: any) => {
    const sectionRef = useRef(null);
    return (
        <>
            <div className="arlo_tm_section" id="skills" data-aos={props.animation}>
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
                                    <Row gutter={[16, 16]}>
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
                                        <Col span={6} >
                                            <span>
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg" alt="" />
                                                <p>React</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span>
                                                <img src={figma} alt="" />
                                                <p>Figma</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span>
                                                <img src={tailwind} alt="" />
                                                <p>Tailwind</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span>
                                                <img src={framer} alt="" />
                                                <p>Framer </p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span>
                                                <img src={redux} alt="" />
                                                <p>Redux</p>
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
                                <li>Database: SQL, MongoDB, Postgresql</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <Row gutter={[16, 16]}>
                                        <Col span={6}>
                                            <span>
                                                <img src={tsIcon} alt="" />
                                                <p>TypeScript</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span >
                                                <img src="https://img.icons8.com/nolan/64/express-js.png" alt="" />
                                                <p>Express.js</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span>
                                                <img src={node} alt="" />
                                                <p>Node.js</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span>
                                                <img src={next} alt="" />
                                                <p>Next.js</p>
                                            </span>
                                        </Col>
                                        <Col span={6}>
                                            <span>
                                                <img src={npm} alt="" />
                                                <p>Npm</p>
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
                                        <Col span={6}>
                                            <span>
                                                <img src={postgresql} alt="" />
                                                <p>Postgresql</p>
                                            </span>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}
export default Skill;