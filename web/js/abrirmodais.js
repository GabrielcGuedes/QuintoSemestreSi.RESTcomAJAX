/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function abrirModalCadastro( ) {
    
    $("#campoId").val("");
    $("#linhaCampoId").hide();
    $("#campoDescricao").val("");
    $("#campoPreco").val("");
    $("#campoQuantidade").val("");
    
    $(".modal-title").html("Cadastrar Novo Produto");
    $('#myModal').modal();    
    
}
    function abrirModalEdicao( id ) {
    
    $(".modal-title").html("Editar Produto " + id);
    
    //chamar funcao consultar por Id pelo AJAX
    let prodDescricao;
    $(document).ready(function(){
    $.ajax({
        url : "api/produtos" + id,
        type: 'GET',
        dataType: 'JSON',
        
        
        success: function(result) {
            console.log(result);
            let produto=result;
            
            
            
            produto.descricao;
            prodDescricao=produto.quantidade;
            produto.preco;
          
           
            
            
        },
        error : function(result){
            console.log(result);
        }
    });
    
});
    
    $("#campoId").val(id);
    $("#linhaCampoId").show();
    $("#campoDescricao").val(prodDescricao);
    $("#campoPreco").val(id);
    $("#campoQuantidade").val(id);
    
    $('#myModal').modal();
}