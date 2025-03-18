import { Button, Modal } from 'antd';
import { useState } from 'react';
import { FaHotel } from "react-icons/fa";
import { BsArrowRight } from 'react-icons/bs'
import { GiHouse } from "react-icons/gi";
import { BsTicketPerforatedFill } from "react-icons/bs";
import { BsTranslate } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { Image } from 'antd'
import Item from 'antd/es/list/Item';
import translateImg from '@/assets/img/projects/translate.png'
import studystreamImg from '@/assets/img/projects/studystream.png'
import trelloImg from '@/assets/img/projects/trello.png'

interface IProject {
    image: JSX.Element;
    title: string;
    shortDescription: string;
    detail: {
        description: string,
        frontend: string,
        backend: string,
        member: number,
        role: string,
        github: string,
        image: string,
        items: string[]
    }
}


const Project = (props: any) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [dataDetail, setDataDetail] = useState<IProject | null>(null);
    const [previewImage, setPreviewImage] = useState<string[]>([]);


    // const toggleImages = () => {
    //     setShowImages(!showImages);
    // };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const dataProjects: IProject[] = [
        {
            image: <img src={studystreamImg} alt="" style={{ border: '5px solid #bdc3c7 ', borderRadius: '10px' }} />,
            title: "StudyStream",
            shortDescription: "StudyStream is an online community and platform designed specifically for people who are passionate about self-study and are constantly looking for ways to improve their learning performance.",
            detail: {
                description: "Build a movie ticket booking website.",
                frontend: "ReactJs, TailwindCSS, MUI",
                backend: "Node.js, Express.js",
                member: 2,
                role: "Developer",
                github: "https://study-stream-fe.vercel.app/",
                image: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                items: [
                    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                ]
            },
        },
        {
            image: <img src={trelloImg} alt="" style={{ border: '5px solid #bdc3c7 ', borderRadius: '10px' }} />,
            title: "Trello Clone",
            shortDescription: "This Trello clone web app enables teams to manage tasks and collaborate in real-time. Users can create customizable boards, organize tasks into lists and cards, and drag and drop to update progress easily.",
            detail: {
                description: "Build a website for room management",
                frontend: "ReactJs, MUI",
                backend: "Node.js",
                member: 1,
                role: "Developer",
                github: " https://github.com/tanlucdev/trello-web",
                image: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                items: [
                    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                ]
            },
        },
        {
            image: <img src={translateImg} alt="" style={{ border: '5px solid #bdc3c7 ', borderRadius: '10px' }} />,
            title: "YooDict",
            shortDescription: "A user-friendly dictionary website for effortless learning with interactive flashcards and personalized dictionaries. Discover vocabulary easily. Accessible and simple, designed to help you learn languages faster.",
            detail: {
                description: "A user-friendly dictionary website facilitating effortless learning through interactive features such as flashcards and personalized dictionaries. Discover and master new vocabulary effortlessly. Accessible, intuitive, and designed to enhance language acquisition.",
                frontend: "React.js",
                backend: "Node.js, Express.js",
                member: 2,
                role: "Developer",
                github: "https://github.com/HocPhamThai/DictionaryProject",
                image: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                items: [
                    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                ]
            },
        }

    ]

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    }
    return (<>
        <Modal
            title={dataDetail && dataDetail.title ? <strong>Project {dataDetail.title}</strong> : ""}
            open={isModalOpen}
            onOk={() => handleCloseModal()}
            onCancel={() => handleCloseModal()}
            footer={null}
            maskClosable={false}
        >
            {dataDetail &&
                <ul>
                    <li> <b>Frontend:</b> {dataDetail.detail.frontend}</li>
                    <li> <b>Backend:</b> {dataDetail.detail.backend}</li>
                    <li><b>Member:</b> {dataDetail.detail.member}</li>
                    <li><b>Role:</b> {dataDetail.detail.role}</li>
                    <li>
                        <b>Visit: </b>
                        <a href={dataDetail.detail.github} target='_blank'>
                            {dataDetail.detail.github}
                        </a>
                    </li>
                </ul>
            }
        </Modal>
        <div className="arlo_tm_section" id="project" data-aos={props.animation}>
            <div className="arlo_tm_services_wrap">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>My Project</h3>
                        <span>Projects have been completed</span>
                    </div>
                    <div className="list_wrap">
                        <ul>
                            {dataProjects.map((item, index) => {
                                return (
                                    <li key={`${index}-project`}>
                                        <div
                                            className="inner" title="View detail"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                                setDataDetail(item)
                                                setIsModalOpen(true);
                                            }}
                                        >
                                            <div className="icon" style={{ borderRadius: '10%' }}>
                                                {item.image}
                                                {/* <img style={{ borderRadius: '10%' }} src="https://enkay.live/assets/digital-bank-DoL6y4Q8.png" alt="" /> */}
                                            </div>
                                            <div className="title_service">
                                                <h3 style={{ fontWeight: '800', marginTop: '35px' }}>{item.title}</h3>
                                            </div>
                                            <div className="text">
                                                <p style={{ color: '#7f8c8d' }}>{item.shortDescription}</p>
                                            </div>
                                            <div className="view_detail" style={{ padding: "5px 0" }}>
                                                <span style={{ cursor: "pointer" }}>
                                                    <BsArrowRight />
                                                    &nbsp;
                                                    See details
                                                </span>
                                            </div>
                                        </div>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Project;