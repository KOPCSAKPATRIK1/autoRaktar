import './Header.css';
export default function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <span className="logo-icon">🚗</span>
                </div>
                <h1 className="header-title">Autó Katalógus</h1>
            </div>
        </header>
    );
}