// { createYield } from "typescript"

it('Post Users Data',()=>{
    cy.postuser('Prashant','Pandey','abc@xyz',93354,'var','up','ind','nosecure')
})

it('Perform login',()=>{
    cy.login('abc@xyz','nosecure')
})

it('Get User Data',()=>{
    cy.getuser();
})

it('delete the user details',()=>{
    cy.deleteuser('61a70b4b14856afd0b6af628');
})

it('get Users details via ID',()=>{
    cy.getbyid('6193e778af673e95e3c6873c')
})

it('update Users details via ID',()=>{
    cy.updatebyid('61a7208723f6646f038851ed','ram','rahim')
})
