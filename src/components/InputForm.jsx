import { useState } from "react";

const InputForm = ({ onGenerate }) => {
    const [foodName, setFoodName] = useState("");

    const handleGenerate = () => {
        if (foodName.trim()) {
            onGenerate(foodName);
        }
    };

    return (
        <div className="flex flex-col items-center">
            <input
                type="text"
                placeholder="음식 이름을 입력하세요"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                className="p-2 border rounded mb-2"
            />
            <button
                onClick={handleGenerate}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                생성하기
            </button>
        </div>
    );
};

export default InputForm;