function copyurllink() {
// Get the text field
var copyText = document.getElementById("myInput");

// Select the text field
copyText.select();
copyText.setSelectionRange(0, 99999); // For mobile devices

// Copy the text inside the text field
navigator.clipboard.writeText(copyText.value);

alert('The link has been copied to clipboard');
}