
import React from 'react';

function Resume(props) {
   
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState(null);

    const photoUpload = e => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setImagePreviewUrl(reader.result);
        }
        reader.readAsDataURL(file);
    }

    const handlePrint = () => {
        window.print()
    }

    return (
        <>
            <button className='print_btn' onClick={handlePrint}>DOWNLOAD CV</button>
            <div className='cv_content'>
                <div className='cv_container'>
                    <div className='cv_header'>
                        <div className='cv_header_top'>
                            <div className='user_pic_section'>
                                {imagePreviewUrl && <img height={"100%"} width={"100%"} className='user_img' src={imagePreviewUrl} />}
                                <input className='profile_pick_input' id="photo-upload" accept="image/*" type="file" onChange={photoUpload} />
                            </div>
                            <div className='user_into'>
                                <h1 className='user_name'>{props.userDetails &&  props.userDetails.userName}</h1>
                                <div>
                                    <h3>{props.userDetails &&  props.userDetails.role}</h3>
                                    <p>{props.userDetails &&  props.userDetails.about}</p>
                                </div>
                            </div>
                        </div>
                        <div className='user_contact_details'>
                            <div className='contact_details_one'>
                                <span>Email : {props.userDetails &&  props.userDetails.email} </span>
                                <span>Phone : {props.userDetails &&  props.userDetails.phone} </span>
                            </div>
                            <div className='contact_details_two'>
                                <span>Location : {props.userDetails &&  props.userDetails.location} </span>
                                <span>Linkedin Profile : <a target="_blank" href={props.userDetails &&  props.userDetails.linkedinProfileLink}>https://www.linkedin.com/</a> </span>
                            </div>
                        </div>
                    </div>
                    <div className='cv_body'>
                        <div className='cv_left_section'>
                            <div className='work_experience_section'>
                                <h2>WORK EXPERIENCE</h2>
                                {props.userDetails &&  props.userDetails.workExperience.map(item => {
                                    return (
                                        <div>
                                            <h3>Company Name : {item.companyName} </h3>
                                            <p>Designation : {item.designation}</p>
                                            <p>Work Duration : {item.workDuration} </p>
                                            <p>Currenct Working Status: {item.workingStatus} </p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='work_experience_section'>
                                <h2>EDUCATION</h2>
                                <h3>Clg Name : {props.userDetails &&  props.userDetails.clgName} </h3>
                                <p>Passed out year : {props.userDetails &&  props.userDetails.passedOutYear} </p>
                                <p>Major : {props.userDetails &&  props.userDetails.majorDegree}</p>
                                <p>Persantage obtained : {props.userDetails &&  props.userDetails.persantage} </p>
                            </div>
                        </div>
                        <div className='cv_right_section'>
                            <div className='skill_section'>
                                <h2 className='skill_title'>SKILLS</h2>
                                <div className='skills'>
                                    {props.userDetails &&  props.userDetails.skills.map(skill => <span className='skill' key={skill}>{skill}</span>)}
                                </div>
                            </div>
                            <div className='projects_section'>
                                <h2>Projects</h2>
                                {props.userDetails &&  props.userDetails.projects.map(proj => {
                                    return (
                                        <div className='each_project_details'>
                                            <h3>Project Name :  {proj.projectName} ({proj.projectDuration})</h3>
                                            <p>About project : {proj.projectDesc}</p>
                                            <p>Techknowledgey used : {proj.techknowledgeyUsed && proj.techknowledgeyUsed.map(tech =><span key={tech}>{tech}</span>)}</p>
                                            <p>Touch points : {proj.touchPoints}</p>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume;
