class test{
    visit(){

    return cy.visit("https://parabank.parasoft.com/")
    }
    username(){
       return cy.get("[name='username']")
    }
    password(){
       return cy.get("[name='password']")
    }
    button(){
      return cy.get("[value]")
    }
    AccountBalance(){
     return cy.get("tbody tr:nth-of-type(2) .ng-binding")
    }
    payeeName(){
       return cy.get("input[name='payee.name']")
    }
    payeeAddress(){
       return cy.get("input[name='payee.address.street']")
    }
    payeeCity(){
       return cy.get("input[name='payee.address.city']")
    }
    state(){
        return cy.get("tr:nth-of-type(4) > td:nth-of-type(2)")
    }
    zipcode(){
        return cy.get("input[name='payee.address.zipCode']")
    }
    phone(){
        return cy.get("input[name='payee.phoneNumber']")
    }
    account(){
        return cy.get("input[name='payee.accountNumber']")
    }
    verifyaccount(){
        return cy.get("input[name='verifyAccount']")
    }
    amount(){
        return cy.get("input[name='amount']")
    }
    myaccount(){
        return cy.get("select[name='fromAccountId']")
    }
    sendButton(){
        return cy.get("[value='Send Payment']")
    }
    transfer(){
      return  cy.get("div#leftPanel > ul > li:nth-of-type(4) > a")
    }
    validateBalance(){
        return cy.get("div#leftPanel > ul > li:nth-of-type(2) > a")
    }

    
}
module.exports = test;