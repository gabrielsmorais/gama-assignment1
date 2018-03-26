class SuccessView extends Views {
    
    constructor(elemento) {
       super(elemento);
    }
    
   template(model) {
       
       return model.texto ? `<p style="color:white;">${model.texto}</p>` : '<p></p>';
   }
}