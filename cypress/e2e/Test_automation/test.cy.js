import test from '../../../Page/dom.cy'
const tests = new test;

describe("Testing automation",()=>{
    const AccountBalance = 1800
    const transaction = 100

    beforeEach("visit the page",()=>{
        tests.visit();
    })
    it("should be able get remaining balance",()=>{
        tests.username().type("Muiz")
        tests.password().type("faceronke")
        tests.button().click()
        tests.transfer().click()
        tests.payeeName().type("muiz")
        tests.payeeAddress().type("4 deleawelewa")
        tests.payeeCity().type("lagos")
        tests.state().type("Lagos")
        tests.zipcode().type("0109200")
        tests.phone().type("020292929")
        tests.account().type("12334")
        tests.verifyaccount().type("12334")
        tests.amount().type("100")
        tests.myaccount().select(0)
        tests.sendButton().click()
        tests.validateBalance().click()

        const Balance = AccountBalance - transaction;
        
        tests.AccountBalance().should('contain',Balance)
    


    })
})