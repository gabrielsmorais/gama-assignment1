class SuccessView extends Views {
    
    constructor(elemento) {
       super(elemento);
    }
    
   template(model) {
       
       return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
   }
}