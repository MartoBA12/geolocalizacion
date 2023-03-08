const cardsMusic = document.getElementById('cards')
const discoArtist = document.getElementById('disco').content
const fragment = document.createDocumentFragment()
let topMusic = []

document.addEventListener('DOMContentLoaded', () => {
    loadMusic()
})

const loadMusic = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '31ade94c35msh40229da876aeb6dp132d74jsn7d5b1c15ff2e',
            'X-RapidAPI-Host': 'ip-geo-location4.p.rapidapi.com'
        }
    };
    
    fetch('https://ip-geo-location4.p.rapidapi.com/?ip=8.8.8.8', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}
