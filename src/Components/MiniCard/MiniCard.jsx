import React from 'react'

const MiniCard = ({cardIcon, cardTitle,cardText }) => {
    
  return (
    <>
      <div className="max-w-[350px]  p-2">
        <div className="miniCardWarpper">
            <div className="cardPng text-4xl mb-4">
                <span>{cardIcon}</span>
            </div>
            <div className="card_title text-xl mb-3">
                {cardTitle}
            </div>
            <div className="cardParagraph text-base">
                {cardText}
            </div>
        </div>
      </div>
    </>
  )
}

export default MiniCard
