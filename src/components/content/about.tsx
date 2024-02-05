import kentoLogo from '../../assets/img/about/avt.jpg'
import myCv from '../../assets/CV_NguyenTanLuc.pdf'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    return (
        <>
            <div className="arlo_tm_section relative" id="about">
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Main informations about me</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div className="about_image_wrap parallax" data-relative-input="true">
                                        <div className="image layer" data-depth="0.1">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner" data-img-url={kentoLogo}></div>
                                        </div>
                                        <div className="border layer" data-depth="0.2">
                                            <img src="img/about/550x640.jpg" alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>Mình là
                                            &nbsp;
                                            <TypeAnimation
                                                sequence={[
                                                    // Same substring at the start will only be typed out once, initially
                                                    'Tấn Lực',
                                                    3000,
                                                    'lập trình viên website',
                                                    3000,
                                                ]}
                                                wrapper="span"
                                                cursor={true}
                                                speed={50}
                                                // style={{ fontSize: '2em', display: 'inline-block' }}s
                                                repeat={Infinity} placeholder={undefined} />
                                        </h4>
                                    </div>
                                    <div className="definition">
                                        <p>
                                            Xin chào! Mình tên là <strong>Lực</strong>.
                                            là sinh viên năm 4 của đại học Tôn Đức Thắng. Mọi người nhận xét mình là một người đam mê và tận tâm với công việc.
                                            <br /><br />
                                            Với chuyên môn kiến thức đã được học, mình mong muốn trở thành một thực tập sinh phát triển website. Mình sẽ cố gắng hoàn thành tốt nhiệm vụ được giao, học hỏi thêm kinh nghiệm nghề nghiệp và phấn đấu trở thành một lập trình viên giàu kinh nghiệm và tay nghề cao.</p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>Ngày sinh:</label> 28.07.2002</span>
                                            </li>
                                            <li>
                                                <span><label>Giới tính:</label> Nam</span>
                                            </li>
                                            <li>
                                                <span><label>Trường:</label> Đại học Tôn Đức Thắng</span>
                                            </li>
                                            <li>
                                                <span><label>Chuyên ngành: </label> Kỹ thuật phần mềm</span>
                                            </li>


                                            <li>
                                                <span><label>Mail:</label> <a href="mailto:tanlucdev@gmail.com">tanlucdev&#64;gmail.com</a></span>
                                            </li>
                                            <li>
                                                <span><label>Instagram:</label> <a href="https://www.instagram.com/tanlucdev/">@tanlucdev</a></span>
                                            </li>
                                            <li>
                                                <span><label>Github:</label> <a href="https://github.com/tanlucdev">@tanlucdev</a></span>
                                            </li>
                                            <li>
                                                <span><label>Linkedin:</label> <a href="https://www.linkedin.com/in/tanlucdev/">&#64;tanlucdev</a></span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="buttons_wrap">
                                        <ul>
                                            <li>
                                                <a href={myCv} download><span>Download CV</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;