import { Routes, Route } from "react-router-dom";
import { QrCodeGenerator } from './QrCodeGenerator'
import { QrCodeScanner } from './QrCodeScanner';
import { Navigation } from './Navigation/Navigation';

const Layout = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/qr-code/generate" element={<QrCodeGenerator />} />
                <Route path="/qr-code/scan" element={<QrCodeScanner />} />
                {/* <Route path="/qr-code/scan" element={<QrCodeScanner />} />
                <Route path="/qr-code/scan" element={<QrCodeScanner />} /> */}
            </Routes>
        </div>
    );
};

export { Layout };