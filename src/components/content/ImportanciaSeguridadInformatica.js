import React from 'react';

function ImportanciaSeguridadInformatica() {
    return (
        <section className='content-section'>
            <div className='portada-articulo'>
                <h1>La importancia de la seguridad informática</h1>
                <img src='images/security.jpg' alt='imagen'/>
                <br/>
            </div>
            <div>
                <p>La seguridad informática es un tema cada vez más importante en nuestra sociedad moderna. En la actualidad, la mayoría de las empresas y organizaciones dependen en gran medida de la tecnología y la información digital, lo que hace que la seguridad informática sea una prioridad fundamental. </p>
                <p>En este sentido, la seguridad informática se refiere a la protección de los sistemas y la información digital de <b>amenazas externas</b>, como hackers y virus, así como también de <b>amenazas internas</b>, como el robo de información por parte de empleados malintencionados.</p>
                <p>La seguridad informática también abarca la implementación de medidas de seguridad físicas, como el control de acceso a edificios y salas de servidores, así como la seguridad lógica, como la encriptación de datos y la gestión de contraseñas. La seguridad informática es crucial para garantizar la integridad, la disponibilidad y la confidencialidad de la información digital.</p>
                <p>En la actualidad, la seguridad informática es especialmente importante debido a la <b>creciente amenaza de ciberataques</b> y la creciente cantidad de datos sensibles que se almacenan en línea. Es importante que las empresas y organizaciones establezcan políticas y procedimientos de seguridad efectivos, y que se aseguren de que todos los empleados estén al tanto de las políticas de seguridad y reciban capacitación en seguridad informática.</p>
                <p>Además, es importante que los individuos tomen medidas para proteger su propia información digital, como utilizar contraseñas seguras y cambiarlas regularmente, utilizar software de seguridad, y tener cuidado al hacer clic en enlaces sospechosos o descargar archivos de origen desconocido. La seguridad informática es una responsabilidad compartida por todos, y es crucial para garantizar la protección de nuestros datos y sistemas digitales.</p>
                <p>Para comprender las tácticas que utilizan los hackers, es importante familiarizarse con el OWASP Top 10, una lista de las principales vulnerabilidades de seguridad en aplicaciones web. Estas vulnerabilidades pueden ser explotadas por los hackers para acceder a sistemas, robar información o interrumpir los servicios en línea.</p>
                <h2>OWASP Top 10</h2>
                <ol>
                    <li><b>Inyección (Injection):</b> Las vulnerabilidades de inyección permiten que un atacante inserte código malicioso en una aplicación o sistema para obtener acceso no autorizado o controlarlo.</li>
                    <li><b>Autenticación y gestión de sesiones incorrectas (Broken Authentication and Session Management):</b> Estas vulnerabilidades ocurren cuando las funciones de autenticación y gestión de sesiones no se implementan correctamente, permitiendo a los atacantes comprometer cuentas de usuario o secuestrar sesiones.</li>
                    <li><b>Exposición de datos sensibles (Sensitive Data Exposure):</b> Se refiere a la falta de protección adecuada de datos sensibles, como contraseñas o información personal, lo que permite a los atacantes acceder y utilizar esa información.</li>
                    <li><b>XML External Entities (XXE):</b> Las vulnerabilidades XXE ocurren cuando una aplicación procesa datos XML no confiables, lo que permite a los atacantes leer archivos locales, realizar ataques de denegación de servicio o escanear puertos internos.</li>
                    <li><b>Control de acceso incorrecto (Broken Access Control):</b> Estas vulnerabilidades permiten a los atacantes acceder a funciones o datos sin los permisos adecuados, lo que puede llevar a una violación de la privacidad o la manipulación de información sensible.</li>
                    <li><b>Componentes de seguridad obsoletos o vulnerables (Security Misconfiguration):</b> Ocurren cuando los sistemas no se configuran adecuadamente, lo que facilita a los atacantes el acceso no autorizado a datos o funcionalidades.</li>
                    <li><b>Cross-Site Scripting (XSS):</b> Estas vulnerabilidades permiten a los atacantes inyectar scripts maliciosos en páginas web vistas por otros usuarios, lo que puede llevar al robo de información o el control del navegador.</li>
                    <li><b>Deserialización insegura (Insecure Deserialization):</b> Ocurre cuando los datos que se deserializan no se validan adecuadamente, lo que puede permitir a los
                    atacantes ejecutar código malicioso o manipular objetos en la aplicación.</li>
                    <li><b>Uso de componentes con vulnerabilidades conocidas (Using Components with Known Vulnerabilities):</b> Esto sucede cuando se utilizan bibliotecas o componentes de software desactualizados o con vulnerabilidades conocidas, lo que facilita a los atacantes explotar esas debilidades.</li>
                    <li><b>Insuficiente registro y monitorización (Insufficient Logging and Monitoring):</b> La falta de registro y monitorización adecuados dificulta la detección o investigación de actividades maliciosas, permitiendo a los atacantes actuar sin ser detectados.</li>
                </ol>
            </div>
        </section>
    );
}

export default ImportanciaSeguridadInformatica;