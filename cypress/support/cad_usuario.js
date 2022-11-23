import user from '../support/usuario'

class User{
    novo_usuario(){
        var cadastro_usuario = user.cadastro_usuario();

        cy.get('input[id="user_name"]').type(cadastro_usuario.nome)
        cy.get('input[id="user_lastname"]').type(cadastro_usuario.sobrenome)
        cy.get('input[id="user_email"]').type(cadastro_usuario.email)
        cy.get('input[id="user_address"]').type(cadastro_usuario.endereco)
        cy.get('input[id="user_university"]').type(cadastro_usuario.universidade)
        cy.get('input[id="user_profile"]').type(cadastro_usuario.profissao)
        cy.get('input[id="user_gender"]').type(cadastro_usuario.genero)
        cy.get('input[id="user_age"]').type(cadastro_usuario.idade)
        cy.get('.actions > input').click()
        cy.get('p[id="notice"]').should('have.text', 'Usuário Criado com sucesso')
    }
    
    dados_incompletos(){
        var cadastro_usuario = user.cadastro_usuario();
        cy.get('input[id="user_name"]').type(cadastro_usuario.nome)
        cy.get('input[id="user_lastname"]').type(cadastro_usuario.sobrenome)
        cy.get('.actions > input').click()
    }
}

export default User;



