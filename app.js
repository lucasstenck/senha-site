
let senha = 'senhasite';
let tentativa1 =  prompt ('Digite a senha para entrar no site')
let tentativas;

if (tentativa1 == senha){
    alert ('Acesso Liberado')
}else {
    while (tentativa1 != senha) {
        if (tentativas != senha){
            tentativas =  prompt ('Senha incorreta, tente novamente')
        } else{
            alert ('Acesso Liberado')
            break;
        }
}
}
