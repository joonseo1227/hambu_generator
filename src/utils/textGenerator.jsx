export const transformWord = (word) => {
    return word.replace(/버/g, "부").replace(/거/g, "기");
};

export const transformAlternative = (word) => {
    if (word.length > 0) {
        return word[0] + "북"; // 첫 글자 + '북'
    }
    return "햄북"; // 예외 처리 (빈 문자열 방지)
};

export const generateSentence = (foodName) => {
    const transformed = transformWord(foodName);
    const transformedAlt = transformAlternative(foodName); // 자연스러운 '햄북' 변형

    return `${transformed}기${transformedAlt} ${transformedAlt}어 ${transformedAlt}스딱스 함부르크${transformed}가우가 ${transformedAlt}${transformed}거 ${transformed}가티${transformed}온앤 온을 차려오거라. ${transformedAlt} ${transformedAlt}어 ${transformedAlt}스딱스 함부르크${transformed}가우가 ${transformed}햄부거 ${transformed}가티${transformed}온앤 온을 차려오라고 하지 않앗느냐.`;
};