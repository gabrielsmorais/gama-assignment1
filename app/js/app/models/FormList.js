class FormList {
    
    constructor() {
        
        this._form = [];
    }
    
    add(form) {
        
        this._form.push(form);
    }
    
    get form() {
        
        return [].concat(this._form);
    }
}