import React, { useState } from 'react'
import './style.css'
import { useEffect } from 'react'
const Quotes = () => {


    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        FetchData();
    }, [])

    let index = Math.floor(Math.random() * 100);

    const FetchData = async () => {



        const URL = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`
        setTimeout(async() => {
            let res = await fetch(URL);
            let data = await res.json();
            setQuotes(data.quotes);
        }, 1000);
        

        // console.log(data.quotes);


        index = Math.floor(Math.random() * 101);

        console.log(index);

        let firstValue = Math.floor(Math.random()*231);
        let secondVlue = Math.floor(Math.random()*231);
        let thirdValue = Math.floor(Math.random()*231);
        let alpha = Math.random();

        console.log({firstValue,secondVlue,thirdValue});

        document.body.style.backgroundColor = `rgb(${firstValue},${secondVlue},${thirdValue},${alpha})`
        document.body.style.color = `rgb(${firstValue},${secondVlue},${thirdValue},${alpha})`
        
        document.getElementById('new-quote').style.backgroundColor = `rgb(${firstValue},${secondVlue},${thirdValue},${alpha})`
        document.getElementById('tweet-quote').style.color = `rgb(${firstValue},${secondVlue},${thirdValue},${alpha})`
        document.getElementById('facebook').style.color = `rgb(${firstValue},${secondVlue},${thirdValue},${alpha})`

    }


    return (
        <>
            <div className='wrapper'>
                <div id='quote-box'>
                    <div className='text_wrapper'>
                        <i class="fa-solid fa-quote-left quotes"></i>
                        <div id='text'>
                            {
                                quotes[index]?.quote
                            }
                        </div>
                    </div>

                    <span id='author'>
                        - {
                            quotes[index]?.author
                        }
                    </span>

                    <div className='buttons'>

                        <div className="icons">

                            <a id="tweet-quote"href={`https://twitter.com/intent/tweet?text=${quotes[index]?.quote}`} target="_blank">
                                <i class="fa-brands fa-square-twitter"></i>
                            </a>
                            
                            <a id='facebook' target='_blank' href="https://facebook.com">
                                <i class="fa-brands fa-square-facebook"></i>
                            </a>

                        </div>

                        <button onClick={FetchData} id='new-quote'>New quote</button>

                    </div>

                </div>

            </div>

            <span className='my-name'>
               {`By Sayan`}
            </span>

        </>
    )
}

export default Quotes
