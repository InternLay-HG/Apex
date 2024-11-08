import GenderCard from "./GenderCard"
import { assets } from "../assets/assets"
import React from 'react'
import Title from "./Title"


const Cateogary = () => {
    return (
        <div className="mt-16 mb-8">
            <div className='text-center text-3xl py-8'>
                <Title
                    text={"LET YOU STYLE SPEAK"}
                />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-y-6 gap-12 place-items-center'>
                <div>
                    <GenderCard
                        title={"MEN"}
                        image={assets.about_img}
                        gender={"men"}
                    />
                </div>
                <div><GenderCard
                    title={"WOMEN"}
                    image={assets.about_img}
                    gender={"women"}
                /></div>
                <div><GenderCard
                    title={"KIDS"}
                    image={assets.about_img}
                    gender={"kids"}
                /></div>
            </div>
        </div>
    )
}

export default Cateogary
