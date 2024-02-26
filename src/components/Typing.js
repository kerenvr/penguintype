import { useState, useEffect, useRef} from "react"; // import necessary hooks from react
function App() {
    const [quote, setQuote] = useState(""); // initialize quote state
    const [input, setInput] = useState(""); // initialize input state
    const [index, setIndex] = useState(0); // initialize index state
    ///const [seconds, setSeconds] = useState(0); // initialize seconds state
    const [wpm, setWPM] = useState(0); // initialize
    const [accuracy, setAccuracy] = useState(0); // initialize accuracy state
    let [charsTyped, setCharsTyped] = useState(0); // initialize // initialize
    let [correctCharsTyped, setCorrectCharsTyped] = useState(0); 

    const timer = useRef();
    const charsTypedRef = useRef(charsTyped);
    const correctCharsTypedRef = useRef(correctCharsTyped);
    const quoteRef = useRef(quote);


    var YOUR_API_KEY = 'EYpWZDXlR7ISaeMRx5XUnw==neB90e5wTCfywCn2'; // your API key
    var category = 'friendship'; // category for the quote

    useEffect(() => { // useEffect to fetch a quote
        fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': YOUR_API_KEY,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json()) // parse the response as JSON
        .then(result => {
            setQuote(result[0].quote); // set the quote state
        })
        .catch(error => console.error('Error:', error)); // log any error to the console
    }, []);

    useEffect(() => {
        const handleKeyDown = (e) => {
            
            charsTypedRef.current = charsTyped;
            correctCharsTypedRef.current = correctCharsTyped;
            quoteRef.current = quote;

            if (timer.current === undefined && charsTyped > 0) {
                let start = Date.now();
                timer.current = setInterval(() => {
                    let elapsedTime = Date.now() - start;
                    setWPM(Math.floor((charsTypedRef.current / 5) / (elapsedTime /60000)));
                    
                    setAccuracy(((correctCharsTypedRef.current / charsTypedRef.current) * 100).toFixed(0));
                    
                }, 500);
            }

            console.log(correctCharsTypedRef.current, quoteRef.current.length - 1); 

            if (correctCharsTypedRef.current === quoteRef.current.length - 1) {
                console.log("TRUE")
            }
            
            if (e.key.match(/^[a-z0-9.,-;"'?! ]$/i)) {
                setCharsTyped((prevCharsTyped) => prevCharsTyped + 1);
                setIndex(index + 1);
                setInput((prevInput) => prevInput + e.key);
            
                if (e.key === quote[index]) {
                    setCorrectCharsTyped((prevCorrectCharsTyped) => prevCorrectCharsTyped + 1);
                }
            } else if (e.key === "Backspace") {
                setIndex(Math.max(index - 1, 0));
                setInput((prevInput) => prevInput.slice(0, -1));
            }
        }
    
        window.addEventListener("keydown", handleKeyDown);
    
        return () => {
            window.removeEventListener("keydown", handleKeyDown); // remove the event listener
        };
    });
    
    

    return (
        <div className="App">
            <div className="font-ibm-plex-mono  text-avocado container text-2xl p-5 rounded-lg outline" id="prompt">  
                {quote.split('').map((char, index) => { // for each character in the quote
                    let color; // initialize color
                    if (index < input.length) { // if there is a corresponding character in the input
                        color = char === input[index]? 'black' : 'red'; // set the color based on whether the characters match
                    }
                    return <span key={index} style={{ color: color }}>{char}</span>; // return a span for the character
                })}
                <div className="pt-10  text-lg font-semithin text-black">WPM: {wpm} Accuracy: {accuracy} </div>
                 
            </div>
            
        
        </div>
    );
}

export default App; // export the App component
