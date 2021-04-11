import Link from 'next/link'; 
import Menu from 'librerira/Menu'
const HomePage = () => {

    return (
        <div>
            <Menu>
            <h1>Home Pageeee</h1>
            <ul>
                <li>
                    <Link replace href="/product">Prodcuto detalle</Link>
                </li>
                <li>
                    <Link  href="/aboutUs">quienes somos</Link>
                </li>
                <li>
                    <Link  href="/faq">pregutnas frecuetnes</Link>
                </li>
            </ul>
            </Menu>
        </div>
    )


}

export default HomePage