console.log("hallo");

let image = document.querySelector(".Image")

image.addEventListener("mouseenter", e => {
 document.querySelector(".Image img").style.width = "600px";
 document.querySelector(".Image img").style.height = "400px";
//  alert("Miau");
}
)

image.addEventListener("mouseleave", e => {
    // alert("Miau");
    document.querySelector(".Image img").style.width = "300px";
    document.querySelector(".Image img").style.height = "200px";
   }
   )

   let picture = document.querySelector(".Image2")

   picture.addEventListener("mouseenter", e => {
    document.querySelector(".Image2 img").style.width = "400px";
    document.querySelector(".Image2 img").style.height = "300px";
   }
   )

    picture.addEventListener("mouseleave", e => {
        // alert("Miau");
        document.querySelector(".Image2 img").style.width = "300px";
        document.querySelector(".Image2 img").style.height = "200px";
       }
       )