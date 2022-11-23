/// <reference types="Cypress" />
import user from '../support/usuario'
import  User from '../support/cad_usuario'

describe('Formulário', () => {
 
  var novo_user = new User();

  /*beforeEach(function(){
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

  it('Cadastrar usuários sem inserir os campos obrigatórios', () =>{
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

  })*/

})

describe('Busca de elementos', () =>{
  beforeEach(function(){
    cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
    cy.title('be.equal', 'Automação com Batista')
    cy.get('h5[class="orange-text center "]').should('have.text', 'Bem vindo ao Site de Automação do Batista.')
  })
  it('Links', () => {
    cy.get(':nth-child(2) > .collapsible-header')
    .should('have.text', 'Busca de elementos')
    .click()
    cy.get('.active > .collapsible-body > ul > :nth-child(3) > a')
    .should('have.text', 'Botões')
    .click()
    cy.get('a[id="teste"]').click()
    cy.get('div[id="div1"]').should('be.visible')
    cy.get('#div1 > h5').should('be.visible')
    cy.get('i[class="material-icons"]').click()
    cy.get('#div2 > h5').should('be.visible') 
  })
  it('Dropdown e Select', () => {
    cy.get(':nth-child(2) > .collapsible-header')
    .should('have.text', 'Busca de elementos')
    .click()
    cy.get('.collapsible-body > ul > :nth-child(5) > a')
    .should('have.text', 'Dropdown e Select')
    .click()
    //cy.get('div[class="input-field col s12 m6"] > select[data-select-id="1332490a-87aa-f1b0-7186-9281a635b1c2"]')
    cy.get(':nth-child(4) > .select-wrapper > input.select-dropdown')
    .click()
    .select('Homem')
    
  })
})

describe('Login', () => {
  beforeEach(function(){
    cy.visit('https://automacaocombatista.herokuapp.com/treinamento/home')
    cy.title('be.equal', 'Automação com Batista')
    cy.get('h5[class="orange-text center "]').should('have.text', 'Bem vindo ao Site de Automação do Batista.')
  })

})