var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Todo = new Schema({
    user_id    : String,
    content    : String,
    updated_at : Date
});

mongoose.model( 'Todo', Todo ); // table name = model name + s ex. Todos
mongoose.connect( 'mongodb://localhost:27017/test' );  // database name