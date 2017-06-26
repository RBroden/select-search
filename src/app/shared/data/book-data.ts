import { Book } from '../models/books';

export const bookData = ( () => {
    let tempBooks: Book[] = [];
    for (let i = 0; i < 10; i++) {
        let random = Math.floor(Math.random() * 4);
        let tempName = ( (randomNumber: number) => {
            switch (randomNumber) {
                case 0:
                    return 'fname' + i;
                case 1:
                    return 'fnbame' + i;
                case 2:
                    return 'mname' + i;
                case 3:
                    return 'mnxame' + i;
            }
        })(random);
        tempBooks.push({
            id: i,
            name: tempName
        });
    }
    return tempBooks;
})();
