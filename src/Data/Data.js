import React, {useEffect, useState} from 'react'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import LineGraph from "./LineGraph";
import PieCharts from "./PieCharts";
import "./Data.css"
import {Container} from "@material-ui/core";



const Data = () => {


    const { width, height } = useWindowSize()
    return (
        <div>
            <Confetti
                width={width}
                height={height}
                recycle={false}
            />
            <Container>
                <LineGraph/>
                <PieCharts/>
                <p>
                    Overall, happiness levels are high! Keep on doing you! Push through it!
                </p>
            </Container>


        </div>

    )

}

export default Data;


