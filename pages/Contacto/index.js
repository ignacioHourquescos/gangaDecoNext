import Head from 'next/head'
import classes from './index.module.scss'
import classNames from 'classnames'
import ContactUs from '../../components/formulario/formulario'



const comoComprar = () => {

    const container = classNames(classes.container,"container-fluid")

    return (
    <div>

        <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"/>
        </Head> 

        <div className={container}>
            <div className='row justify-content-center'>
                <h1 className="d-md-none">Contactanos</h1>
                <h2 className="col-9 col-md-12">Mandanos un mail o un whatsapp si tenes alguna duda!</h2>
                <div className='col-12 text-center'>
                    <div className='d-inline-flex flex-column d-inline align-items-md-start'>
                        <div>
                            <img className='mr-3' src="watsap.png"/>
                            <p>11-3588-4485</p>
                        </div>
                        <div>
                            <img className='mr-3' src="mailGris.png"/>
                            <p>mail@mail.com</p>    
                        </div>
                    </div>
                </div>

                <ContactUs/>
            </div>

            
        </div>
    </div>

    )
}

export default comoComprar;