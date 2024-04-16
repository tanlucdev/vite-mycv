import About from "./content/about";
import HomeCV from "./content/homecv";
import '../styles/style.scss';
import Skill from "./content/skill";
import Project from "./content/project";
import Contact from "./content/contact";

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}

const Rightpart = (props: IProps) => {
    return (
        <>
            <div className={props.hideLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"}>
                <div className="rightpart_inner">
                    <HomeCV />

                    {/* <!-- ABOUT --> */}
                    <About />
                    {/* <!-- /ABOUT --> */}

                    {/* <!-- SKILLS --> */}
                    <Skill />
                    {/* <!-- /SKILLS --> */}

                    {/* <!-- SERVICES --> */}
                    <Project />
                    {/* <!-- /SERVICES --> */}

                    {/* <!-- CONTACT & FOOTER --> */}
                    <Contact />
                    {/* <!-- /CONTACT & FOOTER --> */}

                </div>
            </div>
        </>
    )
}
export default Rightpart;