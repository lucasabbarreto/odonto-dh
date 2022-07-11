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
let formCriarUsuario = document.getElementById('form-criar-usuario');
let formAlterarUsuario = document.getElementById('form-alterar-usuario');
let formApagarUsuario = document.getElementById('form-apagar-usuario');
let formNivelAcesso = document.getElementById('form-nivel-acesso');
let seletorUsuarioNivelAcesso = document.getElementById('seletor-usuario-nivel-acesso');
let usuarioNivelAcesso = document.getElementById('usuario-nivel-acesso');
let seletorNivelAcesso = document.getElementById('seletor-nivel-acesso');
let formCriarProcedimento = document.getElementById('form-criar-procedimento');
let formAlterarProcedimento = document.getElementById('form-alterar-procedimento');
let formApagarProcedimento = document.getElementById('form-apagar-procedimento');
let acoesProcedimentos = document.getElementById('acoes-procedimentos');
let seletorAcaoProcedimentos = document.getElementById('seletor-acao-procedimentos');

window.addEventListener('load', function () {
    agendamentos.style.background = "#399ca98c";
    agendamentos.style.color = "white";
    procedimentos.style.background = "white";
    procedimentos.style.color = "#399ca98c";
    usuarios.style.background = "white";
    usuarios.style.color = "#399ca98c";
    acoesAgendamentos.value = ""
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
    acoesAgendamentos.value = "";
    acoesUsuarios.value = "";
    acoesProcedimentos.value = "";
    selecionarAcaoAgendamentos.style.display = "block";
    formAgendarAdmin.style.display = "none";
    formAlterarAdmin.style.display = "none";
    formCancelarAdmin.style.display = "none";

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
    acoesAgendamentos.value = "";
    acoesUsuarios.value = "";
    acoesProcedimentos.value = "";
    seletorAcaoUsuarios.style.display = "block";
    formCriarUsuario.style.display = "none";
    formAlterarUsuario.style.display = "none";
    formApagarUsuario.style.display = "none";
    formNivelAcesso.style.display = "none";
});

acoesUsuarios.addEventListener('change', function () {
    if (acoesUsuarios.value === "criar") {
        formCriarUsuario.style.display = "flex";
        formAlterarUsuario.style.display = "none";
        formApagarUsuario.style.display = "none"
        formNivelAcesso.style.display = "none";
    }
    if (acoesUsuarios.value === "alterar") {
        formCriarUsuario.style.display = "none";
        formAlterarUsuario.style.display = "flex";
        formApagarUsuario.style.display = "none"
        formNivelAcesso.style.display = "none";
    }
    if (acoesUsuarios.value === "apagar") {
        formCriarUsuario.style.display = "none";
        formAlterarUsuario.style.display = "none";
        formApagarUsuario.style.display = "flex";
        formNivelAcesso.style.display = "none";
    }
    if (acoesUsuarios.value === "acesso") {
        formCriarUsuario.style.display = "none";
        formAlterarUsuario.style.display = "none";
        formApagarUsuario.style.display = "none";
        formNivelAcesso.style.display = "flex";
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
    acoesAgendamentos.value = "";
    acoesUsuarios.value = "";
    acoesProcedimentos.value = "";
    seletorAcaoProcedimentos.style.display="block";
    formCriarProcedimento.style.display = "none";
    formAlterarProcedimento.style.display = "none";
    formApagarProcedimento.style.display = "none";
})

acoesProcedimentos.addEventListener('change', function () {
    if (this.value === "criar") {
        formCriarProcedimento.style.display = 'block';
        formAlterarProcedimento.style.display = "none";
        formApagarProcedimento.style.display = "none";
    }
    if (this.value === "alterar") {
        formCriarProcedimento.style.display = 'none';
        formAlterarProcedimento.style.display = "block";
        formApagarProcedimento.style.display = "none";

    }
    if (this.value === "apagar") {
        formCriarProcedimento.style.display = 'none';
        formAlterarProcedimento.style.display = "none";
        formApagarProcedimento.style.display = "block";

    }
})

