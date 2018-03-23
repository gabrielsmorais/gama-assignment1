class Form {
    
    constructor(name, email, Company) {
        
        this._name = name;
        this._email = email;
        this._Company = Company;
        Object.freeze(this);
    }

    get name() {
        
        return this._name;
    }
    
    get email() {
        
        return this._email;
    }
    
    get Company() {
        
        return this._Company;
    }
}