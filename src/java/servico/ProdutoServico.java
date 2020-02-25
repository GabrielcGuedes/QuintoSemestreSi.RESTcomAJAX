/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package servico;

import Classes.Produto;
import Util.ProdutoDao;
import com.google.gson.Gson;
import java.sql.SQLException;
import java.util.List;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import static javax.ws.rs.HttpMethod.DELETE;
import static javax.ws.rs.HttpMethod.POST;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author alunocmc
 */
@Path("produtos")
public class ProdutoServico {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of ProdutoServico
     */
    public ProdutoServico() {
    }

    /**
     * Retrieves representation of an instance of servico.ProdutoServico
     * @return an instance of java.lang.String
     */
    @GET
    @Path("")
    @Produces(MediaType.APPLICATION_JSON)
    public String listarTodos() throws SQLException, ClassNotFoundException {
        ProdutoDao dao = new ProdutoDao();
        List<Produto> lista = dao.consultarTodos();
        return new Gson().toJson(lista);
    }
    
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String consultarPorId(@PathParam("id") int id) throws SQLException, ClassNotFoundException {
        Produto produto = new Produto();
        produto.setId(id);
        
        ProdutoDao dao = new ProdutoDao();
        produto = dao.consultarPorId(produto);
        return new Gson().toJson(produto);
    }

    /**
     * PUT method for updating or creating an instance of ProdutoServico
     * @param content representation for the resource
     */
    @POST
    @Path("")
    @Consumes(MediaType.APPLICATION_JSON)
    public String cadastrar(String produtoJson) throws ClassNotFoundException, SQLException {
        Produto produto = new Gson().fromJson(produtoJson, Produto.class);
        
        ProdutoDao dao = new ProdutoDao();
        produto = dao.cadastrar(produto);
        
        return new Gson().toJson(produto);
    }
    
    @PUT
    @Path("")
    @Consumes(MediaType.APPLICATION_JSON)
    public String alterar(String produtoJson) throws ClassNotFoundException, SQLException {
        Produto produto = new Gson().fromJson(produtoJson, Produto.class);
        
        ProdutoDao dao = new ProdutoDao();
        produto = dao.editar(produto);
        return new Gson().toJson(produto);
    }
    
    @DELETE
    @Path("/{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    public String excluir(@PathParam("id") int id) throws ClassNotFoundException, SQLException {
        Produto produto = new Produto();
        produto.setId(id);
        
        ProdutoDao dao = new ProdutoDao();
        produto = dao.excluir(produto);
        return new Gson().toJson(produto);
    }
}
