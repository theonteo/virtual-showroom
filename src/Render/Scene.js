/*****************************************************************************/
/*!
\file Scene.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/
import React, { Component } from "react";
import * as THREE from "three";
import OrbitControls from "three-orbitcontrols";
//renderer related
import './Scene.css'
import Camera from "./Camera";

/******************************************************************************/
/*!
\brief  main 3d scene setup
*/
/******************************************************************************/
class Scene extends Component
{
  constructor(_options)
   {
    super(_options);

    //init variables
    this.container = [];
    this.pageLerp = 0;
    this.scene = new THREE.Scene();

    //add Camera
     this.setCamera(1200,768);
  }
/******************************************************************************/
/*!
\brief  create new camera
*/
/******************************************************************************/
  setCamera(width,height)
  {
    //add Camera
    this.newCamera = 
    new Camera({
      position: new THREE.Vector3(6,9,-9),
      rotation: new THREE.Vector3(0.3,2.7,-0.2),
      width : width, 
      height : height});
      
  
  }
/******************************************************************************/
/*!
\brief  component mounted - three.js
*/
/******************************************************************************/
  componentDidMount()
  {
    const width = this.mount.clientWidth;
    const height = this.mount.clientHeight;

    //Add Renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor("#263238");
    this.renderer.setSize(width, height);
    this.mount.appendChild(this.renderer.domElement);

    //add Camera
    this.setCamera( width,height);
    new OrbitControls( this.newCamera.threeCamera, this.renderer.domElement );
    //add lighting here
    const ambient = new THREE.AmbientLight(0xf5e0ff , 1.35  , 0);
    this.scene.add(ambient);
  }


/******************************************************************************/
/*!
\brief  start main render - derived class should start
*/
/******************************************************************************/
startRender()
{
  //loop through all models and add to scene container

  this.container.forEach(function(item,index)
  {
    console.log("added");
    this.scene.add(item);
  });

  //render scene
  this.renderScene();

  //start animation
  this.start();
}

/******************************************************************************/
/*!
\brief  component unmounted - three.js
*/
/******************************************************************************/
  componentWillUnmount()
  {
    this.stop();
    this.mount.removeChild(this.renderer.domElement);
  }
  start = () =>
   {
     
    if (!this.frameId) 
      this.frameId = requestAnimationFrame(this.animate);
    
  };
  stop = () => 
  {
    cancelAnimationFrame(this.frameId);
  };

  animate = () => {
    //main scene update function
    this.Update();
    this.renderScene();
   
    this.frameId = 
    window.requestAnimationFrame(this.animate);
  };
/******************************************************************************/
/*!
\brief render final scene
*/
/******************************************************************************/
  renderScene = () => {

    if (this.renderer) 
      this.renderer.render
      (this.scene, this.newCamera.threeCamera);
  };


/******************************************************************************/
/*!
\brief  return - composite html
*/
/******************************************************************************/
  render() {
    return (
      <div className = 'render-window'
        ref={mount => {
          this.mount = mount;
        }}
      />
    );
  }
}

export default Scene;
