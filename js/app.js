
document.getElementById("abcbtn").addEventListener("click", gettext);
        function gettext() {
            //fetch('https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=3449fa02267b40518f1422b315334332')
            fetch('https://newsapi.org/v2/everything?q=bitcoin&sources=abc-news&apiKey=3449fa02267b40518f1422b315334332')

        .then((res)=>{
            return res.json()
        }).then((data)=>{

            for (let i = 0; i < data.totalResults; i++) {
                let c = document.createElement('h3');
                let a = document.createElement('p');
                let b = document.getElementById('first');
                let d = document.createElement('img');
                c.innerHTML = data.articles[i].title;
              //  d.setAttribute(src,data.articles[i].urlToImage);
                a.innerHTML = data.articles[i].description;
                b.appendChild(c);
                b.appendChild(a);
                b.appendChild(d);

            }

        })
        }



