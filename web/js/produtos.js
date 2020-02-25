function listar() {
    $.ajax({
        url: "http://localhost:8080/ProjetoREST/api/produtos",
        type: 'GET',
        dataType: 'JSON',
        success: function (result) {
            console.log(result);
            let produtos = result;
            let linha = "";

            for (var i = 0; i < produtos.length; i++) {
                linha += "<tr>";
                linha += "<td>" + produtos[i].id + "</td>";
                linha += "<td>" + produtos[i].descricao + "</td>";
                linha += "<td>" + produtos[i].quantidade + "</td>";
                linha += "<td>" + produtos[i].preco + "</td>";
                linha += "<td> ";
                linha += " <a href=\"javascript: abrirModalEdicao( " + produtos[i].id + " )\"> Editar </a> ";
                linha += " <a href=\"javascript: excluir( " + produtos[i].id + " )\"> Excluir </a> ";
                linha += "</td>";
                linha += "</tr>";
            }
            $("#produtos tbody").html(linha);
        },
        error: function (result) {
            console.log(result);
        }
    });
}

function abrirModalCadastro( ) {
    
    $("#campoId").val("");
    $("#linhaCampoId").hide();
    $("#campoDescricao").val("");
    $("#campoPreco").val("");
    $("#campoQuantidade").val("");
    
    $(".modal-title").html("Cadastrar Novo Produto");
    $('#myModal').modal();    
}

function cadastrar( ) {

    var id = "";
    var descricao = "";
    var preco = "";
    var quantidade = "";
    
    //chamar funcao cadastrar pelo AJAX
    alert("Cadastrar");
    
    //fecha modal e atualiza tabela
    $('#myModal').modal("hide");
    listar();
}

function abrirModalEdicao( id ) {
    
    $(".modal-title").html("Editar Produto " + id);
    
    //chamar funcao consultar por Id pelo AJAX
    $("#campoId").val(id);
    $("#linhaCampoId").show();
    $("#campoDescricao").val(id);
    $("#campoPreco").val(id);
    $("#campoQuantidade").val(id);
    
    $('#myModal').modal();
}

function editar() {
    
    var id = $("#campoId").val();
    var descricao = $("#campoDescricao").val();
    var preco = $("#campoPreco").val();
    var quantidade = $("#campoQuantidade").val();
    
    //chamar funcao editar pelo AJAX
    alert("Editar " + id + " " + descricao + " " + preco + " " + quantidade);
    
    //fecha modal e atualiza tabela
    $('#myModal').modal("hide");
    listar();
}

function salvar() {
    
    if (!$("#campoId").val()) {
        cadastrar();
    } else {
        editar();
    } 
}

function excluir( id ) {
    
    //chamar ajax para excluir
    alert("Excluir " + id);
    listar();
}

//Aciona assim que a página carregar
$(document).ready(function () {
    listar();
});