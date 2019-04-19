import React, { Component } from 'react';
import Iframe from 'react-iframe';


class Clip extends Component {
    render() {
        return(
            <div className="top">
                <iframe src='https://www.youtube.com/embed/E7wJTI-1dvQ'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                />
            </div>
        );
    }
}

export default Clip;