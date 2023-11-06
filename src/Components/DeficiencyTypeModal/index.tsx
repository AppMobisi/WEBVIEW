import * as S from './style'

interface IModalProps{
    isOpen: boolean
    deficiencyType?: string
    description?: string
    handleClose?: () => void
}

const DeficiencyTypeModal = ({isOpen, deficiencyType, description, handleClose}:IModalProps) => {

    return(
        <>
            <S.Container open={isOpen} onClose={handleClose}>
                <S.InfoContainer>
                    <S.Title fontPeso='500'>{deficiencyType}</S.Title>
                    <S.SubTitle>{description}</S.SubTitle>
                </S.InfoContainer>
            </S.Container>
        </>
    )
}

export {DeficiencyTypeModal}