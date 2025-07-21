export default function Navbar(){
    return(
        <nav className="site-nav">
            <a href="/" className="site-title">Jose</a>
            <ul>
                <li>
                    <a href="/about"> About </a>
                </li>

                <li>
                    <a href="/projects"> Projects </a>
                </li>
                
                <li>
                    <a href="/contact"> Contact </a>
                </li>
            </ul>
        </nav>
    );
}