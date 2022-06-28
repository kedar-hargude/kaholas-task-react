import React from "react"
import Card from "./components/Card"
import fullInfo from "./data"

export default function App(){

    const jsxData = fullInfo.data.info.map(ele => <Card 
                header = {ele.header}
                courseInfo = {ele.courseInfo}
                teacherUrl= {ele.teacherUrl}
                teacherName= {ele.teacherName}
                teacherStars= {ele.teacherStars}
                teacherReviewNumber= {ele.teacherReviewNumber}
                classStars= {ele.classStars}
                classReviewNumber= {ele.classReviewNumber}
                totalCompletedLearners= {ele.totalCompletedLearners}
                isSaved= {ele.isSaved}
        />)

    return(
        <div>
            {jsxData}
        </div>
    )
}