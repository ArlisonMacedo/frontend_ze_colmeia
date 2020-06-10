import React from "react";
import { Link } from "react-router-dom";
import { FiLogIn, FiUser } from "react-icons/fi";
import logo from "../../assets/Pizza-logo.svg";
import "./styles.css";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="ecoleta" height="230px" />
        </header>

        <main>
          <h1>Esse é o Zé Colmeia!</h1>
          <p>Area do empreendedor!</p>

          <Link to="/login">
            <span>
              <FiLogIn />
            </span>
            <strong>Login</strong>
          </Link>

          <Link to="/register" id="btnCad">
            <span>
              <FiUser />
            </span>
            <strong>Cadastrar</strong>
          </Link>
        </main>
      </div>
      <div id="footer"></div>
    </div>
  );
};
export default Home;
