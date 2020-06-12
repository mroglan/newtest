import Link from 'next/Link'

const Nav = () => {
    return (
        <div>
            <Link href="/">
                <a className="home">Home</a>
            </Link>
            <Link href="/about">
                <a className="about">About</a>
            </Link>
            <style jsx>  {`
                    a {
                        color: blue;
                        text-decoration: white;
                        padding: 10px 20px;
                        display: inline-block;
                        background: white;
                        border: 1px solid gray;
                        margin-right: 10px;
                    }
                `}
            </style>
        </div>
    )
}

export default Nav;