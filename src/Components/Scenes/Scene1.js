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
    this.mouse = new Vector2(0, 0);
    this.mouseNormalized = new Vector2(0, 0);
    this.lerpedMouse = new Vector2(0, 0);

    //time
    this.lastUpdate = Date.now();

    //camera vectors
    this.camDirection = new Vector3(0, 0, 0);
    this.camSide = new Vector3(0, 0, 0);
    this.camPos = new Vector3(0, 0, 0);
    this.camRot = new Vector3(0, 0, 0);

    this.sendPoint = new Vector3(0, 0, 0);
    this.tempPoint = new Vector3(0, 0, 0);

    this.sendPointRot = new Vector3(0, 0, 0);
    this.tempPointRot = new Vector3(0, 0, 0);

    //add main room model
    new Model({
      modelLink: '/room1.obj',
      matLink: '/room1.mtl',
      position: new THREE.Vector3(0, 3, 0),
      scale: new THREE.Vector3(2, 2, 2),
      scene: this.scene
    });

    new Model({
      modelLink: '/room2.obj',
      matLink: '/room2.mtl',
      position: new THREE.Vector3(0, 3, 0),
      scale: new THREE.Vector3(2, 2, 2),
      scene: this.scene
    });

    new Model({
      modelLink: '/room3.obj',
      matLink: '/room3.mtl',
      position: new THREE.Vector3(0, 3, 0),
      scale: new THREE.Vector3(2, 2, 2),
      scene: this.scene
    });

    //add event listeners
    this.loadListener();
    this.startRender();
    this.generateCamCurve();
  }

  generateCamCurve()
  {
    //position points
    var posPoints = [];

    posPoints.push(new THREE.Vector3(-9.417, 17.325, 0.762));
    posPoints.push(new THREE.Vector3(0.917, 14.359, 9.364));
    posPoints.push(new THREE.Vector3(8.427, 1.383, 14.626));
    this.spline = new THREE.CatmullRomCurve3(posPoints);
    this.points = this.spline.getPoints(200);

    //rotation points
    var rotPoints = [];
    //rotPoints.push(new THREE.Vector3(THREE.Math.degToRad(0),THREE.Math.degToRad( 0),THREE.Math.degToRad(0)));
    //rotPoints.push(new THREE.Vector3(THREE.Math.degToRad(0),THREE.Math.degToRad( 0),THREE.Math.degToRad(0)));
    rotPoints.push(new THREE.Vector3(THREE.Math.degToRad(-6.597),THREE.Math.degToRad( 18.808),THREE.Math.degToRad(-19.735)));
   // rotPoints.push(new THREE.Vector3(THREE.Math.degToRad(-27.258),THREE.Math.degToRad( 19.532),THREE.Math.degToRad( -57.020)));
    //rotPoints.push(new THREE.Vector3(THREE.Math.degToRad(53.360), THREE.Math.degToRad(87.808-90.0),THREE.Math.degToRad( 53.380)));
    
    
    rotPoints.push(new THREE.Vector3(THREE.Math.degToRad(53-90), THREE.Math.degToRad(87.808-90.0),THREE.Math.degToRad(0)));
    
    
    
    this.RotSpline = new THREE.CatmullRomCurve3(rotPoints);
    this.rotPoints = this.RotSpline.getPoints(200);

  }
  /******************************************************************************/
  /*!
  \brief  update per frame
  */
  /******************************************************************************/
  loadListener()
  {
    window.addEventListener("mousemove",
      (e) =>
      {

        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;

      });
  }

  Update()
  {
    //update delta time
    var now = Date.now();
    this.dt = now - this.lastUpdate;
    this.lastUpdate = now;

    this.mouseNormalized.x = this.mouse.x / window.innerWidth;
    this.mouseNormalized.y = this.mouse.y / window.innerHeight;

    this.lerpedMouse.x = MathUtils.lerp(this.lerpedMouse.x, this.mouseNormalized.x, 1 / this.dt);
    this.lerpedMouse.y = MathUtils.lerp(this.lerpedMouse.y, this.mouseNormalized.y, 1 / this.dt);

    //get page position and lerp camera 
    const t = document.body.getBoundingClientRect().top;

    this.pageLerp = t * 0.00;
    this.pageLerp2 = t * 0.1;
    //modify camera position
    this.newCamera.threeCamera.getWorldDirection(this.camDirection);
    this.camSide.crossVectors(this.camDirection, this.newCamera.threeCamera.up);
    this.camPos.set(0.0,  this.pageLerp * 1.5, 0.0);
    this.camRot.set(0.0,  0, 0);
    this.camDirection.multiplyScalar(-this.lerpedMouse.y * 3.5);
    this.camSide.multiplyScalar(this.lerpedMouse.x * 2.5);

    this.camPos.add(this.camDirection);
    this.camPos.add(this.camSide);

    //this.newCamera.position.y += 1;


    var index = MathUtils.clamp(-this.pageLerp2, 0.0, 200.0);



    let currPoint = this.points[parseInt(index, 10)];
    let currPointRot = this.rotPoints[parseInt(index, 10)];

    this.tempPoint = currPoint;
    this.tempPointRot = currPointRot;


    this.sendPoint.copy(this.camPos);
    this.sendPoint.add(currPoint);

    this.sendPointRot.copy(this.camRot);
    this.sendPointRot.add(currPointRot);


    //position animation
    //var camPos = spline.getPoint(camPosIndex / 10000);
    this.newCamera.setPosition
      (this.newCamera.position.lerp(
        this.sendPoint, 0.05));

    //const rotAmount = 0.25;
    //default rotation value
    //this.camRot.set(0.0, 0.0 + this.lerpedMouse.x * rotAmount, -0.0);

    //rotation animation
    this.newCamera.setRotation(
      this.newCamera.rotation.lerp(
        this.sendPointRot, 0.05));
  }
}

export default Scene1