/*****************************************************************************/
/*!
\file Scene_2.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/
import * as THREE from "three";

//renderer related
import Model from "../../Render/Model";
import Scene from "../../Render/Scene";


/******************************************************************************/
/*!
\brief  main 3d scene setup
*/
/******************************************************************************/
class Scene2 extends Scene
{
    //constructor
    constructor(_options)
    {
        super(_options);
  
        //add main room model
        new Model({
            modelLink:'/room.obj',
            matLink:'/room.mtl',
            position: new THREE.Vector3(0,3,0),
            scale: new THREE.Vector3(2,2,2),
            scene : this.scene});
        
        this.startRender();
    }
/******************************************************************************/
/*!
\brief  update per frame
*/
/******************************************************************************/
Update()
{
  //get page position and lerp camera 
  const t = document.body.getBoundingClientRect().top;
  
  this.pageLerp = t * 0.0045;

  //modify camera position
  let disty = -9.0 - this.pageLerp * 1.5;
  let distx = 6.0 - this.pageLerp * 2;
  let distz = -9.0 + this.pageLerp * 2;
  this.newCamera.position.y+=1;

  //position animation
  this.newCamera.setPosition
  (this.newCamera.position.lerp(
    new THREE.Vector3(distx,disty,distz),0.05));

  //rotation animation
  this.newCamera.setRotation(
    this.newCamera.rotation.lerp(
      new THREE.Vector3(0.3,2.7+ this.pageLerp * 0.2,-0.2),0.05));
  }

}

export default Scene2