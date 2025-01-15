// Handle waiting list form submission
document.getElementById('waitingListForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  const email = document.getElementById('email').value;

  if (email) {
    alert(`Thank you for joining the waiting list, ${email}!`);
    document.getElementById('waitingListForm').reset();
  } else {
    alert('Please enter a valid email.');
  }
});
