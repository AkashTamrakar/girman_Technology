document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchQuery = document.getElementById('query').value.toLowerCase();

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    let filteredUsers = users.filter(user =>
        user.first_name.toLowerCase().includes(searchQuery) ||
        user.last_name.toLowerCase().includes(searchQuery) ||
        user.city.toLowerCase().includes(searchQuery) ||
        user.contact_number.includes(searchQuery)
    );

    //condition true hone per ye 
    if (filteredUsers.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    } else {
        filteredUsers.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('result-card');
            userCard.innerHTML = `
                <img src="${user.image}" alt="User Image">
                <p><strong>Name:</strong> ${user.first_name} ${user.last_name}</p>
                <p><strong>City:</strong> ${user.city}</p>
                <p><strong>Contact:</strong> ${user.contact_number}</p>
                <button onclick="fetchDetails('${user.first_name}', '${user.last_name}', '${user.city}', '${user.contact_number}')">Fetch Details</button>
            `;
            resultsContainer.appendChild(userCard);
        });
    }
});
//Data ko so karne ke liye alerat karvaya hai 

function fetchDetails(firstName, lastName, city, contactNumber, image) {
    const modalText = `
<div style="display: flex; align-items: center;">
    <div>
        <p>Name: ${firstName} ${lastName}</p>
        <p>City: ${city}</p>
        <p>Contact: ${contactNumber}</p>
    </div>
</div>
`;


    document.getElementById('modalText').innerHTML = modalText;
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

window.onclick = function (event) {
    if (event.target === document.getElementById('myModal')) {
        closeModal();
    }
};



//-----------------------------------------------------------------------------------------
function toggleMenu() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
}