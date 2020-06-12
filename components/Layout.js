import Nav from "./Nav";
//import '../styles/style.css';
//import '../styles/sass/home.scss';
import Head from 'next/head';

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>Next App</title>
                <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css" />
            </Head>
            <Nav />
            {props.children}
        </div>
    )
}

export default Layout;