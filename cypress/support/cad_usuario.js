import user from '../support/usuario'

class User{
    novo_usuario(){
        var cadastro_usuario = user.cadastro_usuario();

        cy.get('input[id="user_name"]').type(cadastro_usuario.nome)
    }
}

export default User;