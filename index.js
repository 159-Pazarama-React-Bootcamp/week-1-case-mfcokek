const isCreditCardNumberValid = () => {

  var date = document.getElementById("tarih").value;
  var currentTıme = new Date;

  var cardNumber = document.getElementById("numb").value;

  var sum = 0;
  var only = 0;
    // Girilen veride - işareti temizlenir.
    if(cardNumber[4]=='-' && cardNumber[9]=='-' && cardNumber[14]=='-'){
      cardNumber = cardNumber.slice(0,4) + cardNumber.slice(5,9) + cardNumber.slice(10,14) + cardNumber.slice(15);
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
    only = +cardNumber.toString()[1];
    if(sum>=16 && cardNumber%2==0 && sum/only != 16 ){

      
      if(currentTıme.getFullYear() < +date.slice(0,4)){
        return document.getElementById("demo").innerHTML = true;
      }
      else if(currentTıme.getFullYear() == date.slice(0,4)){
        if(currentTıme.getMonth() < date.slice(5,7)){
          return document.getElementById("demo").innerHTML = true;
        }
      }
    }
      return document.getElementById("demo").innerHTML = false;
}


