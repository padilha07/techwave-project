import React, { useState } from 'react';  
import { db } from '../services/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import InputMask from 'react-input-mask';
import './InscricaoForm.css';

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
  sexo: string;
  cargoInteresse: string;
  disponibilidadeSemana: string;
  disponibilidadeNoiteSemana: string;
  disponibilidadeFinaisSemana: string;
  disponibilidadeFeriados: string;
  idiomas: string[]; // Campo de idiomas como array de strings
  curriculoNome?: string;
  formacaoAcademica: string; // Campo para Formação Acadêmica
  instituicao: string; // Campo para Instituição
  anoConclusao: string; // Campo para Ano de Conclusão
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
    sexo: '',
    cargoInteresse: '',
    disponibilidadeSemana: '',
    disponibilidadeNoiteSemana: '',
    disponibilidadeFinaisSemana: '',
    disponibilidadeFeriados: '',
    idiomas: [], // Inicializa o campo idiomas
    formacaoAcademica: '', 
    instituicao: '', 
    anoConclusao: '' 
  });

  const [curriculoNome, setCurriculoNome] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === 'checkbox' && name === 'origemConhecimento') {
      setFormData((prevData) => ({
        ...prevData,
        origemConhecimento: checked
          ? [...prevData.origemConhecimento, value]
          : prevData.origemConhecimento.filter((origem) => origem !== value),
      }));
    } else if (type === 'checkbox' && name === 'idiomas') {
      setFormData((prevData) => ({
        ...prevData,
        idiomas: checked
          ? [...prevData.idiomas, value]
          : prevData.idiomas.filter((idioma) => idioma !== value),
      }));
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCurriculoNome(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const enderecoArray = [formData.rua, formData.numero, formData.bairro, formData.cidade, formData.estado];

    try {
      await addDoc(collection(db, 'inscricoes'), {
        ...formData,
        endereco: enderecoArray,
        curriculoNome: curriculoNome
      });
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
        sexo: '',
        cargoInteresse: '',
        disponibilidadeSemana: '',
        disponibilidadeNoiteSemana: '',
        disponibilidadeFinaisSemana: '',
        disponibilidadeFeriados: '',
        idiomas: [],
        formacaoAcademica: '',
        instituicao: '',
        anoConclusao: ''
      });
      setCurriculoNome('');
    } catch (error) {
      console.error('Erro ao enviar a inscrição: ', error);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Formulário de Candidatura a Emprego</h2>

        <label>Primeiro Nome:</label>
        <input type="text" name="primeiroNome" value={formData.primeiroNome} onChange={handleChange} required />

        <label>Último Nome:</label>
        <input type="text" name="ultimoNome" value={formData.ultimoNome} onChange={handleChange} required />

        <label>Data de Nascimento:</label>
        <input type="date" name="dataNascimento" className="date-input" value={formData.dataNascimento} onChange={handleChange} required />

        <label>Sexo:</label>
        <select name="sexo" value={formData.sexo} onChange={handleChange} required>
          <option value="">Favor selecionar</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>

        <label>Telefone:</label>
        <InputMask
          mask="(99) 9 9999-9999"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        >
          {(inputProps) => <input {...inputProps} type="tel" />}
        </InputMask>

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Endereço:</label>
        <div className="address-fields">
          <input type="text" name="rua" placeholder="Rua:" value={formData.rua} onChange={handleChange} required />
          <input type="text" name="numero" placeholder="Número:" value={formData.numero} onChange={handleChange} required />
          <input type="text" name="bairro" placeholder="Bairro:" value={formData.bairro} onChange={handleChange} required />
          <input type="text" name="cidade" placeholder="Cidade:" value={formData.cidade} onChange={handleChange} required />
          <input type="text" name="estado" placeholder="Estado:" value={formData.estado} onChange={handleChange} required />
        </div>

        <h3>Formação Acadêmica</h3>
        <label>Formação Acadêmica:</label>
        <input type="text" name="formacaoAcademica" value={formData.formacaoAcademica} onChange={handleChange} required />

        <label>Nome da Instituição:</label>
        <input type="text" name="instituicao" value={formData.instituicao} onChange={handleChange} required />

        <label>Ano de Conclusão:</label>
        <input
    type="date"
    name="anoConclusao"
    className="date-input centered"
    value={formData.anoConclusao}
    onChange={handleChange}
    required
/>


        <fieldset className="checkbox-group">
          <legend>Idiomas:</legend>
          <label><input type="checkbox" name="idiomas" value="Inglês" onChange={handleChange} /> Inglês</label>
          <label><input type="checkbox" name="idiomas" value="Espanhol" onChange={handleChange} /> Espanhol</label>
          <label><input type="checkbox" name="idiomas" value="Alemão" onChange={handleChange} /> Alemão</label>
          <label><input type="checkbox" name="idiomas" value="Francês" onChange={handleChange} /> Francês</label>
          <label><input type="checkbox" name="idiomas" value="Chinês" onChange={handleChange} /> Chinês</label>
          <label><input type="checkbox" name="idiomas" value="Japonês" onChange={handleChange} /> Japonês</label>
          <label><input type="checkbox" name="idiomas" value="Hindi" onChange={handleChange} /> Hindi</label>
          <label><input type="checkbox" name="idiomas" value="Outro" onChange={handleChange} /> Outro</label>
        </fieldset>

        <h3>Cargo & Disponibilidade</h3>
        <label>Cargo que você está interessado:</label>
        <input type="text" name="cargoInteresse" value={formData.cargoInteresse} onChange={handleChange} required />

        <label>Pode trabalhar durante a semana?</label>
        <div>
          <label><input type="radio" name="disponibilidadeSemana" value="Sim" onChange={handleChange} required /> Sim</label>
          <label><input type="radio" name="disponibilidadeSemana" value="Não" onChange={handleChange} required /> Não</label>
        </div>

        <label>Pode trabalhar à noite durante a semana?</label>
        <div>
          <label><input type="radio" name="disponibilidadeNoiteSemana" value="Sim" onChange={handleChange} required /> Sim</label>
          <label><input type="radio" name="disponibilidadeNoiteSemana" value="Não" onChange={handleChange} required /> Não</label>
        </div>

        <label>Pode trabalhar nos finais de semana?</label>
        <div>
          <label><input type="radio" name="disponibilidadeFinaisSemana" value="Sim" onChange={handleChange} required /> Sim</label>
          <label><input type="radio" name="disponibilidadeFinaisSemana" value="Não" onChange={handleChange} required /> Não</label>
        </div>

        <label>Pode trabalhar nos feriados?</label>
        <div>
          <label><input type="radio" name="disponibilidadeFeriados" value="Sim" onChange={handleChange} required /> Sim</label>
          <label><input type="radio" name="disponibilidadeFeriados" value="Não" onChange={handleChange} required /> Não</label>
        </div>

        <label>Upload do Currículo (PDF):</label>
        <input type="file" accept=".pdf" onChange={handleFileChange} />

        <button type="submit">Enviar Inscrição</button>
      </form>
    </div>
  );
}

export default InscricaoForm;
