import { Link } from "react-router-dom";
import styl from './Navigation.module.css';

export const Navigation = () => {
    return (
        <nav>
            <Link className={styl.text} to="/qr-code/generate">Генерировать QR код</Link>
            <Link className={styl.text} to="/qr-code/scan">Сканировать QR код</Link>
            <Link className={styl.text} to="/qr-code/generateHistory">История генерирования</Link>
            <Link className={styl.text} to="/qr-code/scanHistory">История сканирования</Link>
        </nav>
    );
};