const isCreditCardNumberValid = (cardNumber) => {
  var sum = 0;
  var only = 0;
    // Girilen veride - işareti temizlenir.
          if(cardNumber[4]=='-' && cardNumber[9]=='-' && cardNumber[14]=='-'){
              cardNumber = cardNumber.slice(0,4) + cardNumber.slice(5,9) + cardNumber.slice(10,14) + cardNumber.slice(15,19);
            }

    // Uzunluğu ve harf kontolü yapılır.
    if(cardNumber.length == 16 && cardNumber.toUpperCase() == cardNumber && cardNumber.toLowerCase()  == cardNumber){
      //veri sayı formatına çevrilir ve her bir basamak toplanır.
      cardNumber = +cardNumber;
      for(var j = 0;j<16;j++){
        sum = sum + (+cardNumber.toString()[j]);
      }
    }
    // toplam, çift mi ve her bir basamak aynı mı sorgusu yapılır.
    only = +cardNumber.toString()[0]
    if(sum>=16 && cardNumber%2==0 && sum/only != 16){
      return true;
    }
    return false;
}

console.log(isCreditCardNumberValid('6666-6666-6666-1666'));
