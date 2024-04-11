function bookTicket() {
    var nameInput = document.getElementById("nameInput");
    var movieInput = document.getElementById("movieInput");
    var quantityInput = document.getElementById("quantityInput");
    var ticketList = document.getElementById("ticketList");

    if (nameInput.value === "" || movieInput.value === "" || quantityInput.value === "") {
        alert("Please fill in all fields!");
        return;
    }

    var quantity = parseInt(quantityInput.value);
    if (isNaN(quantity) || quantity <= 0) {
        alert("Please enter a valid quantity!");
        return;
    }

    var movieDetails = getMovieDetails(movieInput.value);
    if (!movieDetails) {
        alert("Movie not found!");
        return;
    }

    var totalPrice = quantity * movieDetails.price;

    var li = document.createElement("li");
    li.innerHTML = `
        <span>Name: ${nameInput.value}</span><br>
        <span>Movie: ${movieInput.value} (${movieDetails.genre})</span><br>
        <span>Quantity: ${quantity}</span><br>
        <span>Total Price: Rs ${totalPrice}</span>
    `;

    var cancelBooking = document.createElement("button");
    cancelBooking.textContent = "Cancel Booking";
    cancelBooking.className = "cancelButton";
    cancelBooking.onclick = function () {
        ticketList.removeChild(li);
    };

    li.appendChild(cancelBooking);
    ticketList.appendChild(li);

    nameInput.value = "";
    movieInput.value = "";
    quantityInput.value = "";
}

function getMovieDetails(movieName) {
    // Here you can implement a function to fetch movie details from a database or API
    // For this example, let's hardcode some movie details
    var movies = {
        "Avatar": { genre: "Sci-Fi", price: 170 },
        "Titanic": { genre: "Romance", price: 180 },
        "The Avengers": { genre: "Action", price: 160 },
        // Add more movies here
    };

    return movies[movieName];
}
