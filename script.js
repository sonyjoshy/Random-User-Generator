
async function getUsers() {

    let count = document.getElementById("userCount").value;

    let container = document.getElementById("userContainer");

    if (count == "" || count < 1 || count > 20) {
        alert("Please enter a number between 1 and 20");
        return;
    }

    try {
        container.innerHTML = "Loading...";

        // to fetch data from API
        let response = await fetch(`https://randomuser.me/api/?results=${count}`);

        // Convert response to JSON
        let data = await response.json();

        // Store users details
        let users = data.results;

        // Clear previous users
        container.innerHTML = "";

        // Display users
        for (let i = 0; i < users.length; i++) {

            container.innerHTML += `
            
                <div class="bg-white p-6 rounded-xl shadow-md text-center">

                    <img src="${users[i].picture.large}"
                        class="w-28 h-28 rounded-full mx-auto mb-4">

                    <h2 class="text-xl font-bold text-blue-700 mb-3">
                        ${users[i].name.first} ${users[i].name.last}
                    </h2>

                    <p class="text-black-600 mb-2">
                        Email: ${users[i].email}
                    </p>

                    <p class="text-b;ack-600 mb-2">
                        Location: ${users[i].location.city},
                        ${users[i].location.country}
                    </p>

                    <p class="text-black-600">
                        Phone: ${users[i].phone}
                    </p>

                </div>

            `;
        }

    }

    catch (error) {
        container.innerHTML = "Something went wrong. Please try again.";
        console.log(error);

    }

}
