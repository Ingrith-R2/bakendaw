
// get - para obtener 
// post -para registrar
// Put - para actualizar
// Delete - Eliminar


//creacion de un web server express
//invocar la libreria express
const express = require('express')
//crear un instancia, esta es una clase
const app = express() 
const port = 3000
//COMMONJS  
// const {engine} = require ('express-handlebars')
// app.use(express.json())//manda la informacion al json
// //utilizar un motor de plantillas 
// app.engine('handlebars', engine());
// //Extension de las paginas
// app.set('view engine', 'handlebars');
// //ubicacion del directorio viw
// app.set('views', './src/views');

// app.get('/hamburgesa/vegana', (req, res) => {
//     res.render('home');
// });

// app.get('/hamburgesa/contactos', (req, res) => {
//     res.render('contactos');
// });


//EL ORDEN SIEMPRE IMPORTA POR ESO LA RUTA DE PAGINA NO ENCONTRADA VA AL FINAL 
//-----------------------ROUTE
//como crear una ruta, req es la ruta, y lo que quiero enviar es respnse o res
// app.get('/',(req,res) =>{
//     res.send("Bienvenidos")
// })
// app.get('/dashboard',(req,res) =>{
//     res.send("Dashboard principal")
// })
// //manejar rutas que no esten en la pagina 

// app.use((req,res) =>{
//     res.send("404 - Not Found")
// })

//----------------------REquest

//Body
//mandar informacion en formato json 
// app.use(express.json())
// app.post ('/register',(req,res)=>{
//     const{pedido,solicitado}=req.body //desetructuracion de javascript
//     res.send(`El pedido de ${pedido} es realizado por ${solicitado}`)

// })

//Param
//tipo sera la variable que recepte la informacion
// app.get('/pedido/:tipo',(req,res)=>{
//     res.send(`El tipo de hamburgesa es ${req.params.tipo}`)
// })


//query
// app.use(express.json())

// app.get('/search',(req,res)=>{
//     if (req.query.tipo=="sencilla")
//     {
//         res.send("Hamburgesa sencilla")
//     }else{
//         res.send("otro tipo de Hamburgesa")
//     }
//  })

//--------------Response
//texto
// app.use(express.json())
// app.get('/hamburgesa/simple',(req,res)=>{
//     res.send("gamburgesa simple")
// })

// //imagen
// app.get('/hamburgesa/doble',(req,res)=>{
//     res.sendFile('./doble.jpg',{
//         root:__dirname // el objeto
//     })
// })
// //documento
// app.get('/hamburgesa/triple',(req,res)=>{
//     res.sendFile('./triple.docx',{
//         root:__dirname // el objeto
//     })
// })
// //json
// app.get('/hamburgesa/mixta',(req,res)=>{
//     res.status(200).json({
//         "tipo": "Mixta",
//         "extra": "no"
//     })
// })
//iniciar el servidor en el puesto 3000

//crar un midelware



app.get('/',(req,res)=> {
    res.send("Loading page")
})
app.get('/dashboard',(req,res)=> {
    res.send("Bienvenido usuario ")
})

//MIDDELWRE
//proteje la informacion 
/*app.use(express.json())
app.use((req,res,next) => { //desestructuracion
    const{email,pass} = req.body
    if(email == "ingrithrevelo@gmail.com" && pass=="12345" ){ 
        next()
    }else{
        res.send("usuario no registrado")
    }
})

app.get('/pedido',(req,res)=> {
    res.send(`Bienvenido -${req.body.email}--- listo para tomar su orden`)
})*/

app.listen(3000)


