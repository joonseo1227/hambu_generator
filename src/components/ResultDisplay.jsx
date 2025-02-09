const ResultDisplay = ({ generatedText }) => {
    return generatedText ? (
        <p className="mt-4 p-4 bg-white shadow rounded">{generatedText}</p>
    ) : null;
};

export default ResultDisplay;