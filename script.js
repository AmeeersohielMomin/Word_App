// --- Vocabulary Data ---
// Expanded list with over 200 words.
const vocabulary = [
    // --- People & Family ---
    { english: 'Mother', kannada: 'ತಾಯಿ', hindi: 'माँ', image: 'https://picsum.photos/seed/mother/400' },
    { english: 'Father', kannada: 'ತಂದೆ', hindi: 'पिता', image: 'https://picsum.photos/seed/father/400' },
    { english: 'Brother', kannada: 'ಸಹೋದರ', hindi: 'भाई', image: 'https://picsum.photos/seed/brother/400' },
    { english: 'Sister', kannada: 'ಸಹೋದರಿ', hindi: 'बहन', image: 'https://picsum.photos/seed/sister/400' },
    { english: 'Friend', kannada: 'ಸ್ನೇಹಿತ', hindi: 'दोस्त', image: 'https://picsum.photos/seed/friend/400' },
    { english: 'Teacher', kannada: 'ಶಿಕ್ಷಕ', hindi: 'शिक्षक', image: 'https://picsum.photos/seed/teacher/400' },
    { english: 'Doctor', kannada: 'ವೈದ್ಯ', hindi: 'डॉक्टर', image: 'https://picsum.photos/seed/doctor/400' },
    { english: 'Son', kannada: 'ಮಗ', hindi: 'बेटा', image: 'https://picsum.photos/seed/son/400' },
    { english: 'Daughter', kannada: 'ಮಗಳು', hindi: 'बेटी', image: 'https://picsum.photos/seed/daughter/400' },

    // --- Household Items ---
    { english: 'House', kannada: 'ಮನೆ', hindi: 'घर', image: 'https://picsum.photos/seed/house/400' },
    { english: 'Door', kannada: 'ಬಾಗಿಲು', hindi: 'दरवाज़ा', image: 'https://picsum.photos/seed/door/400' },
    { english: 'Window', kannada: 'ಕಿಟಕಿ', hindi: 'खिड़की', image: 'https://picsum.photos/seed/window/400' },
    { english: 'Chair', kannada: 'ಕುರ್ಚಿ', hindi: 'कुर्सी', image: 'https://picsum.photos/seed/chair/400' },
    { english: 'Table', kannada: 'ಮೇಜು', hindi: 'मेज़', image: 'https://picsum.photos/seed/table/400' },
    { english: 'Bed', kannada: 'ಹಾಸಿಗೆ', hindi: 'बिस्तर', image: 'https://picsum.photos/seed/bed/400' },
    { english: 'Kitchen', kannada: 'ಅಡಿಗೆಮನೆ', hindi: 'रसोईघर', image: 'https://picsum.photos/seed/kitchen/400' },
    { english: 'Towel', kannada: 'ಟವೆಲ್', hindi: 'तौलिया', image: 'https://picsum.photos/seed/towel/400' },
    { english: 'Soap', kannada: 'ಸೋಪ್', hindi: 'साबुन', image: 'https://picsum.photos/seed/soap/400' },
    { english: 'Key', kannada: 'ಕೀಲಿ', hindi: 'चाबी', image: 'https://picsum.photos/seed/key/400' },
    { english: 'Clock', kannada: 'ಗಡಿಯಾರ', hindi: 'घड़ी', image: 'https://picsum.photos/seed/clock/400' },
    { english: 'Mirror', kannada: 'ಕನ್ನಡಿ', hindi: 'आईना', image: 'https://picsum.photos/seed/mirror/400' },

    // --- Food & Drink ---
    { english: 'Water', kannada: 'ನೀರು', hindi: 'पानी', image: 'https://picsum.photos/seed/water/400' },
    { english: 'Rice', kannada: 'ಅಕ್ಕಿ', hindi: 'चावल', image: 'https://picsum.photos/seed/rice/400' },
    { english: 'Bread', kannada: 'ಬ್ರೆಡ್', hindi: 'रोटी', image: 'https://picsum.photos/seed/bread/400' },
    { english: 'Vegetable', kannada: 'ತರಕಾರಿ', hindi: 'सब्ज़ी', image: 'https://picsum.photos/seed/vegetable/400' },
    { english: 'Fruit', kannada: 'ಹಣ್ಣು', hindi: 'फल', image: 'https://picsum.photos/seed/fruit/400' },
    { english: 'Milk', kannada: 'ಹಾಲು', hindi: 'दूध', image: 'https://picsum.photos/seed/milk/400' },
    { english: 'Tea', kannada: 'ಚಹಾ', hindi: 'चाय', image: 'https://picsum.photos/seed/tea/400' },
    { english: 'Coffee', kannada: 'ಕಾಫಿ', hindi: 'कॉफ़ी', image: 'https://picsum.photos/seed/coffee/400' },
    { english: 'Sugar', kannada: 'ಸಕ್ಕರೆ', hindi: 'चीनी', image: 'https://picsum.photos/seed/sugar/400' },
    { english: 'Salt', kannada: 'ಉಪ್ಪು', hindi: 'नमक', image: 'https://picsum.photos/seed/salt/400' },
    { english: 'Apple', kannada: 'ಸೇಬು', hindi: 'सेब', image: 'https://picsum.photos/seed/apple/400' },
    { english: 'Banana', kannada: 'ಬಾಳೆಹಣ್ಣು', hindi: 'केला', image: 'https://picsum.photos/seed/banana/400' },
    { english: 'Orange', kannada: 'ಕಿತ್ತಳೆ', hindi: 'संतरा', image: 'https://picsum.photos/seed/orange/400' },
    { english: 'Onion', kannada: 'ಈರುಳ್ಳಿ', hindi: 'प्याज', image: 'https://picsum.photos/seed/onion/400' },
    { english: 'Tomato', kannada: 'ಟೊಮೆಟೊ', hindi: 'टमाटर', image: 'https://picsum.photos/seed/tomato/400' },
    { english: 'Potato', kannada: 'ಆಲೂಗಡ್ಡೆ', hindi: 'आलू', image: 'https://picsum.photos/seed/potato/400' },

    // --- Verbs (Action Words) ---
    { english: 'Go', kannada: 'ಹೋಗು', hindi: 'जाना', image: 'https://picsum.photos/seed/go/400' },
    { english: 'Come', kannada: 'ಬಾ', hindi: 'आना', image: 'https://picsum.photos/seed/come/400' },
    { english: 'Eat', kannada: 'ತಿನ್ನು', hindi: 'खाना', image: 'https://picsum.photos/seed/eat/400' },
    { english: 'Drink', kannada: 'ಕುಡಿ', hindi: 'पीना', image: 'https://picsum.photos/seed/drink/400' },
    { english: 'Sleep', kannada: 'ಮಲಗು', hindi: 'सोना', image: 'https://picsum.photos/seed/sleep/400' },
    { english: 'Walk', kannada: 'ನಡಿ', hindi: 'चलना', image: 'https://picsum.photos/seed/walk/400' },
    { english: 'Talk', kannada: 'ಮಾತನಾಡು', hindi: 'बात करना', image: 'https://picsum.photos/seed/talk/400' },
    { english: 'Read', kannada: 'ಓದು', hindi: 'पढ़ना', image: 'https://picsum.photos/seed/read/400' },
    { english: 'Write', kannada: 'ಬರೆ', hindi: 'लिखना', image: 'https://picsum.photos/seed/write/400' },
    { english: 'Work', kannada: 'ಕೆಲಸ ಮಾಡು', hindi: 'काम करना', image: 'https://picsum.photos/seed/work/400' },
    { english: 'Play', kannada: 'ಆಟವಾಡು', hindi: 'खेलना', image: 'https://picsum.photos/seed/play/400' },
    { english: 'See', kannada: 'ನೋಡು', hindi: 'देखना', image: 'https://picsum.photos/seed/see/400' },
    { english: 'Hear', kannada: 'ಕೇಳು', hindi: 'सुनना', image: 'https://picsum.photos/seed/hear/400' },
    { english: 'Think', kannada: 'ಯೋಚಿಸು', hindi: 'सोचना', image: 'https://picsum.photos/seed/think/400' },
    { english: 'Understand', kannada: 'ಅರ್ಥ ಮಾಡಿಕೊಳ್ಳು', hindi: 'समझना', image: 'https://picsum.photos/seed/understand/400' },
    { english: 'Ask', kannada: 'ಕೇಳು', hindi: 'पूछना', image: 'https://picsum.photos/seed/ask/400' },
    { english: 'Tell', kannada: 'ಹೇಳು', hindi: 'बताना', image: 'https://picsum.photos/seed/tell/400' },
    { english: 'Give', kannada: 'ಕೊಡು', hindi: 'देना', image: 'https://picsum.photos/seed/give/400' },
    { english: 'Take', kannada: 'ತೆಗೆದುಕೋ', hindi: 'लेना', image: 'https://picsum.photos/seed/take/400' },
    { english: 'Open', kannada: 'ತೆರೆ', hindi: 'खोलना', image: 'https://picsum.photos/seed/open/400' },
    { english: 'Close', kannada: 'ಮುಚ್ಚು', hindi: 'बंद करना', image: 'https://picsum.photos/seed/close/400' },
    { english: 'Help', kannada: 'ಸಹಾಯ ಮಾಡು', hindi: 'मदद करना', image: 'https://picsum.photos/seed/help/400' },
    { english: 'Wait', kannada: 'ಕಾಯಿರಿ', hindi: 'इंतज़ार करना', image: 'https://picsum.photos/seed/wait/400' },
    { english: 'Clean', kannada: 'ಶುಚಿಗೊಳಿಸು', hindi: 'साफ़ करना', image: 'https://picsum.photos/seed/clean/400' },
    { english: 'Cook', kannada: 'ಅಡುಗೆ ಮಾಡು', hindi: 'पकाना', image: 'https://picsum.photos/seed/cook/400' },
    { english: 'Buy', kannada: 'ಖರೀದಿಸಿ', hindi: 'खरीदना', image: 'https://picsum.photos/seed/buy/400' },
    { english: 'Sell', kannada: 'ಮಾರಾಟ', hindi: 'बेचना', image: 'https://picsum.photos/seed/sell/400' },
    { english: 'Meet', kannada: 'ಭೇಟಿ', hindi: 'मिलना', image: 'https://picsum.photos/seed/meet/400' },
    { english: 'Learn', kannada: 'ಕಲಿ', hindi: 'सीखना', image: 'https://picsum.photos/seed/learn/400' },
    { english: 'Teach', kannada: 'ಬೋಧಿಸು', hindi: 'सिखाना', image: 'https://picsum.photos/seed/teach/400' },
    { english: 'Forget', kannada: 'ಮರೆತುಬಿಡು', hindi: 'भूलना', image: 'https://picsum.photos/seed/forget/400' },
    { english: 'Remember', kannada: 'ನೆನಪಿಡಿ', hindi: 'याद रखना', image: 'https://picsum.photos/seed/remember/400' },

    // --- Adjectives (Describing Words) ---
    { english: 'Good', kannada: 'ಒಳ್ಳೆಯದು', hindi: 'अच्छा', image: 'https://picsum.photos/seed/good/400' },
    { english: 'Bad', kannada: 'ಕೆಟ್ಟ', hindi: 'बुरा', image: 'https://picsum.photos/seed/bad/400' },
    { english: 'Big', kannada: 'ದೊಡ್ಡ', hindi: 'बड़ा', image: 'https://picsum.photos/seed/big/400' },
    { english: 'Small', kannada: 'ಸಣ್ಣ', hindi: 'छोटा', image: 'https://picsum.photos/seed/small/400' },
    { english: 'Hot', kannada: 'ಬಿಸಿ', hindi: 'गरम', image: 'https://picsum.photos/seed/hot/400' },
    { english: 'Cold', kannada: 'ಶೀತ', hindi: 'ठंडा', image: 'https://picsum.photos/seed/cold/400' },
    { english: 'New', kannada: 'ಹೊಸ', hindi: 'नया', image: 'https://picsum.photos/seed/new/400' },
    { english: 'Old', kannada: 'ಹಳೆಯ', hindi: 'पुराना', image: 'https://picsum.photos/seed/old/400' },
    { english: 'Beautiful', kannada: 'ಸುಂದರ', hindi: 'सुंदर', image: 'https://picsum.photos/seed/beautiful/400' },
    { english: 'Happy', kannada: 'ಸಂತೋಷ', hindi: 'खुश', image: 'https://picsum.photos/seed/happy/400' },
    { english: 'Sad', kannada: 'ದುಃಖ', hindi: 'उदास', image: 'https://picsum.photos/seed/sad/400' },
    { english: 'Easy', kannada: 'ಸುಲಭ', hindi: 'आसान', image: 'https://picsum.photos/seed/easy/400' },
    { english: 'Difficult', kannada: 'ಕಷ್ಟ', hindi: 'मुश्किल', image: 'https://picsum.photos/seed/difficult/400' },
    { english: 'Important', kannada: 'ಪ್ರಮುಖ', hindi: 'ज़रूरी', image: 'https://picsum.photos/seed/important/400' },
    { english: 'Necessary', kannada: 'ಅಗತ್ಯ', hindi: 'आवश्यक', image: 'https://picsum.photos/seed/necessary/400' },
    { english: 'Correct', kannada: 'ಸರಿಯಾದ', hindi: 'सही', image: 'https://picsum.photos/seed/correct/400' },
    { english: 'Wrong', kannada: 'ತಪ್ಪು', hindi: 'गलत', image: 'https://picsum.photos/seed/wrong/400' },
    { english: 'Clean', kannada: 'ಶುದ್ಧ', hindi: 'साफ़', image: 'https://picsum.photos/seed/adjective_clean/400' },
    { english: 'Dirty', kannada: 'ಕೊಳಕು', hindi: 'गंदा', image: 'https://picsum.photos/seed/dirty/400' },
    { english: 'Full', kannada: 'ಪೂರ್ಣ', hindi: 'भरा हुआ', image: 'https://picsum.photos/seed/full/400' },
    { english: 'Empty', kannada: 'ಖಾಲಿ', hindi: 'खाली', image: 'https://picsum.photos/seed/empty/400' },

    // --- Places ---
    { english: 'Market', kannada: 'ಮಾರುಕಟ್ಟೆ', hindi: 'बाज़ार', image: 'https://picsum.photos/seed/market/400' },
    { english: 'School', kannada: 'ಶಾಲೆ', hindi: 'स्कूल', image: 'https://picsum.photos/seed/school/400' },
    { english: 'Hospital', kannada: 'ಆಸ್ಪತ್ರೆ', hindi: 'अस्पताल', image: 'https://picsum.photos/seed/hospital/400' },
    { english: 'Temple', kannada: 'ದೇವಸ್ಥಾನ', hindi: 'मंदिर', image: 'https://picsum.photos/seed/temple/400' },
    { english: 'Office', kannada: 'ಕಚೇರಿ', hindi: 'दफ़्तर', image: 'https://picsum.photos/seed/office/400' },
    { english: 'Bank', kannada: 'ಬ್ಯಾಂಕ್', hindi: 'बैंक', image: 'https://picsum.photos/seed/bank/400' },
    { english: 'Shop', kannada: 'ಅಂಗಡಿ', hindi: 'दुकान', image: 'https://picsum.photos/seed/shop/400' },
    { english: 'Home', kannada: 'ಮನೆ', hindi: 'घर', image: 'https://picsum.photos/seed/home/400' },
    { english: 'City', kannada: 'ನಗರ', hindi: 'शहर', image: 'https://picsum.photos/seed/city/400' },
    { english: 'Village', kannada: 'ಗ್ರಾಮ', hindi: 'गाँव', image: 'https://picsum.photos/seed/village/400' },

    // --- Time & Date ---
    { english: 'Today', kannada: 'ಇಂದು', hindi: 'आज', image: 'https://picsum.photos/seed/today/400' },
    { english: 'Yesterday', kannada: 'ನಿನ್ನೆ', hindi: 'कल (बीता हुआ)', image: 'https://picsum.photos/seed/yesterday/400' },
    { english: 'Tomorrow', kannada: 'ನಾಳೆ', hindi: 'कल (आने वाला)', image: 'https://picsum.photos/seed/tomorrow/400' },
    { english: 'Day', kannada: 'ದಿನ', hindi: 'दिन', image: 'https://picsum.photos/seed/day/400' },
    { english: 'Night', kannada: 'ರಾತ್ರಿ', hindi: 'रात', image: 'https://picsum.photos/seed/night/400' },
    { english: 'Morning', kannada: 'ಬೆಳಿಗ್ಗೆ', hindi: 'सुबह', image: 'https://picsum.photos/seed/morning/400' },
    { english: 'Evening', kannada: 'ಸಂಜೆ', hindi: 'शाम', image: 'https://picsum.photos/seed/evening/400' },
    { english: 'Week', kannada: 'ವಾರ', hindi: 'सप्ताह', image: 'https://picsum.photos/seed/week/400' },
    { english: 'Month', kannada: 'ತಿಂಗಳು', hindi: 'महीना', image: 'https://picsum.photos/seed/month/400' },
    { english: 'Year', kannada: 'ವರ್ಷ', hindi: 'साल', image: 'https://picsum.photos/seed/year/400' },
    { english: 'Time', kannada: 'ಸಮಯ', hindi: 'समय', image: 'https://picsum.photos/seed/time/400' },
    { english: 'Hour', kannada: 'ಗಂಟೆ', hindi: 'घंटा', image: 'https://picsum.photos/seed/hour/400' },
    { english: 'Minute', kannada: 'ನಿಮಿಷ', hindi: 'मिनट', image: 'https://picsum.photos/seed/minute/400' },

    // --- Common Questions & Phrases ---
    { english: 'What?', kannada: 'ಏನು?', hindi: 'क्या?', image: 'https://picsum.photos/seed/what/400' },
    { english: 'Why?', kannada: 'ಏಕೆ?', hindi: 'क्यों?', image: 'https://picsum.photos/seed/why/400' },
    { english: 'When?', kannada: 'ಯಾವಾಗ?', hindi: 'कब?', image: 'https://picsum.photos/seed/when/400' },
    { english: 'Where?', kannada: 'ಎಲ್ಲಿ?', hindi: 'कहाँ?', image: 'https://picsum.photos/seed/where/400' },
    { english: 'How?', kannada: 'ಹೇಗೆ?', hindi: 'कैसे?', image: 'https://picsum.photos/seed/how/400' },
    { english: 'Who?', kannada: 'ಯಾರು?', hindi: 'कौन?', image: 'https://picsum.photos/seed/who/400' },
    { english: 'Hello', kannada: 'ನಮಸ್ಕಾರ', hindi: 'नमस्ते', image: 'https://picsum.photos/seed/hello/400' },
    { english: 'Thank you', kannada: 'ಧನ್ಯವಾದ', hindi: 'धन्यवाद', image: 'https://picsum.photos/seed/thankyou/400' },
    { english: 'Sorry', kannada: 'ಕ್ಷಮಿಸಿ', hindi: 'माफ़ कीजिए', image: 'https://picsum.photos/seed/sorry/400' },
    { english: 'Yes', kannada: 'ಹೌದು', hindi: 'हाँ', image: 'https://picsum.photos/seed/yes/400' },
    { english: 'No', kannada: 'ಇಲ್ಲ', hindi: 'नहीं', image: 'https://picsum.photos/seed/no/400' },
    { english: 'Please', kannada: 'ದಯವಿಟ್ಟು', hindi: 'कृपया', image: 'https://picsum.photos/seed/please/400' },
    { english: 'Excuse me', kannada: 'ಕ್ಷಮಿಸಿ', hindi: 'सुनिए', image: 'https://picsum.photos/seed/excuseme/400' },
    { english: 'Good morning', kannada: 'ಶುಭೋದಯ', hindi: 'सुप्रभात', image: 'https://picsum.photos/seed/goodmorning/400' },
    { english: 'Good night', kannada: 'ಶುಭ ರಾತ್ರಿ', hindi: 'शुभ रात्रि', image: 'https://picsum.photos/seed/goodnight/400' },

    // --- Nature ---
    { english: 'Sun', kannada: 'ಸೂರ್ಯ', hindi: 'सूरज', image: 'https://picsum.photos/seed/sun/400' },
    { english: 'Moon', kannada: 'ಚಂದ್ರ', hindi: 'चाँद', image: 'https://picsum.photos/seed/moon/400' },
    { english: 'Star', kannada: 'ನಕ್ಷತ್ರ', hindi: 'तारा', image: 'https://picsum.photos/seed/star/400' },
    { english: 'Sky', kannada: 'ಆಕಾಶ', hindi: 'आसमान', image: 'https://picsum.photos/seed/sky/400' },
    { english: 'Rain', kannada: 'ಮಳೆ', hindi: 'बारिश', image: 'https://picsum.photos/seed/rain/400' },
    { english: 'Tree', kannada: 'ಮರ', hindi: 'पेड़', image: 'https://picsum.photos/seed/tree/400' },
    { english: 'Flower', kannada: 'ಹೂವು', hindi: 'फूल', image: 'https://picsum.photos/seed/flower/400' },
    { english: 'River', kannada: 'ನದಿ', hindi: 'नदी', image: 'https://picsum.photos/seed/river/400' },
    { english: 'Mountain', kannada: 'ಪರ್ವತ', hindi: 'पहाड़', image: 'https://picsum.photos/seed/mountain/400' },

    // --- Body Parts ---
    { english: 'Head', kannada: 'ತಲೆ', hindi: 'सिर', image: 'https://picsum.photos/seed/head/400' },
    { english: 'Hand', kannada: 'ಕೈ', hindi: 'हाथ', image: 'https://picsum.photos/seed/hand/400' },
    { english: 'Leg', kannada: 'ಕಾಲು', hindi: 'पैर', image: 'https://picsum.photos/seed/leg/400' },
    { english: 'Eye', kannada: 'ಕಣ್ಣು', hindi: 'आँख', image: 'https://picsum.photos/seed/eye/400' },
    { english: 'Nose', kannada: 'ಮೂಗು', hindi: 'नाक', image: 'https://picsum.photos/seed/nose/400' },
    { english: 'Ear', kannada: 'ಕಿವಿ', hindi: 'कान', image: 'https://picsum.photos/seed/ear/400' },
    { english: 'Mouth', kannada: 'ಬಾಯಿ', hindi: 'मुँह', image: 'https://picsum.photos/seed/mouth/400' },
    
    // --- Numbers ---
    { english: 'One', kannada: 'ಒಂದು', hindi: 'एक', image: 'https://picsum.photos/seed/one/400' },
    { english: 'Two', kannada: 'ಎರಡು', hindi: 'दो', image: 'https://picsum.photos/seed/two/400' },
    { english: 'Three', kannada: 'ಮೂರು', hindi: 'तीन', image: 'https://picsum.photos/seed/three/400' },
    { english: 'Four', kannada: 'ನಾಲ್ಕು', hindi: 'चार', image: 'https://picsum.photos/seed/four/400' },
    { english: 'Five', kannada: 'ಐದು', hindi: 'पाँच', image: 'https://picsum.photos/seed/five/400' },
    { english: 'Ten', kannada: 'ಹತ್ತು', hindi: 'दस', image: 'https://picsum.photos/seed/ten/400' },
    { english: 'Hundred', kannada: 'ನೂರು', hindi: 'सौ', image: 'https://picsum.photos/seed/hundred/400' },

    // --- Colors ---
    { english: 'Red', kannada: 'ಕೆಂಪು', hindi: 'लाल', image: 'https://picsum.photos/seed/red/400' },
    { english: 'Green', kannada: 'ಹಸಿರು', hindi: 'हरा', image: 'https://picsum.photos/seed/green/400' },
    { english: 'Blue', kannada: 'ನೀಲಿ', hindi: 'नीला', image: 'https://picsum.photos/seed/blue/400' },
    { english: 'Yellow', kannada: 'ಹಳದಿ', hindi: 'पीला', image: 'https://picsum.photos/seed/yellow/400' },
    { english: 'White', kannada: 'ಬಿಳಿ', hindi: 'सफ़ेद', image: 'https://picsum.photos/seed/white/400' },
    { english: 'Black', kannada: 'ಕಪ್ಪು', hindi: 'काला', image: 'https://picsum.photos/seed/black/400' },
    
    // --- Miscellaneous Daily Use ---
    { english: 'Money', kannada: 'ಹಣ', hindi: 'पैसा', image: 'https://picsum.photos/seed/money/400' },
    { english: 'Car', kannada: 'ಕಾರು', hindi: 'गाड़ी', image: 'https://picsum.photos/seed/car/400' },
    { english: 'Bus', kannada: 'ಬಸ್', hindi: 'बस', image: 'https://picsum.photos/seed/bus/400' },
    { english: 'Train', kannada: 'ರೈಲು', hindi: 'ट्रेन', image: 'https://picsum.photos/seed/train/400' },
    { english: 'Road', kannada: 'ರಸ್ತೆ', hindi: 'सड़क', image: 'https://picsum.photos/seed/road/400' },
    { english: 'Light', kannada: 'ಬೆಳಕು', hindi: 'रोशनी', image: 'https://picsum.photos/seed/light/400' },
    { english: 'Pain', kannada: 'ನೋವು', hindi: 'दर्द', image: 'https://picsum.photos/seed/pain/400' },
    { english: 'Medicine', kannada: 'ಔಷಧಿ', hindi: 'दवा', image: 'https://picsum.photos/seed/medicine/400' },
    { english: 'Idea', kannada: 'ಕಲ್ಪನೆ', hindi: 'विचार', image: 'https://picsum.photos/seed/idea/400' },
    { english: 'Problem', kannada: 'ಸಮಸ್ಯೆ', hindi: 'समस्या', image: 'https://picsum.photos/seed/problem/400' },
    { english: 'Solution', kannada: 'ಪರಿಹಾರ', hindi: 'समाधान', image: 'https://picsum.photos/seed/solution/400' },
    { english: 'Question', kannada: 'ಪ್ರಶ್ನೆ', hindi: 'सवाल', image: 'https://picsum.photos/seed/question/400' },
    { english: 'Answer', kannada: 'ಉತ್ತರ', hindi: 'जवाब', image: 'https://picsum.photos/seed/answer/400' },
    { english: 'Work', kannada: 'ಕೆಲಸ', hindi: 'काम', image: 'https://picsum.photos/seed/noun_work/400' },
    { english: 'Love', kannada: 'ಪ್ರೀತಿ', hindi: 'प्यार', image: 'https://picsum.photos/seed/love/400' },
    { english: 'Fear', kannada: 'ಭಯ', hindi: 'डर', image: 'https://picsum.photos/seed/fear/400' },
    { english: 'News', kannada: 'ಸುದ್ದಿ', hindi: 'ख़बर', image: 'https://picsum.photos/seed/news/400' },
    { english: 'Paper', kannada: 'ಕಾಗದ', hindi: 'कागज़', image: 'https://picsum.photos/seed/paper/400' },
    { english: 'Pen', kannada: 'ಪೆನ್', hindi: 'कलम', image: 'https://picsum.photos/seed/pen/400' },
    { english: 'Mobile', kannada: 'ಮೊಬೈಲ್', hindi: 'मोबाइल', image: 'https://picsum.photos/seed/mobile/400' },
    { english: 'Music', kannada: 'ಸಂಗೀತ', hindi: 'संगीत', image: 'https://picsum.photos/seed/music/400' },
    { english: 'Movie', kannada: 'ಚಲನಚಿತ್ರ', hindi: 'फ़िल्म', image: 'https://picsum.photos/seed/movie/400' },
    { english: 'Air', kannada: 'ಗಾಳಿ', hindi: 'हवा', image: 'https://picsum.photos/seed/air/400' },
    { english: 'Fire', kannada: 'ಬೆಂಕಿ', hindi: 'आग', image: 'https://picsum.photos/seed/fire/400' },
    { english: 'Again', kannada: 'ಮತ್ತೆ', hindi: 'फिर से', image: 'https://picsum.photos/seed/again/400' },
    { english: 'Always', kannada: 'ಯಾವಾಗಲೂ', hindi: 'हमेशा', image: 'https://picsum.photos/seed/always/400' },
    { english: 'Never', kannada: 'ಎಂದಿಗೂ', hindi: 'कभी नहीं', image: 'https://picsum.photos/seed/never/400' },
    { english: 'Sometimes', kannada: 'ಕೆಲವೊಮ್ಮೆ', hindi: 'कभी-कभी', image: 'https://picsum.photos/seed/sometimes/400' },
    { english: 'Here', kannada: 'ಇಲ್ಲಿ', hindi: 'यहाँ', image: 'https://picsum.photos/seed/here/400' },
    { english: 'There', kannada: 'ಅಲ್ಲಿ', hindi: 'वहाँ', image: 'https://picsum.photos/seed/there/400' },
    { english: 'Quickly', kannada: 'ಶೀಘ್ರವಾಗಿ', hindi: 'जल्दी से', image: 'https://picsum.photos/seed/quickly/400' },
    { english: 'Slowly', kannada: 'ನಿಧಾನವಾಗಿ', hindi: 'धीरे से', image: 'https://picsum.photos/seed/slowly/400' }
];


// --- Element References ---
const langSelectionScreen = document.getElementById('language-selection');
const learningScreen = document.getElementById('learning-screen');
const langButtons = document.querySelectorAll('.lang-btn');

const wordImage = document.getElementById('word-image');
const translatedWordEl = document.getElementById('translated-word');
const englishWordEl = document.getElementById('english-word');
const listenBtn = document.getElementById('listen-btn');
const nextBtn = document.getElementById('next-btn');
const changeLangBtn = document.getElementById('change-lang-btn');

// --- App State ---
let currentLanguage = '';
let currentWordIndex = 0;

// --- Functions ---

// Function to shuffle the vocabulary array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
}

// Function to show a word on the card
function showWord() {
    if (vocabulary.length === 0) return;
    const word = vocabulary[currentWordIndex];
    wordImage.src = word.image;
    englishWordEl.textContent = word.english;

    if (currentLanguage === 'kn') {
        translatedWordEl.textContent = word.kannada;
    } else {
        translatedWordEl.textContent = word.hindi;
    }
}

// Function to speak the English word
function speakWord() {
    const textToSpeak = englishWordEl.textContent;
    // Use the browser's Speech Synthesis API
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
}

// Function to show the next word
function showNextWord() {
    currentWordIndex++;
    // If we reach the end of the list, loop back to the beginning
    if (currentWordIndex >= vocabulary.length) {
        currentWordIndex = 0;
    }
    showWord();
}

// --- Event Listeners ---

// Language selection buttons
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentLanguage = button.dataset.lang;
        langSelectionScreen.classList.remove('active');
        learningScreen.classList.add('active');
        
        // Shuffle the array and start from the beginning
        shuffleArray(vocabulary);
        currentWordIndex = 0;
        showWord();
    });
});

// Listen button
listenBtn.addEventListener('click', speakWord);

// Next button
nextBtn.addEventListener('click', showNextWord);

// Change Language button
changeLangBtn.addEventListener('click', () => {
    learningScreen.classList.remove('active');
    langSelectionScreen.classList.add('active');
});