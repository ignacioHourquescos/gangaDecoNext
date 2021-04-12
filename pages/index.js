import Link from 'next/link'; 
import ProductList from '../components/product/ProductList'

const HomePage = () => {

    return (
        <div>


           
            <h1>Home Pageeee</h1>
            <ProductList/>
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