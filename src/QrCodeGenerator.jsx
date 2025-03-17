import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './qrCodeGenerator.module.css';

const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    }

    const onClickHandler = () => {
        setResult(value);
        // setValue('');
    }

    console.log('result', result);

    return (
        <div className={styles.container}>
            { result !=='' ? <QRCodeSVG className={styles.qrWrapper} bgColor= {'#ffe4c4'} value={value} /> : null }
            <input placeholder='Введите ссылку' className={styles.input} type="text" value={value} onChange={onChangeHandler} />
            <button className={styles.button} onClick={onClickHandler}>Сгенерировать QR-Code</button>
        </div>
    );
}

export { QrCodeGenerator };