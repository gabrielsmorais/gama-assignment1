class FormController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        this._inputName = $('#name');
        this._inputEmail = $('#email');
        this._inputCompany = $('#company');
        this._formList = new FormList();
        
        // this._negociacoesView = new NegociacoesView($('#negociacoesView'));
        // this._negociacoesView.update(this._listaNegociacoes);
        
        // this._mensagem = new Mensagem();
        // this._mensagemView = new MensagemView($('#mensagemView'));
        // this._mensagemView.update(this._mensagem);
        
    }
    
    add(event) {
        
        event.preventDefault();
        this._formList.add(this._createForm());
        // this._negociacoesView.update(this._listaNegociacoes);
        
        // this._mensagem.texto = 'Negociação adicionada com sucesso';
        // this._mensagemView.update(this._mensagem);
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