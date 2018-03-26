class InputView extends Views {
    
    constructor(elemento) {
        super(elemento);
    }
    
    template(model) {
        
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.form.map(n => `
                    
                    <tr>
                        <td>${n.name}</td>
                        <td>${n.email}</td>
                        <td>${n.Company}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>
            
        </table>
        `;
    }
}
