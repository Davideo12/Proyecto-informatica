import React from 'react';

function EvolucionDeSistmasOperativos() {
    return ( 
        <section className='content-section'>
            <div className='portada-articulo'>
                <h1>Evolución de los sistemas operativos</h1>
                <img src='images/imagen-random-3.jpeg' alt='imagen' />
                <br/>
            </div>
            <div>
                <ul>
                    <li><b>Años 1950:</b> Los primeros sistemas operativos se desarrollan para mainframes. Estos sistemas operativos se enfocan en la gestión de recursos, como la memoria y los dispositivos de entrada y salida. Los usuarios interactúan con el sistema operativo a través de una consola.</li>
                    <li><b>Años 1960:</b> Se desarrollan los sistemas operativos en lotes. Los usuarios envían trabajos al sistema en lotes, los cuales se procesan uno tras otro. Los sistemas operativos en lotes introducen la idea de la programación por lotes, que permite a los programadores enviar programas al sistema en lugar de interactuar con el sistema operativo de forma interactiva.</li>
                    <li><b>Años 1970:</b> Se desarrollan los sistemas operativos en tiempo compartido, que permiten a varios usuarios interactuar con el sistema al mismo tiempo. Los usuarios comparten los recursos del sistema y pueden realizar varias tareas simultáneamente. Los sistemas operativos en tiempo compartido también introducen la idea de las interfaces de usuario gráficas (GUI), que permiten a los usuarios interactuar con el sistema a través de ventanas, iconos y menús.</li>
                    <li><b>Años 1980:</b> Se desarrollan los sistemas operativos de red, que permiten a los usuarios acceder a recursos en diferentes sistemas a través de una red. Los sistemas operativos de red también permiten compartir archivos y recursos, como impresoras y dispositivos de almacenamiento.</li>
                    <li><b>Años 1990:</b> Se desarrollan sistemas operativos más avanzados, como Windows 3.0 y Mac OS. Estos sistemas operativos incluyen características como la multitarea y la compatibilidad con redes más avanzadas.</li>
                    <li><b>Años 2000:</b> Se desarrollan sistemas operativos modernos, como Windows XP, macOS y Linux. Estos sistemas operativos incluyen características como la seguridad mejorada, la conectividad a Internet y la capacidad de ejecutar aplicaciones en línea.</li>
                    <li><b>Años 2010 y 2020:</b> Los sistemas operativos móviles, como iOS y Android, se vuelven cada vez más populares. Estos sistemas operativos se ejecutan en dispositivos móviles, como teléfonos inteligentes y tabletas, y ofrecen características como la multitarea, la conectividad a Internet y la compatibilidad con aplicaciones móviles.</li>
                </ul>
                <center>
                    <img className='img-container effect-2' src='images/linea-del-tiempo-os.jpeg' alt='imagen'/>
                    <br/>
                    <span className='img-description'>Linea del tiempo de la evolucion de los sitemas operativos</span>
                </center>
                <p>En resumen, los sistemas operativos han evolucionado de los primeros sistemas en mainframes hasta los modernos sistemas operativos móviles. Cada etapa de evolución ha introducido nuevas características y capacidades, como la programación por lotes, las interfaces gráficas de usuario y la conectividad a Internet. Los sistemas operativos son una parte esencial de cualquier sistema informático y continúan evolucionando para satisfacer las necesidades de los usuarios.</p>
            </div>
        </section>
     );
}

export default EvolucionDeSistmasOperativos;