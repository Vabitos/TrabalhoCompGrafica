document.addEventListener('DOMContentLoaded', Start);

//Physijs.scripts.worker = 'js/physijs_worker.js';


var cena = new THREE.Scene();
var camara = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth-15, window.innerHeight-15);

document.body.appendChild(renderer.domElement);

var geometria = new THREE.BoxGeometry(12,1,4);

// Mudamos o material do cubo para que este receba luz por parte de uma fonte de luz.
var material = new THREE.MeshStandardMaterial({color: 0xffff00});

var Paralelepipedo = new THREE.Mesh(geometria, material);

// new MMDLoader().load(
//     'models/mmd/miku.pmd',
//     function ( mesh ) {

//         physics = new MMDPhysics(mesh)
//         cena.add(mesh);

//     }
// );

// function render() {

// 	const delta = clock.getDelta();
// 	animate( delta );  // update bones
// 	if ( physics !== undefined ) physics.update( delta );
// 	renderer.render( scene, camera );

// }

function Start(){

    //MMDLoader().load(Paralelepipedo);

    var light = new THREE.SpotLight('#ffffff', 1);

    light.position.y = 12;
    light.position.z = 8;

    light.lookAt(Paralelepipedo.position);

    cena.add(light);

   //camara de trás diagonal
  
    //camara de trás normal
    camara.position.z = 10;
    camara.position.y = 10;
    camara.lookAt(Paralelepipedo.position);
     

    requestAnimationFrame(update);    
}

function update(){

    renderer.render( cena, camara);

    //render(cena, camara);

    requestAnimationFrame(update);
}