import './AnimateBackground.css'
import { useEffect, useState } from 'react';
import { render } from '@testing-library/react';
import { Sphere } from 'three';




const AnimateBackground = () => {

    const [renderer, setRenderer] = useState()

    useEffect(() => {
        if (!renderer) {
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor('#49416D', 0)
            document.body.appendChild(renderer.domElement);
            setRenderer(renderer)

            const geometry = new THREE.SphereGeometry( 15, 32, 16 );
            const material = new THREE.MeshBasicMaterial( { color: 'green' } );
            const sphere = new THREE.Mesh( geometry, material );
            scene.add( sphere );

            camera.position.z = 50;

            function animate() {
                requestAnimationFrame(animate);

                sphere.rotation.x += 0.01;
                sphere.rotation.y += 0.01;

                renderer.render(scene, camera);
            };

            animate();
            console.log(renderer)
        }

    }, [])

    return (

        <div className="animate--container">
            {renderer}
        </div>
    )
}

export default AnimateBackground