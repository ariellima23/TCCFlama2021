import React, { useState } from 'react';
import api from '../../services/api';
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [CNPJ, setCNPJ] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { name, CNPJ, email, password });

        const { _id } = response.data;

        localStorage.setItem('user', _id);

        navigate('/');
    }
    return (
    <>
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">NOME DA SUA EMPRESA *</label>

            <input
                type="name"
                id="name"
                placeholder="Insira o nome da sua empresa"
                value={name}
                onChange={event => setName(event.target.value)}
            />

            <label htmlFor="CNPJ">CNPJ *</label>

            <input
                type="CNPJ"
                id="CNPJ"
                placeholder="Insira o CNPJ da sua empresa"
                value={CNPJ}
                onChange={event => setCNPJ(event.target.value)}
            />

            <label htmlFor="email">E-MAIL *</label>

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
                placeholder="Insira uma senha"
                value={password}
                onChange={event => setPassword(event.target.value)}
            />

            <button type="submit" className="red">Cadastrar</button>
        </form>

        <Link to="/">
            <button className="gray">Cancelar</button>
        </Link>
    </>

    )
}
