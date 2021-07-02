/*****************************************************************************/
/*!
\file Model.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import {MTLLoader, OBJLoader } from "three-obj-mtl-loader";

/******************************************************************************/
/*!
\brief  Store/load model data
*/
/******************************************************************************/
export default class Model
{
/******************************************************************************/
/*!
\brief  constructor
*/
/******************************************************************************/
    constructor(_options)
    {
        //set variables
        this.modelLink = _options.modelLink;
        this.matLink = _options.matLink;
        this.material = _options.material;
        this.scene = _options.scene;


        this.loadModel();
    }
/******************************************************************************/
/*!
\brief  load model 
*/
/******************************************************************************/
    loadModel()
    {   
      var mtlLoader = new MTLLoader();

      mtlLoader.load(this.matLink, materials => {
      materials.preload();
      console.log("Material loaded");

      //Load Object Now and Set Material
      var objLoader = new OBJLoader();
      objLoader.setMaterials(materials);
      objLoader.load(
        this.modelLink,
        object => {
          console.log(" load!");
          this.Mesh = object;
          this.Mesh.position.setY(3); //or  this
          this.Mesh.scale.set(2, 2, 2);
          this.scene.add(this.Mesh);
        },
        xhr => {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        // called when loading has errors
        error => {
          console.log("An error happened" + error);
        }
      );
    });
    }

    
/******************************************************************************/
/*!
\brief  set model material
*/
/******************************************************************************/
    setMaterial(material)
    {
        this.mesh.material = material;
    }
/******************************************************************************/
/*!
\brief  set model position
*/
/******************************************************************************/
    setPosition(position)
    {
        this.mesh.position.set(position);
    }
/******************************************************************************/
/*!
\brief  set model scale
*/
/******************************************************************************/
    setScale(scale)
    {
        this.mesh.scale.set(scale);
    }
}