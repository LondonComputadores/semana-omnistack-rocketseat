const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin_user:admin2018@cluster0-lteks.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333); 

//Métodos HTTP: GET, POST, PUT, DELETE;
//Tipos de Parâmetros= 
//1- Query Params: request.query (filtros, ordenação, paginação,...);
//2- Route Params: request.params (identificar um recurso na alteração ou remoção);
//3- Body: request.body (Dados para criação ou alteração de um registro);
//MongoDB Atlas (Não-Relacional Online/Cloud DB)

/*app.get('/users', (request, response) => {
    console.log(request.query);
    return response.json({ message: 'Hello OmniStack' });
}); 
*/

