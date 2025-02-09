import {useState} from "react";
import InputForm from "./components/InputForm";
import ResultDisplay from "./components/ResultDisplay";
import {generateSentence} from "./utils/textGenerator";
import {BrowserRouter as Router} from "react-router-dom";

export default function App() {
    const [generatedText, setGeneratedText] = useState("");

    const handleGenerate = (foodName) => {
        setGeneratedText(generateSentence(foodName));
    };

    return (
        <Router basename={import.meta.env.VITE_PUBLIC_URL || "/"}>
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">🍔 햄부기 생성기 🍔</h1>
                <InputForm onGenerate={handleGenerate}/>
                <ResultDisplay generatedText={generatedText}/>
            </div>
        </Router>
    );
}