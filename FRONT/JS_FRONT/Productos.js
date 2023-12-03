const {crearApp}= Vue
CrearApp({
    datos(){
        regreso{
            url:"http://deporcenter.pythonanywhere.com/productos",
            productos:[],
           
        }
    },
    métodos:{
        getProductos(url){
            buscar(url)
            .entonces(Respuesta=> Respuesta.json())
            .entonces(datos=>{esta.productos= datos})
 consola.log(datos)
            .atrapar(err=>{
 consola.error(err)
            })
        }
    }, 
    montado() {
        esta.getProductos(esta.url)

    },  
    
}).monte("#app")
