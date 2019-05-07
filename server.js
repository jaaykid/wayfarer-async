const express = require ('express'); 
const cors = require('cors');
const helmet = require('helmet')
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const PORT = process.env.PORT || 4000 


// ------------------------ Middleware ----------------------//

//Protect headers
app.use(helmet());

// Express session config
app.use(session({
    secret: 'iron man dies',
    resave: false, 
    saveUninitialized: false, 
})); 

// BodyParser
app.use(bodyParser.urlencoded({extended: false,}));
app.use(bodyParser.json());


// Cors 
const corsOptions = {
    origin: ['http//:localhost:3000'],
    credentials: true, 
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))


// -------------------- HTML Endpoint ----------------------//

app.get('/', (req, res) => res.send('<h1>Wayfarer api</h1>'));






// --------------------- Start Server --------------------// 

app.listen(PORT, () => console.log(`Server started on Port${PORT}`))