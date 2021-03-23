class  Book {
    constructor(title) {
        this._title = "The Little Prince";
   }
   // getter
   get title() {
       return this._title;
   }
   // setter
   set title(petitPrince) {
       this._title = "Le Petit Prince"
   }
}
const littlePrince = new Book("Le Petit Prince");
console.log(littlePrince.title);
littlePrince.title = "Le Petit Prince"
console.log(littlePrince.title)
module.exports = Book;