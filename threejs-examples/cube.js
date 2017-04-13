import THREE from 'three'
const w = window.innerWidth,h = window.innerHeight
const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(75,w/h,0.1,1000)
renderer.setSize(w,h)

const scene = new THREE.Scene()
const geometry = new THREE.BoxGeometry(2,2,2)
const material = new THREE.MeshBasicMaterial({color:0x00BCD4})
const cube = new THREE.Mesh(geometry,material)
scene.add(cube)
camera.position.z = 5
const render = ()=>{
    cube.rotation.x+=0.1
    cube.rotation.y+=0.1
    renderer.render(scene,camera)
    requestAnimationFrame(render)
}
const domElement = renderer.domElement
export {domElement,render}
