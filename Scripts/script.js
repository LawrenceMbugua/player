const tracks = [
  {
    track_id: 1,
    track_name: "still dre",
    artist: "snoop dog Ft. Dr. Dre",
    cover_image: "img.jpg",
    genre: "pop",
  },

  {
    track_id: 2,
    track_name: "selfish",
    artist: "Asia Cruise",
    cover_image: "img.jpg",
    genre: "House",
  },
  {
    track_id: 3,
    track_name: "sitaki",
    artist: "mbosso",
    cover_image: "img2.jpg",
    genre: "bongo",
  },

  {
    track_id: 4,
    track_name: "high on life",
    artist: "Martin Garrix",
    cover_image: "img.jpg",
    genre: "House",
  },
  {
    track_id: 5,
    track_name: "red lights",
    artist: "Teisto",
    cover_image: "img2.jpg",
    genre: "House",
  },

  {
    track_id: 6,
    track_name: "we found love",
    artist: "Rihanna",
    cover_image: "img.jpg",
    genre: "pop",
  },
  {
    track_id: 7,
    track_name: "elastic heart",
    artist: "Sia",
    cover_image: "img2.jpg",
    genre: "pop",
  },
  {
    track_id: 8,
    track_name: "are you with me",
    artist: "Lost Frequencies",
    cover_image: "img2.jpg",
    genre: "House",
  },
  {
    track_id: 9,
    track_name: "love song",
    artist: "Marioo Ft. Ali Kiba",
    cover_image: "img2.jpg",
    genre: "bongo",
  },
  {
    track_id: 10,
    track_name: "river flows",
    artist: "Yiruma",
    cover_image: "img2.jpg",
    genre: "acapella",
  },
  {
    track_id: 11,
    track_name: "fast car",
    artist: "Tracy chapman",
    cover_image: "img2.jpg",
    genre: "House",
  },

  {
    track_id: 12,
    track_name: "calm down",
    artist: "rema ft. selena gomez",
    cover_image: "img2.jpg",
    genre: "Afro",
  },
  {
    track_id: 13,
    track_name: "terminator",
    artist: "King Promise",
    cover_image: "img2.jpg",
    genre: "House",
  },
  {
    track_id: 14,
    track_name: "fukumean",
    artist: "Gunna",
    cover_image: "img2.jpg",
    genre: "hiphop",
  },

  {
    track_id: 15,
    track_name: "unity",
    artist: "Alan Walker",
    cover_image: "img2.jpg",
    genre: "House",
  },
  {
    track_id: 16,
    track_name: "inside out",
    artist: "Nviiri",
    cover_image: "img2.jpg",
    genre: "House",
  },
  {
    track_id: 17,
    track_name: "i'll find you",
    artist: "Lecrae",
    cover_image: "img2.jpg",
    genre: "House",
  },
  {
    track_id: 18,
    track_name: "landscape",
    artist: "jarico",
    cover_image: "img2.jpg",
    genre: "House",
  },

  {
    track_id: 19,
    track_name: "mockingbird",
    artist: "Eminem",
    cover_image: "img2.jpg",
    genre: "hiphop",
  },
  {
    track_id: 20,
    track_name: "blue sky",
    artist: "Fredji",
    cover_image: "img.jpg",
    genre: "House",
  },
  {
    track_id: 21,
    track_name: "mortals",
    artist: "Warriyo ft. Laura Brehm",
    cover_image: "img.jpg",
    genre: "gospel",
  },
  {
    track_id: 22,
    track_name: "what's my name",
    artist: "Rihanna Ft. Drake",
    cover_image: "img.jpg",
    genre: "pop",
  },

  {
    track_id: 23,
    track_name: "i gotta feeling",
    artist: "black eyed peas",
    cover_image: "img.jpg",
    genre: "pop",
  },
  {
    track_id: 24,
    track_name: "flames",
    artist: "David_Guetta_Sia",
    cover_image: "img.jpg",
    genre: "pop",
  },

  {
    track_id: 25,
    track_name: "motion",
    artist: "TY dollar sign",
    cover_image: "img.jpg",
    genre: "hip hop",
  },
];

//Dynamically loads tracks to the DOM

const loadTracks = () => {
  const playlistContainer = document.querySelector(".playlist_container");

  tracks.forEach((track) => {
    let div = document.createElement("div");

    let trackContent = `
        <div id=${track.track_id} class="track_container">

            <div class="left">
                <p class="track_name">${track.track_name}</p>
                <p id="artist" class="artist">${track.artist}</p id="artist">
            </div>

            <button class="play_pause"> 
                <i class="fa fa-play"></i> 
            </button>

        </div>
        `;
    div.innerHTML = trackContent;
    playlistContainer.append(div);
  });
};

loadTracks();

// DOM elements
const tracksContainers = document.querySelectorAll(".track_container");
const audio = document.querySelector("audio");
const playPauseButtons = document.querySelectorAll(".play_pause");
const music_player = document.querySelector(".music_player");
const controlsPage = document.querySelector(".controls_page");
const modeToggler = document.getElementById("mode_toggler");
const back_button = document.querySelector("#back_button");
const viewControls = document.querySelector("#view_controls");
const previousButton = document.querySelector("#previous_button");
const nextButton = document.querySelector("#next_button");
const currentTrackTime = document.querySelector("#current_track_time");
const trackDuration = document.querySelector("#track_duration");
const progressBar = document.querySelector("#progress_bar");
const imgContainer = document.querySelector("#img_container");

let started = false;

//Change mode
let darkMode = true;
modeToggler.addEventListener("click", () => {
  document.body.classList.toggle("light_mode");
  music_player.classList.toggle("light_mode");
  controlsPage.classList.toggle("light_mode");

  darkMode = !darkMode;
  if (darkMode) {
    modeToggler.innerHTML = `<i class="fa fa-sun"></i>`;
  } else {
    modeToggler.innerHTML = `<i class="fa fa-moon"></i>`;
  }
});

//First track in the teacks becomes the default track
audio.src = `../Assets/tracks/${tracks[0].track_name}.mp3`;
audio.id = tracks[0].track_id;

//Toggle between the two pages
viewControls.addEventListener("click", () => {
  controlsPage.style.zIndex = 1;
  music_player.style.display = "none";
});

back_button.addEventListener("click", () => {
  controlsPage.style.zIndex = -1;
  music_player.style.display = "block";
});

//User clicks a button and a track is loaded and played/paused

playPauseButtons.forEach((playPauseButton) => {
  playPauseButton.addEventListener("click", (e) => {
    if (audio.paused) {
      audio.play();
      playPauseButton.innerHTML = `<i class="fa fa-pause"></i>`;
      if (!started) {
        visualizer();
        started = true;
      }
    } else {
      audio.pause();
      playPauseButton.innerHTML = `<i class="fa fa-play"></i>`;
    }
  });
});

//Foward and backward button functionality

nextButton.addEventListener("click", async () => {
  let newTrackId = parseInt(audio.id) + 1;
  if (newTrackId > tracks.length) {
    newTrackId = 1;
  }

  let newTrack = tracks.filter((track) => track.track_id == newTrackId)[0];

  // console.log(newTrack.track_name);

  audio.src = await `../Assets/tracks/${newTrack.track_name}.mp3`;
  audio.id = newTrack.track_id;
  audio.play();
  if (!started) {
    visualizer();
    started = true;
  }
  updateDisplay();
  addActiveClass(audio.id);
});

previousButton.addEventListener("click", async () => {
  let newTrackId = parseInt(audio.id) - 1;
  if (newTrackId < 1) {
    newTrackId = tracks.length;
  }

  let newTrack = tracks.filter((track) => track.track_id == newTrackId)[0];

  console.log(newTrack.track_name);

  audio.src = await `../Assets/tracks/${newTrack.track_name}.mp3`;
  audio.id = newTrack.track_id;
  audio.play();
  if (!started) {
    visualizer();
    started = true;
  }
  updateDisplay();
  addActiveClass(audio.id);
});

//Style track conntainers upon user click
tracksContainers.forEach((trackContainer) => {
  trackContainer.addEventListener("click", async () => {
    if (trackContainer.classList.contains("active")) return;

    audio.pause();

    addActiveClass(trackContainer.id);

    let filteredTrack = await tracks.filter(
      (t) => t.track_id === parseFloat(trackContainer.id)
    )[0];

    audio.src = await `../Assets/tracks/${filteredTrack.track_name}.mp3`;
    audio.id = filteredTrack.track_id;

    let playPauseButton = document.querySelector(".play_pause_button");

    playPauseButton.innerHTML = `<i class="fa fa-pause"></i>`;
    audio.load();
    await audio.play();
    updateDisplay();

    if (!started) {
      visualizer();
    }
    started = true;
  });
});

const updateDisplay = () => {
  const trackTitle = document.querySelector(".track_title");
  const trackArtist = document.querySelector(".track_artist");
  const trackId = audio.id;
  const currentTrack = tracks.filter(
    (track) => track.track_id == parseInt(trackId)
  )[0];
  trackTitle.textContent = currentTrack.track_name;
  trackArtist.textContent = currentTrack.artist;
};
updateDisplay();

//Add active class to the track container

const addActiveClass = (trackContainerId) => {
  let trackContainer = document.getElementById(trackContainerId);

  tracksContainers.forEach((trk) => {
    trk.classList.remove("active");
    trk.lastElementChild.innerHTML = `<i class="fa fa-play"></i>`;
  });

  trackContainer.classList.add("active");
  trackContainer.lastElementChild.innerHTML = `<i class="fa fa-pause"></i>`;
};

audio.addEventListener("pause", () => {
  playPauseButtons.forEach((btn) => {
    btn.innerHTML = `<i class="fa fa-play"></i>`;
  });

  imgContainer.style.animationPlayState = "paused";
});

audio.addEventListener("play", () => {
  playPauseButtons.forEach((btn) => {
    btn.innerHTML = `<i class="fa fa-pause"></i>`;
  });

  imgContainer.style.animationPlayState = "running";
  addActiveClass(audio.id);
});

audio.addEventListener("durationchange", () => {
  let min = Math.floor(audio.duration / 60);
  let sec = Math.round(audio.duration % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }

  progressBar.min = 0;
  progressBar.max = audio.duration;
  trackDuration.textContent = `${min}:${sec}`;
});

let progressInterval = setInterval(() => {
  let min = Math.floor(audio.currentTime / 60);
  let sec = Math.round(audio.currentTime % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }

  progressBar.value = audio.currentTime;
  currentTrackTime.textContent = `${min}:${sec}`;
}, 500);

// Progress bar input change
const changeCurrentTime = () => {
  audio.currentTime = progressBar.value;
};

// Audio visualizer

const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");

let visualizer = () => {
  let audioContext = new AudioContext();

  const analyser = audioContext.createAnalyser();
  const source = audioContext.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(audioContext.destination);
  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  function draw() {
    analyser.getByteFrequencyData(dataArray);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 1.3;
      ctx.fillStyle = "rgb(" + 0 + ",255, " + (barHeight - 25) + ", .8)";

      ctx.fillRect(x, canvas.height - barHeight / 3, barWidth, barHeight);

      x += barWidth + 1;
    }

    requestAnimationFrame(draw);
  }

  draw();
};

// visualizer();
