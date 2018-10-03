// // Utilziar Expreses para prodduccion: basado en:
// // https://medium.com/@hellotunmbi/how-to-deploy-angular-application-to-heroku-1d56e09c5147

const express = require('express');
const app = express();


// // HTTPS only middleware
// const forceSSL = function() {
//     return function(req, res, next) {
//         if (req.headers['x-forwarded-proto'] !== 'https') {
//             return res.redirect(
//                 ['https://', req.get('Host'), req.url].join('')
//             );
//         }
//         next();
//     }
// };
// app.use(forceSSL());

const PORT = process.env.PORT || 9995

const isHeroku =  (PORT != 9995)

console.log('[' + isHeroku + '] Simple Chart AppA listening ' + __dirname + '/dist')

app.use(express.static(__dirname + '/dist'));

app.listen(PORT, function() {
    console.log('Angular app running!  ');
});

console.log('Simple Chart AppA listening on port ' + (isHeroku?'':'http://localhost:') + PORT + ' - sobre /dist');
