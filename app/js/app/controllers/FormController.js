class FormController {
    
    constructor() {

        //FORM MAKER
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputEmail = $('#email');
        this._inputCompany = $('#company');
        this._formList = new FormList();
        //VIEW MAKER
        this._inputView = new InputView($('#inputView'));
        this._formList.getForm(data => this._inputView.update(data));
        //MESSAGE MAKER
        this._mensagem = new Message();
        this._successView = new SuccessView($('#successView'));
        this._successView.update(this._mensagem);
        
    }
    
    add(event) {
        
        //ADD FORM
        event.preventDefault();
        this._formList.add(this._createForm());
        this._formList.getForm(data => this._inputView.update(data));
        //ADD MESSAGE
        this._mensagem.texto = 'Cadastro Efetuado com Sucesso';
        this._successView.update(this._mensagem);
        this._clearForm();   

    }
    
    _createForm() {
        
        //CREATE FORM
        return new Form(
            this._inputName.value,
            this._inputEmail.value,
            this._inputCompany.value);
    }
    
    _clearForm() {
     
        //CLEAR FORM
        this._inputName.value = '';
        this._inputEmail.value = '';
        this._inputCompany.value = '';
        this._inputName.focus();   
    }

}