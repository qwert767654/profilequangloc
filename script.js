/* ==========================================
   QUẢN LÝ NHẠC TRONG FOLDER
   ========================================== */
const folderNhac = "music/";    // Tên thư mục chứa nhạc
const tenFileNhac = "1.mp3"; // Tên file nhạc bên trong thư mục đó

/* ========================================== */

const music = document.getElementById("bg-music");
music.src = folderNhac + tenFileNhac; 

// 1. Boot Screen
const messages = ["ACCESS GRANTED", "LOADING SYSTEM...", "WELCOME QUANGLOC ✔"];
let step = 0;
function boot() {
    const el = document.getElementById("boot-text");
    if(step < messages.length) {
        el.innerText = messages[step++];
        setTimeout(boot, 1000);
    } else {
        document.getElementById("boot-screen").style.opacity = "0";
        setTimeout(() => document.getElementById("boot-screen").style.display="none", 500);
    }
}
boot();

// 2. Parallax: Tất cả Panel di chuyển theo chuột
document.addEventListener("mousemove", (e) => {
    const items = document.querySelectorAll('.moving-item');
    const x = (window.innerWidth / 2 - e.clientX);
    const y = (window.innerHeight / 2 - e.clientY);

    items.forEach(item => {
        const speed = item.getAttribute('data-speed');
        item.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// 3. Stats & Clock
setInterval(() => {
    document.getElementById("clock").innerText = new Date().toLocaleTimeString();
    ["cpu", "ram", "net"].forEach(id => {
        document.getElementById(id).style.width = Math.floor(Math.random() * 70 + 20) + "%";
    });
}, 1500);

// 4. Music Play/Pause
function toggleMusic() {
    const btn = document.getElementById("play-btn");
    const viz = document.getElementById("viz");
    if(music.paused) {
        music.play().catch(err => alert("Lỗi: Không tìm thấy file nhạc trong thư mục music/"));
        btn.innerText = "DỪNG NHẠC";
        viz.classList.add("playing");
    } else {
        music.pause();
        btn.innerText = "MỞ NHẠC";
        viz.classList.remove("playing");
    }

}
