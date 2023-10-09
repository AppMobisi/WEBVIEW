import {useState, useEffect} from 'react'
import * as S from './style'

import { PageWrapper } from '../Home/styles'
import { TopBar } from '../../Components/TopBar'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { LocationCard } from '../../Components/LocationCard'
import { locations } from './mock'

interface ILocationsProps{
    url: string
    name: string
    endereco: string
    rating: number
}

const Locations = () => {
    const [nameToSearch, setNameToSearch] = useState<string>()
    const [optionsListed, setOptionsListed] = useState<ILocationsProps[]>([])

    const [optionSelected, setOptionSelected] = useState(1)

    const [foodLocations, setFoodLocations] = useState<ILocationsProps[]>([])
    const [originalFoodLocations, setOriginalFoodLocations] = useState<ILocationsProps[]>([])

    const [leisureLocations, setLeisureLocations] = useState<ILocationsProps[]>([])
    const [originalLeisureLocations, setOriginalLeisureLocations] = useState<ILocationsProps[]>([])

    const [othersLocations, setOthersLocations] = useState<ILocationsProps[]>([])
    const [originalOthersLocations, setOriginalOthersLocations] = useState<ILocationsProps[]>([])

    useEffect(() => {
      if(locations?.length > 0){
        setFoodLocations(locations)
        setOriginalFoodLocations(locations)
        setLeisureLocations(locations)
        setOriginalLeisureLocations(locations)
        setOthersLocations(locations)
        setOriginalOthersLocations(locations)
      }
    }, [locations])

    useEffect(() => {
      if(optionSelected == 1 && foodLocations?.length > 0){
        setOptionsListed(foodLocations)
      }

      if(optionSelected && leisureLocations?.length > 0){
        setOptionsListed(leisureLocations)
      }

      if(optionSelected == 3 && othersLocations?.length > 0){
        setOptionsListed(othersLocations)
      }
    }, [optionSelected, foodLocations, leisureLocations, othersLocations])

    useEffect(() => {
        if(nameToSearch?.length){
            let foodLocationsList: ILocationsProps[] = []
            let leisureLocationsList: ILocationsProps[] = []
            let othersLocationsList: ILocationsProps[] = []

            foodLocations?.map((locat) => {
              if(locat.name.toLowerCase().includes(nameToSearch.toLowerCase())){
                foodLocationsList.push(locat)
              }
            })

            leisureLocations?.map((locat) => {
              if(locat.name.toLowerCase().includes(nameToSearch.toLowerCase())){
                  leisureLocationsList.push(locat)
              }
            })

            othersLocations?.map((locat) => {
              if(locat.name.toLowerCase().includes(nameToSearch.toLowerCase())){
                  othersLocationsList.push(locat)
              }
            })

            setFoodLocations(foodLocationsList)
            setLeisureLocations(leisureLocationsList)
            setOthersLocations(othersLocationsList)
        }

        if(nameToSearch == ''){
            setFoodLocations(originalFoodLocations)
            setLeisureLocations(originalLeisureLocations)
            setOthersLocations(originalOthersLocations)
        }
    }, [nameToSearch])

    return(
        <>
            <PageWrapper>
                <TopBar />
                <S.TypographyComponent fontPeso={'600'} tamanho={'1.5rem'}>Dê uma olhada nos lugares acessíveis que preparamos!</S.TypographyComponent>
                <S.SearchContainer>
                    <S.SearchInput placeholder='Pesquisar...' onChange={(e) => setNameToSearch(e.target.value)}/>
                    <S.IconSearch />
                </S.SearchContainer>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Alimentacao"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="Alimentacao" control={<Radio onChange={() => setOptionSelected(1)}/>} label="Alimentação" />
                        <FormControlLabel value="Lazer" control={<Radio onChange={() => setOptionSelected(2)}/>} label="Lazer" />
                        <FormControlLabel value="Outros" control={<Radio onChange={() => setOptionSelected(3)}/>} label="Outros" />
                    </RadioGroup>
                </FormControl>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', width: '100%' }}>
                    <S.Subtitle fontWeight={'600'} fontSize='1.5rem'>{optionSelected == 1 ? "Alimentação:" : optionSelected == 2 ? "Lazer:" : "Outros:"}</S.Subtitle>
                    <S.LocationContainer>
                      {optionsListed.map((imageUrl) => {
                        return (
                              <LocationCard 
                                imgUrl={imageUrl.url} 
                                localName={imageUrl.name} 
                                location={imageUrl.endereco} 
                                ratingValue={imageUrl.rating} 
                              />
                        );
                        })}
                    </S.LocationContainer>
                </div>
            </PageWrapper>        
        </>
    )
} 

export {Locations}