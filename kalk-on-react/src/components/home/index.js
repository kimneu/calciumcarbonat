// @flow

import * as React from 'react';

import 'semantic-ui/dist/semantic.min.css'

class Home extends React.Component<Props> {

    render () {
        return(
          <div id="main">
              <div class="intro">
                  <p>KALK, an open minded project for material art- and objects of use.<br/> Diversity of phases already done:</p>
              </div>
              <div id="index-wrapper">
                  <a href="00.html" id="index00">
                      <p>PHASE ZERO<br/>THE BIRTH (P000)</p>
                  </a>
                  <a href="01.html" id="index01">
                      <p>PHASE ZERO<br/>CFT (P000)</p>
                  </a>
                  <a href="02.html" id="index02">
                      <p>PHASE ONE<br/>THE MOON (P001)</p>
                  </a>
                  <a href="03.html" id="index03">
                      <p>PHASE ONE<br/>POP-UP (P001)</p>
                  </a>
                  <a href="04.html" id="index04">
                      <p>CUSTOM ZERO<br/>LEATHER (C000)</p>
                  </a>
                  <a href="05.html" id="index05">
                      <p>PHASE TWO<br/>UNKNOWN (P002)</p>
                  </a>
              </div>
          </div>
        )
    }
}

export default Home
