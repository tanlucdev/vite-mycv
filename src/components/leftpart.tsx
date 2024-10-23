import desktopLogo from '@/assets/img/logo/logo.png';
import { useEffect, useState } from 'react';
import { isMobile } from "react-device-detect";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";

interface IProps {
    hideLeftPart: boolean;
    setHideLeftPart: (value: boolean) => void;
}

const LeftPart = (props: IProps) => {
    const [activeTab, setActivetab] = useState<string>("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'skills', 'project', 'contact'];
            let currentTab = activeTab;

            for (let section of sections) {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const { top, bottom } = sectionElement.getBoundingClientRect();

                    // Check if section is in the viewport
                    if (top <= window.innerHeight / 2 && bottom > window.innerHeight / 2) {
                        currentTab = section;
                        break;
                    }
                }
            }

            if (currentTab !== activeTab) {
                setActivetab(currentTab);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup scroll event listener on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeTab]);

    useEffect(() => {
        const { hash } = window.location;
        if (hash) {
            const tab = hash.replace('#', "");
            setActivetab(tab);
            const section = document.querySelector(`${hash}`);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }, []);

    const handleClickTab = (tab: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        setActivetab(tab);
        const section = document.querySelector(`#${tab}`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => {
                window.location.hash = tab;
            }, 1000);
        }
    };

    return (
        <>
            <div className={props.hideLeftPart === true ? "arlo_tm_leftpart_wrap opened" : "arlo_tm_leftpart_wrap"}>
                <div className="leftpart_inner">
                    <div className="logo_wrap">
                        <a href="#"><img src={desktopLogo} alt="desktop-logo" /></a>
                    </div>
                    <div className="menu_list_wrap">
                        <ul className="anchor_nav">
                            <li>
                                <a href="#home"
                                    className={activeTab === 'home' ? "active" : ""}
                                    onClick={(event) => handleClickTab('home', event)}
                                >Home
                                </a>
                            </li>
                            <li>
                                <a href="#about"
                                    className={activeTab === 'about' ? "active" : ""}
                                    onClick={(event) => handleClickTab('about', event)}
                                >About
                                </a>
                            </li>
                            <li>
                                <a href="#skills"
                                    className={activeTab === 'skills' ? "active" : ""}
                                    onClick={(event) => handleClickTab('skills', event)}
                                >Skill
                                </a>
                            </li>
                            <li>
                                <a href="#project"
                                    className={activeTab === 'project' ? "active" : ""}
                                    onClick={(event) => handleClickTab('project', event)}
                                >Project
                                </a>
                            </li>
                            <li>
                                <a href="#contact"
                                    className={activeTab === 'contact' ? "active" : ""}
                                    onClick={(event) => handleClickTab('contact', event)}
                                >Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="leftpart_bottom">
                        <div className="social_wrap">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/de.kento1">
                                        <FaFacebookSquare />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/tanlucdev/">
                                        <SiInstagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/tanlucdev">
                                        <FiGithub />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/tanlucdev/">
                                        <FaLinkedin />
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    {!isMobile &&
                        <a
                            className={props.hideLeftPart ? "arlo_tm_resize opened" : "arlo_tm_resize"}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                props.setHideLeftPart(!props.hideLeftPart)
                            }} //toggle
                        >
                            <i className={props.hideLeftPart ? "xcon-angle-left opened" : "xcon-angle-left"}>
                            </i>
                        </a>
                    }
                </div>
            </div>
        </>
    );
}

export default LeftPart;