import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import createModel from './models';

const adapter = new FileSync('db/db.json');
const db = low(adapter);

db.defaults({ articles: [], authors: [], users: [], settings: [] });

const setup = {
    models: {
        Articles: createModel(db, 'articles'),
        Authors: createModel(db, 'authors'),
        User: createModel(db, 'users'),
        Settings: createModel(db, 'settings'),
    },
    db,
};

export default setup;
