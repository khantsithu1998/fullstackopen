const Course = ({ course }) => {
    const total = course.parts.reduce((acc, part) => acc + part.exercises, 0)
    return (
        <>
            <CourseHeader course={course.name} />
            <Content parts={course.parts} />
            <Total total={total} />
        </>

    )
}

const CourseHeader = ({ course }) => <h2>{course}</h2>

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part => <Part key={part.name} part={part.name} exercises={part.exercises} />)}
        </>
    )
}

const Part = ({ part, exercises }) => <p>{part} {exercises} </p>

const Total = ({ total }) => <p><strong>total of {total} exercises</strong></p>

export default Course