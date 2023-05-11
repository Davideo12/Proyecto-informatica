import React from 'react';

function HistoriaDeLaComputacion() {
    return ( 
        <section className='content-section'>
            <div className='portada-articulo'>
                <h1>Historia de la computación</h1>
                <center>
                    <img src='images/Evolucion-Computadoras.jpeg' />
                </center>
            </div>
            <div>
                <p>La historia de la computación es una rama de la historia que se enfoca en el desarrollo y evolución de las computadoras y la informática. Esta historia se remonta a miles de años atrás, cuando los seres humanos empezaron a usar herramientas para facilitar el cálculo y el procesamiento de información.</p>
                <p>A lo largo de la historia, <b>muchos inventores y científicos han contribuido al desarrollo de la computación</b>. En la Edad Media, por ejemplo, se utilizaban ábacos y otros dispositivos mecánicos para realizar cálculos. Con el tiempo, estas herramientas se fueron perfeccionando y dando lugar a las primeras calculadoras mecánicas.</p>
                <p>En el, el matemático británico Charles Babbage diseñó una máquina de calcular programable, conocida como la <i>"máquina analítica"</i>, que fue precursora de las computadoras modernas. Sin embargo, la tecnología de la época no permitió la construcción de la máquina.</p>
                <center className='img-container effect-1'>
                    <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F7c%2F15%2F34%2F7c1534faa23c6dd1797920298cb07f03.png&f=1&nofb=1&ipt=0b9d94ed648c7eeb394ab756c1f4e504759ebf46510a5f0b5dc804ef08104e28&ipo=images' />
                    <br />
                    <span className='img-description'>Imagen de la maquina analítica, diseñada por Charles Babbage</span>
                </center>
                <p>Fue hasta la década de 1930 que las computadoras electrónicas empezaron a ser una realidad. En 1937, el científico estadounidense John Atanasoff y su colaborador Clifford Berry construyeron la primera computadora electrónica digital.</p>
                <p>Desde entonces, las computadoras han evolucionado a pasos agigantados, siendo cada vez más rápidas, potentes y capaces de procesar grandes cantidades de información. En la actualidad, la informática es una disciplina clave para el desarrollo de la tecnología y la innovación en muchos campos.</p>
            </div>
        </section>
     );
}

export default HistoriaDeLaComputacion;