
/// <reference types="Cypress" />

import LoginElements from '../elements/LoginElements'
const loginElements = new LoginElements
const url = Cypress.config("baseUrl")

class LoginPage {
    // Acessa o site que será testado
    acessarSite() {
        cy.visit(url)
    }

    // Clica no botão que acessa a página de login do site
    preencherdadoslogin() {
        cy.get('input[type="email"]').type('seuemail@gmal.com')
        cy.get('input[type="password"]').type('suasenha')
    }
  
    // Fazer login na página
    clicarbotaologin() {
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    }
}

export default LoginPage;