import './scss/style.scss';
import './scss/global.scss';
import './scss/section.scss';
import './assets/fonts/fontstylesheet.css';



// PWA Install button
const installBtn = document.getElementById("install");
let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    if (installBtn) installBtn.style.display = "inline-flex";
});

if (installBtn) {
    installBtn.addEventListener("click", async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log("Install prompt:", outcome);
        deferredPrompt = null;
        installBtn.style.display = "none";
    });
}

// Register Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
            (reg) => console.log("SW registered", reg.scope),
            (err) => console.error("SW registration failed:", err)
        );
    });
}



