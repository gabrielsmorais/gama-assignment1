class Form {
    
    constructor(name, email, workPlace) {
        
        this._name = name;
        this._email = email;
        this._workPlace = workPlace;
        Object.freeze(this);
    }

    get name() {
        
        return this._name;
    }
    
    get email() {
        
        return this._email;
    }
    
    get workPlace() {
        
        return this._workPlace;
    }
}