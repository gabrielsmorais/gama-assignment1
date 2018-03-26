//FORM CONSTRUCTOR AND METHODS
class Form {
    
    constructor(name, email, company) {
        
        this._name = name;
        this._email = email;
        this._company = company;
        Object.freeze(this);
    }

    get name() {
        
        return this._name;
    }
    
    get email() {
        
        return this._email;
    }
    
    get company() {
        
        return this._company;
    }
}