import React, { useEffect } from 'react'
import axios from 'axios'

function Data() {
    const headers = {
        'authority': 'musclewiki.com',
        'method': 'POST',
        'scheme': 'https',
        'accept': '*/*',
        'accept-encoding': 'gzip, deflate, br, zstd',
        'accept-language': 'en-us',
        'content-length': '113',
        'content-type': 'application/json',
        'cookie': '_ga=GA1.1.879228751.1726461579; _sharedid=8cb30fae-561b-499b-a22c-de51a10761c3; _cc_id=d0b96ca00410e21739bf4d4dd8120e94; panoramaId_expiry=1727066384308; panoramaId=de93f36bde5979f6e0e471248e9216d53938fe5449628558b2dad1160e5ee071; panoramaIdType=panoIndiv; cto_bundle=3X7qVl95UGt1Z2NuUFdSbFh5eURSUUgzS0NTc2NsMU9PdiUyQkEyMG5xY1hMaE8lMkZ0aU5kSzJ0JTJGcmhlMnFVOXNkWk5CQ0puYUdOYUJHcVFTRCUyRjhITm1QcSUyQkpoQXA4OG5OajJ0ak10djRETHVicHpWellqWDBzRDdNQUM0N3VUT3pGcVBGdTFQWHFpSU1Ed1FsenFWMU9LTlJNYWFBdVNUZ0lRT3hmeExHWDZuZHdlS3F5VW4xVFRYNElqMklGZ3h1S2h5Um5KZnB3Zlptb3hBbFhraXdWRFglMkJkVEdVa3hFdlU4RGo2dEFibTFxVlQyVGN2NUJBeVYlMkJFeWx1eWJQRHZ3TVFoMkp5V1c0NzRIZWlwUHUyODRJdFNRUkRnJTNEJTNE; FCNEC=%5B%5B%22AKsRol-pBdyjYFsN2jNA729zb-NG-yBWhNM8l-7ZiTDRo3yShJTaLBGT59H8YRzX1_T-AE6nH7woeOdxNqdwLtOaIQ1aC7HAOAYxHrshuxeMLltjIVD9kTxepi7AIKtLCP0dOkPz-lg1UYqfmup31vtTfyBfGr2aKg%3D%3D%22%5D%5D; _sharedid_cst=kSylLAssaw%3D%3D; _ga_KC2MH9PQJD=GS1.1.1726461579.1.1.1726462954.8.0.0',
        'django-language': 'en-us',
        'dnt': '1',
        'origin': 'https://musclewiki.com',
        'priority': 'u=1, i',
        'referer': 'https://musclewiki.com/workout-generator/generated-workout/',
        'sec-ch-ua': '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36'
      };      
    const fetch = async() => {
        const response = await axios.post('https://musclewiki.com/newapi/workout/generator/', {"equipment_id_list":[3],"muscles_id_list":[18,5,2,47,12,3,11,1,10,4,15,7,9,8,48],"gender":"M","age":"20","fitness_level":1,"mobile":false,"goal":3}, headers)
        console.log(response.data)
    }
    useEffect(()=>{
        fetch()
    })
  return (
    <></>
  )
}

export default Data