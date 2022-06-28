import React from "react"

export default function Card(props){

    const [saved, setSaved] = React.useState(props.isSaved);

    function toggleSave(){
        setSaved(prevState => !prevState)
    }

    console.log(props.teacherStars);
    console.log(props.classStars);

    const filledStarsTeacher = [...Array(Math.round(props.teacherStars))].map(ele => <img src="/images/star-filled.png" />)
    const emptyStarsTeacher = [...Array(5 - Math.round(props.teacherStars))].map(ele => <img src="/images/star-empty.png" />)

    const filledStarsClass = [...Array(Math.round(props.classStars))].map(ele => <img src="/images/star-filled.png" />)
    const emptyStarsClass = [...Array(5 - Math.round(props.classStars))].map(ele => <img src="/images/star-empty.png" />)
    

    return(
        <div>
            <div className="header">
                <h1>{props.header}</h1>
                <p className="sub-header">Multi-Day Course <a className="in-circle" href="#">?</a></p>
            </div>
            <div className="main-container">
                <div className="info-container">
                    <div className="course-info">
                        <p>{props.courseInfo}</p>
                    </div>
                    <div className="teacher-info">
                        <img src={`/images/${props.teacherUrl}`} />
                        <h3>{props.teacherName}</h3>
                    </div>
                    <div className="teacher-rating-info small">
                        {filledStarsTeacher}
                        {emptyStarsTeacher}
                        <p>{props.teacherReviewNumber} total reviews for this teacher</p>
                    </div>
                    <div className="class-rating-info small">
                        {filledStarsClass}
                        {emptyStarsClass}
                        <p>{props.classReviewNumber} reviews for this class</p>
                    </div>
                    <p>Completed by {props.totalCompletedLearners} learners</p>
                    <div className="bottom-buttons">
                        <div className="schedule-btn btn">
                            <p>See class Schedule</p>
                            <img src="/images/chevron-right-transparent.png" />
                        </div>
                        <div onClick={toggleSave} className="save-btn btn small">
                            <img src={`/images/${saved? "heart-empty.png" : "heart-filled.png"}`} />
                            <p>Save</p>
                        </div>
                        <div className="share-btn btn small">
                            <img src="/images/share-icon.png" />
                            <p>Share</p>
                        </div>
                    </div>

                </div>
                <div className="image-grid">
                    {/* <img className="item-1" src="https://colourlex.com/wp-content/uploads/2020/06/Van-Gogh-Starry-Night-700.jpg.webp"></img> */}
                    <div className="item-1" style={{backgroundImage: `url("https://images.unsplash.com/photo-1515405295579-ba7b45403062?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80")`}}></div>
                    <div className="item-2" style={{backgroundImage: `url("https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80")`}}></div>
                    <div style={{backgroundImage: `url("https://images.unsplash.com/photo-1549834185-bd9f078a5dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")`}}></div>
                </div>
            </div>
        </div>
    )
}