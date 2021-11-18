
import React, { useState } from 'react';
import api from '../../services/api';
import { Link, useNavigate } from "react-router-dom";


export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event){
      event.preventDefault();

      const response = await api.post('/sessions', { email, password });

      const { _id } = response.data;

      localStorage.setItem('user', _id);

      navigate('/dashboard');

    };

    return (

    <>

        <p>
            Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
        </p>


        <form onSubmit={handleSubmit}>

            <label htmlFor="email">E-MAIL DA SUA EMPRESA *</label>

            <input
                type="email"
                id="email"
                placeholder="Insira o e-mail da sua empresa"
                value={email}
                onChange={event => setEmail(event.target.value)}
            />

            <label htmlFor="password">SENHA *</label>

            <input
                type="password"
                id="password"
                placeholder="Insira a senha"
                value={password}
                onChange={event => setPassword(event.target.value)}

            />

            <button className="red" type="submit">Fazer login</button>
        </form>

        <Link to="/register">
            <button className="gray">Cadastrar</button>
        </Link>

    </>

    );
}
