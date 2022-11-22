/// <reference types="Cypress" />
import user from '../support/usuario'
import  User from '../support/cad_usuario'

describe('Formulário', () => {
 
  var novo_user = new User();

  beforeEach(function(){
    cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
    cy.title('be.equal', 'Automação com Batista')
    cy.get('h5[class="orange-text center "]').should('have.text', 'Bem vindo ao Site de Automação do Batista.')
  })

  it('Cadastrar usuário', () => {
    cy.get('a[class="collapsible-header "]')
    .should('have.text', 'Formulário')
    .click()
    cy.get('.active > .collapsible-body > ul > :nth-child(1) > a')
    .should('have.text', 'Criar Usuários')
    .click()
    cy.get('h5[class="center"]').should('have.text', 'Novo Usuário!!')
    novo_user.novo_usuario()
  })
})