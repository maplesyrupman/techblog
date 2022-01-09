import React, {useEffect} from "react"

export default function Dashboard(props) {
    useEffect(() => {
        console.log(props)
    }, [])
    return (
        <div>
            <h1>Dashboard</h1>
        </div>
    )
}