import React, {useState} from 'react';

function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar conta de luz',
    'Estudar React JS',
    'Estudar as materias da faculdade',
    'Atualizar/melhorar meu curriculo', 
    'Ir ao mercado'
  ]);
  const [input, setInput] = useState('');

  function adicionarTarefa(){
    setTarefas([...tarefas, input])
    setInput('');
  }



  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    
      <input type='text' value={input} onChange={e => setInput(e.target.value)}/><br/>
      <button type='button' onClick={adicionarTarefa}>Adicionar</button>

    </div>
  );
}

export default App;
