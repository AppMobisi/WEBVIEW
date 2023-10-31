import {useEffect} from 'react'
import { useParams } from "react-router-dom"
import { PageWrapper } from "../Home/styles"

import { GetProducts } from "../../Services/functions"

const Classification = () => {
    const {id} = useParams()

    const GetImage = async () => {
        const image = await GetProducts(Number(id))
        console.log(image)
    }

    useEffect(() => {
        GetImage()
    }, [])

    return(
        <>
            <PageWrapper>
                <h1>{id}</h1>
            </PageWrapper>
        </>
    )
}

export {Classification}