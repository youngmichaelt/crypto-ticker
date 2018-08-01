


function priceCheck() {

  if(typeof timer !== "undefined"){
    clearTimeout(timer);
  }

  var choice = document.querySelector('#choice').value;
  if (choice == "bitcoin"){

    var url1 = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD';


    fetch(url1)
    .then(response => response.json())
    .then(data => {
        // data = data.data.quotes.USD.price;

        // data = data.USD;
        price = data.DISPLAY.BTC.USD.PRICE;
        mkcap = data.DISPLAY.BTC.USD.MKTCAP;

        change = data.DISPLAY.BTC.USD.CHANGEPCT24HOUR;
        vol = data.DISPLAY.BTC.USD.TOTALVOLUME24HTO;
        var p = price.replace(",", '');
        p = p.replace("$", '');
        f = parseFloat(p);



        // var c = new CountUp('price',0, f,2,2);
        // c.start()
        // document.getElementById('price').innerHTML = price;
        document.getElementById('mkcap').innerHTML = mkcap;
        document.getElementById('vol').innerHTML = vol;
        document.getElementById('change').innerHTML = change + "%";
        // document.getElementById('change').innerHTML = 'Change: '+ change;
        // var c = new CountUp('price',0,price);
        // c.start()




    }).then(p => {
      f1 = f * .9;
      console.log(f1);
      var c = new CountUp('price',f1, f,2,2);
      c.start()


    })


         // setTimeout(priceCheck, 10000);


    // var data = JSON.parse(response.getContentText());
    // return data[0]
    // console.log(data[0])
  } else if (choice == "ethereum"){

    var url1 = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD';


    fetch(url1)
    .then(response => response.json())
    .then(data => {
        // data = data.data.quotes.USD.price;

        // data = data.USD;
        price = data.DISPLAY.ETH.USD.PRICE;
        mkcap = data.DISPLAY.ETH.USD.MKTCAP;

        change = data.DISPLAY.ETH.USD.CHANGEPCT24HOUR;
        vol = data.DISPLAY.ETH.USD.TOTALVOLUME24HTO;
        var p = price.replace(",", '');
        p = p.replace("$", '');
        f = parseFloat(p);
        



        // var c = new CountUp('price',0, f,2,2);
        // c.start()
        // document.getElementById('price').innerHTML = price;
        document.getElementById('mkcap').innerHTML = mkcap;
        document.getElementById('vol').innerHTML = vol;
        document.getElementById('change').innerHTML = change + "%";


        console.log(p);


    }).then(p => {
      f1 = f * .9;
      var c = new CountUp('price',f1, f,2,2);
      c.start()

    })






  }
     // timer = setTimeout(priceCheck, 10000);

}








priceCheck();
