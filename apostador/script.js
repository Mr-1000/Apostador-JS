/*
 * projeto de aposta com times cariocas rio de janeiro
 * flamengo, fluminense, botafogo, vasco
 * quem ganhara essa aposta !!!!!!!!!!
 * autor : marcio roberto 
*/
alert("na caixa digite o nome do  time \"carioca completo\" seu nome e o valor da aposta")
var i = 0;
var user = [];
var valor = [];
var time = [];
var array = ['fla.png', 'bota.png', 'flu.png', 'vasco.png'];
var placar1 = 0;
var placar2 = 0;
var ganho = document.getElementById('ganho');

function inicio() {
    comeco();
    placar();
    mostrar();
    vencedor();
}

function comeco() {

    while (i < 2) {
        user[i] = prompt("digite seu nome apostador!!");
        valor[i] = parseInt(prompt("digite seu valor da aposta!!"));
        time[i] = prompt("diga seu time para apostar!!");
        i++;

    }
    // console.log();
}

function placar() {
    placar1 = Math.floor(Math.random() * 11)
    placar2 = Math.floor(Math.random() * 11)
    if ((placar1 === placar2)) {
        alert("NAO HOUVE VENCEDOR EMPATE!!!");
        ganho.innerHTML =`nao existe contribuiçao`;
        return;
    } else if ((placar1 > placar2)&&(user[0] !== null)&&(user[1] !== null) ) {
        alert(`O CAMPEAO BRASILEIRO DE 2020 E ${time[0]}`)
    } else if ((placar2 > placar1)&&(user[0] !== null)&&(user[1] !== null)) {
        alert(`O CAMPEAO BRASILEIRO DE 2020 E ${time[1]}`)
    } else {
        console.log('nao houve apostador')
    }
}

function vencedor() {
    var vencedor = document.getElementById("vencedor");
    ganho = document.getElementById('ganho');
    var res = valor[0] + valor[1];
    if ((user[0] == null)&&(user[1] == null)) {
        placar1 = 0;
        placar2 = 0;
        vencedor.innerHTML = "nao houve apostadores";
    } else if ((placar1 > placar2)) {
        vencedor.innerHTML = `O time campeao e o ${time[0]}`;
        ganho.innerHTML = `O dinheiro vai para ${user[0]} : R$${res}`;
    } else {
        vencedor.innerHTML = `O time campeao e o ${time[1]}`;
        ganho.innerHTML = `O dinheiro vai para ${user[1]} : R$${res}`;
    }
}

function mostrar() {
    
    document.body.innerHTML = `
    <div id="left">
        <table>
        <tr>
        <th>${time[0]}</th>
        <th>APOSTA</th>
        </tr>
        <tr>
        <td>${user[0]}</td>
        <td>${valor[0]}</td>
        </tr>
        </table>
        <div id="image"></div>
    </div>
<span>x</span>
    <div id="right">
        <table>
        <tr>
        <th>${time[1]}</th>
        <th>APOSTA</th>
        </tr>
        <tr>
        <td>${user[1]}</td>
        <td>${valor[1]}</td>
        </tr>
        </table>
        <div id="image2"></div>
    </div>
    <div class="jogo">
        <h4>placar</h4>
        <span class="placar">${time[0]} ${placar1}</span>
        <span class="placar">X ${placar2} ${time[1]}</span> 
        <br>
        <br>
        <p id="vencedor"></p>
        <br>
        <br>
        <p id="ganho"></p>
    </div>

`;
    for (let index = 0; index < time.length; index++) {
        if (array) {
            if ((time[0] == "flamengo")) {
                document.getElementById("image").style.backgroundImage = "url(" + array[0] + ")";
                document.getElementById("image").style.backgroundRepeat = "no-repeat";
                document.getElementById("image").style.backgroundPosition = "center center";
                document.getElementById("image").style.backgroundSize = "cotain";
                document.getElementById("image").style.backgroundOrigin = "content-box";
            
            } else if ((time[0] == "botafogo")) {
                document.getElementById("image").style.backgroundImage = "url(" + array[1] + ")";
                document.getElementById("image").style.backgroundRepeat = "no-repeat";
                document.getElementById("image").style.backgroundPosition = "center center";
                document.getElementById("image").style.backgroundSize = "cotain";
                document.getElementById("image").style.backgroundOrigin = "content-box";
          
            } else if ((time[0] == "fluminense")) {
                document.getElementById("image").style.backgroundImage = "url(" + array[2] + ")";
                document.getElementById("image").style.backgroundRepeat = "no-repeat";
                document.getElementById("image").style.backgroundPosition = "center center";
                document.getElementById("image").style.backgroundSize = "cotain";
                document.getElementById("image").style.backgroundOrigin = "content-box";
              
            } else if ((time[0] == "vasco")) {
                document.getElementById("image").style.backgroundImage = "url(" + array[3] + ")";
                document.getElementById("image").style.backgroundRepeat = "no-repeat";
                document.getElementById("image").style.backgroundPosition = "center center";
                document.getElementById("image").style.backgroundSize = "cotain";
                document.getElementById("image").style.backgroundOrigin = "content-box";
           
            } else {
                console.log('nao houve time')
            }
            if ((time[1] == "flamengo")) {
                image = array.push('fla.png');
                document.getElementById("image2").style.backgroundImage = "url(" + array[0] + ")";
                document.getElementById("image2").style.backgroundRepeat = "no-repeat";
                document.getElementById("image2").style.backgroundPosition = "center center";
                document.getElementById("image2").style.backgroundSize = "cotain";
                document.getElementById("image2").style.backgroundOrigin = "content-box";
              
            } else if ((time[1] == "botafogo")) {
                image = array.push('bota.png');
                document.getElementById("image2").style.backgroundImage = "url(" + array[1] + ")";
                document.getElementById("image2").style.backgroundRepeat = "no-repeat";
                document.getElementById("image2").style.backgroundPosition = "center center";
                document.getElementById("image2").style.backgroundSize = "cotain";
                document.getElementById("image2").style.backgroundOrigin = "content-box";
             
            } else if ((time[1] == "fluminense")) {
                image = array.push('flu.png');
                document.getElementById("image2").style.backgroundImage = "url(" + array[2] + ")";
                document.getElementById("image2").style.backgroundRepeat = "no-repeat";
                document.getElementById("image2").style.backgroundPosition = "center center";
                document.getElementById("image2").style.backgroundSize = "cotain";
                document.getElementById("image2").style.backgroundOrigin = "content-box";
              
            } else if ((time[1] == "vasco")) {
                image = array.push('vasco.png');
                document.getElementById("image2").style.backgroundImage = "url(" + array[3] + ")";
                document.getElementById("image2").style.backgroundRepeat = "no-repeat";
                document.getElementById("image2").style.backgroundPosition = "center center";
                document.getElementById("image2").style.backgroundSize = "cotain";
                document.getElementById("image2").style.backgroundOrigin = "content-box";
               
            } else {
                console.log('nao ouve time')
            }
        }
    }
}

inicio();