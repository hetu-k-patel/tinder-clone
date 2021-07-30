import mongoos from 'mongoose';

const cardSchema = mongoos.Schema({
    name: String,
    imgUrl: String
});

export default mongoos.model('Cards', cardSchema);