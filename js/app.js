document.getElementById("search").addEventListener("click", news_get);
        function news_get(){
            var first = document.getElementById('first');
            first.innerHTML="";
            var search_data = document.forms["myForm"]["search-data"].value;
            //var news_channel = document.forms["myForm"]["news-channel"].value;
            var a=[];
          for(i=0;i<8;i++){
           if(document.getElementById("id"+i).checked){
          a.push(document.getElementById("id"+i).value);
          }
          }
          console.log(a);
          a.forEach((Array1)=>{
              console.log(Array1)
          })
            console.log(search_data);
          //  console.log(news_channel);
            if(search_data === '' || a == ''){
                 alert("please  select the channel and enter the data before search");
            }else{
             a.forEach((Array_channel)=>{
                fetch(`https://newsapi.org/v2/everything?q=${search_data}&sources=${Array_channel}&apiKey=3449fa02267b40518f1422b315334332`)
                .then((res)=>{
                    return res.json();
                }).then((data)=>{
                    if(data.articles == ""){
                        let head = document.getElementById('first');
                        head.innerHTML=`<center><h3>NO data is present on this search of <b>${search_data}</b>on this <b>${Array_channel}</b> </h3></center>`;
                    }else if(data.status === "error"){
                        let block=document.createElement('p')
                        let head = document.getElementById('new-pages');
                        p.innerHTML="NO data is present on this search ";

                    }else{
                    for(let j = 0; j < data.totalResults; j++) {

                        if(data.articles[j].urlToImage === null || data.articles[j].urlToImage == "undefined"){
                            console.log(data.articles[j].urlToImage);
                           continue;
                        }else{
                            let markup =`
                            <div class="row" >
                            <div class="col-md-3">
                            <img src="${data.articles[j].urlToImage}" width="200px" height="150px" >
                            </div>
                            <div class="col-md-9">
                            <h3>${data.articles[j].source.name}</h3>
                            <a href="${data.articles[j].url}"><h3>${data.articles[j].title}</h3> </a>
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
                    }
                }).catch((e)=>{
                    console.log(e);
                })
             })
       }
    }



    var buttons=document.getElementsByClassName("button");

    var buttonsCount = buttons.length;
    for (let i = 0; i < buttonsCount; i += 1) {
        buttons[i].addEventListener("click", function() {
            var id= this.id;
            if(id=="sports"||id=="technology"||id=="entertainment"){
                getnav(this.id)
            }else{
                gettext(this.id);
            }

           var first = document.getElementById('first');
             first.innerHTML="";
        });

    }
         function gettext(news) {
            fetch(`https://newsapi.org/v2/top-headlines?sources=${news}&apiKey=3449fa02267b40518f1422b315334332`)
        .then((res)=>{
            return res.json()
        }).then((data)=>{
           // head.replaceChild(block,head)
                 for (let j = 0; j < data.totalResults; j++) {
                    if(data.articles[j].urlToImage === null || data.articles[j].urlToImage == "undefined"){
                       continue
                    }
                    let markup =`
                    <div class="row " >
                    <div class="col-md-3">
                    <img src="${data.articles[j].urlToImage}" width="200px" height="150px" >
                    </div>
                    <div class="col-md-9">

                    <a href="${data.articles[j].url}"><h3>${data.articles[j].title}</h3> </a>
                       <p>${data.articles[j].description}</p>
                  </div>
                </div>`;
                let block= document.createElement('div');
                block.setAttribute('id','head-news');
                block.innerHTML=markup;
                const head =document.getElementById('first');
                head.appendChild(block);

        }

        }).catch((e)=>{
            console.log(e);
        })
       }


            function getnav(news) {
               fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${news}&apiKey=3449fa02267b40518f1422b315334332`)
           .then((res)=>{
               return res.json()
           }).then((data)=>{
              // head.replaceChild(block,head)
                    for (let j = 0; j < data.totalResults; j++) {
                       if(data.articles[j].urlToImage === null || data.articles[j].urlToImage == "{{pageImage}}" ||data.articles[j].urlToImage == "undefined"){
                          continue
                       }
                       let markup =`
                       <div class="row ">
                       <div class="col-md-3">
                       <img src="${data.articles[j].urlToImage}" width="200px" height="150px" >
                       </div>
                       <div class="col-md-9">

                       <a href="${data.articles[j].url}"><h3>${data.articles[j].title}</h3> </a>
                          <p>${data.articles[j].description}</p>
                     </div>
                   </div>`;
                   let block= document.createElement('div');
                   block.setAttribute('id','head-news');
                   block.innerHTML=markup;
                   const head =document.getElementById('first');
                   head.appendChild(block);

           }
           }).catch((e)=>{
            console.log(e);
        })
          }

