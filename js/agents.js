import businesses from './data.js'

// Access to purchasing agent HTML element in DOM
const purchasingAgentElement = document.getElementById('purchasingAgents')
purchasingAgentElement.innerHTML = '<h1>Purchasing Agents</h1>'

// Extracting purchasing agent first and last name, company name and phone number and placing in object
const agents = businesses.map(businessObject => {

  const agentObject = {}

  agentObject.fullName = `${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}`
  agentObject.company = businessObject.companyName
  agentObject.phoneNumber = businessObject.phoneWork

  return agentObject

})

console.table(agents)

// Iterate through agents array of objects and display in DOM
agents.forEach(agentObject => {

  purchasingAgentElement.innerHTML += `
  <h2>${agentObject.fullName}</h2>
  <h3>${agentObject.company}</h3>
  <h3>${agentObject.phoneNumber}</h3>
  <hr/>
  `

})

const searchAgentElement = document.getElementById("searchAgent")

searchAgentElement.addEventListener('keypress', event => {

  if (event.charCode === 13) {

    const foundAgent = agents.find(
      agent => agent.fullName.includes(event.target.value)
    )
  
    purchasingAgentElement.innerHTML = `
    <h2>${foundAgent.fullName}</h2>
    <h3>${foundAgent.company}</h3>
    <h3>${foundAgent.phoneNumber}</h3>
    <hr/>
    `

  }

})