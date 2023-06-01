var carosello = [
    {
        imgpath: "https://www.tecnicadellascuola.it/wp-content/uploads/2022/07/Matematica_Casella-300x194.jpg",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    },
    {
        imgpath: "https://www.tecnicadellascuola.it/wp-content/uploads/2022/07/Matematica_Casella-300x194.jpg",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    },
    {
        imgpath: "https://www.tecnicadellascuola.it/wp-content/uploads/2022/07/Matematica_Casella-300x194.jpg",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    },
    {
        imgpath: "https://www.tecnicadellascuola.it/wp-content/uploads/2022/07/Matematica_Casella-300x194.jpg",
        titolo: "Risolvi gli esercizi",
        desc:"...."
    }
];

function chiudo(){
  let div = document.getElementById("ciao");

  div.style.display = "none";

  let section = document.querySelector("body");

  section.style.background = "rgba(0,0,0,0)";
}


let toasts = document.getElementsByClassName("toast-body");
console.log(toasts);

for (let i = 0; i < toasts.length; i++) {
  toasts[i].addEventListener("click", function (){

    let div = document.getElementById("ciao");

    div.style.display = "block";
  });
}

function ok(){
  let div = document.getElementById("ciao");

  div.style.display = "block";

}

var pag = 1;


function campag(){
    let section = document.getElementById("sectB");

    section.innerHTML = ``;

    pag++;

    switch(pag){
        case 1:  section.innerHTML = creaToast1();
            break;
        case 2:  section.innerHTML = creaToast2();
            break;
        case 3:  section.innerHTML = creaToast3();
            break;
    }




}
function campagsx(){
    let section = document.getElementById("sectB");

    section.innerHTML = ``;

    pag--;

    switch(pag){
        case 1:  section.innerHTML = creaToast1();
            break;
        case 2:  section.innerHTML = creaToast2();
            break;
        case 3:  section.innerHTML = creaToast3();
            break;
    }




}


function creaToast1(){
    return `
      <div class="container">
        <div class="row pb-5"> <!-- padding-bottom-5 -->
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
        </div>

        <!--                                   -->

        <div class="d-md-flex justify-content-md-end">
          <button type="button" class="btn btn-outline-primary btnArrow" onclick="campag()">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right"
              viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </button>
        </div>

        <!--                                   -->

        <div class="row">
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ciao" style="display: none;" class="container">
        <button class="button" onclick="chiudo()">
          <span class="material-symbols-outlined">
          close
          </span>
        </button>
        <h2>Domanda</h2>
        <div class="toast" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <h2 class="mb-2">Risposte</h2>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="input-group mb-3" id="mess">
          <input type="text" class="form-control" placeholder="Risposta" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-primary" type="button" id="button-addon2"><span class="material-symbols-outlined">
            send
            </span></button>
        </div>
      </div>
`;
}
function creaToast2(){
    return `
      <div class="container">
        <div class="row pb-5"> <!-- padding-bottom-5 -->
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
        </div>

        <!--                                   -->

        <div id="frecce">
          <div >
            <button type="button" class="btn btn-outline-primary btnArrow" onclick="campagsx()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
            </button>
          </div>
  
          <div>
            <button type="button" class="btn btn-outline-primary btnArrow" onclick="campag()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
            </button>
          </div>
        </div>

        <!--                                   -->

        <div class="row">
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ciao" style="display: none;" class="container">
        <button class="button" onclick="chiudo()">
          <span class="material-symbols-outlined">
          close
          </span>
        </button>
        <h2>Domanda</h2>
        <div class="toast" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <h2 class="mb-2">Risposte</h2>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="input-group mb-3" id="mess">
          <input type="text" class="form-control" placeholder="Risposta" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-primary" type="button" id="button-addon2"><span class="material-symbols-outlined">
            send
            </span></button>
        </div>
      </div>
`;
}

function creaToast3(){
    return `
      <div class="container">
        <div class="row pb-5"> <!-- padding-bottom-5 -->
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
        </div>

        <!--                                   -->

        <div>
            <button type="button" class="btn btn-outline-primary btnArrow" onclick="campagsx()">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
              </svg>
            </button>
          </div>
  

        <!--                                   -->

        <div class="row">
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="toast" aria-live="assertive" aria-atomic="true">
              <div class="toast-header">
                <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
                <strong class="me-auto">Gianmarco pippo</strong>
                <small>11 mins ago</small>
              </div>
              <div class="toast-body" onclick = "ok()">
                <h5></h5>
                <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="ciao" style="display: none;" class="container">
        <button class="button" onclick="chiudo()">
          <span class="material-symbols-outlined">
          close
          </span>
        </button>
        <h2>Domanda</h2>
        <div class="toast" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <h2 class="mb-2">Risposte</h2>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="toast mb-5" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <img src="img/profilo.png" class="rounded me-2" alt="ce sta nu problema">
            <strong class="me-auto">Gianmarco pippo</strong>
            <small>11 mins ago</small>
          </div>
          <div class="toast-body">
            <h5></h5>
            <p>Non ho capito il past simple, qualcuno me lo spiega?</p>
          </div>
        </div>
        <div class="input-group mb-3" id="mess">
          <input type="text" class="form-control" placeholder="Risposta" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button class="btn btn-outline-primary" type="button" id="button-addon2"><span class="material-symbols-outlined">
            send
            </span></button>
        </div>
      </div>
`;
}

