/// <reference types = "cypress" />


describe("view ports", function(){
    it("Target URL", ()=>{
        cy.visit("https://demoqa.com/automation-practice-form")
    })

    it("check view port and click on button", function(){
        cy.viewport(375, 667)
        cy.get(".navbar").find("button").click()
        cy.get('.left-pannel').should("not.exist")
    })
})