const express = require('express');
const app = express();
const port = 3000;


const electronics = [
    { title: 'Smartphone XYZ', description: 'Um smartphone com ótimas funcionalidades e câmera de alta resolução.' },
    { title: 'Laptop ABC', description: 'Laptop potente para jogos e trabalho com excelente duração de bateria.' },
    { title: 'Smartwatch 123', description: 'Relógio inteligente com monitoramento de saúde e notificações.' },
    { title: 'Tablet DEF', description: 'Tablet com tela grande e desempenho rápido para multimídia e produtividade.' },
    { title: 'Fone de Ouvido GHI', description: 'Fone de ouvido com cancelamento de ruído e som de alta qualidade.' }
];

app.use(express.static('public'));


app.get('/search', (req, res) => {
    const query = req.query.q.toLowerCase();
    const results = electronics.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
    );
    res.json({ results });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
