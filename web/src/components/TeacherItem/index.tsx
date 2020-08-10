import React from 'react';

import wpIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/3286138?s=460&u=b1aab42bf7cf589fb6b1ac076c2fbc7040bcb9c7&v=4" alt="Profile"/>
                <div>
                    <strong>Renato Mestre</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Ononono no no non onon onono on.
                <br /><br />
                Noon nonono non on onon onon no nonon onon onon onono non nono. Onon onono nonono nono nono nno on ono no.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={wpIcon} alt="WhatsApp"/> Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;