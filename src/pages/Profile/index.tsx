import React, { useState, ChangeEvent, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import Dropzone from "../../components/Dropzone";

import logo from "../../assets/Pizza-logo.svg";
import { FiPower } from "react-icons/fi";
import "./styles.css";

import api from "../../services/api";

const Profile = () => {
  const history = useHistory();

  const establishmentsId = localStorage.getItem("establishmentsId");

  if (!establishmentsId) {
    history.push("/login");
  }

  const [formData, setFormData] = useState({
    nameProduct: "",
    price: "",
    amount: "",
  });

  const [selectedFile, setSelectedFile] = useState<File>();

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleLogOut() {
    localStorage.clear();
    history.push("/");
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { nameProduct, price, amount } = formData;

    const data = new FormData();

    data.append("nameProduct", nameProduct);
    data.append("price", price);
    data.append("amount", amount);

    if (selectedFile) {
      data.append("image", selectedFile);
    }

    // console.log(data);
    try {
      await api.post("products", data, {
        headers: {
          Authorization: establishmentsId,
        },
      });
      alert("Produdo Criado com Sucesso");
    } catch (error) {
      alert("Erro ao cadastrar");
    }
    // console.log(establishmentsId);
  }

  return (
    <div id="page-profile">
      <header>
        <img src={logo} alt="Zé Colmeia" height="230px" />
        <button onClick={handleLogOut} type="button">
          <span>
            <FiPower />
          </span>
        </button>
      </header>

      <main>
        <h3>Bem vindo {localStorage.getItem("establishmentsName")}</h3>
        <form onSubmit={handleSubmit}>
          <h1>Insira uma nova Delicia</h1>

          <Dropzone onFileUploaded={setSelectedFile} />

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>

            <div className="field">
              <label htmlFor="nameProduct">Nome do produto</label>
              <input
                type="text"
                name="nameProduct"
                id="nameProduct"
                onChange={handleChangeInput}
              />
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="price">Preço</label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  onChange={handleChangeInput}
                />
              </div>

              <div className="field">
                <label htmlFor="amount">Quantidade</label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  onChange={handleChangeInput}
                />
              </div>
            </div>
          </fieldset>

          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </div>
  );
};

export default Profile;
