/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function editar() {
    
    var id = $("#campoId").val();
    var descricao = $("#campoDescricao").val();
    var preco = $("#campoPreco").val();
    var quantidade = $("#campoQuantidade").val();
    var produto = {id: id, descricao: descricao, preco: preco, quantidade : quantidade};
    //chamar funcao editar pelo AJAX
    
    $.ajax({
        url: "api/produtos",
        type: 'PUT',
        dataType: 'JSON',
        
        data: JSON.stringify(produto),
          
        
        success: function (result) {
            console.log(result);
           
            
        },
        error: function (result) {
            console.log(result);
        }
    });
    
    alert("Editar " + id + " " + descricao + " " + preco + " " + quantidade);
    
    //fecha modal e atualiza tabela
    $('#myModal').modal("hide");
    listar();
}

function cadastrar( ) {

    
    var descricao = $("#campoDescricao").val();
    var preco = $("#campoPreco").val();
    var quantidade = $("#campoQuantidade").val();
    var produto = { "descricao": descricao, "preco": preco, "quantidade" : quantidade};
    
    //chamar funcao cadastrar pelo AJAX
    
     $.ajax({
        url: "api/produtos",
        type: 'POST',
        dataType: 'JSON',
        
        data: JSON.stringify(produto),
          
        
        success: function (result) {
            console.log(result);
           
            
        },
        error: function (result) {
            console.log(result);
        }
    });
    
    alert("Cadastrar");
    
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




function listar() {
    $.ajax({
        url: "api/produtos",
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