import React from "react"


interface Props {
    title: string;
    description: string;
    bgColor: string;
    textAlign: string;
}

const Banner: React.FC<Props> = (props) => {
    return (
        <>
        <div className={`p-6 m-7 ${props.bgColor} ${props.textAlign} rounded shadow-md shadow-gray-800`}>
           <h1 className="text-5xl text-slate-300 font-bold">{props.title}</h1>
           <p className='mt-5 text-slate-200 font-semibold text-xl whitespace-pre-line'>{props.description}</p>
        </div>
        </>
    )
}

export default Banner;