/// <reference types = "cypress" />

describe('Go to Site', () => {

  beforeEach(() => {
    cy.visit("/")
  })

  it("Interaction with Radio", () => {

    cy.get('#genterWrapper').find('[value="Other"]').click({force:true})


  })
  it("Interaction with Checkboxes", () => {

    cy.get('#hobbiesWrapper').find('[value="1"]').check({force:true})
    cy.get('#hobbiesWrapper').find('[value="2"]').check({force:true})
    cy.get('#hobbiesWrapper').find('#hobbies-checkbox-3').check({force:true})


  })

  it("Yield Subject from command", () => {
    cy.get('#userName-label').then(label => {
      expect(label.text()).to.eq("Name")
    })
  })


  it("Wrap method", () => {
    cy.get('#userName-label').then(label => {
      cy.wrap(label).should("contain", "Name")
    })
  })

  it("Invoke", () => {
    cy.get('#userName-label').invoke("text").then(label => {
      expect(label).to.eq("Name")
    })

    cy.get('#userName-label').invoke("attr", "class").then(classElement => {
      expect(classElement).to.eq("form-label")
    })
  })

  it("Chai Jquery Assertions", () => {
    cy.get('#userName-label').then($label => {
      expect($label.text()).to.equal("Name")
    })

  })

  it.only("Iteration on check boxes with Each Method", () =>{
    cy.get("#hobbiesWrapper").each(checkboxes =>{
      cy.wrap(checkboxes).find('[type=checkbox]',{timeout:3000}).check({force:true})
    })
  })





  
})