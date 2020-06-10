import React, { FormEvent, ChangeEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import logo from "../../assets/background.svg";

//CSS
import "./styles.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    endereco: "",
    city: "",
    uf: "",
  });
  // const [products, setProducts] = useState<String[]>([]);

  // useEffect(() => {
  //   api.get("establishments").then((response) => {
  //     console.log(response);
  //   });
  // }, []);
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    // console.log(event.target);

    setFormData({ ...formData, [name]: value });
  }

  const history = useHistory();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // console.log(formData);

    const { name, email, endereco, city, uf } = formData;

    const data = {
      name,
      email,
      endereco,
      city,
      uf,
    };

    // console.log(data);

    await api.post("establishments", data);

    alert("Empresa Registrada com sucesso");

    history.push("/");
  }

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Zé Colmeia" height="120px" />
        <h1>Zé Colmeia</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <h1>Cadastre os dados da sua empresa</h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Endereço</label>
            <input
              type="text"
              name="endereco"
              id="endereco"
              onChange={handleInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <input
                type="text"
                name="city"
                id="city"
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="uf">UF</label>
              <input
                type="text"
                name="uf"
                id="uf"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </fieldset>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;
