import {useState, useEffect} from 'react';
import axios from "axios";

function Hero() {
    const [quote, setQuote] = useState('Loading...')
    const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
    const apiKey = '85DxvKGL6U2/z9wD3y6osg==28OXOxy9dO76HUYq';

    useEffect(() => {
        axios.get(url, {
            headers: {
                'X-Api-Key': apiKey
            }
        }).then((res) => {
            setQuote(res.data[0].quote);
        });

    }, []);

    return (
        <section className="hero">
            <div className="image"></div>
            <div className="hero-text">
                <h4>Software Developer</h4>
                <p>Code the world...</p>
                <p className="text-center">{quote}</p>
            </div>
            <div>
            </div>
        </section>
    )
}

export default Hero;