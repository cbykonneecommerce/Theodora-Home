$("fieldset").css({"margin-bottom": "1.5em", "margin-top": "1.5em"})
let selectorNameBrand = $("fieldset.refino-marca h5").text();
$(`<a  data-toggle="collapse" href="#${selectorNameBrand}" role="button" aria-expanded="false" aria-controls="collapseExample">${selectorNameBrand}<img src="/arquivos/arrowdown.png"/ style="float:right;margin-top: 6px;width: 12px;margin-bottom: 11px;"></a>`).insertAfter("fieldset.refino-marca h5");
$("fieldset.refino-marca h5").remove();

$("fieldset.refino-marca div").addClass( "collapse" ).attr('id', `${selectorNameBrand}`);



let selectorNameCategory = $("fieldset.Móveis h5").text();
$(`<a  data-toggle="collapse" href="#${selectorNameCategory}" role="button" aria-expanded="false" aria-controls="collapseExample">${selectorNameCategory}<img src="/arquivos/arrowdown.png"/ style="float:right;margin-top: 6px;width: 12px;margin-bottom: 11px;"></a>`).insertAfter("fieldset.Móveis h5");
$("fieldset.Móveis h5").remove();

$("fieldset.Móveis div").addClass( "collapse" ).attr('id', `${selectorNameCategory}`);



let selectorNameMaterial = $("fieldset.Geral h5").text();
$(`<a  data-toggle="collapse" href="#${selectorNameMaterial}" role="button" aria-expanded="false" aria-controls="collapseExample">${selectorNameMaterial}<img src="/arquivos/arrowdown.png"/ style="float:right;margin-top: 6px;width: 12px;margin-bottom: 11px;"></a>`).insertAfter("fieldset.Geral h5");
$("fieldset.Geral h5").remove();

$("fieldset.Geral div").addClass( "collapse" ).attr('id', `${selectorNameMaterial}`);




let selectorNameAroma = $("fieldset.refino.Aromas h5").text();
$(`<a  data-toggle="collapse" href="#${selectorNameAroma}" role="button" aria-expanded="false" aria-controls="collapseExample">${selectorNameAroma}<img src="/arquivos/arrowdown.png"/ style="float:right;margin-top: 6px;width: 12px;margin-bottom: 11px;"></a>`).insertAfter("fieldset.refino.Aromas h5");
$("fieldset.refino.Aromas h5").remove();

$("fieldset.refino.Aromas div").addClass( "collapse" ).attr('id', `${selectorNameAroma}`);


/*
let selectorNamefrag = $("fieldset.refino.even.Aromas h5").text();
$(`<a  data-toggle="collapse" href="#${selectorNamefrag}" role="button" aria-expanded="false" aria-controls="collapseExample">${selectorNamefrag}<img src="/arquivos/arrowdown.png"/ style="float:right;margin-top: 6px;width: 12px;margin-bottom: 11px;"></a>`).insertAfter("fieldset.refino.even.Aromas h5");
$("fieldset.refino.even.Aromas h5").remove();

$("fieldset.refino.even.Aromas div").addClass( "collapse" ).attr('id', `${selectorNamefrag}`);
*/


const mq = window.matchMedia("(max-width: 1000px)");
if (mq.matches) {
    $(".navigation-tabs").hide();
    $( "<div class='visible-xs visible-sm filtro-btn-mobile'><h4>FILTROS</h4></div>" ).insertBefore( ".navigation-tabs" );
    $(".filtro-btn-mobile").click(()=>{
        $( ".navigation-tabs" ).toggle( "slow" )
    })
} 