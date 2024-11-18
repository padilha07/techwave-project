import React, { useState } from 'react';
import { db } from '../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

interface FormData {
  primeiroNome: string;
  ultimoNome: string;
  dataNascimento: string;
  telefone: string;
  email: string;
  rua: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  origemConhecimento: string[];
  habilidades: string;
}

function InscricaoForm() {
  const [formData, setFormData] = useState<FormData>({
    primeiroNome: '',
    ultimoNome: '',
    dataNascimento: '',
    telefone: '',
    email: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
    origemConhecimento: [],
    habilidades: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        origemConhecimento: checked
          ? [...prevData.origemConhecimento, value]
          : prevData.origemConhecimento.filter((origem) => origem !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'inscricoes'), formData);
      alert('Inscrição realizada com sucesso!');
      setFormData({
        primeiroNome: '',
        ultimoNome: '',
        dataNascimento: '',
        telefone: '',
        email: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        origemConhecimento: [],
        habilidades: '',
      });
    } catch (error) {
      console.error('Erro ao enviar a inscrição: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Formulário de Candidatura a Emprego</h2>

      {/* Nome */}
      <label>
        Nome:
        <input type="text" name="primeiroNome" value={formData.primeiroNome} onChange={handleChange} required />
        <input type="text" name="ultimoNome" value={formData.ultimoNome} onChange={handleChange} required />
      </label>

      {/* Data de Nascimento */}
      <label>
        Data de Nascimento:
        <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} required />
      </label>

      {/* Telefone */}
      <label>
        Telefone:
        <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />
      </label>

      {/* Email */}
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      {/* Endereço */}
      <label>
        Endereço:
        <input type="text" name="rua" placeholder="Rua" value={formData.rua} onChange={handleChange} required />
        <input type="text" name="numero" placeholder="Número" value={formData.numero} onChange={handleChange} required />
        <input type="text" name="bairro" placeholder="Bairro" value={formData.bairro} onChange={handleChange} required />
        <input type="text" name="cidade" placeholder="Cidade" value={formData.cidade} onChange={handleChange} required />
        <input type="text" name="estado" placeholder="Estado" value={formData.estado} onChange={handleChange} required />
      </label>

      {/* Origem do Conhecimento */}
      <fieldset>
        <legend>Onde você ouviu sobre nós?</legend>
        <label>
          <input type="checkbox" name="origemConhecimento" value="Midia Social" onChange={handleChange} />
          Mídia Social
        </label>
        <label>
          <input type="checkbox" name="origemConhecimento" value="Anuncio Jornal" onChange={handleChange} />
          Anúncio de Jornal
        </label>
        <label>
          <input type="checkbox" name="origemConhecimento" value="Anuncios Digitais" onChange={handleChange} />
          Anúncios Digitais
        </label>
        <label>
          <input type="checkbox" name="origemConhecimento" value="Outros" onChange={handleChange} />
          Outros
        </label>
      </fieldset>

      {/* Habilidades */}
      <label>
        Descreva suas habilidades:
        <textarea name="habilidades" value={formData.habilidades} onChange={handleChange} required />
      </label>

      <button type="submit">Enviar Inscrição</button>
    </form>
  );
}

export default InscricaoForm;
