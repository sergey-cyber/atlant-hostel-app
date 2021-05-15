import React from 'react';
import style from './contacts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faWhatsapp, faTelegram, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export const ContactsIcons = (props) => {
    //Данный компонент рендерит только соцсети, названия которых приходят в пропсах
    const socialLinksData = [
        {
            name: 'phone',
            href: 'tel:+79149065741',
            icon: faPhone,
            size: '2x'
        },
        {
            name: 'instagram',
            href: 'https://instagram.com/pozdnyakova.n.v382017?igshid=s2sq6z2kutgh',
            icon: faInstagram,
            size: '2x'
        },
        {
            name: 'telegram',
            href: 'https://www.t.me/',
            icon: faTelegram,
            size: '2x'
        },
        {
            name: 'whatsapp',
            href: 'https://wa.me/+79149065741',
            icon: faWhatsapp,
            size: '2x'
        },
        {
            name: 'youtube',
            href: 'https://www.youtube.com/',
            icon: faYoutube,
            size: '2x'
        },
        {
            name: 'vk',
            href: 'https://www.vk.com/id152950358',
            icon: faVk,
            size: '2x'
        }
    ];

    const neededSocial = [];

    socialLinksData.forEach((el) => {
        for (let social in props) {
            if(props[social] === el.name) {
                neededSocial.push(el);
            }
        }
    }); 

    return (
        <div className={style.socialContacts}>
            {neededSocial.map((social) => {
                return (
                    <a href={social.href} target='_blank' 
                        className={style.socialContactsItem + ' '+ style[`${social.name}`]} > 
                        <FontAwesomeIcon icon={social.icon} size={social.size} />
                    </a>
                )
            })}
        </div>
    )
}

const Contacts = () => {
    return (
        <section className={style.contacts} id='toContactsScroll' >
            <h1>Наши контакты</h1>
            <a href='tel:+79149065741' target='_blank'>
                <span className={style.phone}>
                    <FontAwesomeIcon icon={faPhone } size='0.8x' />
                </span>
                Tel. +7(914) 906 57 41
            </a>
            <p>Email: email@mail.ru</p>
            <ContactsIcons vk='vk' instagram='instagram' phone='phone' telegram='telegram'
                whatsapp='whatsapp' youtube='youtube' />
        </section>
    )
}

export default Contacts;