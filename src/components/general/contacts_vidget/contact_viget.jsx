import React, { useState } from 'react';
import style from './contacts_viget.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactsIcons } from '../../home_page/contacts/contacts';

const ContactsViget = () => {

    const [showContacts, setShowContacts] = useState(1);
    console.log(showContacts)
    const onSetShowContacts = () => {
        setShowContacts(showContacts + 1)
        console.log(showContacts)
    } 

    let showStyle = showContacts%2 === 0 ? style.show : style.disabled;

    return (
        <>
            <div className={style.contactsViget}>
                <div className={style.btn} onClick={ onSetShowContacts }  >
                    <FontAwesomeIcon icon={faPhone} size='2x' />
                </div>                 
                <div className={style.hoistingContacts + ' ' + showStyle }  >
                    <ContactsIcons vk='vk' instagram='instagram' phone='phone' telegram='telegram'
                        whatsapp='whatsapp' youtube='youtube'  />
                </div>
            </div>
        </>
    )
}

export default ContactsViget;