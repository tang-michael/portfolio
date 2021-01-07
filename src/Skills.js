import './CSS/Skills.css'



function Skills(){
  function openCity(cityName) {
      alert(cityName);
      var i;
      var x = document.getElementsByClassName("city");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      document.getElementById(cityName).style.display = "block";
  }

  return(
    <div id="wrapper-skills">
      <div id="title">
        <h2>Skills</h2>
      </div>
      <div id="content">
      <div class="tab-nav">
        <button class="w3-bar-item w3-button" onclick={() => openCity('London')}>London</button>
        <button class="w3-bar-item w3-button" onclick={() => openCity('Paris')}>Paris</button>
        <button class="w3-bar-item w3-button" onclick={() => openCity('Tokyo')}>Tokyo</button>
      </div>
      <div id="London" class="w3-container city">
        <h2>London</h2>
        <p>London is the capital city of England.</p>
      </div>

      <div id="Paris" class="w3-container city">
        <h2>Paris</h2>
        <p>Paris is the capital of France.</p>
      </div>

      <div id="Tokyo" class="w3-container city">
        <h2>Tokyo</h2>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      </div>
    </div>
  );
}


export default Skills;
