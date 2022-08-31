
import * as THREE from 'three';

let camera, scene, renderer;

export const init = () => {


    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('#49416D', 0)
    renderer.setAnimationLoop(animation);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(10, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 'blue' });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;

    camera.position.z = 30;
    camera.position.x = -20;

}


function animation() {

    renderer.render(scene, camera);

}
