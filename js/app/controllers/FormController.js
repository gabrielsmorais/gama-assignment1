class FormController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputEmail = $('#email');
        this._inputCompany = $('#company');
        this._formList = new FormList();
        
        this._inputView = new InputView($('#inputView'));
        this._inputView.update(this._formList);
        
        this._mensagem = new Message();
        this._successView = new SuccessView($('#successView'));
        this._successView.update(this._mensagem);
        
    }
    
    add(event) {
        
        event.preventDefault();
        this._formList.add(this._createForm());
        this._inputView.update(this._formList);
        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._successView.update(this._mensagem);
        console.log('Form Created');
        console.log(this._formList._form);
        this._clearForm();   
    }
    
    _createForm() {
        
        return new Form(
            this._inputName.value,
            this._inputEmail.value,
            this._inputCompany.value);
    }
    
    _clearForm() {
     
        this._inputName.value = '';
        this._inputEmail.value = '';
        this._inputCompany.value = '';
        this._inputName.focus();   
    }
}