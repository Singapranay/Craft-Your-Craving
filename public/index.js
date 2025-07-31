// Get the search button


// Add event listener to the search button
function navigate() {
    // Get the selected city
    const selectedCity = document.querySelector('#cityDropdown .active').innerText;

    // Construct the URL with the selected city
    const url = selectedCity + '.html';

    // Redirect to the constructed URL
    window.location.href = url;
}

// Function to change the active city button and update the inner text of the "Select City" button
function changeCity(city, buttonText) {
    const buttons = document.querySelectorAll('.dropdown-menu .dropdown-item');
    const selectCityButton = document.getElementById('selectCity');

    buttons.forEach(button => {
        if (button.innerText === city) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });

    // Update the inner text of the "Select City" button
    selectCityButton.innerText = buttonText;
}

function openReservationForm(restaurantName) {
    // Get the reservation form element
    const reservationForm = document.getElementById('reservationForm');
  
    // Set the value of the restaurentName span to the name of the restaurant
    reservationForm.querySelector('#restaurentName').textContent = restaurantName;
  
    // Show the reservation form
    reservationForm.style.display = 'block';
  }
  function finish() {
    // Get the values of all form fields
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var email = document.getElementById('email').value.trim();
    var address = document.getElementById('address').value.trim();
    // var country = document.getElementById('country').value.trim();
    var state = document.getElementById('state').value.trim();
    var zip = document.getElementById('zip').value.trim();
    var ccName = document.getElementById('cc-name').value.trim();
    var ccNumber = document.getElementById('cc-number').value.trim();
    var ccNumber1 = document.getElementById('cc-number1').value.trim();
    var ccCVV = document.getElementById('cc-cvv').value.trim();

    // Check if any field is empty
    console.log(firstName)
    if (
        firstName === '' || 
        lastName === '' ||
        email === '' ||
        address === '' ||
        
        state === '' ||
        zip === '' ||
        ccName === '' ||
        ccNumber === '' ||
        ccNumber1 === '' ||
        ccCVV === ''
    ) {
        // Show error message
        alert("Please fill out all fields.");
        return; // Exit the function if any field is empty
    }

    // Check if email is valid using a simple regular expression
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return; // Exit the function if email is invalid
    }

    // Check if mobile number is valid (assuming 10-digit number)
    var mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(ccNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return; // Exit the function if mobile number is invalid
    }

    var myModal = new bootstrap.Modal(document.getElementById('successModal'), {
        keyboard: false
    });
    myModal.show();
    document.getElementById('firstName').value='';
    document.getElementById('lastName').value='';
    document.getElementById('email').value='';
    document.getElementById('address').value='';
    document.getElementById('address2').value='';
    document.getElementById('state').value='choose..';
    document.getElementById('city').value='choose..';
    document.getElementById('zip').value='';
    document.getElementById('cc-name').value='';
    document.getElementById('cc-number').value='';
    document.getElementById('cc-number1').value='';
    document.getElementById('cc-cvv').value='';
}
function updateCities() {
    var stateDropdown = document.getElementById('state');
    var cityDropdown = document.getElementById('city');
    var selectedState = stateDropdown.value;

    // Object mapping states to cities
    var citiesByState = {
        'Telangana': ['Hyderabad', 'Warangal', 'Karimnagar','Nizamabad','Armoor'],
        'Karnataka': ['Bangalore', 'Mysore', 'Hubli'],
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
        'Delhi':['New Delhi'],
        'Goa':['Panaji','Calangute','Vasco da Gama','Margao','Mapusa'],
        'Kolkata':['Central Kolkata','Howrah','Northern Towns','South Kolkata']
        // Add more states and cities as needed
    };

    // Clear existing options
    cityDropdown.innerHTML = '<option value="">Choose...</option>';

    // Populate city options based on the selected state
    if (selectedState && citiesByState[selectedState]) {
        citiesByState[selectedState].forEach(function(city) {
            var option = document.createElement('option');
            option.text = city;
            option.value = city;
            cityDropdown.add(option);
        });
    }
}

