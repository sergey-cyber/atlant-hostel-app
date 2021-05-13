import React from 'react';
import style from './preloader.module.scss';
import { Spin, Space } from 'antd';

//В stylePosition может прийти один из двух названий стилей описанных в css
//Стили в свою очередь определяют позиционирование  

type stylePosition = 'preloaderAbsolut' | 'preloaderFlex'
type propsType = {
    message: string
    stylePosition: stylePosition
}

const Preloader = (props: propsType) => {
    return (
        <div className={style[props.stylePosition]} >
            <Space size="middle">
                <Spin size="large" tip={props.message} />
            </Space>
        </div>
    )
}

export default Preloader;
