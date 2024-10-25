const slides=document.querySelectorAll(".image")
var counter=0
console.log(slides);

slides.forEach{
    (image,index)=>{
        image.style.left =>'$(index*100}%'
    }
}

const goPrev=()=>{
    counter--
    imageImage()
}


const goNext=()=>{
    counter++
    imageImage()
}

const imageImage=()=>{
    slides.forEach(
        (image)=>{
            image.style.transform = 'translateX(-${counter*100}%)'
        }
    )
}