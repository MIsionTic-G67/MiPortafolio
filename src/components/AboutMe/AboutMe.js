import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";
import logoYoutube from "../../svg/youtube.svg";

const AboutMe = () => {
    const socialNetworks =[
        {
            name:"Github",
            link:"https://github.com/ivandevia",
            logo:logoGithub,
        },
        {
            name:"Linkedind",
            link:"www.linkedin.com/in/ivan-devia-acosta-38b9aa141",
            logo:logoLinkeind,
        },
        {
            name:"Youtube",
            link:"https://www.youtube.com/channel/UC2Gv4AvSJOPFQ6pjGFk7U2g",
            logo:logoYoutube,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hello, I'm</p>
                        <p>Jeimmy Figueroa</p>
                        <p>Systems Engineer</p>
                    </S.Title>
                    <S.DescriptionText>
                    Profesional en Ingeniería de Sistemas, Especialista Tecnológica en herramientas para la 
                    gestión de los datos - Big Data, conocimiento junior en frontend developer.
                    </S.DescriptionText>
                    <S.ContainerIcons>
                    {socialNetworks.map((network, index)=>(
                        <a
                            key={index}
                            href={network.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={network.logo} alt={network.name}/>
                        </a>
                    ))}
                </S.ContainerIcons>
                </S.ContainerText>
                <S.ContainerImage>
                    <img src="/public/JF.ico" alt="Jeimmy Figueroa - Fronend Developer"/>
                </S.ContainerImage>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;