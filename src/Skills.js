import './CSS/Skills.css'



export default function Skills(){


  function handleClick(cityName){
    var i;
    var x = document.getElementsByClassName("Categories");
    for (i = 0; i < x.length; i++) {
      if(x[i]){
        x[i].style.display = "none";
      }
    }
    document.getElementById(cityName).style.display = "block";
  }
  function test(){
    console.log("test");
  }
  return(
    <div id="wrapper-skills">
      <div id="title">
        <h2>Skills</h2>
      </div>
      <div id="content">
      <div class="tab-nav">
        <button class="w3-bar-item w3-button" onClick={() => handleClick('Languages')}>Languages</button>
        <button class="w3-bar-item w3-button" onClick={() => handleClick('wc')}>Web / Client</button>
        <button class="w3-bar-item w3-button" onClick={() => handleClick('Database')}>Database</button>
      </div>
      <div id="Languages" className="Categories">
        <h2>Languages</h2>
        <p>Paris is the capital of France.</p>
      </div>
      <div id="wc" className="Categories">
        <h2>Web / Client</h2>
        <p>London is the capital city of England.</p>
      </div>
      <div id="Database" className="Categories">
        <h2>Database</h2>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      </div>
    </div>
  );
}
