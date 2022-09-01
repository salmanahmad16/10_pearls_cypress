/// <reference types = "cypress" />


describe("Should Get Data", () =>{

   it.skip("Api Handling", () =>{
    cy.request("https://jsonplaceholder.typicode.com/posts/1").as("GetApiResponse")
    cy.get("@GetApiResponse").then(ApiResponse =>{
        cy.log(ApiResponse)
    })
   })


   it.skip("Should Create Post Request", () =>{

    cy.request("POST", "https://jsonplaceholder.typicode.com/posts",
    {title:"This Is Cypress API Test",body:"This is the test body",userId: 1}).as("createResource")

    cy.get("@createResource").then(SendApi => {
        cy.log(SendApi)
    })
   })

   it.skip("Create Post request with assertions", ()=>{
    cy.request("POST", "https://jsonplaceholder.typicode.com/posts",{title:"Cypress api test2",body:"cypress test body",userId:2}).as("createResource2")

    cy.get("@createResource2").then(result=>{
        expect(result.body.title).to.eq("Cypress api test2")
        expect(result.status).to.eq(201)
    })

   })


   // To update with put method we have to update all the perameter
   it.skip("Update the data with PUT API request", () =>{

    cy.request("PUT","https://jsonplaceholder.typicode.com/posts/1",
    {id:1,title:"Ye raha humara new title",body:"New Text Added in the body",userId:100}
    ).as("UpdateValues")

    cy.get("@UpdateValues").then(responseValue =>{
        cy.log(responseValue)
        expect(responseValue.body.title).to.eq("Ye raha humara new title")
        expect(responseValue.status).to.eq(200)

    })
   })

   // to update with patch method we can only update any field
   it("Update the data with PATCH API request", () =>{

    cy.request("PATCH","https://jsonplaceholder.typicode.com/posts/1",{title:"Ye raha humara new title"}).as("Updatepatch")

    cy.get("@Updatepatch").then(responseValue =>{
        cy.log(responseValue)
        expect(responseValue.body.title).to.eq("Ye raha humara new title")
        expect(responseValue.status).to.eq(200)

    })
   })

// Delete API Request

   it.only("Should Delete Request", () =>{

    cy.request("DELETE", "https://jsonplaceholder.typicode.com/posts/1").as("deleteResource")

    cy.get("@deleteResource").then(reponse => {
        cy.log(reponse)
    })
   })





})