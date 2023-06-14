import app from "./app";
import './database/db.js'

app.listen(app.get('port'))

console.log('corriendo en el puerto ', app.get('port'))