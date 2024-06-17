document.addEventListener("DOMContentLoaded", function() {
    const contentGrid = document.querySelector('.content-grid');
    
    // Sample data
    const movies = [
        { title: "Movie 1", image: "images\m1.jfif" },
        { title: "Movie 2", image: "images\m2.jfif" },
        { title: "Movie 3", image: "images\m3.jfif" },
        { title: "Movie 4", image: "images\m4.jfif" },
        { title: "Movie 5", image: "images\m5.jfif" },
        { title: "Movie 6", image: "images\m6.jfif" },
        { title: "Movie 1", image: "images\m7.jfif" },
        { title: "Movie 2", image: "images\m8.jfif" },
        { title: "Movie 3", image: "images\m9.jfif" },
        { title: "Movie 4", image: "images\m10.jfif" },
        // Add more movies as needed
    ];

    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        contentGrid.appendChild(card);
    });
});
<img src="images\im2.jfif" alt=""></img>