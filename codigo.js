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
class reproductor {
    contructor(id, name, album, arts, url){
        this.id = id;
        this.name = name;
        this.album = album;
        this.arts = arts;
        this.url = url;
        this.enReproduccion = false
        this.ahoraSuenaM = 0;//aqui va guardada la posicion de la cancion
    }

    playPause(){ /*Pausara la canción*/
        //this.enReproduccion = false
        if (this.enReproduccion == true){
            this.enReproduccion  = false
            suena.innerHTML = `<h1>Haz pausado la música</h1>`
        }
        else if (this.enReproduccion == false) {
            this.enReproduccion = true
            suena.innerHTML =  `<h1>Ahora suena: ${this.name}</h1>`
        }
    }
    suffle(){
        var posicion = Math.floor(Math.random()*musica.length);
        this.ahoraSuenaM = posicion;
        return this.showsonglist(this.ahoraSuenaM);
    }
    next(){ //adelanta cancion
        this.ahoraSuenaM + 1;
        return this.showsonglist(this.ahoraSuenaM);
    }
    prev(){ //regresa cancion
        this.ahoraSuenaM - 1;
        return this.showsonglist(this.ahoraSuenaM);
    }
    stop(){ //detiene totalmente la musica
        this.ahoraSuenaM = -1;
        return this.showsonglist(this.ahoraSuenaM);
    }
    play(id){//reproducira una canción en especifico
        this.ahoraSuenaM = id;
        return this.showsonglist(this.ahoraSuenaM);
    }
    songList(){ //muestrala lista de las caniones (el arreglo)
        var muestra = document.getElementById("muestra");
        for(var i = 0; i < musica.length; i++){
            muestra.innerHTML = musica.name[i];
        }
    }
    showsonglist(ahoraSuenaM){
        var musica1 = new reproductor(musica.id[1], musica.name[1], musica.arts[1], musica.dur[1]);
        var nombre = musica.name[ahoraSuenaM];
        var albumm = musica.album[ahoraSuenaM];
        var arti = musica.arts[ahoraSuenaM];
        var d = musica.dur[ahoraSuenaM];
        var im = musica.url[ahoraSuenaM];
        var ver = document.getElementById("ver");
        ver.innerHTML = `<h1>Canción: ${nombre} </h1>`;
        var ver1 = document.getElementById("ver1");
        ver1.innerHTML = `Álbum: ${albumm} `;
        var ver2 = document.getElementById("ver2");
        ver2.innerHTML = `Artista: ${arti} `;
        var ver3 = document.getElementById("ver3");
        ver3.innerHTML = `Duración: ${d} `;
        var ver4 = document.getElementById("ver4");
        ver4.innerHTML = im;
    }
}
