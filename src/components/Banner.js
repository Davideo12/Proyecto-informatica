import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import ImageSlider from './ImageSlider';

function Banner() {

    return ( 
        <section class="index-pannel">
            <div>
                <h4 className='console-text'>
                    {"> david@server ~/documents/$"}
                    <TypeAnimation
                        sequence={[
                            ' npm start',
                            2000,
                            ' npm run pagina-web', 
                            1000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                    />
                </h4>
            </div>
        <div class="flex-div">
                <div>
                    <h1 class="title-pannel">Historia de la <br/>computación</h1>
                </div>
                <div>
                    <ImageSlider />
                </div>
        </div> 
        </section>
     );
}

export default Banner;
