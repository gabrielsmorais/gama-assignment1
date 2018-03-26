let firebaseOn = false;
var config = {
    apiKey: "AIzaSyBi6SOnQP3knUCJ5klWXL2ixCdxQQe3IMo",
    authDomain: "gamaassignment1.firebaseapp.com",
    databaseURL: "https://gamaassignment1.firebaseio.com",
    projectId: "gamaassignment1",
    storageBucket: "",
    messagingSenderId: "1055128175578"
};

class FormList {
    
    constructor() {
        
        this._form = [];
    }
    
    add(form) {

        //FIREBASE
            if (firebaseOn == false) {
                firebase.initializeApp(config);
            };
            var database = firebase.database();
            var ref = database.ref('forms');
            firebaseOn = true;
    
            ref.push(form);
        
        this._form.push(form);
    }
    
    get form() {

        //FIREBASE
            if (firebaseOn == false) {
                firebase.initializeApp(config);
            };
            var database = firebase.database();
            var ref = database.ref('forms');
            firebaseOn = true;
            
            ref.on('value', this.gotData, this.errData);


        return [].concat(this._form);
    }

    gotData(data) {
        var forms = data.val();
        var keys = Object.keys(forms);

        for (let index = 0; index < keys.length; index++) {
            var k = keys [index];
            var name = forms[k]._name;
            var email = forms[k]._email;
            var company = forms[k]._company;           
            console.log(name, email, company); 
        }

    }

    errData(err) {
        console.log('Error!');
        console.log(err);
    }
}