import React, {useState, useEffect} from 'react';
import './styles.css';

export default function List(){

    const [toDo, setToDo] = useState([]);
    const [item, setItem] = useState('');
    
   
    function handleToDo (){
       setToDo([...toDo, item])
       setItem('');
    }

    return (
        <>
        <input value={item} onChange={e => setItem(e.target.value)} type="text" name="item" id="text"/>
        <button onClick={handleToDo}>Adicionar</button>
        <ul>
          {toDo.map(tarefa  => <li>{tarefa}</li>) }
        </ul>
        </>
    );
}