
     document.getElementById("search").addEventListener("click", news_get);
        function news_get(){
            var search_data = document.forms["myForm"]["search-data"].value;
            var news_channel = document.forms["myForm"]["news-channel"].value;
            console.log(search_data);
            console.log(news_channel);
            fetch(`https://newsapi.org/v2/everything?q=${search_data}&sources=${news_channel}&apiKey=3449fa02267b40518f1422b315334332`)
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            if(data.articles[0]==""){
                let head = document.getElementById('first');
                let description = document.createElement('p');
                description.innerHTML="NO data is present on this search";
                head.appendChild(description);
            }else{
            for(let j = 0; j < data.totalResults; j++) {
                let markup =`
                <div class="row">
                <div class="col-md-3">
                <img src="${data.articles[j].urlToImage}" width="150" height="150px" >
                </div>
                <div class="col-md-9">
                <a href=""   ><h3>${data.articles[j].title}</h3> </a>
                   <p>${data.articles[j].description}</p>
              </div>
            </div>`;
            let block= document.createElement('div');
            block.setAttribute('id','head-news');
            block.innerHTML=markup;
            const head =document.getElementById('first');
            head.appendChild(block);
              
            } 
            }
        })
       }


    var buttons=document.getElementsByClassName("button")
    var buttonsCount = buttons.length;
    for (let i = 0; i <= buttonsCount; i += 1) {
        buttons[i].onclick = function(e) {
        
           gettext(this.id);
       
        };
    }
 //document.getElementsByClassName("button").addEventListener("click", gettext;
        function gettext(news) {
              
            fetch(`https://newsapi.org/v2/top-headlines?sources=${news}&apiKey=3449fa02267b40518f1422b315334332`)
        .then((res)=>{
            return res.json()
        }).then((data)=>{
           
                 for (let j = 0; j < data.totalResults; j++) {
                   
                    let markup =`
                    <div class="row">
                    <div class="col-md-3">
                    <img src="${data.articles[j].urlToImage}" width="150" height="150px" >
                    </div>
                    <div class="col-md-9">
                    <a href=""   ><h3>${data.articles[j].title}</h3> </a>
                       <p>${data.articles[j].description}</p>
                  </div>
                </div>`;
                let block= document.createElement('div');
                block.setAttribute('id','head-news');
                block.innerHTML=markup;
                const head =document.getElementById('first');
                head.appendChild(block);  
            }
            
        })
       }