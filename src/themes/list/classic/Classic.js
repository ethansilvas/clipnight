import React, { Component } from 'react';
//import Iframe from 'react-iframe';
import YouTube from 'react-youtube';

class Classic extends Component {
    render() {
        const opts = {
          height: '390',
          width: '640',
          playerVars: { // https://developers.google.com/youtube/player_parameters
            autoplay: 1
          }
        };
     
        return (

          <div className="first">
            <YouTube
            videoId="2g811Eo7K8U"
            opts={opts}
            onReady={this._onReady}
            />

            <YouTube
            videoId="2g811Eo7K8U"
            opts={opts}
            onReady={this._onReady}
            />
          </div>
        );
    }

    /*
    constructor(props) {
        super(props);
        this.clips = ["https://www.youtube.com/watch?v=3QpRhqjYbew"];
    }

    SimpleList = () => {
        this.clips.push("https://www.youtube.com/watch?v=3QpRhqjYbew");
    }

    render() {
        return(
            <div className="top">
                <iframe src='https://www.youtube.com/watch?v=3QpRhqjYbew&t=324s'
                        frameBorder='0'
                        allow='autoplay; encrypted-media'
                        allowFullScreen
                        title='video'
                />
            </div>
        );
    }
    */
}

export default Classic;