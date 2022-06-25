import Link from 'next/link'

const NotFound = () => {

    return (
        <div className="not-found">
            <h1><em>404: Page can not be found</em></h1>
            <p>Going back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}

export default NotFound;