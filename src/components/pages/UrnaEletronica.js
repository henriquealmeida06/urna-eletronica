import styles from './UrnaEletronica.module.css'
import Botoes from '../Botoes'
import BotoesDeAcao from '../BotoesDeAcao'


function UrnaEletronica(){
    return(
        <div className={styles.containerUrna}>
            <div className={styles.visor}>

            </div>
            <div className={styles.teclado}>
                <div className={styles.divJustica}>
                    <p className={styles.nomeJustica}>JUSTIÇA ELEITORAL</p>
                </div>
                <div className={styles.teclas}>
                    <div className={styles.numeros}>
                    <Botoes estilo={styles.botaoNumerico}  numero="1"/>
                    <Botoes estilo={styles.botaoNumerico} numero="2"/>
                    <Botoes estilo={styles.botaoNumerico} numero="3"/>
                    <Botoes estilo={styles.botaoNumerico} numero="4"/>
                    <Botoes estilo={styles.botaoNumerico} numero="5"/>
                    <Botoes estilo={styles.botaoNumerico} numero="6"/>
                    <Botoes estilo={styles.botaoNumerico} numero="7"/>
                    <Botoes estilo={styles.botaoNumerico} numero="8"/>
                    <Botoes estilo={styles.botaoNumerico} numero="9"/>
                    <Botoes estilo={styles.botaoNumerico} numero="0"/>
                    </div>
                    <div className={styles.botoesSelecao}>
                    <Botoes estilo={styles.botaoBranco} numero="BRANCO"/>
                    <Botoes estilo={styles.botaoCorrige} numero="CORRIGE"/>
                    <Botoes estilo={styles.botaoConfirma} numero="CONFIRMA"/>
                    
                    </div>


                </div>

            </div>

        </div>
    )
}
export default UrnaEletronica