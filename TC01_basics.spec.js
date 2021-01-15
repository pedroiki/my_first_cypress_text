/// <reference types="cypress"     we dont need this because we create a json file with this  jsconfig.json             
/// cypress uses mocha & chai

describe('login',   function(){
    it('sing in',   function(){

        //lunch the aplication
        cy.visit('https://react-redux.realworld.io/#/login?_k=ycwg4e')               
        //get an element with the properties he provide, use "inspect element to find"
        // email
        cy.get('input[type="email"]').type('pedroiki@gmail.com')
        // now for password , go again to "inspect element"
        cy.get('input[type="password"]').type('pedro12345')
        // now "inspect element" to get the sign in button, the 'contain' will find the class with
        // matching text to the element, btn with text sign in
        cy.get('.btn').contains('sign in').should('be.visible').click()


    })
})


// to text , open a new terminal in VSC and lunch @ npx cypress open, in the GUI you will find your text


