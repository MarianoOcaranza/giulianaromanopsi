import React from "react";
import Banner from "../components/about/Banner";

const About: React.FC = ()=> {
    return (
        <>
            <div>
            <Banner
                    title='¿Quién soy?'
                    description="Mi nombre es Giuliana Romano, soy Licenciada en Psicología y me recibí a fines de 2023 en la Universidad Abierta Interamericana (UAI).
                    "
                    bgColor='bg-violet-700'
                    textAlign='text-left'/>
                    
             <Banner
                    title='¿En qué me especializo?'
                    description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eveniet esse nisi iure molestiae tempora numquam placeat fugit sunt doloremque magni facere, repudiandae commodi obcaecati dicta itaque dolorem corrupti vero deserunt dolores earum voluptate quod aliquid odio. Aperiam at saepe, repellat totam accusamus quia minima iste officia fugiat illum cupiditate magni veritatis eos dolorem tempora quaerat tenetur provident ducimus culpa id, laboriosam autem quos fuga? Quisquam ad quos deserunt distinctio dignissimos consectetur minima adipisci incidunt debitis in praesentium dolorum, eius voluptatem, pariatur illum atque reprehenderit autem rem expedita aliquid obcaecati animi tempore vero! Ratione perferendis obcaecati nam, impedit enim error!"
                    bgColor='bg-purple-800'
                    textAlign="text-right"/>
            </div>
        </>
    )
}

export default About;