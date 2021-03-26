import './CSS/Skills.css'
import { CSSTransition } from 'react-transition-group';
import React, {useState} from 'react';



export default function Skills(){
  const [isLSelected, setL] = useState(false);
  const [isWcSelected, setWc] = useState(false);
  const [isDbSelected, setDb] = useState(false);

  function handleClick(category, tab){
    if(category == "Languages"){
      setL(true);
      setWc(false);
      setDb(false);
    }else if(category == "wc"){
      setL(false);
      setWc(true);
      setDb(false);
    }else if(category == "Database"){
      setL(false);
      setWc(false);
      setDb(true);
    }
    var i;
    var x = document.getElementsByClassName("Categories");
    var y = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
      if(x[i]){
        x[i].style.transition = "all 0.3s";
        x[i].style.opacity = "0";
        x[i].style.display = "none";
      }
    }

    for(i = 0; i < y.length; i++){
      if(y[i]){
        y[i].style.color = "white";
        y[i].style.background = "#222831";
      }
    }
    document.getElementById(tab).style.color = "#00adb5";
    document.getElementById(tab).style.background = "#39414f";
    document.getElementById(category).style.transition = "all 0.3s";
    document.getElementById(category).style.opacity = "1";
    document.getElementById(category).style.display = "block";


  }

  return(
    <div id="wrapper-skills">
      <div id="title">
        <h2>Skills</h2>
      </div>
      <div id="content">
      <div class="tab-nav">
        <button class="tabs" id="tab-selector-1" onClick={() => handleClick('Languages','tab-selector-1')}>Languages</button>
        <button class="tabs" id="tab-selector-2" onClick={() => handleClick('wc','tab-selector-2')}>Web / Client</button>
        <button class="tabs" id="tab-selector-3" onClick={() => handleClick('Database','tab-selector-3')}>Database</button>
      </div>
      <CSSTransition in={isLSelected} timeout={200} classNames="l-node">
      <div id="Languages" className="Categories">
        <h2 id="languages-title">Languages</h2>
          <h3>Java</h3>
          <div class="w3-border">
             <div class="w3-grey" style={{width: "100%"}}></div>
          </div>
          <h3>C</h3>
          <div class="w3-border">
             <div class="w3-grey" style={{width: "70%"}}></div>
          </div>
      </div>
      </CSSTransition>

      <CSSTransition in={isWcSelected} timeout={200} classNames="wc-node">
      <div id="wc" className="Categories">
        <h2 id="wc-title">Web / Client</h2>
        <h3>HTML</h3>
        <div class="w3-border">
           <div class="w3-grey" style={{width: "100%"}}></div>
        </div>
        <h3>CSS</h3>
        <div class="w3-border">
           <div class="w3-grey" style={{width: "100%"}}></div>
        </div>
        <h3>Javascript</h3>
        <div class="w3-border">
           <div class="w3-grey" style={{width: "70%"}}></div>
        </div>
        <h3>React</h3>
        <div class="w3-border">
           <div class="w3-grey" style={{width: "60%"}}></div>
        </div>
      </div>
      </CSSTransition>

      <CSSTransition in={isDbSelected} timeout={200} classNames="db-node">
      <div id="Database" className="Categories">
        <h2 id="wc-title">Database</h2>
        <h3>MySQL</h3>
        <div class="w3-border">
           <div class="w3-grey" style={{width: "60%"}}></div>
        </div>
      </div>
      </CSSTransition>
      </div>
    </div>
  );
}
