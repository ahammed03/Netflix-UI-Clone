function muteAudio() {
    const isMuted = document.getElementById('mainVideo').muted;
    let muteButtonEle = document.getElementById('muteButton');
    if (isMuted) {
        muteButtonEle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="lucide lucide-volume-2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>`
        document.getElementById('mainVideo').muted = false;
    } else {
        muteButtonEle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-volume-x">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="22" x2="16" y1="9" y2="15"/><line x1="16" x2="22" y1="9" y2="15"/>
        </svg>`
        document.getElementById('mainVideo').muted = true;
    }
}
function expandInput() {
    const searchInput = document.getElementById('searchInput');
    searchInput.classList.toggle('toggle-width');
}
