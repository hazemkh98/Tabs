const btn=document.querySelectorAll(".tab-btn");
const about=document.querySelector(".about");
const articles=document.querySelectorAll(".content");

var imageArray = ["hero-bcg.jpeg","rose.jfif","See.jfif"];

about.addEventListener("click",function(e){
	const id=e.target.dataset.id;
	if(id)
	{
		btn.forEach(function(btn){
			btn.classList.remove("active");
			e.target.classList.add("active");
		});
		articles.forEach(function(article){
			article.classList.remove("active");


		});

		const elemnt= document.getElementById(id);
		elemnt.classList.add("active");

				if(id.includes('history'))
				{
					document.getElementById("imgs").src=imageArray[0];
				}
				else if(id.includes('vision'))
				{
					document.getElementById("imgs").src=imageArray[1];
				}
				else
					document.getElementById("imgs").src=imageArray[2];
			}
})