let agendamentos = document.getElementById('agendamentos');
let usuarios = document.getElementById('usuarios');
let procedimentos = document.getElementById('procedimentos');
let campoAgendamentos = document.getElementById('campo-agendamentos');
let campoUsuarios = document.getElementById('campo-usuarios');
let campoProcedimentos = document.getElementById('campo-procedimentos');
let formAgendarAdmin = document.getElementById('form-agendar-admin');
let formAlterarAdmin = document.getElementById('form-alterar-agendamento-admin');
let formCancelarAdmin = document.getElementById('form-cancelar-agendamento-admin');
let selecionarAcaoAgendamentos = document.getElementById('selecionar-acao-agendamentos');
let acoesAgendamentos = document.getElementById('acoes-agendamentos');
let seletorAcaoUsuarios = document.getElementById('seletor-acao-usuarios');
let acoesUsuarios = document.getElementById('acoes-usuarios');
let formNovoUsuario = document.getElementById('form-novo-usuario');
let nivelAcesso = document.getElementById('nivel-acesso');
let seletorUsuarioNivelAcesso = document.getElementById('seletor-usuario-nivel-acesso');
let usuarioNivelAcesso = document.getElementById('usuario-nivel-acesso');
let seletorNivelAcesso = document.getElementById('seletor-nivel-acesso');
let formCriarProcedimento = document.getElementById('form-criar-procedimento');
let formAlterarProcedimento = document.getElementById('form-alterar-procedimento');
let formApagarProcedimento = document.getElementById('form-apagar-procedimento');
let acoesProcedimentos = document.getElementById('acoes-procedimentos');

window.addEventListener('load', function () {
    agendamentos.style.background = "#399ca98c";
    agendamentos.style.color = "white";
    procedimentos.style.background = "white";
    procedimentos.style.color = "#399ca98c";
    usuarios.style.background = "white";
    usuarios.style.color = "#399ca98c";
    campoAgendamentos.style.display = "block";
    campoUsuarios.style.display = "none";
    campoProcedimentos.style.display = "none";
    formAlterarAdmin.style.display = "none";
    formCancelarAdmin.style.display = "none";
});

agendamentos.addEventListener('click', function () {
    agendamentos.style.background = "#399ca98c";
    agendamentos.style.color = "white";
    procedimentos.style.background = "white";
    procedimentos.style.color = "#399ca98c";
    usuarios.style.background = "white";
    usuarios.style.color = "#399ca98c";
    campoAgendamentos.style.display = "block";
    campoUsuarios.style.display = "none";
    campoProcedimentos.style.display = "none";
    selecionarAcaoAgendamentos.style.display = "block";
    formAgendarAdmin.style.display = "none";

});

acoesAgendamentos.addEventListener('change', function () {
    if (acoesAgendamentos.value === "agendar") {
        formAgendarAdmin.style.display = "block";
        formAlterarAdmin.style.display = "none";
        formCancelarAdmin.style.display = "none";
    }
    if (acoesAgendamentos.value === "alterar") {
        formAgendarAdmin.style.display = "none";
        formAlterarAdmin.style.display = "block";
        formCancelarAdmin.style.display = "none";
    }
    if (acoesAgendamentos.value === "cancelar") {
        formAgendarAdmin.style.display = "none";
        formAlterarAdmin.style.display = "none";
        formCancelarAdmin.style.display = "block";
    }
})



usuarios.addEventListener('click', function () {
    usuarios.style.background = "#399ca98c";
    usuarios.style.color = "white";
    agendamentos.style.background = "white";
    agendamentos.style.color = "#399ca98c";
    procedimentos.style.background = "white";
    procedimentos.style.color = "#399ca98c";
    campoAgendamentos.style.display = "none";
    campoUsuarios.style.display = "block";
    campoProcedimentos.style.display = "none";
    seletorAcaoUsuarios.style.display = "block";
    formNovoUsuario.style.display ="none";
    nivelAcesso.style.display ="none";
});

acoesUsuarios.addEventListener('change', function () {
    if (acoesUsuarios.value === "criar") {
        nivelAcesso.style.display ="none";
        usuarioNivelAcesso.value = "";
    }
    if (acoesUsuarios.value === "alterar") {
        nivelAcesso.style.display ="none";
        usuarioNivelAcesso.value = "";
    }
    if (acoesUsuarios.value === "apagar") {
        nivelAcesso.style.display ="none";
        usuarioNivelAcesso.value = "";
    }
    if (acoesUsuarios.value === "acesso") {
        nivelAcesso.style.display ="block";
        seletorNivelAcesso.style.display= "none";       
    }
})

usuarioNivelAcesso.addEventListener('change', function(){
    if(usuarioNivelAcesso.value === ""){
        seletorNivelAcesso.style.display= "none";
    }
    if(usuarioNivelAcesso.value !== ""){
        seletorNivelAcesso.style.display= "block";
    }
})


procedimentos.addEventListener('click', function () {
    procedimentos.style.background = "#399ca98c";
    procedimentos.style.color = "white";
    usuarios.style.background = "white";
    usuarios.style.color = "#399ca98c";
    agendamentos.style.background = "white";
    agendamentos.style.color = "#399ca98c";
    campoAgendamentos.style.display = "none";
    campoUsuarios.style.display = "none";
    campoProcedimentos.style.display = "block";
})

acoesProcedimentos.addEventListener('change', function(){
    if(this.value === "criar"){
        formCriarProcedimento.style.display ='block';
        formAlterarProcedimento.style.display= "none";
        formApagarProcedimento.style.display="none";
    }
    if(this.value === "alterar"){
        formCriarProcedimento.style.display ='none';
        formAlterarProcedimento.style.display= "block";
        formApagarProcedimento.style.display="none";
        
    }
    if(this.value === "apagar"){
        formCriarProcedimento.style.display ='none';
        formAlterarProcedimento.style.display= "none";
        formApagarProcedimento.style.display="block";
        
    }
})

