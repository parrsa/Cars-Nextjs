import Link from "next/link"
import Styles from './Layout.module.css'
const Layout = ({ children }) => {
    return (
        <>
            <header className={Styles.header}>
                <Link href='/'>
                    <h2>ParsaCars</h2>
                    <p>Choose an Buy your Car</p>
                </Link>
            </header>

            <div className={Styles.container}>{children}</div>

            <footer className={Styles.footer}>
                ParsaNextjs
            </footer>
        </>
    )
}

export default Layout