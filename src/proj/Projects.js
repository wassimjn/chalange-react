import img1 from '../images/proj1.jpg'
import img2 from '../images/proj2.jpg'
import img3 from '../images/proj3.jpg'
import img4 from '../images/proj4.jpg'


function Projects() {
    return(
        <section id="projects">
      <h2 className="text-important">Projects</h2>
      <div className="projects-container">
       {
           [{name:"Project 1", img: img1},{name:"Project 2", img: img2},
           {name:"Project 3", img: img3},{name:"Project 4", img:img4}].map(el=>
            <div className="project-card">
            <img src={el.img} alt="project" />
            <h3>{el.name}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p><a href="#">Github Link</a></p>
            </div>
            
            )
       }
       </div>
       </section>
       )
       }
       export default Projects
             
         
        




