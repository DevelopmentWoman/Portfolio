export function ObjectHome(){
    const $objectHome = document.createElement('div');
    $objectHome.classList.add('phot-mys');
    $objectHome.innerHTML =`
        <div class="my-self">
            <div class="cont-system">
                <div class="orbita">  
                    <model-viewer id="post" bounds="tight" enable-pan 
                    src="./src/assets/Project Name.glb" 
                    loading="eager"
                    ar ar-modes="webxr scene-viewer quick-look" 
                    camera-controls environment-image="neutral" 
                    shadow-intensity="1"  disable-zoom>
                    <div class="progress-bar hide" slot="progress-bar">
                    </div>
                    </model-viewer>
                </div>
            </div>
        </div>
    `
    return $objectHome;
}