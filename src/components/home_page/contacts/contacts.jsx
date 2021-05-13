import React from 'react';
import style from './contacts.module.scss';
import instaImg from '../../../public/images/contacts/insta.png';
import vkImg from '../../../public/images/contacts/vk.webp';
import youtubeImg from '../../../public/images/contacts/youtube.png';

const Contacts = () => {
    return (
        <section className={style.contacts} id='toContactsScroll' >
            <hr></hr>
            <h1>Наши контакты</h1>
            <p>Tel. +7(999) 999 99 99</p>
            <p>Email: email@mail.ru</p>
            <div className={style.socialContacts}>
                <a href='https://www.instagram.com/'> 
                    <img alt='' src={instaImg} /> 
                </a>
                <a href='https://www.vk.com/'>
                    <img alt='' src={vkImg} />
                </a>
                <a href='https://www.youtube.com/'>
                    <img alt='' src={youtubeImg} />
                </a>
            </div>
        </section>
    )
}

export default Contacts;