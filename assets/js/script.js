let textArea = document.querySelector("textarea");
let tweetar = document.querySelector("button");
let feed = document.querySelector(".conteudoPrincipal__feed");

tweetar.addEventListener('click', pegarTweetar)

function pegarTweetar(event){
  event.preventDefault();
  let texto = textArea.value;
  let data = new Date();
  let horas = data.getHours();
  let minutos = data.getMinutes();
  let tweet = {
    nome: "Edson",
    usuario: "@edsonkenzie",
    tempo: `${horas}:${minutos} alo`,
    foto: "./assets/img/ProfilePic.png",
    texto: texto
  }
  criarTweet(tweet);
  textArea.value = "";
}

function criarTweet(tweet) {
  const {nome,usuario,tempo,foto,texto} = tweet;
  let li = document.createElement("li");  
  li.classList.add("conteudoPrincipal__tweet");
  let img = document.createElement("img");
  img.classList.add("tweet__foto");
  img.src = foto;
  let div = document.createElement("div");
  div.classList.add("tweet_conteudo");
  let h3 = document.createElement("h3");
  h3.innerHTML = nome;
  let span = document.createElement("span");
  span.innerHTML = `${usuario} - ${tempo}`;
  let p = document.createElement("p");
  p.innerHTML = texto;
  div.appendChild(h3);
  div.appendChild(span);
  div.appendChild(p);
  li.appendChild(img);
  li.appendChild(div);
  addTweet(li);
}

function addTweet(tweet) {
  feed.appendChild(tweet);
}


        // <li class="conteudoPrincipal__tweet">
        //   <img class="tweet__foto" src="./assets/img/ProfilePic.png" alt="">
        //   <div class="tweet_conteudo">
        //     <h3>Daniel</h3>
        //     <span>@danielkenzie - 14s</span>
        //     <p>O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500</p>
        //   </div>
        // </li>

