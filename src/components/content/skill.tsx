import ProgressBar from "@ramonak/react-progress-bar";
import { Col, Row } from 'antd'
import tsIcon from '@/assets/img/skill/typescript.png'
const Skill = () => {
    return (
        <>
            <div className="arlo_tm_section" id="skills">
                <div className="arlo_tm_skills_wrap">
                    <div className="container">
                        <div className="inner_wrap">
                            <div className="leftbox">
                                <div className="arlo_tm_mini_title_holder">
                                    <h4>Frontend Skills</h4>
                                </div>
                                <li>Interface design using Figma</li>
                                <li>Framework/Library: Bootstrap, JQuery, Antd, React.JS</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <Row gutter={16}>
                                        <Col span={6}>
                                            <a href="https://www.w3schools.com/html/default.asp">
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/html.svg" alt="" />
                                                <p>HTML</p>
                                            </a>
                                        </Col>
                                        <Col span={6}>
                                            <a href="https://www.w3schools.com/html/default.asp">
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg" alt="" />
                                                <p>CSS</p>
                                            </a>
                                        </Col>
                                        <Col span={6}>
                                            <a href="https://www.w3schools.com/html/default.asp">
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg" alt="" />
                                                <p>JavaScript</p>
                                            </a>
                                        </Col>
                                        <Col span={6}>
                                            <a href="https://www.w3schools.com/html/default.asp">
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/react.svg" alt="" />
                                                <p>React</p>
                                            </a>
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
                                <li>Programming languages: Typescript, Python</li>
                                <li>Framework: Express, Nest.Js</li>
                                <li>Database: SQL, MongoDB</li>
                            </div>
                            <div className="rightbox">
                                <div className="progress_bar_wrap_total">
                                    <Row gutter={16}>
                                        <Col span={6}>
                                            <a href="https://www.w3schools.com/html/default.asp">
                                                <img src={tsIcon} alt="" />
                                                <p>HTML</p>
                                            </a>
                                        </Col>
                                        <Col span={6}>
                                            <a href="https://www.w3schools.com/html/default.asp">
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/css.svg" alt="" />
                                                <p>CSS</p>
                                            </a>
                                        </Col>
                                        <Col span={6}>
                                            <a href="https://www.w3schools.com/html/default.asp">
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg" alt="" />
                                                <p>JavaScript</p>
                                            </a>
                                        </Col>
                                        <Col span={6}>
                                            <a href="https://www.w3schools.com/html/default.asp">
                                                <img src="https://cdn.jsdelivr.net/gh/PKief/vscode-material-icon-theme@main/icons/javascript.svg" alt="" />
                                                <p>JavaScript</p>
                                            </a>
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