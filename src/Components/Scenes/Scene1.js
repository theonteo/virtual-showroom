/*****************************************************************************/
/*!
\file Scene_1.js
\author Theon Teo
\par email: theonteo96@gmail.com
\date 2021
\brief
This project contains model application
\Not for distribution
*/
/*****************************************************************************/
import * as THREE from "three";
import { MathUtils, Vector2, Vector3 } from "three";

//renderer related
import Model from "../../Render/Model";
import Scene from "./Scene";


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
    this.camUp = new Vector3(0, 0, 0);
    this.camSide = new Vector3(0, 0, 0);
    this.camPos = new Vector3(0, 0, 0);
    this.camLookAt = new Vector3(0, 0, 0);

    this.sendPoint = new Vector3(0, 0, 0);
    this.tempPoint = new Vector3(0, 0, 0);

    this.sendPointLookAt = new Vector3(0, 0, 0);
    this.tempPointLookAt = new Vector3(0, 0, 0);

    //add main room model
    new Model({
      modelLink: '/room1.obj',
      matLink: '/room1.mtl',
      position: new THREE.Vector3(0, 3, 0),
      scale: new THREE.Vector3(2, 2, 2),
      scene: this.scene
    });

  
    //add event listeners
    this.loadListener();
    this.startRender();
    this.generateCamCurve();


    this.currPointLerped = new Vector3(0, 0, 0);
    this.currPointLookAtLerped = new Vector3(0, 0, 0);
    this.currPointLerped.set
      (this.points[0].x , this.points[0].y + 10, this.points[0].z );
      this.currPointLookAtLerped.set
      (this.points[0].x , this.points[0].y, this.points[0].z );
    }

  generateCamCurve()
  {
    //position points
    var posPoints = [];

    posPoints.push(new THREE.Vector3(0.159,1.291, 5.824));
    posPoints.push(new THREE.Vector3(0.931, 2.06, 4.369));
    posPoints.push(new THREE.Vector3(0.175,2.417, 4.849));
    this.spline = new THREE.CatmullRomCurve3(posPoints);
    this.points = this.spline.getPoints(200);

    //rotation points
    var lookAtPoints = [];

    lookAtPoints.push(new THREE.Vector3(1.3, 1.302,2.1));
    lookAtPoints.push(new THREE.Vector3(2.254, 1.373, 1.899));
    lookAtPoints.push(new THREE.Vector3(0.3, 1.373, 3.16));

    this.lookAtSpline = new THREE.CatmullRomCurve3(lookAtPoints);
    this.lookAtPoints = this.lookAtSpline.getPoints(200);
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

    this.lerpedMouse.x = MathUtils.lerp(this.lerpedMouse.x, this.mouseNormalized.x, 0.05 * 1 / this.dt);
    this.lerpedMouse.y = MathUtils.lerp(this.lerpedMouse.y, this.mouseNormalized.y, 0.05 * 1 / this.dt);

    //get page position and lerp camera 
    const t = document.body.getBoundingClientRect().top;

    this.pageLerp = t * 0.00;
    this.pageLerp2 = t * 0.1;

    //modify camera position
    this.newCamera.threeCamera.getWorldDirection(this.camDirection);

    this.camSide.crossVectors(this.camDirection, this.newCamera.threeCamera.up);
    this.camUp.crossVectors(this.camSide, this.newCamera.threeCamera.up);

    this.camPos.set(0.0, this.pageLerp * 1.5, 0.0);
    this.camLookAt.set(0.0, 0, 0);

    this.camDirection.multiplyScalar(-this.lerpedMouse.y * 3.5);
    this.camSide.multiplyScalar(this.lerpedMouse.x * 2.5);
    this.camUp.multiplyScalar(-this.lerpedMouse.y * 3.5);

    var index = MathUtils.clamp(-this.pageLerp2, 0.0, 200.0);

    let currPoint = this.points[parseInt(index, 10)];
    let currPointLookAt = this.lookAtPoints[parseInt(index, 10)];

    this.tempPoint = currPoint;
    this.tempPointLookAt = currPointLookAt;
    this.sendPoint.copy(this.camPos);
    this.sendPoint.add(currPoint);
    this.sendPoint.add(this.camDirection);
    this.sendPoint.add(this.camSide);
    this.sendPoint.add(this.camUp);

    this.sendPointLookAt.copy(this.camLookAt);
    this.sendPointLookAt.add(currPointLookAt);

    this.currPointLerped.lerp(this.sendPoint, 0.05);
    this.currPointLookAtLerped.lerp(this.sendPointLookAt, 0.05);

    this.newCamera.setPosition
      (this.currPointLerped);

    this.newCamera.threeCamera.lookAt(this.currPointLookAtLerped);
  }
}

export default Scene1