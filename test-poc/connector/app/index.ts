import Connector from '@tableau/taco-toolkit'

let connectorInitialized = false
let pageLoaded = false

const connector = new Connector(() => {
  connectorInitialized = true
  enableButtonWhenReady()
})

const authorizationToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlhrUFpfSmhoXzlTYzNZS01oRERBZFBWeFowOF9SUzI1NiIsInBpLmF0bSI6ImFzc2MifQ.eyJzY29wZSI6WyJkYXRhOnJlYWQiXSwiY2xpZW50X2lkIjoicHVZYUtOaHoxTjZtRTdaYU9RNzZBYkN4Q1YydHQ3dlAiLCJpc3MiOiJodHRwczovL2RldmVsb3Blci5hcGkuYXV0b2Rlc2suY29tIiwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20iLCJqdGkiOiI0NkNRTDRLQWI3ZXhIN0FabmU0cURkNWh5T1ZTbFR0QXJJT3JPUmxmTG9tS1RZWEc0Vnp5TjBDWjJycm5tMkV2IiwiZXhwIjoxNzQyMzc5NjQwLCJ1c2VyaWQiOiIzRlIyRlhVR0tTNFRNQjhRIn0.JFwM9fpqHIYokO1UNKR6uarhbhT0GWA2b3hYhlCojwPRT6lOrkupPrkqsIFWLk8dt_JYMUCyDv5f1ks-RpcYgOHF9ZX-ceRDUnqFKGtno25ROYxisufZVu45N6H5SbbXkIJRl8QdSW4r886gKHVsrdVRbvrCHPt9oLdIbMz32mdcVJTWTEXjynbs4_rY95bcwKtTu3hBgOMRRX5md4EaXmoY49qvnrc2To5YOQ3rauRJXhBt0MhATSyF7vR0_QTKL1ubTEA3v_8-rEXf2EgRDIwvm7Bw7Sn0n4JkfZbSYnYoYKCqtWQl9yZ7iFJ9ceT7lkSmfKyke-NLELYnHkh-aQ"

function submit() {
  connector.handlerInputs = [
    {
      fetcher: 'MyFetcher',
      parser: 'MyParser',
      data: {
        url: 'https://developer.api.autodesk.com/dataexchange/2023-05/graphql',
        authToken: authorizationToken,
        // externalProjectId: 'b.d7617730-85af-494f-9105-9b16425b7e97', // Adjust dynamically if needed
        // fileUrn: exchangeId, // Pass exchangeId as the fileUrn dynamically
      },
    },
  ]

  connector.submit()
}

function handleSubmit() {
  const button = getSubmitButton()

  button.toggleAttribute('disabled')
  button.innerText = 'Processing...'

  fetchHubs()
}

// Function to fetch hubs on clicking GetHubs Data button
const fetchHubs = async () => {
  console.log('Fetching HUBS => ')

  const query = `
    query {
      hubs(pagination: { limit: 100 }) {
        pagination {
          cursor
          pageSize
        }
        results {
          name
          id
          region
        }
      }
    }
  `

  const response = await fetch('https://developer.api.autodesk.com/dataexchange/2023-05/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authorizationToken}`, // If you need authorization
    },
    body: JSON.stringify({ query }),
  })

  console.log('Hubs data response => ', response)

  const { data } = await response.json()

  if (data && data.hubs) {
    displayHubs(data.hubs.results) // Display hubs in the UI
  } else {
    console.error('No hubs data found')
  }

  console.log('AFTER Fetching HUBS => ')
}

// Display Hubs in the UI (you may update your DOM as required)
function displayHubs(hubs: { name: string, id: string, region: string }[]) {
  const hubListElement = document.createElement('ul')
  hubs.forEach(hub => {
    const li = document.createElement('li')
    const toggleSymbol = document.createElement('span')
    toggleSymbol.innerText = '+'
    toggleSymbol.style.cursor = 'pointer'
    
    li.innerText = `${hub.name} (${hub.region}) `
    li.insertBefore(toggleSymbol, li.firstChild) // Add the + symbol before the hub name

    toggleSymbol.addEventListener('click', () => toggleProjects(hub.id, li, toggleSymbol))

    hubListElement.appendChild(li)
  })

  document.body.appendChild(hubListElement)
}

// Toggle project list for the selected hub (show/hide)
const toggleProjects = async (hubId: string, hubElement: HTMLElement, toggleSymbol: HTMLElement) => {
  const projectListElement = hubElement.querySelector('ul')

  if (projectListElement) {
    // If project list exists, hide it and change the symbol
    projectListElement.remove()
    toggleSymbol.innerText = '+'
  } else {
    // Fetch and display projects for this hub
    fetchProjects(hubId, hubElement, toggleSymbol)
    toggleSymbol.innerText = '-' // Change the symbol to "-" indicating the list is open
  }
}

// Fetch projects for a given hub
const fetchProjects = async (hubId: string, hubElement: HTMLElement, toggleSymbol: HTMLElement) => {
  console.log(`Fetching Projects for Hub ID: ${hubId}`)

  const query = `
    query {
      projects(hubId: "${hubId}", pagination: { limit: 100 })
        {
          pagination {
            cursor
            pageSize
          }
          results {
            name
            id
          }
          }
        }
  `
  try {
    const response = await fetch('https://developer.api.autodesk.com/dataexchange/2023-05/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authorizationToken}`, // If you need authorization
      },
      body: JSON.stringify({ query }),
    })
    console.log('Fetched projects data => ', response)
  
    const { data } = await response.json()
  
    if (data && data.projects) {
      displayProjects(data.projects.results, hubElement, toggleSymbol)
    } else {
      console.error('No projects data found')
    }
    
  } catch (error) {
    console.error('Error projects => ', error)
    
  }
}

// Display Projects in the UI
function displayProjects(projects: { name: string, id: string }[], hubElement: HTMLElement, toggleSymbol: HTMLElement) {
  const projectListElement = document.createElement('ul')
  
  projects.forEach(project => {
    const li = document.createElement('li')
    const toggleProjectSymbol = document.createElement('span')
    toggleProjectSymbol.innerText = '+'
    toggleProjectSymbol.style.cursor = 'pointer'
    
    li.innerText = project.name
    li.insertBefore(toggleProjectSymbol, li.firstChild) // Add the + symbol before the project name

    toggleProjectSymbol.addEventListener('click', () => toggletopFolders(project.id, li, toggleProjectSymbol))

    projectListElement.appendChild(li)
  })

  hubElement.appendChild(projectListElement)
}

// Toggle exchange list for the selected project (show/hide)
const toggletopFolders = async (projectId: string, projectElement: HTMLElement, toggleTopFolder: HTMLElement) => {
  const topFolderListElement = projectElement.querySelector('ul')

  if (topFolderListElement) {
    // If exchange list exists, hide it and change the symbol
    topFolderListElement.remove()
    toggleTopFolder.innerText = '+'
  } else {
    // Fetch and display topFolders for this project
    fetchTopFolder(projectId, projectElement, toggleTopFolder)
    toggleTopFolder.innerText = '-' // Change the symbol to "-" indicating the list is open
  }
}

// Fetch top folder for a given project
const fetchTopFolder = async (projectId: string, projectElement: HTMLElement, toggleTopFolder: HTMLElement) => {
  console.log(`Fetching topFolders for Project ID: ${projectId}`)

  const query = `
    query {
                topFolders(projectId: "${projectId}"
            
            )
                {
                  results {
                    id
                    name
      		        __typename
                  }
                }
              }
  `

  const response = await fetch('https://developer.api.autodesk.com/dataexchange/2023-05/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authorizationToken}`, // If you need authorization
    },
    body: JSON.stringify({ query }),
  })

  const { data } = await response.json()

  if (data && data.topFolders) {
    displayTopFolder(data.topFolders.results, projectElement, toggleTopFolder)
  } else {
    console.error('No topFolders data found')
  }
}

// Display topFolders in the UI
function displayTopFolder(topFolders: { name: string, id: string }[], projectElement: HTMLElement, toggleTopFolder: HTMLElement) {
  const folderListElement  = document.createElement('ul')

  topFolders.forEach(folder => {
    const li = document.createElement('li');
    const toggleSymbol = document.createElement('span');
    toggleSymbol.innerText = '+';
    toggleSymbol.style.cursor = 'pointer';

    li.innerText = folder.name;
    li.insertBefore(toggleSymbol, li.firstChild); // Add the toggle symbol before the folder name

    toggleSymbol.addEventListener('click', () => toggleFolderContent(folder.id, li, toggleSymbol));

    folderListElement.appendChild(li);
  });

  projectElement.appendChild(folderListElement);
}


// Toggle folder content query for the selected project (show/hide)
const toggleFolderContent = async (folderId: string, folderElement: HTMLElement, toggleSymbol: HTMLElement) => {
  const contentListElement  = folderElement.querySelector('ul')

  if (contentListElement) {
    // If content list exists, hide it and change the symbol
    contentListElement.remove();
    toggleSymbol.innerText = '+';
  } else {
    // Fetch and display folder content
    fetchFolderContent(folderId, folderElement, toggleSymbol);
    toggleSymbol.innerText = '-'; // Change the symbol to "-" indicating the list is open
  }
}

// Fetch top folder for a given project
const fetchFolderContent = async (folderId: string, folderElement: HTMLElement, toggleSymbol: HTMLElement) => {
  console.log(`Fetching topFolders for Project ID: ${folderId}`)

  const query = `
    query {
                folder(
                      folderId: "${folderId}"
                        ) 
                   {
                    id
                    name
                   folders (pagination: {limit: 100}) {
                      pagination {
                       cursor
                       pageSize
                      }
                      results {
                      id
                      name
                      __typename
                     }
                   }
                   exchanges (pagination: {limit: 100}){
                    pagination {
                      cursor
                      pageSize
                    }
                    results {
                      id
                      name
                      __typename
                      alternativeIdentifiers{
                        fileVersionUrn
                      }
                    }
                   }
                 }
              }
  `

  const response = await fetch('https://developer.api.autodesk.com/dataexchange/2023-05/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authorizationToken}`, // If you need authorization
    },
    body: JSON.stringify({ query }),
  })

  const { data } = await response.json()

  if (data && data.folder) {
    displayFolderContent(data.folder.exchanges.results, folderElement, toggleSymbol)
  } else {
    console.error('No foldercontent data found')
  }
}

// Display topFolders in the UI
function displayFolderContent(exchanges: { name: string, id: string }[], folderElement: HTMLElement, toggleSymbol: HTMLElement) {
  const exchangeListElement = document.createElement('ul')

  exchanges.forEach(exchange => {
    const li = document.createElement('li')
    li.innerText = exchange.name
    li.addEventListener('click', () => fetchDataForExchange(exchange.id))
    exchangeListElement.appendChild(li)
  })

  folderElement.appendChild(exchangeListElement)
}

// Fetch and load data for the selected exchange
const fetchDataForExchange = async (exchangeId: string) => {
  console.log(`Fetching data for Exchange ID: `)

  // Simulate the data fetch for the selected exchange (e.g., using the connector or directly)
  submit()  // You may need to modify this to submit specific data for the exchange
}

function enableButtonWhenReady() {
  if (connectorInitialized && pageLoaded) {
    const button = getSubmitButton()

    button.innerText = 'Get Hubs Data!'
    button.removeAttribute('disabled')
    button.addEventListener('click', handleSubmit, { once: true })
  }
}

function getSubmitButton(): HTMLElement {
  const button = document.getElementById('submitButton')
  if (!button) {
    throw new Error('Submit button is not present on the page.')
  }

  return button
}

window.addEventListener('load', function () {
  pageLoaded = true
  enableButtonWhenReady()
})
