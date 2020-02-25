/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    $.ajax({
        url : "api/produtos",
        type: 'GET',
        dataType: 'JSON',
        success: function(result) {
            console.log(result);
            
            let produtos = result;
            
            let linha = "";
            for(let i =0 ; i< produtos.length; i++){
                linha +="<tr>";
                linha +="<td>" + produtos[i].id + "</td>";
                linha +="<td>" + produtos[i].descricao + "</td>";
                linha +="<td>" + produtos[i].quantidade + "</td>";
                linha +="<td>" + produtos[i].preco + "</td>";
                linha +="<td><a href=\"\" onClick=\"executaExcluir("+produtos[i].id+");return false;\">Excluir</a></td>";
                linha +="<td><a href=\"javascript: abrirModalEdicao( " + produtos[i].id + " )\"> Editar</a></td>";
                linha +="</tr>";
            }
            $("#produtos tbody").append(linha);
        },
        error : function(result){
            console.log(result);
        }
    });
    
});

