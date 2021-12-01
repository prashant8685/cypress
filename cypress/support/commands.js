    Cypress.Commands.add('postuser',(first_name,last_name,emailid,phone,city,state,country,password)=>{
    cy.request('POST', `localhost:3000/users`, {
        first_name : first_name,
        last_name : last_name,
        emailid : emailid,
        phone : phone,
        city: city,
        state : state,
        country : country,
        password : password
    }).as('postuser').then((response)=> {
        var postdata = response.body.id
        cy.log(postdata);
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('id','abc@xyz')
            
        
    })
})
Cypress.Commands.add('login', (emailid,password) => {
    cy.request('POST', `localhost:3000/auth/login`,{
        username: emailid,
        password: password,
    }).as('loginResponse').then((response)=>{
        var value=response.body.access_token
        Cypress.env('test', value)
        cy.log(value);
    })
})
Cypress.Commands.add('getuser', () => {

    let test = Cypress.env('test')
    var token = 'bearer ' +test
    cy.request({
        method: 'GET',
        url : 'localhost:3000/users',
        headers: {
            authorization : token,
        }
    }).as('getuserdata').then((response)=>{
        var value = response.body.length
        cy.log("Value "+value);
        expect(response.status).to.eq(200)
        expect(response.body[0]).to.have.property('first_name','Rahul')
        expect(response.body[0]).to.have.property('last_name','Tiwari')
        expect(response.body[0]).to.have.property('emailid','rt@abc')
        expect(response.body[0]).to.have.property('phone',2500)
        expect(response.body[0]).to.have.property('city','phagwara')
        expect(response.body[0]).to.have.property('state','jalandhar')
        expect(response.body[0]).to.have.property('country','india')
        expect(response.body[0]).to.have.property('password','rahulsecure')
    })
})

Cypress.Commands.add('deleteuser', (id) => {
    let test = Cypress.env('test')
    var token = 'bearer ' +test
    const userId=id
    cy.log("user id is: "+userId)
    cy.request({
        method : 'DELETE',
        url:  `localhost:3000/users/`+userId,
        headers: {
            authorization : token,
        }
    }).as('deleteuserdata').then((response)=>{
        var value = response.body.length
        cy.log("Value "+value);
        expect(response.status).to.eq(200)
        //expect(response.body).to.be("Users Details is successfully deleted")
        
    })
})

Cypress.Commands.add('getbyid', (id) => {
    let test = Cypress.env('test')
    var token = 'bearer ' +test
    const userId=id
    cy.log("user id is: "+userId)
    cy.request({
        method: 'GET',
        url: `localhost:3000/users/`+userId,
        headers: {
            authorization : token,
        }
    }).as('getbyiduserdata').then((response)=>{
        var value = response.body.length
        cy.log("Value "+value);
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('first_name','Rahul')
        expect(response.body).to.have.property('last_name','Tiwari')
        expect(response.body).to.have.property('emailid','rt@abc')
        expect(response.body).to.have.property('phone',2500)
        expect(response.body).to.have.property('city','phagwara')
        expect(response.body).to.have.property('state','jalandhar')
        expect(response.body).to.have.property('country','india')
        expect(response.body).to.have.property('password','rahulsecure')
    })
})

Cypress.Commands.add('updatebyid', (id,first_name,last_name) => {
    let test = Cypress.env('test')
    var token = 'bearer ' +test
    const userId=id
    cy.log("user id is: "+userId)
    cy.request({
        method: 'PATCH',
        url:  `localhost:3000/users/`+userId,
        headers: {
            authorization : token,
        },
        body:{
            id:id,
            first_name:first_name,
            last_name:last_name
        }
        
    }).as('updatebyiduserdata').then((response)=>{
        var value = response.body.length
        cy.log("Value "+value);
        expect(response.status).to.eq(200)
        
    })
})

