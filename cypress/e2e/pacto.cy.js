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

  it.only('Cadastrar usuários sem inserir os campos obrigatórios', () =>{
    cy.get('a[class="collapsible-header "]')
    .should('have.text', 'Formulário')
    .click()
    cy.get('.active > .collapsible-body > ul > :nth-child(1) > a')
    .should('have.text', 'Criar Usuários')
    .click()
    cy.get('h5[class="center"]').should('have.text', 'Novo Usuário!!')
    novo_user.dados_incompletos()
  })

  it('Verifica se tem algo na lista de usuário', () => {
    cy.get('a[class="collapsible-header "]')
    .should('have.text', 'Formulário')
    .click()
    cy.get('.active > .collapsible-body > ul > :nth-child(2) > a')
    .should('have.text', 'Lista de Usuários')
    .click()
    cy.get('h5[class="center"]').should('have.text', 'Lista de Usuários!!')
    cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text', 'AAnelyse')

  })

})