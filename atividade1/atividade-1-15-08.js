// FUnção para a checagem de tier de usuário
function checkTier(userName, userTier) {
    if (userTier.toLowerCase() === "admin") {
        console.log(`Usuário adminstrador ${userName} entrou!`);
    } else {console.log(`Usuário ${userName} de categoria normal entrou.`);}    
}
console.log(checkTier("caio", "admin"));

