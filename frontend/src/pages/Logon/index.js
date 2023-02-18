import {FiLogIn} from 'react-icons/fi';

import  './styles.css';


export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <form>
                    <h1>Faça seu Logon</h1>
                    <input placeholder="Seu Usuário"/>
                    <button type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size="16" color="#E02041" />
                        Não tenho cadastro
                    </a>
                </form>
            </section>
        </div>
    );
}

//material icons
//fonts awesome
//feather icons
