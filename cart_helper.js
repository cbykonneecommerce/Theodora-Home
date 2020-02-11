

setTimeout(()=>{
    $("#mini-cart-admake .mini-cart-item .detalhes").append(`
    <button class="btn btn-menos" style="color: #919FC1;background-color: transparent;font-size: 30px;outline-style: none;
        box-shadow: none;">-</button>
            <input type = "number" class="qtd-field" value = "1" style = "color: #919FC1;width: 39px;margin: 11px;"/>
            <button class="btn btn-mais" style = "color: #919FC1;background-color: transparent;font-size: 26px;outline-style: none;
        box-shadow: none;">+</button>
    `);

    let value = $(".qtd-field").val();
$(".btn-mais").click(() => {
    let value = $(".qtd-field").val();
$(".qtd-field").val(value++);

vtexjs.checkout.getOrderForm()
  .then(function(orderForm) {
    var itemIndex = 0;
    var item = orderForm.items[itemIndex];
    var updateItem = {
      index: itemIndex,
      quantity: $(".qtd-field").val()
    };
    return vtexjs.checkout.updateItems([updateItem], null, false);
  })
  .done(function(orderForm) {
    alert('Items atualizados!');
    console.log(orderForm);
  });
});



$(".btn-menos").click(() => {
    
   let index = $('.btn-menos').index(this); 
   let me =  $('.btn-menos')[index];
   let value = $($(".qtd-field")[index]).val()
if ($(".qtd-field").val() > 1) {
    $($(".qtd-field")[index]).val(value--)
}

vtexjs.checkout.getOrderForm()
  .then(function(orderForm) {
    var itemIndex = 0;
    var item = orderForm.items[itemIndex];
    var updateItem = {
      index: itemIndex,
      quantity:  $($(".qtd-field")[index]).val()
    };
    return vtexjs.checkout.updateItems([updateItem], null, false);
  })
  .done(function(orderForm) {
    alert('Items atualizados!');
    console.log(orderForm);
  });

})
},1000)

