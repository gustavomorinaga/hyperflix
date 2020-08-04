import React from 'react'
import { VideoCardGroupContainer, Title, ExtraLink } from './styles'
import VideoCard from './components/VideoCard'
import Slider, { SliderItem } from '../../components/Slider'

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.nome
  const categoryColor = category.cor
  const categoryDescription = category.descricao
  const videos = category.videos
  return (
    <VideoCardGroupContainer>
      {categoryTitle && (
        <>
          <Title bgColor={categoryColor} data-aos="zoom-out">
            {categoryTitle}
          </Title>
          {categoryDescription && 
            <ExtraLink data-aos="zoom-out">
              {categoryDescription}
            </ExtraLink>
          }
        </>
      )}
      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null
          }

          return (
            <SliderItem key={video.nome} className="item">
              <VideoCard
                videoTitle={video.nome}
                videoURL={video.url}
                categoryColor={categoryColor}
              />
            </SliderItem>
          )
        })}
      </Slider>
    </VideoCardGroupContainer>
  )
}

export default Carousel
