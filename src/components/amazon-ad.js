import { useEffect, useState, useRef } from 'react'

const adLinks = [
    '//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=11YJ8637S5AKH4CXG382&f=ifr&linkID=08e8fd86579cfef991ebab7323348b14&t=orb0752-20&tracking_id=orb0752-20',
    '//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=0MFHAS4JGZKG1NG2TBR2&f=ifr&linkID=3ee6b6bc908309d82581d43796a5a3f5&t=orb0752-20&tracking_id=orb0752-20',
    '//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=15X74AK6QPKA30N38882&f=ifr&linkID=23937351ebbdacf2314db133a66d44bf&t=orb0752-20&tracking_id=orb0752-20',
    '//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=1NMV8TT9KA5964727PG2&f=ifr&linkID=6107d936d1d556dcc8cb2f05a8bbac90&t=orb0752-20&tracking_id=orb0752-20',
    '//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=16DFWSBSWAYN1H2964G2&f=ifr&linkID=1362cd9866ff31be39c0d55c07747aad&t=orb0752-20&tracking_id=orb0752-20',
    '//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=0Q6D8N3YQPZV8CS0AG02&f=ifr&linkID=bcf2cdd78b7f57dfde476456df430228&t=orb0752-20&tracking_id=orb0752-20',
    '//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=09XHX089B0VGPV5PVW82&f=ifr&linkID=977d5c444935156c14710c21802e275c&t=orb0752-20&tracking_id=orb0752-20',
    '//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=1EFYYCP1P00W77N5BDR2&f=ifr&linkID=9a9cd9824c29868a10dd18e2c7557c18&t=orb0752-20&tracking_id=orb0752-20',
    '//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=038N3ZQN7MAKSR6ESKR2&f=ifr&linkID=7734dd91e859aea9c028f44193730e38&t=orb0752-20&tracking_id=orb0752-20',
    '//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=1VKZQZ5XAC59E8KT83R2&f=ifr&linkID=0ecd09510a04af0633e71367b0770dc1&t=orb0752-20&tracking_id=orb0752-20',
    '//rcm-na.amazon-adsystem.com/e/cm?o=1&p=48&l=ur1&category=primevideo&banner=16J2A3410NSWNHBY26R2&f=ifr&linkID=8bda016612160da90644e66a2afa61d6&t=orb0752-20&tracking_id=orb0752-20'
]

const AmazonAd = () => {

    const [ad, setAd] = useState(-1)

    const loaded = useRef(false)

    useEffect(() => {
        if (loaded.current) return
        else loaded.current = true

        setAd(Math.floor(Math.random() * 11))

    }, [loaded])

    // TODO - add banner pop up (under client img) after entering features page??


    return (

        <div className='amazon-ad'>

            <iframe
                src={adLinks[ad]}
                width="728" height="90" border="0" sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation">
            </iframe>
        </div>
    )
}


export default AmazonAd

