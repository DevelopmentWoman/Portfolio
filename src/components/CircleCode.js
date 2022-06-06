export function CircleCode(str){
    const $circle = document.createElement("div")
    $circle.classList.add("cont-circle");
    $circle.innerHTML=`
    <svg class= "rot-circle img-next" viewBox="0 0 100 100">
        <path d="M 0,50 a 50,50 0 1,1 0,1 z" id="circle" />
        <text>
            <textPath xlink:href="#circle">
                ${str}
            </textPath>
        </text>
    </svg>
    `
    return $circle;
}