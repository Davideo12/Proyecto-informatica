import React from 'react';

function Formulario() {

    return (
        <section className='content-section'>
            <div className='portada-articulo'>
                <h1>Contacto</h1>
                <p>Envía un mensaje SMS al autor de la página</p>
            </div>
            <form method='post' action='https://sms-api-production-b5d4.up.railway.app/sendsms'>
                <div className='form-container'>
                    <label htmlFor='sujeto'>Sujeto</label> <br/>
                    <input 
                        id='sujeto'
                        type='text'
                        name='sujeto' 
                    />
                </div>
                <div className='form-container'>
                    <label htmlFor='mensaje'>Mensaje</label> <br/>
                    <textarea 
                        id='mensaje'
                        name='mensaje'
                    ></textarea>
                </div>
                <div className='form-container'>
                    <input type='submit' value="Enviar" />
                </div>
            </form>
        </section>
    );
}

export default Formulario;

