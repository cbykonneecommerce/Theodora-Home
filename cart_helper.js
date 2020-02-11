
function formatReal( int )
{
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
}

setTimeout(()=>{
    $("#mini-cart-admake .mini-cart-item .detalhes").append(`
    <button class="btn btn-menos" style="color: #919FC1;background-color: transparent;font-size: 30px;outline-style: none;
        box-shadow: none;">-</button>
            <input type = "number" class="qtd-field" value = "1" style = "color: #919FC1;width: 39px;margin: 11px;"/>
            <button class="btn btn-mais" style = "color: #919FC1;background-color: transparent;font-size: 26px;outline-style: none;
        box-shadow: none;">+</button>
    `);

    $(".qtd-field").prop("disabled", true);
 vtexjs.checkout.getOrderForm()
.then(function(orderForm) {

    for(let i = 0; i < orderForm.items.length; i++) {
        $($(".qtd-field")[i]).val(orderForm.items[i].quantity)
    }

    $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
 //formatReal(orderForm.value)
});

$(".btn-menos").on('click',  function(event) {
    var rowindex = $(this).closest('.mini-cart-item').index();
    console.log('rowindex', rowindex);
    let me =  $(".qtd-field")[rowindex];
   let value = parseInt($($(".qtd-field")[rowindex]).val())
   console.log(me, value);

   if (value > 1) {
       console.log("entrei")
       value -=  1;
       console.log(value)
   // $(me).val(value)
    $($(".qtd-field")[rowindex]).val(value)

    vtexjs.checkout.getOrderForm()
  .then(function(orderForm) {
    var itemIndex = 0;
    var item = orderForm.items[rowindex];
    var updateItem = {
      index: rowindex,
      quantity:  value
    };
    return vtexjs.checkout.updateItems([updateItem], null, false);
  })
  .done(function(orderForm) {
    //alert('Items atualizados!');
    console.log(orderForm);
    $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
  });
}
});



$(".btn-mais").on('click',  function(event) {
    var rowindex = $(this).closest('.mini-cart-item').index();
    console.log('rowindex', rowindex);
    let me =  $(".qtd-field")[rowindex];
   let value = parseInt($($(".qtd-field")[rowindex]).val())
   console.log(me, value);

  
       value +=  1;
       console.log(value)
   // $(me).val(value)
    $($(".qtd-field")[rowindex]).val(value)

    vtexjs.checkout.getOrderForm()
  .then(function(orderForm) {
    var itemIndex = 0;
    var item = orderForm.items[rowindex];
    var updateItem = {
      index: rowindex,
      quantity:  value
    };
    return vtexjs.checkout.updateItems([updateItem], null, false);
  })
  .done(function(orderForm) {
    //alert('Items atualizados!');
    console.log(orderForm);
    $("#mini-cart-admake-total").text("R$ " + formatReal(orderForm.value));
  });

});

},1000)
