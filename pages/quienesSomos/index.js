import classes from './index.module.scss'

const comoComprar = () => {

    return (
        <div className={classes.container}>
            <img src="ellas.png"/>
            <p>
            Somos <span>Sil</span> y <span>Car</span>, además de socias y amigas también somos hermanas.  
            </p>
            <p>
            Juntas creamos Ganga Deco, que es el resultado de una iniciativa que nació en medio de la cuarentena, un momento que nos permitió reflexionar y descubrir que el hogar es un espacio fundamental en nuestras vidas, donde uno debe estar a gusto y encontrar paz.
            </p>
            <p>
            Empezar fue un gran desafío para nosotras,  estamos felices de que nos ayuden a cumplirlo. Nos esforzamos mucho en la elección de cada producto, buscamos que sean útiles, que los sorprendan y a un precio <span>GANGA</span>. 
            </p>
        </div>
    )
}

export default comoComprar;