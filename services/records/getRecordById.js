import recordData from '../../data/records.json' assert { type: "json" };
import NotFoundError from '../../errors/NotFoundError.js';

const getBookById = (id) => {
    const record = recordData.books.find(record => record.id === id);

    if (!record) {
        throw new NotFoundError('Record', id);
    }

    return recordData.records.find(record => record.id === id);
}

export default getBookById;
