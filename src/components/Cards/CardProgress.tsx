import React from 'react'

const CardProgress = () => {
  return (
    <>
        <div className="card w-full shadow-lg">
            <div className="card-body text-center">
                <h1>HTML</h1>
                <div className="radial-progress" style={{"--value":70}} role="progressbar">70%</div>
            </div>
        </div>
    </>
  )
}

export default CardProgress