import React from 'react';

function SurgimientoDeWWW() {
    return ( 
        <section className='content-section'>
            <div className='portada-articulo'>
                <h1>El surgimiento de la Worl Wide Web</h1>
                <img src='images/internet.jpg' alt='imagen' />
                <br/>
            </div>
            <div>
                <p>El surgimiento de la <b>World Wide Web</b> (WWW o simplemente Web) se remonta a la década de 1990, cuando el físico británico <b>Tim Berners-Lee</b> creó una plataforma que permitía el intercambio de información en línea de manera global. Berners-Lee desarrolló un sistema para compartir información a través de <b>hipervínculos</b>, lo que permitió la navegación fácil y rápida por la información en línea y llevó a la creación de la Web tal como la conocemos hoy en día.</p>
                <p>La introducción de la Web cambió la forma en que la gente accede y comparte información. Antes de la Web, la información en línea era principalmente en forma de boletines electrónicos o correos electrónicos, y la navegación por la información era tediosa y limitada. La Web permitió a los usuarios acceder a información de manera rápida y fácil, y también les permitió compartir información y comunicarse de maneras que antes no eran posibles.</p>
                <center className='img-container effect-3'>
                    <img src='images/top-paginas.jpeg' alt='imagen'/>
                    <br/>
                    <span className='img-description'>Los sitios web más populares de este lado del mundo</span>
                </center>
                <p>El surgimiento de la Web también llevó a la creación de muchos servicios en línea que ahora son comunes, como el correo electrónico, las búsquedas en línea, las redes sociales y el comercio electrónico. La Web permitió la creación de una economía en línea completamente nueva, que ha cambiado la forma en que las empresas operan y han creado nuevas oportunidades de negocio.</p>
                <p>La popularidad de la Web ha llevado a un cambio en la forma en que la gente consume y crea contenido en línea. La capacidad de los usuarios para crear y compartir contenido ha llevado a la creación de plataformas como blogs, wikis y redes sociales, que han transformado la forma en que las personas interactúan y colaboran en línea.</p>
                <p>En la actualidad, la Web sigue evolucionando y creciendo, con la adopción de tecnologías como la inteligencia artificial y la realidad virtual. La Web sigue siendo una plataforma esencial para la comunicación, el acceso a información y el comercio en línea.</p>
                <center>
                <video width="750" height="472" controls>
                    <source src="/media/video.mp4" type="video/mp4" />
                    Tu navegador no admite el elemento de video.
                </video>
                </center>
                <p>En resumen, el surgimiento de la World Wide Web tuvo un impacto significativo en la forma en que la gente accede y comparte información en línea. La Web ha transformado la forma en que las personas interactúan y colaboran en línea, ha creado una economía en línea completamente nueva y sigue evolucionando y creciendo.</p>
            </div>
        </section>
     );
}

export default SurgimientoDeWWW;