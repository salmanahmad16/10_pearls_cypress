/// <reference types = "cypress" />

describe("Handle Waits", () =>{
    it("Visit The Site", ()=>{
        cy.visit("https://www.demoblaze.com/")
    })

    it("Click in laptops", ()=>{
        cy.get(".list-group").find("a").contains("Laptops").click()
    })


    it.only("click on laptop with intercepet (wait to load network api request)",() =>{

        cy.visit("https://www.demoblaze.com/")
        cy.intercept("POST",'/bycat').as("WaitToLoad")
        
        cy.get(".list-group").find("a").contains("Laptops").click()
        cy.wait('@WaitToLoad')
        cy.log("Success")


    })


})