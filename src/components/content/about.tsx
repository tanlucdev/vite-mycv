import kentoLogo from '@/assets/img/about/avt.jpg'
import { TypeAnimation } from 'react-type-animation';
import { useRef, useEffect } from 'react';
import Parallax from 'parallax-js';
import Aos from 'aos';
import 'aos/dist/aos.css';
const About = (props: any) => {
    const sceneEl = useRef(null);
    useEffect(() => {
        if (sceneEl && sceneEl.current) {
            const parallaxInstance = new Parallax(sceneEl.current, {
                relativeInput: true,
                hoverOnly: true
            })

            parallaxInstance.enable();

            return () => parallaxInstance.disable();
        }
    }, [])

    return (
        <>
            <div className="arlo_tm_section relative" id="about" style={{ paddingTop: 100 }} data-aos={props.animation}>
                <div className="arlo_tm_about_wrapper_all">
                    <div className="container">
                        <div className="arlo_tm_title_holder">
                            <h3>About Me</h3>
                            <span>Main informations about me</span>
                        </div>
                        <div className="arlo_tm_about_wrap">
                            <div className="author_wrap">
                                <div className="leftbox">
                                    <div ref={sceneEl} className="about_image_wrap parallax" data-relative-input="true">
                                        <div className="image layer" data-depth="0.2">
                                            <img src={kentoLogo} alt="550x640" />
                                            <div className="inner" data-img-url={kentoLogo}
                                                style={{ backgroundImage: `url(${kentoLogo})` }}

                                            ></div>
                                        </div>
                                        <div className="border layer" data-depth="0.6">
                                            <img src={kentoLogo} alt="550x640" />
                                            <div className="inner"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="rightbox">
                                    <div className="arlo_tm_mini_title_holder">
                                        <h4>I'm
                                            {/* &thinsp; */}
                                            &nbsp;
                                            <TypeAnimation
                                                sequence={[
                                                    'Tấn Lực',
                                                    3000,
                                                    'Web Developer',
                                                    3000,
                                                ]}
                                                wrapper="span"
                                                cursor={true}
                                                speed={50}
                                                onPointerEnterCapture={undefined}
                                                onPointerLeaveCapture={undefined}
                                                repeat={Infinity}
                                                placeholder={undefined}
                                            />

                                        </h4>
                                    </div>
                                    <div className="definition">
                                        <p>
                                            Hello world! I'm <strong>Lực</strong>,
                                            I recently graduated with a degree in Software Engineering from Ton Duc Thang University. With the specialized knowledge I have gained throughout my academic journey, I am committed to diligently completing assigned tasks, continuously gaining professional experience, and striving to grow into a proficient and skilled Software Engineer.
                                            <br /><br />
                                            My long-term goal is to become a Senior Software Engineer, where I can contribute more deeply to critical projects and lead development teams.</p>
                                    </div>
                                    <div className="about_short_contact_wrap">
                                        <ul>
                                            <li>
                                                <span><label>D.o.b:</label> 28.07.2002</span>
                                            </li>
                                            <li>
                                                <span><label>Gender:</label> Male</span>
                                            </li>
                                            <li>
                                                <span><label>University:</label> Ton Duc Thang University</span>
                                            </li>
                                            <li>
                                                <span><label>Major: </label> Software Technology</span>
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
                                                <a href="https://drive.google.com/file/d/1k_rG7sAL7BERUhZG6A9UCVqaJ-MCJwvf/view?usp=sharing" download><span>View CV</span></a>
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