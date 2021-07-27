import React, {useEffect, useState} from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'



const Data = () => {


    const { width, height } = useWindowSize()
    return (
        <div>
            <Confetti
                width={width}
                height={height}
                recycle={false}
            />

        </div>

    )

}

export default Data;


