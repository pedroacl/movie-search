import React, { useState } from 'react'

import HeartIconOut from 'assets/icon-heart-white.png'
import HeartIconOver from 'assets/icon-heart-grey.png'

import * as S from './styles'

const AddToFavorites: React.FC = () => {
  const [imgSrc, setImgSrc] = useState(HeartIconOut)

  const toggleIcon = (src: string) => setImgSrc(src)

  return <S.Container onMouseOver={() => toggleIcon(HeartIconOver)} onMouseOut={() => toggleIcon(HeartIconOut)}>
    <S.StyledIcon src={imgSrc} alt="heart-icon" />
    <S.Text>Add to Favorites</S.Text>
  </S.Container>
}

export default AddToFavorites