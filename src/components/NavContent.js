import React from 'react';

import Banner from './Banner';
import Formulario from './Formulario';

// Contenido de texto
import HistoriaDeLaComputacion from './content/HistoriaDeLaComputacion';
import SurgimientoTecnologiaDigital from './content/SurgimientoTecnologiaDigital';
import LaEraDeLosMainframes from './content/LaEraDeLosMainframes';
import SurgimientoMicroprocesadores from './content/SurgimientoMicroprocesadores';
import EraDeLasComputadorasPersonales from './content/EraDeLasComputadorasPersonales';
import SurgimientoDeWWW from './content/SurgimientoDeWWW';
import LenguajesDeProgramacion from './content/LenguajesDeProgramacion';
import EvolucionSistemasOperativos from './content/EvolucionDeSistmasOperativos';
import PrimerasMaquinasCalculadoras from './content/PrimerasMaquinasCalculadoras';
import ImpactoTecnologiaEnLaSociedad from './content/ImpactoTecnologiaEnLaSociedad';
import ComputacionEnLaNube from './content/ComputacionEnLaNube';
import EvolucionFuturaInformatica from './content/EvolucionFuturaInformatica';
import ImportanciaSeguridadInformatica from './content/ImportanciaSeguridadInformatica';
import LaIA from './content/LaIA';


function NavContent({setDropdown, setNavColor, setPage}) {
    const morado = "#301E67"
    const azul = "#03001C"

    const pageContent = [
        {"component": Banner, "text": "Página principal"},
        {"component": Formulario, "text": "Formulario"},
        {"component": HistoriaDeLaComputacion, "text": "Introducción a la historia de la computacion"},
        {"component": SurgimientoTecnologiaDigital, "text": "Surgimiento de la teconología digital"},
        {"component": LaEraDeLosMainframes, "text": "La era de los Mainframes"},
        {"component": SurgimientoMicroprocesadores, "text": "El surgimiento de los microporcesadores"},
        {"component": EraDeLasComputadorasPersonales, "text": "La era de las computadoras personales"},
        {"component": SurgimientoDeWWW, "text": "El surgimiento de la World Wide Web"},
        {"component": LenguajesDeProgramacion, "text": "Lenguajes de programacion"}, 
        {"component": EvolucionSistemasOperativos, "text": "Evolucion de los sistemas operativos"},
        {"component": PrimerasMaquinasCalculadoras, "text": "Las primeras máquinas calculadoras"},
        {"component": ImpactoTecnologiaEnLaSociedad, "text": "El impacto de la tecnología en la sociedad"},
        {"component": ComputacionEnLaNube, "text": "Computación en la nube"},
        {"component": EvolucionFuturaInformatica, "text": "Evolución futura de la informática"},
        {"component": ImportanciaSeguridadInformatica , "text": "Importancia de la seguridad informática"},
        {"component": LaIA, "text": "La Inteligencia Artificial"}
    ]

    function handleClick(element) {
        setPage(element.component)
        setDropdown(false)

        if(element.text === "Página principal") {
            setNavColor(azul)
        } else {
            setNavColor(morado)
        }
    } 
    
    return ( 
        <div className='nav-content'>
            <ul>
            {
                pageContent.map(element => (
                    <li onClick={() => handleClick(element)} > 
                        {element.text}
                    </li>
                ))
            }
           </ul>
        </div>
     );
}

export default NavContent;