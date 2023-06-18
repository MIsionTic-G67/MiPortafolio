import React, { useState } from "react";
import * as S from "./NavBar.styles";

const NavBar = () => {
  const [showMenuBurguer, setShowMenuBurguer] = useState(false);
  const clickItemNav = (item) => {
    console.log(item);
    document.getElementById(item).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <S.ContainerNavBar>
      <S.ContainerLogo>
        <S.ImageLogo src="/img/foto1.jpg" alt="Logo Jeimmy" />
        <div>
          <h1>Jeimmy Figueroa</h1>
          <h2>Junio Frontend</h2>
        </div>
      </S.ContainerLogo>
      <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
        <S.BurguerMenu />
        <S.BurguerMenu />
        <S.BurguerMenu />
      </S.ContainerBurguer>

      <S.ContainerItems showMenuBurguer={showMenuBurguer}>
        <p onClick={() => clickItemNav("about-me")}>About Me</p>
        <p onClick={() => clickItemNav("projects")}>Projects</p>
        <S.Button onClick={() => clickItemNav("contact")}>
          {" "}
          🤙 Contact me
        </S.Button>
      </S.ContainerItems>
    </S.ContainerNavBar>
  );
};

export default NavBar;
