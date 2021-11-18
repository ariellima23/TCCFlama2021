import React, { useState, useMemo } from 'react';
import { Link, useNavigate } from "react-router-dom";
import api from '../../services/api';

import camera from '../../assets/camera.svg';

import './style.css';

export default function New() {
    const navigate = useNavigate();

    const [company, setCompany] = useState('');
    const [address, setAddress] = useState('');
    const [techs, setTechs] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    const preview = useMemo(
      () => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
      }, [thumbnail])

    async function handleSubmit(event) {
      event.preventDefault();
      const data = new FormData();
      const user_id = localStorage.getItem('user');

      data.append('thumbnail', thumbnail);
      data.append('company', company);
      data.append('address', address);
      data.append('techs', techs);
      data.append('price', price);

      await api.post('/spots', data, {
        headers: { user_id }
      })

      navigate('/dashboard');
    }

    return (
      <>
        <form onSubmit={handleSubmit}>

          <label
            id="thumbnail"
            style={{ backgroundImage: `url(${preview})` }}
            className={thumbnail ? 'has-thumbnail' : ''}
          >
            <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
            <img src={camera} alt="Select Img" />
          </label>

          <label htmlFor="company">EMPRESA *</label>
          <input
            id="company"
            placeholder="Sua empresa incrível"
            value={company}
            onChange={event => setCompany(event.target.value)}
          />

          <label htmlFor="address">ENDEREÇO *</label>
          <input
            id="address"
            placeholder="Endereço da sua empresa"
            value={address}
            onChange={event => setAddress(event.target.value)}
          />

          <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
          <input
            id="techs"
            placeholder="Quais tecnologias usam por aqui?"
            value={techs}
            onChange={event => setTechs(event.target.value)}
          />

          <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para <bold>GRATUITO</bold>)</span></label>
          <input
            id="price"
            placeholder="Valor cobrado por dia"
            value={price}
            onChange={event => setPrice(event.target.value)}
          />

          <button type="submit" className="red">Cadastrar</button>

        </form>

        <Link to='/dashboard'>
            <button type="submit" className="gray">Cancelar</button>
        </Link>

      </>
    )
}
