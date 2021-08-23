/*****************************************************************************/
/*!
\file Scene_1.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/
import * as THREE from "three";
import { MathUtils, Vector2, Vector3 } from "three";

//renderer related
import Model from "../../Render/Model";
import Scene from "../../Render/Scene";


/******************************************************************************/
/*!
\brief  main 3d scene setup
*/
/******************************************************************************/
class Scene1 extends Scene
{
    //constructor
    constructor(_options)
    {
        super(_options);
  
        //mouse data
        this.mouse = new Vector2(0,0);
        this.mouseNormalized = new Vector2(0,0);
        this.lerpedMouse = new Vector2(0,0);

        //time
        this.lastUpdate = Date.now();

        //camera vectors
        this.camDirection = new Vector3(0,0,0);
        this.camSide = new Vector3(0,0,0);
        this.camPos =  new Vector3(0,0,0);
        this.camRot =  new Vector3(0,0,0);

        //add main room model
        new Model({
            modelLink:'/room.obj',
            matLink:'/room.mtl',
            position: new THREE.Vector3(0,3,0),
            scale: new THREE.Vector3(2,2,2),
            scene : this.scene});

        //add event listeners
        this.loadListener();
        this.startRender();
    }
/******************************************************************************/
/*!
\brief  update per frame
*/
/******************************************************************************/
loadListener()
{
    window.addEventListener("mousemove",
    (e)=>{
       
        this.mouse.x =e.clientX;
        this.mouse.y = e.clientY;
       
      });
}

  Update()
  {
    //update delta time
    var now = Date.now();
    this.dt = now - this.lastUpdate;
    this.lastUpdate = now;

    this.mouseNormalized.x = this.mouse.x/window.innerWidth;
    this.mouseNormalized.y = this.mouse.y/window.innerHeight;

    this.lerpedMouse.x = MathUtils.lerp(this.lerpedMouse.x,this.mouseNormalized.x, 1/this.dt );
    this.lerpedMouse.y = MathUtils.lerp(this.lerpedMouse.y,this.mouseNormalized.y, 1/this.dt );

    //get page position and lerp camera 
    const t = document.body.getBoundingClientRect().top;
    
    this.pageLerp = t * 0.0045;

    //modify camera position
    this.newCamera.threeCamera.getWorldDirection( this.camDirection);
    this.camSide.crossVectors( this.camDirection,  this.newCamera.threeCamera.up);
    this.camPos.set(6.0, -9.0 + this.pageLerp * 1.5,-9.0);

    this.camDirection.multiplyScalar( -this.lerpedMouse.y * 15);
    this.camSide.multiplyScalar( this.lerpedMouse.x * 10);

    this.camPos.add(this.camDirection);
    this.camPos.add(this.camSide);

    this.newCamera.position.y+=1;

    //position animation
    this.newCamera.setPosition
    (this.newCamera.position.lerp(
      this.camPos  ,0.05));

    const rotAmount = 0.5;
    //default rotation value
    this.camRot.set(0.3,2.7- this.lerpedMouse.x*rotAmount,-0.2);
  



    //rotation animation
      this.newCamera.setRotation(
        this.newCamera.rotation.lerp(
          this.camRot,0.05));
    }
}

export default Scene1