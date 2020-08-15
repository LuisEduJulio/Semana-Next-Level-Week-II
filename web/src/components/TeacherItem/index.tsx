import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className='teacher-item'>
            <header>
                <img src='https://avatars0.githubusercontent.com/u/43765076?s=460&u=0642772d88d9b70e8c9005006228b5db9202391c&v=4' alt='Luis Eduardo' />
                <div>
                    <strong>Luis</strong>
                    <span>Teste</span>
                </div>
            </header>
            <p>
                sadfsadsadasdsad
                    </p>
            <footer>
                <p>Preço/Hora
                        <strong>R$ 80,00</strong>
                </p>
                <button type='submit'>
                    <img src={whatsappIcon} alt='whatsapp' />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;