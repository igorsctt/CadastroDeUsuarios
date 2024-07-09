import { useRef } from 'react';
import api from '../../services/api.js';
import { useNavigate } from 'react-router-dom';
import { Title, Container, Form, ContainerInputs, Input, InputLabel } from './styles.js';


import Button from '../../components/Button';
import TopBackground from '../../components/TopBackground/index.jsx';



function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })
    console.log(data)
  }

  return (

    //Podendo estilizar aqui ou no styles, <h1 style={{color:'red', fontSize: 20}}>Ola</h1>
    <Container>
      <TopBackground />
      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type='text' placeholder='Nome do usuário' ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do usuário' ref={inputAge} />
          </div>
        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail <span>*</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do usuário' ref={inputEmail} />
        </div>


        <Button type='button' onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </Button>
      </Form>
      <Button type='button' onClick={() => navigate('lista-de-usuarios')}>
          Lista de Usuários
        </Button>
    </Container>

  );
}


export default Home;

/*
Exportação Default "Padrão" -> Cada módulo pode ter uma exportação padrão.
Se for exportar mais de uma coisa de um módulo, usa-se a exportação nomeada.
Exemplo de exportação nomeada: 
export function App2() { ... }
*/

/* Quando for importar, há uma diferença:
Para importar o default export (exportação padrão):
import App from './App.jsx'

Para importar exportações nomeadas:
import { App, App2 } from './App.jsx'
*/
