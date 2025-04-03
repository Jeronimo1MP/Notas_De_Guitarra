let F = document.getElementById("F");
let Fs = document.getElementById("F#");
let G = document.getElementById("G");
let Gs = document.getElementById("G#");
let A = document.getElementById("A");
let As = document.getElementById("A#");
let B = document.getElementById("B");
let C = document.getElementById("C");
let Cs = document.getElementById("C#");
let D = document.getElementById("D");
let Ds = document.getElementById("D#");
let E = document.getElementById("E");

let notasAudio = {
    F: { src: "Guitar/String1/F.mp3", type: "MP3" },
    Fs: { src: "Guitar/String1/Fs.mp3", type: "MP3" },
    G: { src: "Guitar/String1/G.mp3", type: "MP3" },
    Gs: { src: "Guitar/String1/Gs.mp3", type: "MP3" },
    A: { src: "Guitar/String1/A.mp3", type: "MP3" },
    As: { src: "Guitar/String1/As.mp3", type: "MP3" },
    B: { src: "Guitar/String1/B.mp3", type: "MP3" },
    C: { src: "Guitar/String1/C.mp3", type: "MP3" },
    Cs: { src: "Guitar/String1/Cs.mp3", type: "MP3" },
    D: { src: "Guitar/String1/D.mp3", type: "MP3" },
    Ds: { src: "Guitar/String1/Ds.mp3", type: "MP3" },
    E: { src: "Guitar/String1/E.mp3", type: "MP3" }
};

// Asignar eventos de clic a los botones
let notas = { F, Fs, G, Gs, A, As, B, C, Cs, D, Ds, E };

for (let nota in notas) {
    if (notas[nota]) {
        notas[nota].addEventListener("click", () => {
            let audio = new Audio(notasAudio[nota].src);
            audio.play();
            console.log(`Nota presionada: ${nota}, Tipo de audio: ${notasAudio[nota].type}`);
        });
    }
}
