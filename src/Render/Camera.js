/*****************************************************************************/
/*!
\file Camera.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import * as THREE from 'three';

/******************************************************************************/
/*!
\brief  main 3d camera
*/
/******************************************************************************/
export default class Camera
{
    //constructor
    constructor(_options)
    {
      this.width =  _options.width;
      this.height = _options.height;

      //set position
      this.position = _options.position;
      this.rotation = _options.rotation;
      this.euler = new THREE.Vector3(0,0,0);
      
      //new three.js camera
      this.threeCamera = 
      new THREE.PerspectiveCamera
      (35,this.width/this.height, 0.1, 1000);
      this.setPosition(this.position);
      this.setRotation(this.rotation);
    }
    setScreenResolution(width,height)
    {
      this.threeCamera = 
      new THREE.PerspectiveCamera
      (35,width/height, 0.1, 1000);
    }
    setPosition(vec)
    {
      this.position = vec;
      this.threeCamera.position.x = this.position.x;
      this.threeCamera.position.y = this.position.y;
      this.threeCamera.position.z = this.position.z;
    }
    setRotation(vec)
    {
      this.rotation = vec;
      this.threeCamera.rotation.x = this.rotation.x;
      this.threeCamera.rotation.y = this.rotation.y;
      this.threeCamera.rotation.z = this.rotation.z;
    }
}