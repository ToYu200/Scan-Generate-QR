import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import s from './qrCodeScanner.module.css';

const QrCodeScanner = () => {

    const [scanned, setScanned] = useState(null);

    const scanHandeler = (result) => {
        setScanned(result[0].rawValue);
    }

    const settings = {
        audio: false,
        finder: false,
    }

    const stylesSettings = {
        container: {
        width: 350,
        }
    }

    return <div className={s.container}>
        <p>Отсканируйте QR код</p>
        <Scanner components={settings} allowMultiple={true} onScan={scanHandeler} styles={stylesSettings} />
        <a href={scanned} className={s.text}>{scanned}</a>
        </div>


};


export { QrCodeScanner };