import React, { FormEvent, useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/Pizza-logo.svg";

import "./styles.css";
import api from "../../services/api";

// interface Params {
//   city: String;
// }

const Login = () => {
  const [establishments, setEstablishments] = useState({
    id: "",
  });

  const history = useHistory();
  // useEffect(() => {
  //   api
  //     .get("establishments", {
  //       params: {
  //         city: "Maracaçumé",
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }, []);
  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    // console.log(code);

    setEstablishments({ ...establishments, [name]: value });
  }
  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { id } = establishments;
    const data = {
      id,
    };

    try {
      const response = await api.post("establishments/session", data);

      localStorage.setItem("establishmentsId", response.data.id);
      localStorage.setItem("establishmentsName", response.data.name);
      history.push("/profile");
    } catch (erro) {
      alert("Erro ao realizar login");
    }
  }

  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="ecoleta" height="230px" />
        </header>

        <main>
          <h1>Seu App para Comida.</h1>
          <p>Area do empreendedor!</p>
          <br />
          <form onSubmit={handleSubmit}>
            <h2>Insira seu codigo</h2>
            <input
              type="text"
              name="id"
              id="code"
              placeholder="Seu codigo"
              onChange={handleChangeInput}
            />
            <button type="submit">Entrar</button>
          </form>
        </main>
      </div>
      <div id="footer"></div>
    </div>
  );
};

export default Login;
