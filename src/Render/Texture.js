/*****************************************************************************/
/*!
\file Texture.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains portfolio / web-mobile responsive application
\Not for distribution
*/
/*****************************************************************************/

import * as THREE from "three";

/******************************************************************************/
/*!
\brief 
*/
/******************************************************************************/
export default class Texture
{
/******************************************************************************/
/*!
\brief 
*/
/******************************************************************************/
    constructor(_options)
    {
        this.loaded = false;
        //init variables
        this.link = _options.link;
        this.mesh = _options.mesh;
       
        //start loader
        this.loadTexture();
    }
/******************************************************************************/
/*!
\brief 
*/
/******************************************************************************/
    loadTexture()
    {
        new THREE.TextureLoader().load(
            this.link,
            texture => {
              this.texture = texture;
              
              //texture has loaded
              this.loaded = true;
            },
            xhr => {
              //Download Progress
              console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            error => {
              //Error CallBack
              console.log("An error happened" + error);
            }
          );
    }
}