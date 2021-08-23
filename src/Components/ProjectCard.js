import {React} from 'react'

import './ProjectCard.css'
import './font.css'
import {Button} from '../Components/NavBar/Button'

import imgEngine from '../images/img-engine.jpg'


function ProjectCard()
 {
    return (
    <div class="project-container">
      <div class="project-label">A showcase of</div>
      <h4 class="project-title">Various Projects</h4> 
      <div class="project-line"></div>
      <div class="project">
        <div class="project-content">
          <div class="project-label">Rendering</div>
          <h4 class="project-title">SIMPLE. Engine</h4>
          <div class="project-line"></div>
          <div class="project-details">
            <p>Built with OpenGL. It is a 2D/3D Proprietary Engine built to house various interactive applications. With the engine undergoing iterations through a span of 2 to 3 years.

For the engine I primarily focused on Graphics , Technical Art , Tools and Editor with an emphasis on Graphics and Technical Art.
</p>
          <div class = "project-list-wrapper">
            <div class = "project-list">
                <div class = "project-item">OpenGL</div>
                <div class = "project-item"> ImGui</div>
                <div class = "project-item"> JsonCpp</div>
                <div class = "project-item"> C++</div>
                <div class = "project-item"> C#</div>
              </div>
            </div>
          </div>
          <Button buttonStyle='btn--outline'> Explore...</Button>
        </div>
        <div class="project-img">
          <img src={imgEngine} alt="" />
        </div>
      </div>
      <div class="invert">
        <div class="project">
        <div class="project-img">
            <img src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png" alt="" />
          </div>
          <div class="project-content">
            <div class="project-label"> UI / UX </div>
            <h4 class="project-title">Qt Model Viewer </h4>
            <div class="project-line"></div>
            <div class="project-details">
              <p>A basic model viewer using Qt to display editor capabilities. After using ImGui, I have been wanting to try out a different editor API hence built a small Qt application to learn the working of Qt.</p>
              <div class = "project-list-wrapper">
                <div class = "project-list">
                  <div class = "project-item">OpenGL</div>
                  <div class = "project-item"> C++</div>
                  <div class = "project-item"> Qt</div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>
      <div class="project">
        <div class="project-content">
          <div class="project-label">Frontend Development</div>
          <h4 class="project-title">Portfolio Website</h4>
          <div class="project-line"></div>
          <div class="project-details">
            <p>This is the first website I have built from scratch and it is designed to expand my knowledge on frontend development.

Some of the experiments include real time rendering of 3d browser backgrounds while making the website responsive for web and mobile.

For the assets of the website - arnold renderer is being used for lights mapping the scene with the map being combined into a mesh.
</p>
            <div class = "project-list-wrapper">
              <div class = "project-list">
                <div class = "project-item">React</div>
                <div class = "project-item"> Html</div>
                <div class = "project-item"> CSS</div>
                <div class = "project-item"> Javascript</div>
                </div>
                <div class = "project-list">
                <div class = "project-item"> three.js</div>
                <div class = "project-item"> webGL</div>
                <div class = "project-item"> Netlify</div>
                </div>
              </div>
          </div>
        </div>
        <div class="project-img">
          <img src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png" alt="" />
        </div>
      </div>
    </div>  
    )
}

export default ProjectCard
