// Only change code below this line
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
   // Only change code above this line
}
const littlePrince = new Book("Le Petit Prince");
console.log(littlePrince._title);
littlePrince.title = "Le Petit Prince"
console.log(littlePrince._title)
module.exports = Book;