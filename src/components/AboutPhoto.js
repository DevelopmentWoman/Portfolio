export function AboutPhoto(){
    const $aboutPhoto = document.createElement("div");
    const $myPhoto = document.createElement("img");
    $aboutPhoto.classList.add("my-photo");
    $myPhoto.setAttribute("src","./src/assets/my-photo.png");
    $aboutPhoto.append($myPhoto)
    return $aboutPhoto;
}