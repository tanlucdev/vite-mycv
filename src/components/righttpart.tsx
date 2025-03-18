import About from "./content/about";
import HomeCV from "./content/homecv";
import '../styles/style.scss';
import Skill from "./content/skill";
import Project from "./content/project";
import Contact from "./content/contact";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}

const Rightpart = (props: IProps) => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);
    return (
        <>
            <div className={props.hideLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"}>
                <div className="rightpart_inner">
                    <HomeCV animation="fade-right" />
                    <About animation="fade-right" />
                    <Skill animation="fade-right" />
                    <Project animation="fade-right" />
                    <Contact animation="fade-right" />
                </div>
            </div>
        </>
    )
}
export default Rightpart;