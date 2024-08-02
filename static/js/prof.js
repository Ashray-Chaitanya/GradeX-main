fetch("/get-stud-details", {
  method: "GET",
}).then((response) => {response.json();}).then((data) => {
  console.log(data);
  document.getElementById("stud-name").textContent = data["student_name"];
  document.getElementById("stud-usn").textContent = data["student_usn"];
})
