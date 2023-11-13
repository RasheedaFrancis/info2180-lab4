document.addEventListener('DOMContentLoaded' ,function (){
    var searchButton= document.querySelector("button[type=submit]");
    var Input = document.querySelector('input[name="hero"]');
    var result= document.getElementById("result");
    searchButton.addEventListener("click", function (e){
        e.preventDefault();

        fetch("http://localhost/info2180-lab4/superheroes.php?query="+ encodeURIComponent(Input.value.trim()), { 
            method:'GET',
            headers:{
                'Content-Type': 'text/plain'
            }
        })

        .then(response =>{
            return response.text()
        })
        .then(data =>{
            result.innerHTML = data;
        })
        .catch(error =>{
           console.error(error)
        });

    });
});


