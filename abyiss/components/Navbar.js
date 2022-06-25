import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logoName">
                <h1>Abyiss</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/exchanges/"><a>Exchanges</a></Link>
            <Link href="/prices/"><a>Current Price</a></Link>
        </nav>
    );
}

export default Navbar;