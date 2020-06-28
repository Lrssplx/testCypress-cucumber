import LoginPage from '../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesso o site Real World", () => {
    loginPage.acessarSite();
})

When("acesso a pagina de login", () => {
    loginPage.preencherdadoslogin();
})

Then("devo fazer o login na página", () => {
    loginPage.clicarbotaologin();
})