import { useEffect,  useRef } from 'react'

const atOptions = {
    'key': 'cf7796f1d418708610603cec6c04d178',
    'format': 'iframe',
    'height': 90,
    'width': 728,
    'params': {}
};

const Adsterra = () => {

    const banner = useRef();

    const loaded = useRef(false)

    useEffect(() => {
        if (loaded.current) return
        else loaded.current = true

        const conf = document.createElement("script");
        const script = document.createElement("script");

        script.type = "text/javascript";
        script.src = `//www.profitabledisplaynetwork.com/cf7796f1d418708610603cec6c04d178/invoke.js`;
        conf.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;

        if (banner.current) {
            banner.current.append(conf);
            banner.current.append(script);
        }
    }, [loaded, banner])



    return (
        <div className='adsterra-banner' ref={banner} />
    )
}


export default Adsterra

