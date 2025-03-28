// Sample video data
const dramas = [
    {
        id: 1,
        title: "Crash Landing On You",
        thumbnail: "https://i.ytimg.com/vi/YE0q5O5qNWo/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/YE0q5O5qNWo"
    },
    {
        id: 2,
        title: "Goblin",
        thumbnail: "https://i.ytimg.com/vi/8AcNEVUzV4o/maxresdefault.jpg",
        videoUrl: "https://www.youtube.com/embed/8AcNEVUzV4o"
    }
];

// Load featured video
document.getElementById('featured').innerHTML = `
    <iframe width="100%" height="200" src="${dramas[0].videoUrl}" frameborder="0" allowfullscreen></iframe>
`;

// Load drama list
let html = '';
dramas.forEach(drama => {
    html += `
        <div class="drama-card">
            <img src="${drama.thumbnail}" alt="${drama.title}">
            <h3>${drama.title}</h3>
        </div>
    `;
});
document.getElementById('dramas').innerHTML = html;
