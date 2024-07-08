import { useRef } from 'react';
import api from '../../services/api.js';
import { Title, Container, Form, ContainerInputs, Input, Button, TopBackground, InputLabel } from './styles.js';


import UsersImage from '../../assets/users.png'


function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  async function registerNewUser(){
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

      <TopBackground>
        <img src={UsersImage} alt='imagemUsuarios' />
      </TopBackground>



      <Form>
        <Title>Cadastrar Usuário</Title>

        <ContainerInputs>
            <div>
              <InputLabel>
                Nome <span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do usuário' ref={inputName}/>
            </div>

            <div>
              <InputLabel>
                Idade <span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do usuário' ref={inputAge}/>
            </div>
        </ContainerInputs>

        <div style={{ width: '100%'}}>
          <InputLabel>
            E-mail <span>*</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do usuário' ref={inputEmail}/>
        </div>


        <Button type='button' onClick={registerNewUser}>Cadastrar Usuário</Button>
      </Form>
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
