import { Col, Row } from 'antd'
import tsIcon from '@/assets/img/skill/typescript.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Skill = (props: any) => {
    // useEffect(() => {
    //     Aos.init({ duration: 1000 });
    // }, []);
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
            </div>
        </>
    )
}
export default Skill;