import React from 'react'

export default function Alert(props) {
    const firstWordCapital = (word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + word.slice(1)
    }
    return (
        props.alert && <div>
            <div className={` alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
                <strong> {firstWordCapital(props.alert.type)} </strong> {props.alert.messege}
            </div>
        </div>
    )
}
