//importando express
const express =require("express");
//instanciando o express
const app = express();
//importando o body-parser 
const bodyParser = require('body-parser');
//importando criaTabela
const faleconosco = require('./database/criaTabela');

//adicionando o ejs ao express
app.set("view engine","ejs");

//informando ao express onde estão os arquivos estáticos
app.use(express.static("public"))
//incluido  o body-parser ao express
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//database
const connection = require('./database/database');
connection
    .authenticate()
    .then(()=>{
        console.log('Conexão feita com sucesso ao banco de dados!')
    })
    .catch((msgErro)=>{
        console.log(msgErro)
    })
    
//iniciando um servidor
app.listen(4001,(req,res)=>{
    console.log("Servido inicado!")

})


//instanciando a rotas das páginas
app.get("/",(req,res)=>{
    res.render("index")
});
app.get("/specs",(req,res)=>{
    res.render("specs")
});
app.get("/fotos",(req,res)=>{
    res.render("fotos")
});
app.get("/multimidia",(req,res)=>{
    res.render("multimidia")
});
app.get("/fale-conosco",(req,res)=>{
   
    res.render("fale-conosco")
});
app.post('/salvar-fale-conosco',(req,res)=>{
    var nome = req.body.tNome;
    //var senha = req.body.tsenha;
    var email = req.body.temail;
   
    faleconosco.create({
        nome: nome,
        
        email: email
   }).then(()=>{
        res.send({
            faleconosco.findAll({}).then((faleconosco)=>{
                console.log(faleconosco)}
            })
        )
      })
})
