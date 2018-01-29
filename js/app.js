
var buttons=document.getElementsByClassName("button")
var buttonsCount = buttons.length;

for (var i = 0; i <= buttonsCount; i += 1) {
    buttons[i].onclick = function(e) {
    // alert(this.id)
    var first = document.getElementById('first');
    first.innerHTML="";
   (function(news){
        fetch(`https://newsapi.org/v2/top-headlines?sources=${news}&apiKey=3449fa02267b40518f1422b315334332`)
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

            }
        })
    })(this.id);
    };
}



