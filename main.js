
function priceCheck() {

  if(typeof timer !== "undefined"){
    clearTimeout(timer);

  }

  if (window.performance) {
  console.info("window.performance work's fine on this browser");
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

        var mc = mkcap.replace(".", '');
        // console.log(mc);
        mc = mc.replace('B', '');
        mc = mc.replace('$', '');
        mc = parseInt(mc);

        var v = vol.replace(',', '');
        v = v.replace('$','');
        v = v.replace('M','');
        v = parseFloat(v);

        var c = change;
        c = parseFloat(c);

        if (performance.navigation.type == 1) {
          console.info( "This page is reloaded" );
        } else {
          console.info( "This page is not reloaded");
        }



        f1 = f * .999;
        var pCount = new CountUp('price',f1, f,2,2);
        pCount.start();

        mc1 = mc * .9999;
        var mcCount = new CountUp('mkcap',mc1, mc,0,2);
        mcCount.start();

        v1 = v * .9999;
        var vCount = new CountUp('vol',v1, v,2,2);
        vCount.start();

        c1 = c * .9999;
        var cCount = new CountUp('change',0, c,2,2);
        cCount.start();

        // document.getElementById('mkcap').innerHTML = mkcap;
        // document.getElementById('vol').innerHTML = vol;
        // document.getElementById('change').innerHTML = change + "%";
        // document.getElementById('change').innerHTML = 'Change: '+ change;
        // var c = new CountUp('price',0,price);
        // c.start()




    })
    // .then(p => {
    //   f1 = f * .9;
    //   console.log(f1);
    //   var c = new CountUp('price',f1, f,2,2);
    //   c.start()
    //
    //
    // })


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

        var mc = mkcap.replace(".", '');
        // console.log(mc);
        mc = mc.replace('B', '');
        mc = mc.replace('$', '');
        mc = parseInt(mc);

        var v = vol.replace(',', '');
        v = v.replace('$','');
        v = v.replace('M','');
        v = parseFloat(v);

        f1 = f * .99;
        var pCount = new CountUp('price',f1, f,2,2);
        pCount.start();

        mc1 = mc * .99;
        var mcCount = new CountUp('mkcap',mc1, mc,0,2);
        mcCount.start();

        v1 = v * .99;
        var vCount = new CountUp('vol',v1, v,2,2);
        vCount.start();

        var c = change;
        c = parseFloat(c);

        c1 = c * .9;
        var cCount = new CountUp('change',0, c,2,2);
        cCount.start();



        // var c = new CountUp('price',0, f,2,2);
        // c.start()
        // document.getElementById('price').innerHTML = price;
        // document.getElementById('mkcap').innerHTML = mkcap;
        // document.getElementById('vol').innerHTML = vol;
        document.getElementById('change').innerHTML = change + "%";


        console.log(p);


    })
    // .then(p => {
    //   f1 = f * .9;
    //   var c = new CountUp('price',f1, f,2,2);
    //   c.start()
    //
    // })






  }
     timer = setTimeout(priceCheck, 10000);

};

priceCheck();
