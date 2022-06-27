import React from "react"

export default function Card(){
    return(
        <div>
            <div className="header">
                <h1>Summer Art Camp! 5 days of Artists and Painting Monet, Van Gogh, Matisse, & More</h1>
                <p className="sub-header">Multi-Day Course <a className="in-circle" href="#">?</a></p>
            </div>
            <div className="main-container">
                <div className="info-container">
                    <div className="course-info">
                        <p>In this 5 day class we will explore artists Monet, Matisse, Van Gogh, among others and then recreate paintings using crayon and watercolor. Students will have fun learning about the artists & creating their own art inspired by their work.</p>
                    </div>
                    <div className="teacher-info">
                        <img src="/images/teacher-face.jpg" />
                        <h3>Kimberly R Moseler</h3>
                    </div>
                    <div className="teacher-rating-info small">
                        <img src="/images/star-empty.png" />
                        <img src="/images/star-empty.png" />
                        <img src="/images/star-empty.png" />
                        <img src="/images/star-empty.png" />
                        <img src="/images/star-empty.png" />
                        <p>467 total reviews for this teacher</p>
                    </div>
                    <div className="class-rating-info small">
                        <img src="/images/star-empty.png" />
                        <img src="/images/star-empty.png" />
                        <img src="/images/star-empty.png" />
                        <img src="/images/star-empty.png" />
                        <img src="/images/star-empty.png" />
                        <p>5 reviews for this class</p>
                    </div>
                    <p>Completed by 21 learners</p>
                    <div className="bottom-buttons">
                        <div className="schedule-btn btn">
                            <p>See class Schedule</p>
                            <img src="/images/chevron-right-transparent.png" />
                        </div>
                        <div className="save-btn btn small">
                            <img src="/images/heart-empty.png" />
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