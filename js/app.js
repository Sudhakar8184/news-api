
document.getElementById("abcbtn").addEventListener("click", gettext);
        function gettext() {
            fetch('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=3449fa02267b40518f1422b315334332')
        .then((res)=>{
            return res.json()
        }).then((data)=>{
          //  var first =
            // document.write(JSON.stringify(data.articles[0].title));
            //document.write(JSON.stringify(data.articles[0].urlToImage));
           // document.getElementById('first').innerHTML= data.articles[0].title;
            for (let i = 0; i < data.totalResults; i++) {
                let c = document.createElement('h1');
                let a = document.createElement('p');
                let b = document.getElementById('first');
                c.innerHTML= data.articles[i].title;
                a.innerHTML= data.articles[i].description;
                b.appendChild(c);
                b.appendChild(a);
            }

        })
        }
//gettext();


