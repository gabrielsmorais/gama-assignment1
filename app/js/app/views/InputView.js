//INPUT VIEW MAKER
class InputView extends Views {
    
    constructor(elemento) {
        super(elemento);
    }
    
    template(model) {
        
        return `
        <table style="color:white;font-family: 'Megrim', cursive; text-align: center;">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Empresa</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.map(n => `
                    
                    <tr style="color:white; font-family: 'Open Sans', sans-serif;">
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
