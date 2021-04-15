import classes from "./index.module.css" ;


const aboutUs = () => {

    //siempre el return devuelve un solo componente. un solo div
    //en vez de class es => className (N en mayuscula)
    //className={classes.titulo}


    return (

        <div className={classes.container}>
            <h1 className={classes.titulo}>About us - Quienes somos. somos ganga deco </h1>
       
        </div>

    )


}

export default aboutUs