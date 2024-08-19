// Replace checkForName with a function that checks the URL
import { postData } from './nameChecker'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    postData('/analyze', { "text": formText }).then(data => {
        console.log('Received data:', data);
        console.log(data.agreement);
        console.log(data.confidence);
        console.log(data.score_tag);
        console.log(data.sentence_list[0].text);
    })
        .catch(error => {
            console.error('Error:', error);
        });

    // Check if the URL is valid

    // If the URL is valid, send it to the server using the serverURL constant above

}

// Function to send data to the server

// Export the handleSubmit function
export { handleSubmit };

