document.addEventListener('DOMContentLoaded', function() {
    const songs = document.querySelectorAll('.song');
    const audioPlayer = document.getElementById('audio-player');

    songs.forEach(song => {
        song.addEventListener('click', function() {
            const songSrc = this.getAttribute('data-song');
            audioPlayer.src = songSrc;
            audioPlayer.play();
        });
    });
});