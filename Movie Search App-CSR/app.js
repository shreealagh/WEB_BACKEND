const form =document.querySelector('form');
const list=document.querySelector('#list');
const inp=document.getElementById('inp');


function getallmovies(inptext)
{
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }


    const url=`https://api.tvmaze.com/search/shows?q=${inptext}`;
    axios.get(url)
    .then((res)=>{
         for(let movie of res.data)
         {
            if(movie.show.image)
            {
                const image=document.createElement('img');
                 image.setAttribute('src',movie.show.image.medium);

                    image.style.margin = '10px';

                    list.append(image);
            }
         }
    })
    .catch((err)=>{
        console.log(err.message);
    })
}


form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const inptext=inp.value;
      getallmovies(inptext);
      inp.value="";
})