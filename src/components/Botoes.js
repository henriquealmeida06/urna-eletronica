import styles from './Botoes.module.css'

function Botoes({numero, estilo}){
    return(
        <div className={styles.botaoTeclado}>
            <button className={estilo}>{numero}</button>
        </div>
    )
}
export default Botoes;