function Book(name, author, publisher, edition, price, chapters, DiscountMonth) {
    this.name = name,
    this.author = author,
    this.publisher = publisher,
    this.edition = edition,
    this.price = price,
    this.chapters = chapters
    this.DiscountMonth = DiscountMonth
    this.Discount = function(PercentIfDisc) {
        var bestPrice = this.price;
        var CurDate = new Date();
        var CurMon = CurDate.getMonth();
        for (var i = 0; i < this.DiscountMonth.length; i++) {
            if (this.DiscountMonth[i] === CurMon) {
                bestPrice = this.price * PercentIfDisc;
                // console.log(bestPrice);
                break;
            }
        }
        return bestPrice; 
    };
}


var Math = new Book("MathsWise", "Sufiyan", "Oxford", 2.0, 500, 10, [8, 9, 10]);
// console.log(Math);
var Discount = Math.Discount(0.70);
console.log("Discounted Price:", Discount);

// var English = new Book("Broadway English", "Sufiyan", "Oxford", 5.0, 800, 15, [8, 9, 10]);
// console.log(English);
