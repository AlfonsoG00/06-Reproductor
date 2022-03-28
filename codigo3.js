//Al usar las comillas invertidas puedo usar html en javascript
const musica = [ /*Aqui esta el arreglo de canciones*/ 
    {id: 1, name: "Ho Hey", album: "The Lumminers", arts: "The Lumminers", dur: "2:43", url: `https://th.bing.com/th/id/R.93f681fd0a6b64ab989a427174134852?rik=5fFcSUTpGYie3w&riu=http%3a%2f%2fcdn.sonicomusica.com%2fartists%2ft%2fthe-lumineers%2falbums%2fthe-lumineers-5.jpg&ehk=hqg4W36963Jggu3tQXRr6A93HFsPR1Xv%2fpE2%2f%2fVuJmY%3d&risl=&pid=ImgRaw&r=0`},
    {id: 2, name: "The Violence", album: "Like A House On Fire", arts: "Asking Alexandria", dur: "3:28", url: `https://th.bing.com/th/id/R.b5d34d24a6e31e2e8bed5cae9445fabb?rik=Gv4WtKWNX8%2be4A&pid=ImgRaw&r=0`},
    {id: 3, name: "They Don´t Want What We Want (And They Don´t Care)", album: "Like A House on Fire", arts: "Asking Alexandria", dur: "3:15", url: `https://th.bing.com/th/id/R.b5d34d24a6e31e2e8bed5cae9445fabb?rik=Gv4WtKWNX8%2be4A&pid=ImgRaw&r=0`},
    {id: 4, name: "1x1(feat.Nova Twins)", album: "Post Human: Survival Horror", arts: "Bring Me The Horizon", dur: "3:29", url: `https://th.bing.com/th/id/OIP.VtKLiM0hZ6_G6RK6IyMnwAHaHa?pid=ImgDet&rs=1`},
    {id: 5, name: "Obey(with YUNGBLUD", album: "Post Human: Survival Horror", arts: "Bring Me The Horizon", dur: "3:40", url: `https://th.bing.com/th/id/OIP.VtKLiM0hZ6_G6RK6IyMnwAHaHa?pid=ImgDet&rs=1`},
    {id: 6, name: "This Means War", album: "Hail to the King", arts: "Avenged Sevenfold", dur: "6:09", url: `https://th.bing.com/th/id/R.9acf5e459d01ae6aae2271b78c2b0ae3?rik=aqmCAqG1WAxzug&riu=http%3a%2f%2fvol12.music-bazaar.com%2falbum-images%2fvol12%2f634%2f634693%2f2480821-big%2fHail-To-The-King-Deluxe-Edition-cover.jpg&ehk=tACvawSSzJjpZk5f2jeq0cM5srqwQqt3HPeQC39JhG4%3d&risl=&pid=ImgRaw&r=0`},
    {id: 7, name: "Fel Good Inc", album: "Demon Days", arts: "Gorilaz", dur: "3:42", url: `https://media.senscritique.com/media/000004802973/source_big/Demon_Days.jpg`},
    {id: 8, name: "Deathfire", album: "Smite and Ignite", arts: "Pentakill", dur: "4:00", url: `https://th.bing.com/th/id/OIP.7kLUdJMTxxc0yuEmerXS4QHaHa?pid=ImgDet&rs=1`},
    {id: 9, name: "sugar honey ice & tea", album: "amo", arts: "Bring Me The Horizon", dur: "4:21", url: `https://www.rocksound.tv/assets/uploads/amo_BMTH.jpg`},
    {id: 10, name: "Lightbringer - Acoustic", album: "III - Lost Chapter", arts: "Pentakill", dur: "3:14", url: `https://th.bing.com/th/id/R.f74c206dfdf3d53924cba49e9208db5c?rik=HdD2x7eTbdbmLA&pid=ImgRaw&r=0`},
    {id: 11, name: "Look ath the Sky", album: "Nurture", arts: "Porter Robinson", dur: "5:09", url: `https://th.bing.com/th/id/R.70fb908b635f83775e25351213f22434?rik=FSokx6cUVxSwow&pid=ImgRaw&r=0`},
    {id: 12, name: "Lorazepam", album: "Like A House On Fire", arts: "Asking Alexandria", dur: "4:02", url: `https://th.bing.com/th/id/R.b5d34d24a6e31e2e8bed5cae9445fabb?rik=Gv4WtKWNX8%2be4A&pid=ImgRaw&r=0`},
    {id: 13, name: "The King Of Pain", album: "Vale", arts: "Black Veil Brides", dur: "4:30", url: `https://th.bing.com/th/id/R.28486143c1c7b0a821b5f8d88697fe90?rik=HxUoESBdpDZ0Gw&pid=ImgRaw&r=0`},
    {id: 14, name: "King For A Day", album: "Collide Eith the Sky", arts: "Pierce The Veil", dur: "3:55", url: `https://th.bing.com/th/id/R.ad8f081a0c6ee5a85572fb76ea03142e?rik=FfldsuixngqpwQ&riu=http%3a%2f%2f1.bp.blogspot.com%2f-to7uL3bChcY%2fUcfs_i2-jVI%2fAAAAAAAAADU%2fD_wfXWC-zHs%2fs1600%2fcollide%2bwith%2bthe%2bsky.jpg&ehk=94nvoGgrNWm6pkKC9qmMmWunggw58l1tyuFbpZMKvNs%3d&risl=&pid=ImgRaw&r=0`},
    {id: 15, name: "forget me too (feat. Halsey)", album: "Tickets To My Downfall", arts: "Machine Gun Kelly", dur: "2:51", url: `https://th.bing.com/th/id/OIP.3r3-Umb0ohE9Chb9wddGkgHaHa?pid=ImgDet&rs=1`},
]
enReproduccion = true;
suenaAhora = 0;
    function playPause(){ //aqui podria agregar el audio
        var w = "-";
        if(enReproduccion == false){
            enReproduccion = true;
            w = "Ahora suena: " + musica.name[ahora];
            document.getElementById("play").innerHTML = w;
        }
        else if(enReproduccion ==true){
            enReproduccion = flase;
            w = "Haz pausado la música";
            document.getElementById("play").innerHTML = w;
        }
    }
    function suffle(){
        const posicion = Math.floor(Math.random()*musica.length);
        suenaAhora = posicion;
        show();
    }
    function next(){
        if(suenaAhora <= musica.length - 1){
            suenaAhora + 1;
        }
        return show(suenaAhora);
    }
    function prev(){
        if(suenaAhora >= 1){
            suenaAhora - 1;
        }
        return show(suenaAhora);
    }
    function stop(){
        var v = "Haz detenido el reproductor";
        document.getElementById("stop").innerHTML = v;
        suenaAhora = -1;
        return show(suenaAhora)
    }
    function play(a1){
        suenaAhora = a1;
        return show(suenaAhora);
    }
    function songlist(){
        var c1 = musica.name[0];
        document.getElementById("mostrar musica").innerHTML = c1;
        //faltan las otas 14
    }
    function show(){
        var b = suenaAhora;
        var nombre = document.getElementById("b1");
        nombre.innerHTML = `<h1>Canción: ${musica.name[b]}</h1>`
        var album = document.getElementById("b2");
        album.innerHTML = `<h1>Álbum: ${musica.album[b]}</h1>`
        var artista = document.getElementById("b3");
        artista.innerHTML = `<h1>Artista: ${musica.arts[b]}</h1>`
        var duracion = document.getElementById("b4");
        duracion.innerHTML = `<h1>El Duración: ${musica.dur[b]}</h1>`
        var direccion = document.getElementById("b5");
        direccion.innerHTML = `<img scr ="${musica.url[b]}"/>`
    }