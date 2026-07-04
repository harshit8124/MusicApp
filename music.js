let musicStart = document.querySelector('.musicStartStop');

let start = true;

let music;
music = new Audio('AllMusic/1.mp3');

let min2, sec2;
let nextMusic = document.querySelector('.fa-arrow-right');
let repeat = document.querySelector('.fa-repeat');

musicStart.addEventListener('click', () => {
    music.addEventListener('timeupdate', () => {
        cu = music.currentTime;
        du = music.duration;

        if (cu) {
            let line = parseInt((cu / du) * 100);
            TiminingLine.value = line;
        }

        min = Math.floor(du / 60);
        sec = Math.floor(du % 60);

        if (sec < 10) {
            TiminingEnd.innerHTML = `${min}:0${sec}`;
        }
        else {
            TiminingEnd.innerHTML = `${min}:${sec}`
        }

        min2 = Math.floor(cu / 60);
        sec2 = Math.floor(cu % 60);

        if (sec2 < 10) {
            TiminingStart.innerHTML = `${min2}:0${sec2}`;
        }
        else {
            TiminingStart.innerHTML = `${min2}:${sec2}`;
        }

        if (TiminingStart.innerHTML == TiminingEnd.innerHTML && TiminingEnd.innerHTML != "0:00") {
            TiminingStart.innerHTML = "0:00";
            TiminingEnd.innerHTML = "0:00";
            TiminingLine.value = "0";
        }
    });

    if (start == true) {
        music.play();
        musicStart.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        start = false;
    }
    else {
        music.pause();
        musicStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
        start = true;
    }
});


let index = 0;
let bottomImageMain = document.querySelector('.bottomImageMain');
bottomImageMain.innerHTML = `<img class="bottomImage" src="AllMusicImage/1.jpg" alt="image..." />`;

let popularSong = document.querySelectorAll('.popularSong1');
let TiminingEnd = document.querySelector('.bottomSide4TiminingEnd');
let TiminingStart = document.querySelector('.bottomSide4TiminingStart');
let min, sec, cu, du;
let TiminingLine = document.querySelector('.bottomSide4TiminingLine');
let popularSong1 = document.querySelectorAll('.popularSong1');

popularSong1.forEach((element) => {
    element.addEventListener('click', (event) => {

        if (start == false) {
            music.pause();
            musicStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
            start = true;
        }
        index = event.target.id;
        music = new Audio(`AllMusic/${index}.mp3`);
        bottomImageMain.innerHTML = `<img class="bottomImage" src="AllMusicImage/${index}.jpg" alt="image..." />`;
        //  bottomSideSongName.innerHTML = songName;
        TiminingLine.value = "0";

        music.addEventListener('timeupdate', () => {
            cu = music.currentTime;
            du = music.duration;

            if (cu) {
                min = Math.floor(du / 60);
                sec = Math.floor(du % 60);

                let line = parseInt((cu / du) * 100);
                TiminingLine.value = line;
            }
            else {
                min = 0;
                sec = 0;
            }

            let min2 = Math.floor(cu / 60);
            let sec2 = Math.floor(cu % 60);

            //  start
            if (sec2 < 10) {
                let val = `${min2}:0${sec2}`;
                TiminingStart.innerHTML = val;
            }
            else {
                let val = `${min2}:${sec2}`;
                TiminingStart.innerHTML = val;
            }

            //  end
            if (sec < 10) {
                TiminingEnd.innerHTML = `${min}:0${sec}`;
            }
            else {
                TiminingEnd.innerHTML = `${min}:${sec}`;
            }

            if (TiminingStart.innerHTML == TiminingEnd.innerHTML && TiminingEnd.innerHTML != "0:00") {
                TiminingStart.innerHTML = "0:00";
                TiminingEnd.innerHTML = "0:00";
                TiminingLine.value = "0";
            }
        });
    });
});

TiminingLine.addEventListener('click', () => {
    music.currentTime = TiminingLine.value * music.duration / 100;
});


let newIndex1 = 1;
let end = 21;
let checkIt1 = true;
nextMusic.addEventListener('click', () => {
    pre(newIndex1);
});

function pre(newIndex1) {
    if (newIndex1 != end) {
        music.addEventListener('timeupdate', () => {
            if (music.currentTime == music.duration && music.duration != "0:00") {
                newIndex1 = newIndex1 + 1;
                music.pause();
                music = new Audio(`AllMusic/${newIndex1}.mp3`);
                musicStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
                console.log(newIndex1);
                TiminingLine.value = "0";
                bottomImageMain.innerHTML = `<img class="bottomImage" src="AllMusicImage/${newIndex1}.jpg" alt="image..." />`;
                pre(newIndex1);
            }
        });
    }
    checkIt1 = false;
}


repeat.addEventListener('click', () => {
    TiminingLine.value = "0";
    TiminingStart.innerHTML = "0:00";
    TiminingEnd.innerHTML = 0;
    if (start == false) {
        music.pause();
        musicStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
        music = new Audio(`AllMusic/${newIndex}.mp3`);
        start = true;
    }
});


let volume = document.querySelector('.bottomSide5VolumeLine');
let volumeIcon = document.querySelector('#volumeIcon');
let count = document.querySelector('.bottomSide5Volume');

volume.addEventListener('change', () => {
    let val = volume.value;
    console.log(val);

    if (val == 0) {
        volumeIcon.classList.remove('fa-volume-high');
        volumeIcon.classList.remove('fa-volume-low');
        volumeIcon.classList.add('fa-volume-xmark');
        console.log(count.innerHTML);
    }
    else if (val <= 50) {
        volumeIcon.classList.remove('fa-volume-high');
        volumeIcon.classList.remove('fa-volume-xmark');
        volumeIcon.classList.add('fa-volume-low');
    }
    else {
        volumeIcon.classList.add('fsa-volume-high');
        volumeIcon.classList.remove('fa-volume-xmark');
        volumeIcon.classList.remove('fa-volume-low');
    }
    music.volume = val / 100;
});


let popularArtistsImage = document.querySelector('.popularArtistsImage');



/* ------ Left Side Music Play ------ */
/*  let popularArtists1 = document.querySelectorAll('.popularArtists1');
let popularSong2 = document.querySelectorAll('.popularSong1');

let LeftSideMusicN1 = document.querySelector('.LeftSideMusicN1');
let LeftSideMusicN2 = document.querySelector('.LeftSideMusicN2');
let LeftSideMusicN3 = document.querySelector('.LeftSideMusicN3');
let LeftSideMusicN4 = document.querySelector('.LeftSideMusicN4');
let LeftSideMusicN5 = document.querySelector('.LeftSideMusicN5');

let leftSidePlayMName = document.querySelector('.leftSidePlayMName');
let LeftSideSingerN1 = document.querySelector('.LeftSideSingerN1');
let LeftSideSingerN2 = document.querySelector('.LeftSideSingerN2');
let LeftSideSingerN3 = document.querySelector('.LeftSideSingerN3');
let LeftSideSingerN4 = document.querySelector('.LeftSideSingerN4');
let LeftSideSingerN5 = document.querySelector('.LeftSideSingerN5');
let Name;

popularArtists1.forEach((element) => {
    element.addEventListener('click', (event) => {
        Name = event.target.id;

        LeftSideMusicN1.innerHTML = 'hey';

        LeftSideSingerN1.innerHTML = Name;
        LeftSideSingerN2.innerHTML = Name;
        LeftSideSingerN3.innerHTML = Name;
        LeftSideSingerN4.innerHTML = Name;
        LeftSideSingerN5.innerHTML = Name;
    });
});  */

let next = document.querySelector('#next');
let newIndex = 1;
let checkIt = true;
next.addEventListener('click', () => {
    TiminingLine.value = "0";
    TiminingStart.innerHTML = "0:00";
    TiminingEnd.innerHTML = "0:00";
    newIndex = newIndex + 1;
    if (start == false) {
        music.pause();
        musicStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
        music = new Audio(`AllMusic/${newIndex}.mp3`);
        start = true;
    }
    else {
        music.pause();
        musicStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
        music = new Audio(`AllMusic/${newIndex}.mp3`);
        start = true;
    }
    bottomImageMain.innerHTML = `<img class="bottomImage" src="AllMusicImage/${newIndex}.jpg" alt="image..." />`;
    checkIt = false;
});


let previous2 = document.querySelector('#previous2');
let newIndex2 = 21;
let checkIt2 = true;
previous2.addEventListener('click', () => {
    TiminingLine.value = "0";
    TiminingStart.innerHTML = "0:00";
    TiminingEnd.innerHTML = "0:00";
    newIndex2 = newIndex2 - 1;
    console.log('newIndex2');
    if (start == false) {
        music.pause();
        musicStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
        music = new Audio(`AllMusic/${newIndex2}.mp3`);
        start = true;
    }
    else {
        music.pause();
        musicStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
        music = new Audio(`AllMusic/${newIndex2}.mp3`);
        start = true;
    }
    bottomImageMain.innerHTML = `<img class="bottomImage" src="AllMusicImage/${newIndex2}.jpg" alt="image..." />`;
    checkIt2 = false;
});




/* ------ PlayList ------- */

let preArray = ['1', '2', '3', '4', '5', '6', '7', '8'];

let array = {
    '1': [
        { id: 1, music: "Vi Kamliye", singer: "Arijit Singh" },
        { id: 2, music: "O Mahii", singer: "Arijit Singh" },
        { id: 3, music: "Bandeya Re Bandeya", singer: "Arijit Singh" },
        { id: 4, music: "Tere Yaar Hoon Main", singer: "Arijit Singh" },
        { id: 5, music: "Lehra Do", singer: "Arijit Singh" },
    ],
    '2': [
        { id: 1, music: "Coca Cola", singer: "Neha Kakkar" },
        { id: 2, music: "Gaddi Calli", singer: "Neha Kakkar" },
        { id: 3, music: "12 Ladke", singer: "Neha Kakkar" }
    ],
    '4': [
        { id: 1, music: "Naach Meri Rani", singer: "Guru Randhawa" },
        { id: 2, music: "Ishare Tere", singer: "Guru Randhawa" },
        { id: 3, music: "Made In India", singer: "Guru Randhawa" }
    ],
    '5': [
        { id: 1, music: "Brown Rang", singer: "Honey Singh" },
        { id: 2, music: "Vigdiyan", singer: "Honey Singh" },
        { id: 3, music: "Bhootah Nath", singer: "Honey Singh" }
    ],
    '6': [
        { id: 1, music: "Lukka Chuppi", singer: "Lata Mangeshkar" },
        { id: 2, music: "Yaar Tara Pyar Man Meri", singer: "Lata Mangeshkar" },
        { id: 3, music: "Koi Ladki Hai", singer: "Lata Mangeshkar" },
        { id: 4, music: "Humko Humise Churalo", singer: "Lata Mangeshkar" },
        { id: 5, music: "Aankhein Khuli", singer: "Lata Mangeshkar" }
    ],
    '7': [
        { id: 1, music: "I Love You", singer: "Billie Eilish" },
    ],
};



let allPopularArtists1 = document.querySelectorAll('.popularArtists1');

allPopularArtists1.forEach((element) => {
    element.addEventListener('click', (event) => {
        preArray.forEach((item) => {
            if (event.target.id == item) {
                array[item].forEach((item2) => {
                    let Playlist = document.querySelector(`#Playlist${item2.id}`);
                    Playlist.src = `AllMusicImage/${event.target.id}Image/${item2.id}.jpg`;
                    let LeftSideMusicN = document.querySelector(`.LeftSideMusicN${item2.id}`);
                    LeftSideMusicN.textContent = item2.music;
                    let LeftSideSingerN = document.querySelector(`.LeftSideSingerN${item2.id}`);
                    LeftSideSingerN.textContent = item2.singer;
                });
            }
        });
    });
});



//  Before Left
let vale;
let leftArray = [1, 2, 3, 4, 5];
allPopularArtists1.forEach((element) => {
    element.addEventListener('click', (event1) => {
        leftArray.forEach((item) => {
            let Playlist = document.querySelector(`#Playlist${item}`);
            Playlist.addEventListener('click', () => {
                if (start == false) {
                    music.pause();
                    musicStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
                    start = true;
                }
                else {
                    music = new Audio(`AllMusic/${event1.target.id}/${item}.mp3`);
                    //  music.src = `AllMusic/${event1.target.id}/${item}.mp3`
                    music.play();
                    musicStart.innerHTML = `<i class="fa-solid fa-pause"></i>`;
                    start = false;
                }

                music.addEventListener('timeupdate', () => {
                    let cu = music.currentTime;
                    let du = music.duration;
                    let min3 = Math.floor(cu / 60);
                    let sec3 = Math.floor(cu % 60);
                    if (sec3 < 10) {
                        TiminingStart.innerHTML = `${min3}:0${sec3}`;
                    }
                    else {
                        TiminingStart.innerHTML = `${min3}:${sec3}`;
                    }
                    let min4 = Math.floor(du / 60);
                    let sec4 = Math.floor(du % 60);
                    if (sec4 < 10) {
                        TiminingEnd.innerHTML = `${min4}:0${sec4}`;
                    }
                    else {
                        TiminingEnd.innerHTML = `${min4}:${sec4}`;
                    }
        
                    let line = parseInt((cu / du) * 100);
                    TiminingLine.value = line;
                });
            });
        });
    });
});


/*  let leftArray2 = [1, 2, 3, 4, 5];
leftArray2.forEach((item) => {
    let Playlist = document.querySelector(`#Playlist${item}`);
    Playlist.addEventListener('click', (event) => {
        if (start == false) {
            music.pause();
            musicStart.innerHTML = `<i class="fa-solid fa-play"></i>`;
            start = true;
            if(valueC != event.target.id){
                music = new Audio(`AllMusic/BeforeLeft/${event.target.id}.mp3`);
                music.play();
                musicStart.innerHTML = `<i class="fa-solid fa-pause"></i>`
                start = false;
            }
        }
        else{
            valueC = event.target.id;
            music = new Audio(`AllMusic/BeforeLeft/${event.target.id}.mp3`);
            music.play();
            musicStart.innerHTML = `<i class="fa-solid fa-pause"></i>`;
            start = false;
        }
        vale = 1;
        music.addEventListener('timeupdate', () => {
            let cu = music.currentTime;
            let du = music.duration;
            let min3 = Math.floor(cu / 60);
            let sec3 = Math.floor(cu % 60);
            if (sec3 < 10) {
                TiminingStart.innerHTML = `${min3}:0${sec3}`;
            }
            else {
                TiminingStart.innerHTML = `${min3}:${sec3}`;
            }
            let min4 = Math.floor(du / 60);
            let sec4 = Math.floor(du % 60);
            if (sec4 < 10) {
                TiminingEnd.innerHTML = `${min4}:0${sec4}`;
            }
            else {
                TiminingEnd.innerHTML = `${min4}:${sec4}`;
            }

            let line = parseInt((cu / du) * 100);
            TiminingLine.value = line;
        });
    });
});  */