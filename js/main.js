function dynamicTranslate(){
    //object of array glossary_en is equal to object of array glossary_ru
    let traslateWord = document.getElementById("translate-word-area");
    let translatedWord = "";
    let outputTW = document.getElementById("output-translated-words");
    if (glossary_en.length == glossary_ru.length){
        for (let i = 0;i < glossary_en.length; i++){
            if (traslateWord.value == glossary_en[i]){
                translatedWord = glossary_ru[i];
            }
        }
    }
    if (translatedWord != ""){
        outputTW.value = translatedWord;
    }
    if (outputTW.value != translatedWord){
        outputTW.value = "";
    }
}
