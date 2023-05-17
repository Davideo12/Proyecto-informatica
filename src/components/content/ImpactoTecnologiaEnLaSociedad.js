import React from 'react';

function ImpactoTecnologiaEnLaSociedad() {
    return ( 
        <section className='content-section'>
            <div className='portada-articulo'>
                <h1>Impacto de la teconología en la sociedad</h1>
                <img src='images/tech-sociedad.jpg' alt='imagen'/>
                <br/>
            </div>
            <div>
                <p>La tecnología ha tenido un impacto significativo en la sociedad moderna, desde la forma en que nos comunicamos hasta la forma en que realizamos transacciones financieras. Uno de los desarrollos más interesantes de los últimos años ha sido el surgimiento de las criptomonedas.</p>
                <p>Las criptomonedas, como <b>Bitcoin</b> y <b>Ethereum</b>, son monedas digitales que utilizan criptografía para garantizar la seguridad y privacidad de las transacciones. Estas monedas no están reguladas por ningún gobierno o institución financiera, lo que ha llevado a algunos a cuestionar su legitimidad y a otros a verlas como una forma de democratizar el sistema financiero.</p>
                <center className='img-container effect-5'>
                    <img src='images/crypto.jpg' alt='imagen'/>
                    <br/>
                    <span className='img-description'>Criptomonedas - Bitcoin, Ethereum</span>
                </center>
                <p>A pesar de la popularidad creciente de las criptomonedas, aún existen desafíos importantes. La volatilidad del mercado puede hacer que los precios fluctúen significativamente de un día para otro, lo que hace que invertir en ellas sea una apuesta arriesgada. Además, su uso en actividades ilegales y el lavado de dinero ha sido un problema para algunos países que han implementado regulaciones más estrictas.</p>
                <p>Las <b>redes sociales</b> también han tenido un impacto significativo en la sociedad moderna. Las plataformas como Facebook, Twitter e Instagram han transformado la forma en que nos comunicamos y nos conectamos con otros, y han tenido un impacto significativo en la forma en que consumimos noticias e información.</p>
                <p>A pesar de los beneficios, las redes sociales también han sido objeto de críticas por su capacidad para difundir información errónea y contribuir a la polarización política y social. Los usuarios también se preocupan cada vez más por su privacidad y la forma en que sus datos personales son utilizados por las plataformas de redes sociales.</p>
                <p>Las tecnologías de la información también han tenido un impacto significativo en la forma en que trabajamos y vivimos nuestras vidas diarias. El surgimiento de la nube y el almacenamiento de datos en línea ha hecho posible que las empresas y los individuos accedan a información desde cualquier lugar del mundo y en cualquier momento.</p>
                <p>TikTok ha tenido un impacto significativo en la moda y la cultura popular de los jóvenes. Esta popular plataforma de redes sociales ha creado una nueva forma de expresión y entretenimiento, donde los usuarios pueden compartir videos cortos de baile, actuación y creatividad. La naturaleza viral de TikTok ha permitido que las tendencias de moda se propaguen rápidamente y se vuelvan populares entre los jóvenes.</p>
                <p>Una muestra de la propagación de contenido por medio de TikTok es la música. Aqui mostramos la canción más popular en México hoy, en la fecha que se ha escrito este artículo:</p>
                <h2>Cancion #1 en México:</h2>
                <center className='cancion-container'>
                    <center className='cancion'>
                        <div>
                            <img width="300" height="300" src='images/portada.jpeg' alt='imagen-portada' />
                            <br />
                            <h2>Ella Baila Sola</h2>
                            <h4>Peso pluma, Eslabón Armado</h4>
                            <audio controls>
                                <source src="media/audio.mp3" type="audio/mp3" />
                                Tu navegador no admite la etiqueta de audio.
                            </audio>
                        </div>
                    </center>
                </center>
                <p>En resumen, la tecnología ha tenido un impacto significativo en la sociedad moderna, desde la forma en que realizamos transacciones financieras hasta la forma en que nos comunicamos y consumimos información. Aunque ha habido muchos beneficios, también hay desafíos importantes que deben ser abordados para asegurar que la tecnología continúe siendo una fuerza positiva en la sociedad.</p>
            </div>
        </section>
    );
}

export default ImpactoTecnologiaEnLaSociedad;