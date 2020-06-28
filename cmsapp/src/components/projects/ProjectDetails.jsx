import React from 'react'

function ProjectDetails(props) {
    
    var {id}=props.match.params;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <div className="card-title">Project - {id}</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa accusantium nulla provident rerum ducimus quia amet fugiat perspiciatis ipsam iure mollitia libero facilis, architecto nihil, nobis hic inventore placeat qui!</p>
                </div>
                <div className="card-action gret ligthen-4 grey-text">
                    <div>posted by Rahul</div>
                    <div>2nd Sept</div> 
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
