function updatePlaceholder(category) {
    const searchInput = document.getElementById('searchInput');
    searchInput.placeholder = `Search in ${category}`;
    document.querySelector('.dropbtn').textContent = category;
}
