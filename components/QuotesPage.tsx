import React from 'react'
import quoteCards from '../content/Quote'

const QuotesPage = () => {
  return (
    <div className="min-h-screen bg-[#FFFFFF]">
      <section className="mx-auto min-h-[150px] min-w-screen bg-[#EDE3D2] max-w-4xl text-center mb-12 justify-center items-center flex px-4">
        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#AA7D55] font-[500]" style={{ fontFamily: 'Cormorant, serif' }}>
          The Quotes
        </h1>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-6 px-4">
        {quoteCards.map((card) => (
          <article
            key={card.id}
            className="p-6 flex items-center justify-center w-full max-w-sm h-auto min-h-[390px]"
            style={{ backgroundColor: card.bg, color: card.textColor }}
          >
            <div className="h-full w-full flex flex-col justify-between items-center text-center px-4">
              <div className="flex-1 flex items-center justify-center">
                <p className="text-sm md:text-base leading-relaxed" style={{ fontFamily: card.fontFamily }}>
                  {card.quote}
                </p>
              </div>
              <p className="text-xs md:text-sm font-semibold" style={{ fontFamily: 'Courier Prime, monospace' }}>
                {card.author}
              </p>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

export default QuotesPage