import businesses from './data.js'

// Filter businesses array for companies in manufacturing industry
const manufacturingBiz = businesses.filter(businessObject => {

  return businessObject.companyIndustry === "Manufacturing"

})

// Access to manufacturing HTML element in DOM
const manufacturingElement = document.getElementById('manufacturing')
manufacturingElement.innerHTML = '<h1>Manufacturing Businesses</h1>'

// Iterate through manufacturing array and display in DOM
manufacturingBiz.forEach(businessObject => {

  manufacturingElement.innerHTML += `
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