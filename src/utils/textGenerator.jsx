export const transformWord = (word) => {
    return word.replace(/버/g, "부").replace(/거/g, "기");
};

export const transformAlternative = (word) => {
    if (word.length > 2) {
        return word.substring(0, 2) + "북"; // 음식 이름의 앞 두 글자를 활용
    } else {
        return word + "북"; // 단어가 짧으면 그대로 + '북' 추가
    }
};

export const generateSentence = (foodName) => {
    const transformed = transformWord(foodName);
    const transformedAlt = transformAlternative(foodName); // 자연스러운 '햄북' 변형

    return `${transformedAlt} ${transformedAlt}어 ${transformedAlt}스딱스 함부르크${transformed}가우가 ${transformed}햄부거 ${transformed}가티${transformed}온앤 온을 차려오거라. ${transformedAlt} ${transformedAlt}어 ${transformedAlt}스딱스 함부르크${transformed}가우가 ${transformed}햄부거 ${transformed}가티${transformed}온앤 온을 차려오라고 하지 않앗느냐.`;
};