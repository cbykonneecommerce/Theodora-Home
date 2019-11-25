let emailval = window.location.hash.split("#")[1]
$("#cl_email").val(emailval);



$("#email-input").change(function(){
    let oldURL =  $("#emailcatcher").attr('href');
   let emailvalue = $(this).val();
   let newURL = oldURL + "#" + emailvalue;
   $("#emailcatcher").attr("href", newURL)
 });




$("#commit").click(()=>{
    event.preventDefault(); 
    console.log($("#cl_email").val())
    let dados = {
            Email : $("#cl_email").val(),
            Nome : $("#cl_first_name").val()
    }

    fetch("https://theodorahome.myvtex.com/api/dataentities/NL/documents", {
        method: 'PATCH',
               headers: {
                "Content-Type": "application/json"
                  },
        body: JSON.stringify(dados)
    })
    .then((res) => {return res})
    .then(result =>{
        console.log(result);
    })
    .catch(err => console.log(err))
})