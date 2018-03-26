//SUCCESS MESSAGE VIEW MAKER
class SuccessView extends Views {
    
    constructor(elemento) {
       super(elemento);
    }
    
   template(model) {
       
       return model.texto ? `<p style="color:#C7F262;font-family: 'Megrim', cursive; text-align: center;">
       ${model.texto}</p>` : '<p></p>';
   }
}