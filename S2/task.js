var songs = [
    {
        name: 'Ghararemoon Yadet Nareh',
        artist: 'Mansoor',
        album: 'Divooneh',
        duration: '03:23',
        genre: 'Pop',
        year: '1381',
        file: 'https://dl.msbmusic.ir/dl2/Album/03/Mansour%20-%20Divooneh%20%5B128%5D/Mansour%20-%20Ghararemoon%20Yadet%20Nareh%20%5B128%5D.mp3',
        cover: 'https://www.asdownload.net/wp-content/uplods/2019/06/Mansour-.jpg'
    },
    {
        name: 'Alamate Soal',
        artist: 'Shadmehr',
        album: 'Pare Parvaz',
        duration: '03:49',
        genre: 'Pop',
        year: '1379',
        file: 'http://dl.noostalgic.ir/dl/Shadmehr%20Aghili%20-%20Alamate%20Soal%20.mp3',
        cover: 'https://noostalgic.ir/wp-content/uploads/2018/09/Shadmer.jpg'
    },
    {
        name: 'Ghabe Shishe\'ei',
        artist: 'Siavash Ghomayshi',
        album: 'Ghabe Shishe\'ei',
        duration: '05:13',
        genre: 'Pop',
        year: '1377',
        file: 'http://dl.persianfa.org/mp3/Siavash%20Ghomeyshi/Siavash%20Ghomayshi%20-%20Ghabe%20Shishei/Siavash%20Ghomayshi%20-%20Ghabe%20Shishei/04%29_Ghabe_Shisheie.MP3',
        cover: 'https://persianfaa.xyz/wp-content/uploads/2019/01/1716519944-parsnaz-com-240x300.jpg'
    },
    {
        name: 'Shekayat',
        artist: 'Sogand',
        album: 'Single',
        duration: '04:14',
        genre: 'Pop',
        year: '1397',
        file: 'http://dl.mahtabmusic.ir/1397/09/single/Sogand%20-%20Shekayat%20%5B128%5D.mp3',
        cover: 'http://dl.mahtabmusic.ir/1397/09/cover/Sogand_Shekayat.jpg'
    },
    {
        name: 'Tavalod',
        artist: 'Andy',
        album: 'Sar Sepordeh',
        duration: '05:01',
        genre: 'Pop',
        year: '1375',
        file: 'http://dl2.iran-music.net/dl-New/mp3/97/03/andy-tavalodet-mobarak.mp3',
        cover: 'https://mu-sic.ir/wp-content/uploads/2018/10/photo_2018-04-05_17-22-13-450x450.jpg'
    },
    {
        name: 'Kharabesh Kardi',
        artist: 'Farzad Farzin',
        album: 'Mankan',
        duration: '04:04',
        genre: 'Pop',
        year: '1398',
        file: 'http://dl.nex1music.ir/1397/11/09/Farzad%20Farzin%20-%20Kharabesh%20Kardi%20[128].mp3?time=1577186985&filename=/1397/11/09/Farzad%20Farzin%20-%20Kharabesh%20Kardi%20[128].mp3',
        cover: 'https://nex1music.ir/upload/2019-01-29/farzad-farzin-kharabesh-kardi-2019-01-29-20-59-06.jpg'
    },
    {
        name: 'Setarehaye Sorbi',
        artist: 'Ebi',
        album: 'Setarehaye Sorbi',
        duration: '05:04',
        genre: 'Pop',
        year: '1374',
        file: 'http://sv.behmuzik.ir/Archive/E/Ebi/Ebi%20-%20Setarehaye%20Sorbi/01%20Setarehaye%20Sorbi.mp3',
        cover: 'http://sv.behmuzik.ir/Archive/E/Ebi/Ebi%20-%20Setarehaye%20Sorbi/Ebi%20-%20Setarehaye%20Sorbi.jpg'
    },
    {
        name: 'Dokhtar Bandari',
        artist: 'Shahram K',
        album: 'Range Eshgh',
        duration: '05:11',
        genre: 'Pop',
        year: '1379',
        file: 'http://www.s4.topseda.ir/nevisande/hani/music/97/03/11/Shahram%20Kashani%20-%20Dokhtar%20Bandari%20%5B128%5D.mp3',
        cover: 'https://www.topseda.ir/wp-content/uploads/2018/06/shahram-kashani-dokhtar-bandari.jpg'
    },
    {
        name: 'Namehraboon',
        artist: 'Fataneh',
        album: 'Gol o Atash',
        duration: '05:36',
        genre: 'Pop',
        year: '1369',
        file: 'http://sv.nexmusics.com/Archive/F/Fataneh/Fataneh%20-%20Gol%20Va%20Atash/01%20Na%20Mehraboon.mp3',
        cover: 'http://sv.nexmusics.com/Archive/F/Fataneh/Fataneh%20-%20Gol%20Va%20Atash/Fataneh%20-%20Gol%20Va%20Atash.jpg'
    }
]

var songsHtml = '';

// alternative way to have multiple rows

// songs.forEach((song, index) => {
songs.forEach((song) => {

    // if(index % 3 === 0){
    //     songsHtml += '<div class="row">'
    // }
    songsHtml += `<div class="col-sm-4">
                <div class="card" style="width: 18rem;">
                    <img src=${song.cover} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${song.name}</h5>
                        <ul>
                            <li><strong>Artist:</strong> ${song.artist}</li>
                            <li><strong>Album:</strong> ${song.album}</li>
                            <li><strong>Duration:</strong> ${song.duration}</li>
                            <li><strong>Genre:</strong> ${song.genre}</li>
                            <li><strong>Year:</strong> ${song.year}</li>
                        </ul>
                        <audio preload="none" src=${song.file} controls style="float:left;width:100%;"></audio>
                    </div>
                </div>
             </div>`
    // if(index % 3 === 2){
    //     songsHtml += '</div>'
    // }

})


document.getElementById('songs').innerHTML = songsHtml;