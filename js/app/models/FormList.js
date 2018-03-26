//FIREBASE INFO
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
    
    //FORM MAKER
    add(form) {

        //FIREBASE START
            if (firebaseOn == false) {
                firebase.initializeApp(config);
            };
            var database = firebase.database();
            var ref = database.ref('forms');
            firebaseOn = true;
    
            ref.push(form);
        
        this._form.push(form);
    }
    
    //GET FORMS FROM FIREBASE
    getForm(getData) {
                //FIREBASE START
                if (firebaseOn == false) {
                    firebase.initializeApp(config);
                };
                var database = firebase.database();
                var ref = database.ref('forms');
                firebaseOn = true;

                ref.on('value', data => this.gotData(getData, data), this.errData)

    }

    //GET DATA FROM FIREBASE
    gotData(getData, data) {
        var forms = data.val();
        var keys = Object.keys(forms);


        var list = [];
        for (let index = 0; index < keys.length; index++) {
            var k = keys [index];
            var name = forms[k]._name;
            var email = forms[k]._email;
            var company = forms[k]._company;           
            console.log(name, email, company); 
            list.push(new Form(name, email, company))
        }

        getData(list);

    }

    errData(err) {
        console.log('Error!');
        console.log(err);
    }
}