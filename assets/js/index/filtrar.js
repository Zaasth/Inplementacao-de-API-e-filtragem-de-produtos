fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then((json)=> {
        const ul = document.querySelector("#ListaProdutos");
        json.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <a href="#">
                    <img width="50px" src="${item.image}" alt="">
                    <span class="item-name">${item.title}</span>
                </a>
            `;
            ul.appendChild(li)
        })
        const ul2 = document.querySelector("#ListaProdutos2");
        json.forEach((item) => {
            const li = document.createElement("li");
            li.innerHTML = `
                    <span class="item-name">${item.title}</span>
            `;
            ul2.appendChild(li)
        })
        
    });


    function filtrar(){
        let input, 
            filter, 
            ul, 
            li, 
            a, 
            i, 
            span,
            textValue, 
            count= 0;

        //Pegar inputs
        input = document.querySelector(".input_busca");
        ul = document.querySelector("#ListaProdutos");

        //Filtro
        filter = input.value.toUpperCase();
        
        //PEGAR TODAS AS LI
        li = ul.querySelectorAll("li");
        //Percorrer todos os LI
        for (i = 0; i < li.length; i++) {

            a = li[i].querySelectorAll("a")[0] //nesse 0 eu to falando que eu quero pregar o primeiro link da li, msm se só tiver 1 precisa disto;
            textValue = a.innerText;

            if(textValue.toUpperCase().indexOf(filter) > -1){
                li[i].style.display = "";
                count++
                span = li[i].querySelector("item-name");
            } else {
                li[i].style.display = "none";
            }          
        }

        if(count == 0 ){
            ul.style.display = "none";
        }
        else {
            ul.style.display = "block";
        }
        
    }