
<<<<<<< HEAD

     document.getElementById("search").addEventListener("click", news_get);
        function news_get(){
            var search_data = document.forms["myForm"]["search-data"].value;
            var news_channel = document.forms["myForm"]["news-channel"].value;
            console.log(search_data);
            console.log(news_channel);
            fetch(`https://newsapi.org/v2/everything?q=${search_data}&sources=${news_channel}&apiKey=3449fa02267b40518f1422b315334332`)
=======
var buttons=document.getElementsByClassName("button")
var buttonsCount = buttons.length;

for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
    // alert(this.id)
    var first = document.getElementById('first');
    first.innerHTML="";
   (function(news){
        fetch(`https://newsapi.org/v2/top-headlines?sources=${news}&apiKey=3449fa02267b40518f1422b315334332`)
>>>>>>> 334a40e0cf3b14a290a6b5ec5adf9173a5473b13
        .then((res)=>{
            return res.json()
        }).then((data)=>{
            for (var i = 0; i < data.totalResults; i++) {

                var block= document.createElement('div');
                var block1= document.createElement('div');
                var block2= document.createElement('div');
                var block3= document.createElement('div');
                block.setAttribute('id','head-news')
                block3.setAttribute('id','clear')
                block2.setAttribute('id','head-img')
                block1.setAttribute('id','head-title-des')

                var title = document.createElement('h3');
                title.setAttribute('id','head-title');

<<<<<<< HEAD


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
                let head =document.getElementById('first');
                head.appendChild(block);  
=======
                var description = document.createElement('p');
                description.setAttribute('id','head-description');

                var anchor = document.createElement('a');
                anchor.setAttribute('id','head-anchor');
                anchor.setAttribute('href',data.articles[i].url);

                var img = document.createElement('img');
                 img.setAttribute('src',data.articles[i].urlToImage);
                 img.setAttribute('width','150px');
                 img.setAttribute('height','140px');
                 img.setAttribute('alt','image not available');

                var head = document.getElementById('first');
                title.innerHTML= data.articles[i].title;
                description.innerHTML= data.articles[i].description;
                block2.appendChild(img);
                anchor.appendChild(title);
                block1.appendChild(anchor);
                block1.appendChild(description);
                block.appendChild(block2);
                block.appendChild(block1);
                block.appendChild(block3);
                head.appendChild(block);

>>>>>>> 334a40e0cf3b14a290a6b5ec5adf9173a5473b13
            }
        })
<<<<<<< HEAD
       }
	   
	   
	   
	   
	   
=======
    })(this.id);
    };
}



    //  document.getElementById("search").addEventListener("click", news_get);
    //     function news_get(){
    //         var search_data = document.forms["myForm"]["search-data"].value;
    //         var news_channel = document.forms["myForm"]["news-channel"].value;
    //         console.log(search_data);
    //         console.log(news_channel);
    //         fetch(`https://newsapi.org/v2/everything?q=${search_data}&sources=${news_channel}&apiKey=3449fa02267b40518f1422b315334332`)
    //     .then((res)=>{
    //         return res.json()
    //     }).then((data)=>{
    //         if(data.articles[0]==""){
    //             let head = document.getElementById('first');
    //             let description = document.createElement('p');
    //             description.innerHTML="NO data is present on this search";
    //             head.appendChild(description);
    //         }else{
    //         for(let j = 0; j < data.totalResults; j++) {
    //             let block= document.createElement('div');
    //             let block1= document.createElement('div');
    //             let block2= document.createElement('div');
    //             let block3= document.createElement('div');
    //             block.setAttribute('id','head-news')
    //             block3.setAttribute('id','clear')
    //             block2.setAttribute('id','head-img')
    //             block1.setAttribute('id','head-title-des')

    //             let title = document.createElement('h3');
    //             title.setAttribute('id','head-title');

    //             let description = document.createElement('p');
    //             description.setAttribute('id','head-description');


    //             let anchor = document.createElement('a');
    //             anchor.setAttribute('id','head-anchor');
    //             anchor.setAttribute('href',data.articles[j].url);

    //             let img = document.createElement('img');
    //              img.setAttribute('src',data.articles[j].urlToImage);
    //              img.setAttribute('width','150px');
    //              img.setAttribute('height','140px');
    //              img.setAttribute('alt','this is image');

    //             let head = document.getElementById('first');
    //             title.innerHTML= data.articles[j].title;
    //             description.innerHTML= data.articles[j].description;
    //             block2.appendChild(img);
    //             anchor.appendChild(title);
    //             block1.appendChild(anchor);
    //             block1.appendChild(description);
    //             block.appendChild(block2);
    //             block.appendChild(block1);
    //             block.appendChild(block3);
    //             head.appendChild(block);
    //         }
    //         }
    //     })
    //    }




>>>>>>> 334a40e0cf3b14a290a6b5ec5adf9173a5473b13
