var musica = [ /*Aqui esta el arreglo de canciones*/ 
    {name: "Ho Hey", album: "The Lumminers", arts: "The Lumminers", dur: "2:43", url: `https://th.bing.com/th/id/R.93f681fd0a6b64ab989a427174134852?rik=5fFcSUTpGYie3w&riu=http%3a%2f%2fcdn.sonicomusica.com%2fartists%2ft%2fthe-lumineers%2falbums%2fthe-lumineers-5.jpg&ehk=hqg4W36963Jggu3tQXRr6A93HFsPR1Xv%2fpE2%2f%2fVuJmY%3d&risl=&pid=ImgRaw&r=0`},
    {name: "The Violence", album: "Like A House On Fire", arts: "Asking Alexandria", dur: "3:28", url: `https://th.bing.com/th/id/R.b5d34d24a6e31e2e8bed5cae9445fabb?rik=Gv4WtKWNX8%2be4A&pid=ImgRaw&r=0`},
    {name: "They Don´t Want What We Want (And They Don´t Care)", album: "Like A House On Fire", arts: "Asking Alexandria", dur: "3:15", url: `https://th.bing.com/th/id/R.b5d34d24a6e31e2e8bed5cae9445fabb?rik=Gv4WtKWNX8%2be4A&pid=ImgRaw&r=0`},
    {name: "1x1(feat.Nova Twins)", album: "Post Human: Survival Horror", arts: "Bring Me The Horizon", dur: "3:29", url: `https://th.bing.com/th/id/OIP.VtKLiM0hZ6_G6RK6IyMnwAHaHa?pid=ImgDet&rs=1`},
    {name: "Obey(with YUNGBLUD)", album: "Post Human: Survival Horror", arts: "Bring Me The Horizon", dur: "3:40", url: `https://th.bing.com/th/id/OIP.VtKLiM0hZ6_G6RK6IyMnwAHaHa?pid=ImgDet&rs=1`},
    {name: "This Means War", album: "Hail to the King", arts: "Avenged Sevenfold", dur: "6:09", url: `https://th.bing.com/th/id/R.9acf5e459d01ae6aae2271b78c2b0ae3?rik=aqmCAqG1WAxzug&riu=http%3a%2f%2fvol12.music-bazaar.com%2falbum-images%2fvol12%2f634%2f634693%2f2480821-big%2fHail-To-The-King-Deluxe-Edition-cover.jpg&ehk=tACvawSSzJjpZk5f2jeq0cM5srqwQqt3HPeQC39JhG4%3d&risl=&pid=ImgRaw&r=0`},
    {name: "Feel Good Inc", album: "Demon Days", arts: "Gorilaz", dur: "3:42", url: `https://media.senscritique.com/media/000004802973/source_big/Demon_Days.jpg`},
    {name: "Deathfire", album: "Smite and Ignite", arts: "Pentakill", dur: "4:00", url: `https://th.bing.com/th/id/OIP.7kLUdJMTxxc0yuEmerXS4QHaHa?pid=ImgDet&rs=1`},
    {name: "sugar honey ice & tea", album: "amo", arts: "Bring Me The Horizon", dur: "4:21", url: `https://www.rocksound.tv/assets/uploads/amo_BMTH.jpg`},
    {name: "Lightbringer - Acoustic", album: "III - Lost Chapter", arts: "Pentakill", dur: "3:14", url: `https://th.bing.com/th/id/R.f74c206dfdf3d53924cba49e9208db5c?rik=HdD2x7eTbdbmLA&pid=ImgRaw&r=0`},
    {name: "Look ath the Sky", album: "Nurture", arts: "Porter Robinson", dur: "5:09", url: `https://th.bing.com/th/id/R.70fb908b635f83775e25351213f22434?rik=FSokx6cUVxSwow&pid=ImgRaw&r=0`},
    {name: "Lorazepam", album: "Like A House On Fire", arts: "Asking Alexandria", dur: "4:02", url: `https://th.bing.com/th/id/R.b5d34d24a6e31e2e8bed5cae9445fabb?rik=Gv4WtKWNX8%2be4A&pid=ImgRaw&r=0`},
    {name: "The King Of Pain", album: "Vale", arts: "Black Veil Brides", dur: "4:30", url: `https://th.bing.com/th/id/R.28486143c1c7b0a821b5f8d88697fe90?rik=HxUoESBdpDZ0Gw&pid=ImgRaw&r=0`},
    {name: "King For A Day", album: "Collide Eith the Sky", arts: "Pierce The Veil", dur: "3:55", url: `https://th.bing.com/th/id/R.ad8f081a0c6ee5a85572fb76ea03142e?rik=FfldsuixngqpwQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-to7uL3bChcY%2fUcfs_i2-jVI%2fAAAAAAAAADU%2fD_wfXWC-zHs%2fs1600%2fcollide%2bwith%2bthe%2bsky.jpg&ehk=94nvoGgrNWm6pkKC9qmMmWunggw58l1tyuFbpZMKvNs%3d&risl=&pid=ImgRaw&r=0`},
    {name: "forget me too (feat. Halsey)", album: "Tickets To My Downfall", arts: "Machine Gun Kelly", dur: "2:51", url: `https://th.bing.com/th/id/OIP.3r3-Umb0ohE9Chb9wddGkgHaHa?pid=ImgDet&rs=1`},
]
/*var nombres = ["juan", "hugo", "may"];
console.log(musica.length)
var music = musica[2];
console.log("Nombre: " + music.name) prueba para recorrer el arreglo y no olvidarlo
var a = musica[suenaAhora];
console.log(a.album)*/
var suenaAhora = 0;
enReproduccion = false;
num = 10;
function playPause(){
    console.log("FUNCION PLAYPAUSE");
    if(enReproduccion == false){
        enReproduccion = true;
        var a = musica[suenaAhora];
        console.log("Ahora esta sonando: " + a.name);
        var w = document.getElementById("b1");
        w.innerHTML = `<h1>Play: ${a.name}</h1>`
    }
    else if(enReproduccion==true){
        enReproduccion = false;
        var a = musica[suenaAhora];
        console.log("Has pausado la música.");
        var w1 = document.getElementById("b1");
        w1.innerHTML = `<h1>Pause: ${a.name}</h1>`
    }
}
function suffle(){
    console.log("FUNCION SUFFLE");
    const posicion = Math.floor(Math.random()*musica.length);
    suenaAhora = posicion;
    //console.log(posicion);
    console.log(suenaAhora);
    show(suenaAhora);
}
function next(){
    console.log("FUNCION NEXT");
    if(suenaAhora<musica.length){
        suenaAhora =  suenaAhora + 1;
    }
    console.log(musica.length)
    console.log(suenaAhora)
    //regresar la a2
    show(suenaAhora);
}
function prev(){
    console.log("FUNCION PREV");
    if(suenaAhora>0){
        suenaAhora = suenaAhora - 1;
    }
    console.log(suenaAhora)
    show(suenaAhora);
}
function stop(){
    console.log("FUNCION STOP");
    suenaAhora = -1;
    console.log("Haz detenido el reproducto");
    console.log(suenaAhora)
    w = document.getElementById("b1");
    w.innerHTML = `<h1>Haz detenido la reproducción</h1>`
}
function play(suenaAhora){
    console.log("FUNCION PLAY");
    //var num = prompt("Numero de la canción (0 - 14)"); esto es para mostrar en pantalla
    //num = parseInt(num);
    suenaAhora = num;
    console.log(suenaAhora)
    show(suenaAhora);
}
c1 = 
function songList(){
    console.log("FUNCION SONGLIST");
    var i = 0;
    var s1 = musica[i];
    c1 = s1.name;
    /*for(var i = 0; i<musica.length; i++){
        var a = musica[i];
        console.log(a.name)
        var w = document.getElementById("w");
        w.innerHTML = `<h1>${a.name}</h1>`
    }*/
    /*var i = 0;
    if(i<=musica.length){
        c1 = musica[i];
    var s1 = document.getElementById("s1");
    s1.innerHTML = `<p>${c1.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c2 = musica[i];
    var s2 = document.getElementById("s2");
    s2.innerHTML = `<p>${c2.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c3 = musica[i];
    var s3 = document.getElementById("s3");
    s3.innerHTML = `<p>${c3.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c4 = musica[i];
    var s4 = document.getElementById("s4");
    s4.innerHTML = `<p>${c4.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c5 = musica[i];
    var s5 = document.getElementById("s5");
    s5.innerHTML = `<p>${c5.name}</p>`
    }
    i++
    if(i<=musica.length){
        c6 = musica[i];
    var s6 = document.getElementById("s6");
    s6.innerHTML = `<p>${c6.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c7 = musica[i];
    var s7 = document.getElementById("s7");
    s7.innerHTML = `<p>${c7.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c8 = musica[i];
    var s8 = document.getElementById("s8");
    s8.innerHTML = `<p>${c8.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c9 = musica[i];
    var s9 = document.getElementById("s9");
    s9.innerHTML = `<p>${c9.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c10 = musica[i];
    var s10 = document.getElementById("s10");
    s10.innerHTML = `<p>${c10.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c11 = musica[i];
    var s11 = document.getElementById("s11");
    s11.innerHTML = `<p>${c11.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c12 = musica[i];
    var s12 = document.getElementById("s12");
    s12.innerHTML = `<p>${c12.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c13 = musica[i];
    var s13 = document.getElementById("s13");
    s13.innerHTML = `<p>${c13.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c14 = musica[i];
    var s14 = document.getElementById("s14");
    s14.innerHTML = `<p>${c14.name}</p>`
    }
    i++;
    if(i<=musica.length){
        c15 = musica[i];
    var s15 = document.getElementById("s15");
    s15.innerHTML = `<p>${c15.name}</p>`
    }
    i++;*/
}
function show(suenaAhora){
    //console.log("FUNCION SHOW");
    var z = musica[suenaAhora];
    //console.log(z);
    console.log("Canción: " + z.name);
    console.log("Älbum: " + z.album);
    console.log("Artista: " + z.arts);
    console.log("Duración: " + z.dur);
    console.log("Imagen: " + z.url);
    var a = document.getElementById("b5");
    a.innerHTML = `<img src = ${z.url}/>` //se muestra imagen
    var a2 = document.getElementById("b2");
    a2.innerHTML = `<h1>Álbum: ${z.album}</h1>`; //se muestra el album
    var a1 = document.getElementById("b1");
    a1.innerHTML = `<h1>Play: ${z.name}</h1>`; //se muestra el nombre
    var a1 = document.getElementById("b3");
    a1.innerHTML = `<h1>Artista: ${z.arts}</h1>`; //se muestra el artista/banda
    var a1 = document.getElementById("b4");
    a1.innerHTML = `<h1>tiempo: ${z.dur}</h1>`; //se muestra la duración
    /*var a = document.getElementById("b5");
    a.innerHTML = `<h1>Canción: ${z.name}</h1>`*/
    
}
playPause(); //se debe de llamar a ala funcion ya que solamente primero se esta declarando
suffle();
next();
prev();
stop();
/*play();
songList();*/