import React,{useEffect,useState} from 'react';
import { Link,useHistory } from 'react-router-dom';


export default function Repositorios(){
    const [repos, setRepos] = useState([]);
    const history = useHistory();

    useEffect(() =>{
        let repositoriesName = localStorage.getItem('repositoriesName');
        if(repositoriesName == null){
            history.push('/');
        }
        else{
        repositoriesName  = JSON.parse(repositoriesName);
        setRepos(repositoriesName);
        localStorage.clear();
        }

    },[]);

    return(
        <>
        <h1>
            Repositorios
        </h1>
        <h2>
            {
                repos.map(reposArray =>{
                    return(
                        <li>{reposArray}</li>
                    )
                })
            }
        </h2>
        <Link to='/'>Voltar</Link>
        </>
    )
}