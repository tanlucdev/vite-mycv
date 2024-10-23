import { TypeAnimation } from 'react-type-animation';
import kentoLogo from '@/assets/img/hero/kentoLogo.png'
const HomeCV = () => {
    const handleScrollAbout = () => {
        const section = document.querySelector('#about');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    return (
        <>
            <div className="arlo_tm_section" id="home">
                <div className="arlo_tm_hero_header_wrap">
                    <div className="arlo_tm_universal_box_wrap">
                        <div className="bg_wrap">
                            <div className="overlay_image hero jarallax" data-speed="0.1"></div>
                            <div className="overlay_color hero"></div>
                        </div>
                        <div className="content hero">
                            <div className="inner_content">
                                <div className="image_wrap">
                                    <img src={kentoLogo} alt="hero" />
                                </div>
                                <div className="name_holder">
                                    <h3>Nguyen Tan <span> Luc</span></h3>
                                </div>
                                <div className="text_typing">
                                    <p>I'm a
                                        {/* &thinsp; */}
                                        &nbsp;
                                        <TypeAnimation
                                            sequence={[
                                                // Same substring at the start will only be typed out once, initially
                                                'Web Developer',
                                                3000,
                                                'Software Engineer',
                                                3000
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            onPointerEnterCapture={undefined}
                                            onPointerLeaveCapture={undefined}
                                            repeat={Infinity} placeholder={undefined} />
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="arlo_tm_arrow_wrap bounce anchor">
                            <a href="#about" onClick={(e) => {
                                e.preventDefault();
                                handleScrollAbout();
                            }}><i className="xcon-angle-double-down"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomeCV;