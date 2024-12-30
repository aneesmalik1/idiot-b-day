
const loveMsg = document.querySelectorAll(".love-msg");
const slides = document.querySelectorAll(".slide");
const cardo = document.querySelectorAll(".cardo");
var counter=0;

function goFor(){
    if(counter<=10)
    counter++;

    if(counter==1)
        {
         document.querySelector(".msg1").classList.add("disable");
         
        }

        if(counter==10)
        {
            document.querySelector(".buttons").classList.add("disable");
        }
    
    slideImage();

    for(let i=0; i<cardo.length; i++)
    {
       
        if(counter==i)
        {
            // alert(counter)
            cardo[i].classList.add("active");

            loveMsg[i].classList.add("active");
            
        }
        else{
            cardo[i].classList.remove("active");

            loveMsg[i].classList.remove("active");
           
        }
    }

    
}

function goBack(){
    if(counter>0)
        counter--;
    slideImage();

    for(let i=0; i<cardo.length; i++)
        {
            if(counter==i)
            {
                
                cardo[i].classList.add("active");

                loveMsg[i].classList.add("active");
            }
            else{
                cardo[i].classList.remove("active");

                loveMsg[i].classList.remove("active");
            }

            
                
        }
}


const slideImage = () => {
    
    let i=0;
    

    slides.forEach(
        (slide) => {
            
            slides[i].style.transform=`translateX(-${counter*260}px)`;
            i++;

        }
    )

}

document.querySelector(".next").addEventListener("click", goFor );
document.querySelector(".prev").addEventListener("click", goBack );




