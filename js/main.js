import businesses from './data.js'

// Accessing output HTML element in DOM
const outputElement = document.getElementById('output');
// Setting h1 HTML element to output element innerHTML
outputElement.innerHTML = '<h1>Active Businesses</h1>'

// Iterate through businesses array and setting specific HTML elements to display in DOM
businesses.forEach(businessObject => {
  // Iterate through business array and add all order amounts in orders array
  let totalOrders = businessObject.orders.reduce(
    (currentTotal, nextValue) => currentTotal += Math.round(nextValue), 0
  )

  outputElement.innerHTML += `
    <h2>
    ${businessObject.companyName}
    ($${totalOrders})
    </h2>
    <section>
      ${businessObject.addressFullStreet}
    </section>
    <section>
      ${businessObject.addressCity}, ${businessObject['addressStateCode']} ${businessObject['addressZipCode']}
    </section>
    <hr>
  `

})

// Access input text HTML element in DOM
const searchElement = document.getElementById("companySearch");

// Add event listener when a specific key is pressed
searchElement.addEventListener('keypress', event => {
  // Execute code when return/enter (charCode 13) key is pressed
  if (event.charCode === 13) {
    // Iterate through businesses array to find company name matching user input value
    const foundBusiness = businesses.find(
      business => business.companyName.includes(event.target.value)
    )

    // Input found business info in DOM
    outputElement.innerHTML = `
      <h2>
      ${foundBusiness.companyName}
      </h2>
      <section>
        ${foundBusiness.addressFullStreet}
      </section>
      <section>
        ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}
      </section>
    `

  }

})