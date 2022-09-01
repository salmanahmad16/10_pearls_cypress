export class Electronics{

    nevigate_to_laptops(){

        
        
       cy.get(".list-group").find("a").contains("Laptops").click()
       cy.intercept("POST", '/bycat').as("waitforbycat")
       cy.get("@waitforbycat")
       cy.log("Waited for page load")

    }

    nevigate_to_phones(){
       
      
        cy.get(".list-group").find("a").contains("Phones").click()
        cy.intercept("POST", "https://api.demoblaze.com/bycat").as("waitforbycat2")
        cy.get("@waitforbycat2")
        cy.log("Waited for page load")

    }





}
