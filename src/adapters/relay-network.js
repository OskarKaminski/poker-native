import {Network} from 'relay-runtime';

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(
    operation,
    variables,
) {
    return fetch('http://localhost:3002/graphql', {
        method: 'POST',
        headers: {
            // Add authentication and other headers here
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            query: operation.text, // GraphQL text from input
            variables,
        }),
    }).then(response => {
        return response.json();
    });
}

// Create a network layer from the fetch function
export const network = Network.create(fetchQuery);