import classes from "./index.module.css" ;


const faq = () => {

    //siempre el return devuelve un solo componente. un solo div
    //en vez de class es => className (N en mayuscula)
    //className={classes.titulo}
    return (

        <div>
            <h1> Preguntas frecuentes</h1>
        </div>

    )
}

export default faq