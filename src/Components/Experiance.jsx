import React from 'react'
import { HoverEffect } from "../Components/ui/card-hover-effect";
import { projects } from "../Constants"

const Experiance = () => {
    return (
        <div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-20 tracking-wide">
                Top Skills
            </h2>
            <div className="max-w-5xl mt-10 mb-10 mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>
    )
}

export default Experiance