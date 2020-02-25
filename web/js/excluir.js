/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function executaExcluir(id) {
     $.ajax({
        url : "api/produtos/" + id,
        type: 'DELETE',
        dataType: 'JSON',
        success: function(result) {
            console.log(result);
            
            window.location.reload(true);
            
            alert("Produto excluido!");
        },
        error : function(result){
            console.log(result);
        }
    });
        
    }