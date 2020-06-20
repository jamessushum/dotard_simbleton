import businesses from './data.js'

// Filter businesses array for companies located in NY
const nyBusinesses = businesses.filter(businessObject => {

  return businessObject.addressStateCode === "NY"

})

// Access to new york HTML element in DOM
const nyElement = document.getElementById('newyork');
nyElement.innerHTML = '<h1>New York Businesses</h1>'

// Iterate through ny businesses array and display in DOM
nyBusinesses.forEach(businessObject => {

  nyElement.innerHTML += `
  <h2>${businessObject.companyName}</h2>
  <section>
    ${businessObject.addressFullStreet}
  </section>
  <section>
    ${businessObject.addressCity}, ${businessObject['addressStateCode']} ${businessObject['addressZipCode']}
  </section>
  <hr>
  `

})