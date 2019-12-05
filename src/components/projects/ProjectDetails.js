import React from 'react'

const ProjectDetails =(props)=> {
    const id= props.match.params.id;
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title"> Project Title - {id}</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem aperiam fugit numquam deleniti quod commodi odit quos dicta molestias praesentium voluptas debitis nostrum minima excepturi, repellendus, hic, incidunt optio aliquid.</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by nhingi</div>
                        <div>2 sept 6am</div>
                    </div>
                </div>
            </div>
        )
    }


export default ProjectDetails
