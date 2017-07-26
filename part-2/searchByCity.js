// script prints the client id, rep_name, company, city, and state that for all clients whose city matches the provided city argument.
const fs = require('fs')

fs.readFile('./clients.json', (err, json) => {
  if(err){ throw new Error('Could not read file') }
  const clients = JSON.parse(json)

  let matches = []
  let city = process.argv[2]

  clients.filter((client) => {
    if (client.city.toLowerCase().includes(city.toLowerCase())){
      let matchingClient = {}
      matchingClient.id = client.id
      matchingClient.rep_name = client.rep_name
      matchingClient.company = client.company
      matchingClient.city = client.city
      matches.push(matchingClient)
    }
  })
  console.log(matches)
})
