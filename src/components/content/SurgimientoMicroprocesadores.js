import React from 'react';

function SurgimientoMicroprocesadores() {
    return ( 
        <section className='content-section'>
            <div className='portada-articulo'>
                <h1>El surgimiento de los microporcesadores</h1>
                <img src='images/procesador.jpg' alt='imagen'/>
                <br/>
            </div>
            <div>
                <p>El surgimiento de los <b>microprocesadores marcó un hito importante en la historia de la computación</b>. Los microprocesadores son chips integrados que contienen la unidad central de procesamiento (CPU) de una computadora, así como otros componentes importantes como la memoria y los controladores de entrada y salida. Los microprocesadores permitieron la creación de computadoras más pequeñas, económicas y poderosas, y transformaron la forma en que las personas interactuaban con la tecnología.</p>
                <p>El primer microprocesador comercialmente viable fue el <i>Intel 4004</i>, que fue lanzado en 1971. Este chip fue diseñado originalmente para su uso en calculadoras, pero rápidamente se convirtió en la base de las primeras computadoras personales. El Intel 4004 tenía solo 2.300 transistores y podía ejecutar 60.000 operaciones por segundo, lo que en ese momento era una velocidad increíblemente rápida para una computadora tan pequeña.</p>
                <p>El surgimiento de los microprocesadores abrió la puerta a una nueva generación de <b>computadoras personales</b>. La introducción de la Apple II en 1977 y la IBM PC en 1981 marcaron el inicio de la era de las computadoras personales y su popularidad creció exponencialmente. La tecnología de los microprocesadores también permitió la creación de dispositivos electrónicos portátiles como reproductores de música y teléfonos móviles, que han transformado la forma en que las personas interactúan con la tecnología.</p>
                <p>Los microprocesadores también han sido fundamentales en la evolución de la inteligencia artificial y la robótica. Los procesadores especializados en el procesamiento de datos en tiempo real han permitido el desarrollo de sistemas automatizados en industrias como la fabricación y la logística, lo que ha mejorado la eficiencia y la precisión de estas operaciones.</p>
                <p>En la actualidad, los microprocesadores continúan evolucionando, con la introducción de chips cada vez más pequeños y potentes. Los procesadores de múltiples núcleos permiten la ejecución simultánea de múltiples tareas, y los avances en tecnología de memoria y almacenamiento han permitido el procesamiento y almacenamiento de grandes cantidades de datos de manera más eficiente.</p>
                <center className='img-container effect-4'>
                    <img src='images/raspberrypi-pico-2.jpeg' alt='imagen'/>
                    <br/>
                    <span className='img-description'>Microporocesadores open source, como lo es raspberry pi pico</span>
                </center>
                <p>En resumen, el surgimiento de los microprocesadores transformó la forma en que interactuamos con la tecnología. Los microprocesadores permitieron la creación de computadoras más pequeñas, económicas y poderosas, así como dispositivos electrónicos portátiles y sistemas automatizados en industrias como la fabricación y la logística.</p>
            </div>
        </section>
     );
}

export default SurgimientoMicroprocesadores;