import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-map'

const Yandexmaps = () => {

    return (
        <YMaps>
            <div>
                <Map
                    defaultState={{
                        center: [
                            42.875969, 74.603701
                        ],
                        zoom: 6
                    }}

                    style={{ width : "669px" , height : "694px" }}

                >
                    <Placemark geometry={[
                        42.875969, 74.603701
                    ]} 
                    />
                </Map>
            </div>
        </YMaps>
    )
}

export default Yandexmaps