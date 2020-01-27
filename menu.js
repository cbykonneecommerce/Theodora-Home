$(".depto-rouparia").hover(()=>{
    
    $(".depto-rouparia#rouparia").show()
}, 
()=>{
    $(".depto-rouparia#rouparia").hide()
})

$(".depto-tableware").hover(()=>{
    
    $(".depto-tableware#tableware").show()
}, 
()=>{
    $(".depto-tableware#tableware").hide()
})

$(".depto-decor").hover(()=>{
    
    $(".depto-decor#decor").show()
}, 
()=>{
    $(".depto-decor#decor").hide()
})

$(".depto-moveis").hover(()=>{
    
    $(".depto-moveis#moveis").show()
}, 
()=>{
    $(".depto-moveis#moveis").hide()
})
$(".depto-presentes").hover(()=>{
    
    $(".depto-presentes#presentes").show()
}, 
()=>{
    $(".depto-presentes#presentes").hide()
})
$(".depto-aromas").hover(()=>{
    
    $(".depto-aromas#aromas").show()
}, 
()=>{
    $(".depto-aromas#aromas").hide()
})
$(".depto-baby").hover(()=>{
    
    $(".depto-baby#baby").show()
}, 
()=>{
    $(".depto-baby#baby").hide()
})

$(".depto-custom").hover(()=>{
    
    $(".depto-custom#custom").show()
}, 
()=>{
    $(".depto-custom#custom").hide()
})

$(".depto-marcas").hover(()=>{
    
    $(".depto-marcas#marcas").show()
}, 
()=>{
    $(".depto-marcas#marcas").hide()
})



//  Controle para menu mobile 


$(".dropdown-btn#rouparia").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#rouparia i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#rouparia").slideDown()
}, () => {
    $(".dropdown-container#rouparia").hide()
    $(".dropdown-btn#rouparia i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#tableware").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#tableware i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#tableware").slideDown()
}, () => {
    $(".dropdown-container#tableware").hide()
    $(".dropdown-btn#tableware i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#decor").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#decor i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#decor").slideDown()
}, () => {
    $(".dropdown-container#decor").hide()
    $(".dropdown-btn#decor i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#moveis").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#moveis i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#moveis").slideDown()
}, () => {
    $(".dropdown-container#moveis").hide()
    $(".dropdown-btn#moveis i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#presentes").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#presentes i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#presentes").slideDown()
}, () => {
    $(".dropdown-container#presentes").hide()
    $(".dropdown-btn#presentes i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#aromas").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#aromas i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#aromas").slideDown()
}, () => {
    $(".dropdown-container#aromas").hide()
    $(".dropdown-btn#aromas i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#baby").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#baby i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#baby").slideDown()
}, () => {
    $(".dropdown-container#baby").hide()
    $(".dropdown-btn#baby i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#custom").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#moveis i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#custom").slideDown()
}, () => {
    $(".dropdown-container#custom").hide()
    $(".dropdown-btn#custom i").attr('class', 'fa fa-angle-down');
})


$(".dropdown-btn#marcas").toggle(() => {
    $(".dropdown-container").hide();
    $(".dropdown-btn#marcas i").attr('class', 'fa fa-angle-up');
    $(".dropdown-container#marcas").slideDown()
}, () => {
    $(".dropdown-container#marcas").hide()
    $(".dropdown-btn#marcas i").attr('class', 'fa fa-angle-down');
})

