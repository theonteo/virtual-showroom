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
import * as THREE from "three";
import img from "../images/img-8.jpg"
import { MathUtils, Vector2, Vector3 } from "three";
/******************************************************************************/
/*!
\brief  Store/load model data
*/
/******************************************************************************/
export default class CloudModel
{
/******************************************************************************/
/*!
\brief  constructor
*/
/******************************************************************************/
    constructor(_options)
    {
        this.mouse = new Vector2(0,0);
        this.lateMouse = new Vector2(0,0);
        this.dirTemp = new Vector2(0,0);
        this.time = 0.0;
        this.loaded = false;
        //set variables
        this.texture = _options.texture;
        this.scene = _options.scene;
        this.lastUpdate = Date.now();

        this.bufferPosition = new THREE.BufferAttribute( this.positionsRunTime, 3);
        this.bufferColor = new THREE.BufferAttribute(this.colors, 3);
        this.bufferCustomColor= new THREE.BufferAttribute( this.colors, 3 );
        this.bufferSize = new THREE.BufferAttribute(this.sizesRunTime, 1);



        this.loadShader();
        this.loadModel();
        this.loadListener();
    }
/******************************************************************************/
/*!
\brief  load listener
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
   
    updateModel(documentPosition)
    {

        const distPoint = 60;
        const healSpeed = 0.35;
        const mouseLagSpeed = 1.75;
        var now = Date.now();
        this.dt = now - this.lastUpdate;
        this.lastUpdate = now;
        //console.log( this.mouse.y-documentPosition);
        this.lateMouse.x =MathUtils.lerp( this.lateMouse.x, this.mouse.x,1/this.dt * mouseLagSpeed);
        this.lateMouse.y =MathUtils.lerp( this.lateMouse.y,  this.mouse.y-documentPosition - window.innerHeight,1/this.dt *mouseLagSpeed);

        //this.positionsRunTime;
        //this.colorsRunTime =  this.colors;
       // this.sizesRunTime =  this.sizes;
        this.time += 0.025;
        var mousex = ((this.lateMouse.x/window.innerWidth)*900)-450;
        var mousey =450- ((this.lateMouse.y/window.innerHeight)*900);
        for(var i = 0;i<this.pointCount;++i)
        {
            this.dirTemp.set (mousex- this.positions[i*3]  ,mousey-this.positions[i*3+1] );
            var dirLength = this.dirTemp.length();

            this.positionsRunTime[i*3] = MathUtils.lerp( this.positionsRunTime[i*3]+ Math.cos(this.time+this.positions[i*3+1]*0.01 ) * 0.15* 0.1,
            this.positions[i*3], 1/this.dt *healSpeed)+( dirLength< distPoint?( distPoint-dirLength) * this.dirTemp.normalize().x:0) * 0.1;
            this.positionsRunTime[i*3+1] = MathUtils.lerp( this.positionsRunTime[i*3+1]+ Math.sin(this.time+this.positions[i*3]*0.005 ) * 1.5* 0.1,
            this.positions[i*3+1], 1/this.dt *healSpeed)+( dirLength< distPoint?( distPoint-dirLength) * this.dirTemp.normalize().y:0) * 0.1;
            this.sizesRunTime[i] = dirLength< distPoint?dirLength/distPoint*this.sizes[i]: this.sizes[i] ;            
        }
        this.geometry.attributes.position.array = this.positionsRunTime;
        this.geometry.attributes.size.array = this.sizesRunTime;

        //buffer needs updating
        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.attributes.size.needsUpdate = true;
    }
    loadShader()
    {
        var uniforms = {
            color:     { value: new THREE.Color( 0xffffff ) },
            texture:   { value: new THREE.TextureLoader().load("http://i.imgur.com/HMjPT3I.png") }
    
        };
       this.material = new THREE.RawShaderMaterial( {

            uniforms:       uniforms,
            vertexShader:   `
            precision highp float;
        
            uniform mat4 modelViewMatrix;
            uniform mat4 projectionMatrix;
        
            attribute vec3 position;
        
            attribute float size;
            attribute vec3 customColor;
            attribute vec3 offset;
            attribute float alpha;
        
            varying float vAlpha;
            varying vec3 vColor;
        
            void main() {
              vColor = customColor;
              vAlpha = alpha;
              vec3 newPosition = position + offset;
              vec4 mvPosition = modelViewMatrix * vec4( newPosition, 1.0 );
              gl_PointSize = size * ( 300.0 / -mvPosition.z );
              gl_Position = projectionMatrix * mvPosition;
        
            }`,
            fragmentShader: `
            precision highp float;
            uniform vec3 color;
            uniform sampler2D texture;
        
            varying vec3 vColor;
       
            void main() {
            gl_FragColor = vec4( color * vColor,1 );
            gl_FragColor = gl_FragColor * texture2D( texture, gl_PointCoord );
            }`,
        
            blending:       THREE.AdditiveBlending,
            depthTest:      false,
            transparent:    true
        
        });
    }
    loadModel()
    {  

        function getImageData( image ) {

            var canvas = document.createElement( 'canvas' );
            canvas.width = image.width;
            canvas.height = image.height;
        
            var context = canvas.getContext( '2d' );
            context.drawImage( image, 0, 0 );
        
            return context.getImageData( 0, 0, image.width, image.height );
        
        }
        function getPixel( imagedata, x, y ) {

            var position = ( x + imagedata.width * y ) * 4, data = imagedata.data;
            return { r: data[ position ], g: data[ position + 1 ], b: data[ position + 2 ], a: data[ position + 3 ] };
        
        }
        var colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];

        function Particle(x,y){
            this.x =  Math.random()*900;
            this.y =  Math.random()*900;
            this.dest = {
              x : x,
              y: y
            };
            this.r =  Math.random()*5 + 2;
            this.vx = (Math.random()-0.5)*20;
            this.vy = (Math.random()-0.5)*20;
            this.accX = 0;
            this.accY = 0;
            this.friction = Math.random()*0.05 + 0.94;
          
            this.color = colors[Math.floor(Math.random()*6)];
          }
        Particle.prototype.render = function() {

          }


        // instantiate a loader
const loader = new THREE.TextureLoader();
console.log(" startloadeddddddddddddddddddddddddd");
// load a resource
loader.load(
	// resource URL
	img,

	// onLoad callback
    (texture )=> {
        console.log("loadeddddddddddddddddddddddddd");

        this.texture = texture;

        console.log(texture.image.width);
        const points = [];
        const cols = [];

        var imagedata = getImageData( this.texture.image ); //<-- error occurs here

        for (var y = 0, y2 =this.texture.image.height; y < y2; y += 4) {
            for (var x = 0, x2 = this.texture.image.width; x < x2; x += 4) {
                var col = getPixel(imagedata, x , y );
                if(col.r+col.g+col.b>25)
                {
               
                //console.log(( getPixel(imagedata,x * 4 , y * 4 ).r));
                //if (col.b >200) {
    
                    var vertex = new THREE.Vector3();
                    vertex.x = (x - this.texture.image.width/2)*1.15 ;
                    vertex.y = (-y +this.texture.image.height /2)*1.15;
                    //vertex.z = -Math.random()*500;
                    vertex.z = 0;
                    //vertex.speed = Math.random() / speed + 0.015;
    
                   // this.scene.add(new THREE.Mesh( vertex, material));
                    cols.push(new Vector3(col.r/255,col.g/255,col.b/255));
                    points.push( vertex);
                }
            }
        }

        var geometry = new THREE.BufferGeometry();
        this.sizes = new Float32Array( points.length);
        this.sizesRunTime = new Float32Array( points.length);
        this.positions = new Float32Array( points.length * 3);
        this.positionsRunTime = new Float32Array( points.length * 3);
        this.colors = new Float32Array(points.length * 3); // 3 colors per point
        
        for(var i = 0;i<points.length;++i)
        {
           this.positions[i*3] =points[i].x;
           this.positions[i*3+1] =points[i].y;
           this.positions[i*3+2] =points[i].z;
           this.positionsRunTime[i*3] =points[i].x;
           this.positionsRunTime[i*3+1] =points[i].y;
           this.positionsRunTime[i*3+2] =points[i].z;
           this.colors[i*3] = cols[i].x+0.25;
           this.colors[i*3+1] = cols[i].y+0.25;
           this.colors[i*3+2] = cols[i].z+0.25;
           this.sizesRunTime[i] = this.sizes[i] = (cols[i].x+cols[i].y+cols[i].z) * 7;
           
        }
      
        geometry.setAttribute('position', new THREE.BufferAttribute( this.positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute( this.colors, 3));
        geometry.setAttribute( 'customColor', new THREE.BufferAttribute( this.colors, 3 ) );
        geometry.setAttribute('size', new THREE.BufferAttribute( this.sizes, 1));
        this.pointCount = points.length;
        this.geometry = geometry;
        this.particles = new THREE.Points(geometry, this.material);
        console.log("cloud loaded");
        this.scene.add(this.particles);
        this.loaded = true;
	},

	// onProgress callback currently not supported
	undefined,

	// onError callback
	function ( err ) {
		console.error( 'An error happened.' );
	}
    );
    }
}