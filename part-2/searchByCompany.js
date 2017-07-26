// script prints the client id, phone, and company for all clients whose company starts with the provided company argument.
const fs = require('fs')

fs.readFile('./clients.json', (err, json) => {
  if(err){ throw new Error('Could not read file') }
  const clients = JSON.parse(json)

  let matches = []
  let company = process.argv[2]

  clients.filter((client) => {
    if (client.company.toLowerCase().startsWith(company)) {
      let matchingClient = {}
      matchingClient.id = client.id
      matchingClient.phone = client.phone
      matchingClient.company = client.company
      matches.push(matchingClient)
    }
  })
  console.log(matches)
})
