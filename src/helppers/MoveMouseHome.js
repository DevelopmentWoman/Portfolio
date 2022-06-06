
export function MoveMouseHome(){
    const $pointMouse = document.querySelector(".container-img-home")
    const $contHome = document.querySelector(".container-home")
    let windowHight = 0;
    let windowWidth = 0;

    
    if(screen.height < 751 && screen.width >=768){
        windowHight = document.documentElement.clientHeight*16.75/100;
        windowWidth = document.documentElement.clientWidth*12/100;
    }else if(screen.height > 750 && screen.width >=768){

        windowHight = document.documentElement.clientHeight*26/100;
        windowWidth = document.documentElement.clientWidth*12/100;
    }else if(screen.width < 768){
        windowWidth = 0;
        windowHight = document.documentElement.clientWidth*.5/100 + 160;
    }


    $contHome.addEventListener("mouseover", e=>{
        function moveAt(pageX, pageY) {
            $pointMouse.style.left = pageX - $pointMouse.offsetWidth /2 - windowWidth + 'px';
            $pointMouse.style.top = pageY - $pointMouse.offsetHeight / 2 - windowHight + 'px';
        }
      
        moveAt(e.pageX, e.pageY);
      
        function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
        }
    

        document.addEventListener('mousemove', e=>{
            if(!e.target.closest(".contain-general")) return;
            onMouseMove(e)
        });
      
            $pointMouse.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            $pointMouse.onmouseup = null;
        };
      

    }) 
   
    
}
  