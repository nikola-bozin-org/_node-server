const axios = require('axios');
const concurrentRequests = 100;

async function run() {
  const requests = [];

  for (let i = 0; i < concurrentRequests; i++) {
    requests.push(
      axios.get('http://localhost:9876/api').then((response) => {
        console.log(`Response ${i + 1}: ${response.data}`);
      })
    );
  }

  await Promise.all(requests);
}

run().catch((err) => console.error("Error"));
