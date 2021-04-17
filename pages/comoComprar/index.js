import classes from './index.module.scss'

const comoComprar = () => {

    return (
        <div className={classes.container}>
            <section>
                <img src="pedidosIcon.svg"/>
                <p>PEDIDO</p>
                <h1>¿Como puedo realizar un pedido?</h1>
                <p>Elegí el producto que quieras comprar. <br/>
                   Una vez elegido el producto, anotate el codigo de cada producto.
                <p>
                </p>
                Una vez que te hayas anotado el codigo de cada producto, presiona el boton de whatsapp que te sera dirigido a el whatsapp de la empresa, alli podras hablar con un asesor para comprar el o los productos que deseas.
                </p>
            </section>

            <section>
                <img src="mediosPagoIcon.svg"/>
                <p>MEDIOS DE PAGO</p>
                <h1>¿Cuáles son los medios de pago?</h1>
                <p>Podes abonar con Efectivo, Mercado de Pago y transferencia bancaria.</p>
            </section>

            <section>
                <img src="formasEnvioIcon.svg"/>
                <p>FORMAS DE ENVIO</p>
                <h1>¿Realizan envíos?</h1>
                <p>Si, hacemos envíos, pero varian los    precios según los lugares, a continuación pasamos los precios según las distancias.</p>
                <ul>
                    <li>$100 Villa de Mayo, Adolfo Sordeaux, Don Torcuato, Los Polvorines, Pablo Nogués.</li>
                    <li>$150 Grand Bourg Tortuguitas, El Talar</li>
                    <li>$200 San Miguel, Muñiz, Bella Vista, General Pacheco.</li>
                </ul>
                <p>
                    Próximamente sumaremos otro medio de envío para llegar a más zonas del Gran Buenos Aires y CABA.
                </p>
            </section>


        </div>
    )
}

export default comoComprar;




