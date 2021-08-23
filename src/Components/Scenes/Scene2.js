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
import CloudModel from "../../Render/CloudModel";
import Scene from "../../Render/Scene";


import { Vector3 } from "three";

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
        this.cloud = new CloudModel({
            //texture:img,
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
 // let disty = -9.0 - this.pageLerp * 1.5;
  //let distx = 6.0 - this.pageLerp * 2;
  //let distz = -9.0 + this.pageLerp * 2;
  let distx =0;
  let disty =0;
  let distz =1000;
  //this.newCamera.position.y+=1;

  //position animation
  this.newCamera.setPosition
  (this.newCamera.position.lerp(
    new THREE.Vector3(distx,disty,distz),0.05));

  //rotation animation
  //this.newCamera.setRotation(
   // this.newCamera.rotation.lerp(
     // new THREE.Vector3(0.0,0),0.00));
    if(this.cloud.loaded)
      this.cloud.updateModel(t);
    this.newCamera.threeCamera.lookAt(new Vector3(0,0,0));
  }

}

export default Scene2