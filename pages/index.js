import Link from 'next/link'; 



const HomePage = () => {

    return (
        <div>
            <h1>Home Page</h1>
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
        </div>
    )


}

export default HomePage