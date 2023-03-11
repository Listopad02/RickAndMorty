import "./Pagination.css"

const Pagination = ({ prev, next, onPrevious, onNext }) => {
    const handlePrev = () => {
        onPrevious()
    }

    const handleNext = () => {
        onNext()
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    }

    return (
        <div className='pagination'>
            { prev ? 
              <button 
                  className='pagination-button'
                  onClick={() => {
                    handlePrev()
                    scrollToTop()
                  }}
              >Prev</button> : 
              null 
            }
            { next ? 
              <button 
                  className='pagination-button'
                  onClick={() => {
                    handleNext()
                    scrollToTop()
                  }}
              >Next</button> : 
              null 
            } 
        </div>
    )
}

export default Pagination