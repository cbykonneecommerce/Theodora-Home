
$(document).ready(function () {



    if (dataLayer[0].pageDepartment === "Custom Made") {
        $(".customize-tab").show()
    }


    var itemIndex = 0;
    var attachmentName = 'Iniciais';
    var minhasIniciais = "";
    var content = {
        Iniciais: minhasIniciais
    };

    var item = {
        id: null,
        quantity: 1,
        seller: '1'
    };




    $("#customizador").change(function () {
        minhasIniciais = $(this).val();


    });

    $("#confirm-custom").click(function () {

        console.log("cliquei")
        vtexjs.catalog.getCurrentProductWithVariations().done(function (product) {
            console.log(product, 'getcurrent');
            item.id = product.skus[0].sku;
            console.log(item)

            vtexjs.checkout.addToCart([item], null, 1)
                .done(function (orderForm) {
                    //alert('Item adicionado!');
                    console.log(orderForm, 'orderform');
                    console.log("adicionado ao carrinho")

                    itemIndex = orderForm.items.length - 1;
                    content.Iniciais = minhasIniciais;
                    if (minhasIniciais.length == 2) {
                        console.log("dados validados");
                        console.log(itemIndex, attachmentName, content);
                        vtexjs.checkout.addItemAttachment(itemIndex, attachmentName, content)
                            .done(function (orderForm) {
                                // Anexo incluído ao item!
                                console.log(orderForm, 'produto feito');
                                alert("Produto customizado e adicionado ao carrinho!")
                            });
                    } else {
                        alert("Digite suas iniciais para customizar o produto!")
                    }


                });



        });


    });


});

