const express = require('express');
const app = express();
const port = 3000;
const path = require('path');


// Dessa forma a gente 'hospeda' o nosso arquivo 'index.html' e consequentemente, o 'site', usando essa função abaixo \\
app.use(express.static("C:\\Users\\Quitti\\Desktop\\Documentos e Estudos\\Estudo Kindle Javascript HTML e CSS\\ProjetoAprendizagem"));

app.listen(port, () => {
    console.log(`Servidor está ligado e funcionando na porta: ${port}`);
});