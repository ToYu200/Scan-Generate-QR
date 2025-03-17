import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './qrCodeGenerator.module.css';

import { GENERATE_DATA } from '../../constants';


const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    }

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify([...prevData, value])
        );

        setResult(value);
        setValue('');
    }

    console.log('result', result);

    return (
        <div className={styles.container}>
            {result !== '' ? <QRCodeSVG className={styles.qrWrapper} bgColor={'#ffe4c4'} value={value} /> : null}
            <input placeholder='Введите ссылку' className={styles.input} type="text" value={value} onChange={onChangeHandler} />
            <button className={styles.button} onClick={onClickHandler}>Сгенерировать QR-Code</button>
        </div>
    );
}

export { QrCodeGenerator };