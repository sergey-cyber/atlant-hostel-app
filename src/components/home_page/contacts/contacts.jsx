import React from 'react';
import style from './contacts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faWhatsapp, faTelegram, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";



const Contacts = () => {
    return (
        <section className={style.contacts} id='toContactsScroll' >
            <h1>Наши контакты</h1>
            <p>Tel. +7(999) 999 99 99</p>
            <p>Email: email@mail.ru</p>
            <div className={style.socialContacts}>
                <a href='tel:+79149065741' target='_blank' 
                    className={style.socialContactsItem+ ' '+ style.phone} > 
                    <FontAwesomeIcon icon={faPhone } size='2x' />
                </a>
                <a href='https://www.instagram.com/' target='_blank' 
                    className={style.socialContactsItem+ ' '+ style.instagram} > 
                    <FontAwesomeIcon icon={faInstagram } size='2x' />
                </a>
                <a href='https://www.t.me//' target='_blank' 
                    className={style.socialContactsItem+ ' '+ style.telegram} >
                    <FontAwesomeIcon icon={faTelegram } size='2x' />
                </a>
                <a target='_blank' href='https://wa.me/+79149065741' 
                    className={style.socialContactsItem+ ' '+ style.whatsapp} >
                    <FontAwesomeIcon icon={faWhatsapp } size='2x' />
                </a>
                <a href='https://www.youtube.com/' target='_blank'
                     className={style.socialContactsItem+ ' '+ style.youtube} >
                    <FontAwesomeIcon icon={faYoutube } size='2x' />
                </a>
                <a href='https://www.vk.com/' target='_blank'
                     className={style.socialContactsItem+ ' '+ style.vk} >
                    <FontAwesomeIcon icon={faVk } size='2x' />
                </a>
            </div>
        </section>
    )
}

export default Contacts;