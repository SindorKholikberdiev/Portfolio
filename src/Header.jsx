import React from "react";

const Header = ({ name }) => {
  return (
    <header>
      <h1>Sindor's Portfolio</h1>

      {/*  shartli render qilish: agar name da biror matn bo'lsa (bo'sh bo'lmasa), keyin <h2> ni chiqaradi */}

      {name && <h2> Welcome! {name}</h2>}

      <nav aria-label="Primary">
        <ul className="nav-list">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
