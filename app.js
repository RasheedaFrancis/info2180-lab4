document.addEventListener('DOMContentLoaded' ,function (){
    var searchButton= document.querySelector("button[type=submit]");
    searchButton.addEventListener("click", function (e){
        e.preventDefault();

        fetch("http://localhost/info2180-lab4/superheroes.php")
        .then(response =>{
            return response.text()
        })
        .then(data =>{
            alert(data);

        })
        .catch(error =>{
            alert(error)
        });

    });
});


