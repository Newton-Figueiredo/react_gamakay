import React, {useState} from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'

export default function App(props) {
  const history = useHistory();
  const [usuario,setUsuario] = useState('')
  const [erro, setErro] = useState(false);
  
  function pesquisaGitHub(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
          const repositories = response.data;
          //console.log(repositories);
          const repositoriesNames = [];
          repositories.map((repositoriesArray) => {
            return repositoriesNames.push(repositoriesArray.name)
          });
        //console.log(repositoriesNames);
        setErro(false);
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesNames));
        history.push('/repositorios');
        }).catch(err =>  {
          return setErro(true);
        } )
        ;

  }

  return (
    <>
     <h1>Repos GitHub do user: {usuario}</h1>
     <input className='nomeForm' type="text" id= "nome" placeholder="Digite o usuario"  value={usuario} onChange={e => setUsuario(e.target.value)}/>
     <button className='colsultarButton' onClick={pesquisaGitHub} type="button"> Consultar </button>
     {erro ? <span> Usuario não encontrado. Tente novamente </span> :''}
    </>
    
  );
}


