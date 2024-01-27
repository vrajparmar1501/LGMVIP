document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var course = document.getElementById("course").value;
  var dob = document.getElementById("dob").value;
  var address = document.getElementById("address").value;
  var gender = document.getElementById("gender").value;

  // Display submitted data
  var submittedData = document.getElementById("submittedData");
  submittedData.innerHTML = `
  <h1>Registration Details:</h1>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Course:</strong> ${course}</p>
  <p><strong>Date of Birth:</strong> ${dob}</p>
  <p><strong>Address:</strong> ${address}</p>
  <p><strong>Gender:</strong> ${gender}</p>
`;

  // Clear form inputs
  document.getElementById("registrationForm").reset();
});