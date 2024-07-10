import { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/Button/styles";
import TopBackground from "../../components/TopBackground";
import Trash from '../../assets/trash.svg'
import { Container, ContainerUsers, CardUsers, TrashIcon, Title, AvatarUsers } from './styles'


function ListUsers() {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')

            setUsers(data)
        }
        getUsers()
    }, [])

    async function deleteUsers(id) {
        await api.delete(`/usuarios/${id}`)

        const updateUsers = users.filter(user => user.id !== id)

        setUsers(updateUsers)
    }

    //Toda vez que a tela carrega, o useEffect e chamado. Efeito colateral
    //Toda vez que uma determinada variavel muda de valor, ele e chamado.

    return (
        <Container>
            <TopBackground />
            <Title>Lista de Usuários</Title>
            <ContainerUsers>
                {users.map((users) => (
                    <CardUsers key={users.id}>
                        <AvatarUsers src={`https://avatar.iran.liara.run/public?username=${users.id}`} />
                        <div>
                            <h4>{users.name}</h4>
                            <p>{users.email}</p>
                            <p>{users.age}</p>
                        </div>
                        <TrashIcon src={Trash} alt='iconeLixo' onClick={() => deleteUsers(users.id)} />
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button type="button" onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}


export default ListUsers;