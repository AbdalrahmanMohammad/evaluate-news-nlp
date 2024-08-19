// Replace checkForName with a function that checks the URL
import { checkForUrl } from './urlChecker'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // If the URL is valid, send it to the server using the serverURL constant above
    if (checkForUrl(formText)) {
        postData('/analyze', { "url": formText }).then(data => {
            console.log('Received data:', data);
            console.log(data.agreement);
            console.log(data.confidence);
            console.log(data.score_tag);
            console.log(data.subjectivity);
            console.log(data.sentence_list[0].text);
        })
            .catch(error => {
                console.error('Error:', error);
            });
    }
    else{
        alert("please enter a valid URL");
    }

}

// Function to send data to the server
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    try {
        const newData = await response.json();
        return newData;
    } catch (error) {
        console.log("error", error);
    }
}

// Export the handleSubmit function
export { handleSubmit };

