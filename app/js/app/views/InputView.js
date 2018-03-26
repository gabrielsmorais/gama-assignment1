class InputView extends Views {
    
    constructor(elemento) {
        super(elemento);
    }
    
    template(model) {
        
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Empresa</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.form.map(n => `
                    
                    <tr>
                        <td>${n.name}</td>
                        <td>${n.email}</td>
                        <td>${n.company}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>
            
        </table>
        `;
    }
}
