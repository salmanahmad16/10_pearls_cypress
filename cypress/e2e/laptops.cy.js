/// <reference types = "cypress" />

import {Electronics} from "../support/electronics"

const elec = new Electronics()


describe("Laptop with Page Object Model",function(){
    it("Visit Target Url", ()=>{
        cy.visit("https://www.demoblaze.com/")
    })
    it("Go to laptop page",function(){

        elec.nevigate_to_laptops()
        

    })
    it("Go to phone page",function(){

     
        elec.nevigate_to_phones()

    })
})