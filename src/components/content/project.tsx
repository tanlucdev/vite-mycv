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


const Project = () => {
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
            image: <FaHotel
                size={50}
                color={'#2bedfd'}
            />,
            title: "Hotel Booking Site",
            shortDescription: "Website for booking hotels and providing information about hotels.",
            detail: {
                description: "The development of a commercial hotel booking website.",
                frontend: "HTML, CSS",
                backend: "JavaScript, PHP",
                member: 1,
                role: "Developer",
                github: " https://github.com/tanlucdev/hotel-booking-site.git",
                image: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                items: [
                    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                ]

            }
        },
        {
            image: <BsTicketPerforatedFill
                size={50}
                color={'rgb(232, 74, 101)'}
            />,
            title: "Ticket Booking Site",
            shortDescription: "The website for booking movie tickets and viewing articles about current cinema releases.",
            detail: {
                description: "Build a movie ticket booking website.",
                frontend: "Handlebars, CSS",
                backend: "Javascript",
                member: 1,
                role: "Developer",
                github: " https://github.com/tanlucdev/ticket-booking-site.git",
                image: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                items: [
                    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                ]
            },
        },
        {
            image: <GiHouse
                size={50}
                color={'rgb(64, 150, 255)'}
            />,
            title: "Tenant Manage Site",
            shortDescription: "A convenient online platform for managing rental rooms and making rent payments.",
            detail: {
                description: "Build a website for room management",
                frontend: "Handlebars, CSS",
                backend: "Javascript",
                member: 1,
                role: "Developer",
                github: " https://github.com/tanlucdev/tenant-management-system.git",
                image: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                items: [
                    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                ]
            },
        },
        {
            image: <BsTranslate
                size={50}
                color={'rgb(64, 150, 255)'}
            />,
            title: "Dictionary Website",
            shortDescription: "A user-friendly dictionary website with interactive features like flashcards, facilitating effortless learning.",
            detail: {
                description: "A user-friendly dictionary website facilitating effortless learning through interactive features such as flashcards and personalized dictionaries. Discover and master new vocabulary effortlessly. Accessible, intuitive, and designed to enhance language acquisition.",
                frontend: "React.js",
                backend: "Javascript, Express",
                member: 2,
                role: "Developer",
                github: " https://github.com/tanlucdev/tenant-management-system.git",
                image: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                items: [
                    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                ]
            },
        },
        {
            image: <CgProfile
                size={50}
                color={'teal'}
            />,
            title: "Portfolio Website",
            shortDescription: "Build and deploy Portfolio Project.",
            detail: {
                description: " The Portfolio page provides information similar to a CV with 5 sections: home, about, skill, project, and contact. It is built solely with front-end languages, making deployment easy and optimizing a smooth experience for viewers.",
                frontend: "HTML & SCSS",
                backend: "Typescript",
                member: 1,
                role: "Developer",
                github: " github.com/tanlucdev/vite-mycv",
                image: 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                items: [
                    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
                    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
                ]
            },
        },

    ]

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setDataDetail(null);
    }
    return (<>
        <Modal
            title={dataDetail && dataDetail.title ? `Project ${dataDetail.title}` : ""}
            open={isModalOpen}
            onOk={() => handleCloseModal()}
            onCancel={() => handleCloseModal()}
            footer={null}
            maskClosable={false}
        >
            {dataDetail &&
                <ul>
                    <li> <b>Description:</b> {dataDetail.detail.description}</li>
                    <li> <b>Frontend:</b> {dataDetail.detail.frontend}</li>
                    <li> <b>Backend:</b> {dataDetail.detail.backend}</li>
                    <li><b>Member:</b> {dataDetail.detail.member}</li>
                    <li><b>Role:</b> {dataDetail.detail.role}</li>
                    <li>
                        <b>Github:</b>
                        <a href={dataDetail.detail.github} target='_blank'>
                            {dataDetail.detail.github}
                        </a>
                    </li>
                    <li>
                        <b>Interface:</b>
                        <br />
                        <Image width={100} src={dataDetail.detail.image} preview={{ visible: false }} onClick={() => {
                            setPreviewImage(dataDetail.detail.items)
                        }}>

                        </Image>
                        {previewImage.length > 0 ?
                            (<Image.PreviewGroup preview={{
                                visible: !!previewImage.length, onVisibleChange: (value) => {
                                    if (!value) {
                                        setPreviewImage([])
                                    }
                                }
                            }}>
                                {previewImage.map((image) => {
                                    return <Image width={100} src={image} />
                                })}
                            </Image.PreviewGroup>)
                            : null
                        }
                    </li>
                </ul>
            }
        </Modal>
        <div className="arlo_tm_section" id="project">
            <div className="arlo_tm_services_wrap">
                <div className="container">
                    <div className="arlo_tm_title_holder">
                        <h3>Amazing Project</h3>
                        <span>Projects have been completed</span>
                    </div>
                    <div className="list_wrap">
                        <ul>
                            {dataProjects.map((item, index) => {
                                return (
                                    <li key={`${index}-project`}>
                                        <div
                                            className="inner" title="Xem chi tiết"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                                setDataDetail(item)
                                                setIsModalOpen(true);
                                            }}
                                        >
                                            <div className="icon">
                                                {item.image}
                                            </div>
                                            <div className="title_service">
                                                <h3>{item.title}</h3>
                                            </div>
                                            <div className="text">
                                                <p>{item.shortDescription}</p>
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