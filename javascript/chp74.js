function Family(first, second, third, fourth, fifth) {
    this.first = first,
    this.second =second,
    this.third = third,
    this.fourth = fourth,
    this.fifth = fifth
}
 Family.prototype.surname = "baig"
 var BaigFamily = new Family("Sufiyan", "Hasan", "Anus", "Minhaj", "Mariyam");

 console.log(BaigFamily.surname);