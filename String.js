// 1. Username Formatter
let username = "   avinash_bhoi123   ";
let cleaned = username.trim();
console.log("Cleaned Username:", cleaned);
console.log("First 7 Characters:", cleaned.slice(0, 7));
console.log("Starts with avi:", cleaned.startsWith("avi"));
console.log("Ends with 123:", cleaned.endsWith("123"));


// 2. Email Domain Extractor
let email = "  avinash.bhoi@gmail.com  ";
let cleanEmail = email.trim();
let atPosition = cleanEmail.indexOf("@");
let emailUsername = cleanEmail.slice(0, atPosition);
let domain = cleanEmail.slice(atPosition + 1);
console.log("Email:", cleanEmail);
console.log("@ Position:", atPosition);
console.log("Username:", emailUsername);
console.log("Domain:", domain);
console.log("Ends with .com:", domain.endsWith(".com"));


// 3. Mobile Number Masking
let mobile = "9876543210";
let maskedMobile = "*".repeat(6) + mobile.slice(-4);
console.log("Last Four Digits:", mobile.slice(-4));
console.log("Starts with 98:", mobile.startsWith("98"));
console.log("Masked Number:", maskedMobile);


// 4. Sentence Word Reversal
let sentence = "JavaScript is important for interviews";
let reversed = sentence.split(" ").reverse().join(" ");
console.log("Original Sentence:", sentence);
console.log("Reversed Sentence:", reversed);
console.log("Includes interviews:", sentence.includes("interviews"));


// 5. Character Position Analyzer
let text = "programming";
console.log("Character at index 4 using at():", text.at(4));
console.log("Character at index 4 using charAt():", text.charAt(4));
console.log("Character Code:", text.charCodeAt(4));
console.log("First Position of m:", text.indexOf("m"));
console.log("Last Position of m:", text.lastIndexOf("m"));
console.log("Second-last Character:", text.at(-2));


// 6. Invoice Number Generator
let invoice = "542";
let paddedInvoice = invoice.padStart(8, "0");
let finalInvoice = paddedInvoice.padEnd(12, "END");
console.log("Original Invoice:", invoice);
console.log("Padded Invoice:", paddedInvoice);
console.log("Final Invoice:", finalInvoice);
console.log("Starts with 00000:", finalInvoice.startsWith("00000"));
console.log("Original Number:", finalInvoice.slice(5, 8));


// 7. File Extension Validator
let filename = "  project_report.pdf  ";
let cleanFilename = filename.trim();
let dotPosition = cleanFilename.lastIndexOf(".");
let extension = cleanFilename.slice(dotPosition);
let nameWithoutExtension = cleanFilename.slice(0, dotPosition);
console.log("Filename:", cleanFilename);
console.log("Ends with .pdf:", cleanFilename.endsWith(".pdf"));
console.log("Last Dot Position:", dotPosition);
console.log("Extension:", extension);
console.log("Filename Without Extension:", nameWithoutExtension);


// 8. Duplicate Character Finder
let duplicateText = "javascript";
let firstA = duplicateText.indexOf("a");
let lastA = duplicateText.lastIndexOf("a");
console.log("First Position:", firstA);
console.log("Last Position:", lastA);
console.log("First Character:", duplicateText.charAt(firstA));
console.log("Last Character:", duplicateText.charAt(lastA));
console.log("First Character Code:", duplicateText.charCodeAt(firstA));
console.log("Last Character Code:", duplicateText.charCodeAt(lastA));
console.log("Positions Identical:", firstA === lastA);


// 9. Name Initial Generator
let fullName = "avinash bhoi patil";
let initials = fullName.split(" ").map(word => {
    let code = word.charCodeAt(0);
    if (code >= 97 && code <= 122) {
        code -= 32;
    }
    return String.fromCharCode(code);
}).join(".") + ".";
console.log("Name:", fullName);
console.log("Initials:", initials);


// 10. Search Keyword Analyzer
let searchSentence = "Java is powerful and Java is widely used";
let keyword = "Java";
let firstJava = searchSentence.indexOf(keyword);
let lastJava = searchSentence.lastIndexOf(keyword);
console.log("First Position:", firstJava);
console.log("Last Position:", lastJava);
console.log("Starts with Java:", searchSentence.startsWith(keyword));
console.log("First Occurrence:", searchSentence.slice(firstJava, firstJava + keyword.length));
console.log("Second Occurrence:", searchSentence.slice(lastJava, lastJava + keyword.length));


// 11. Password Masking System
let password = "Avinash@12345";
let maskedPassword = password.slice(0, 2)
    .concat("*".repeat(password.length - 5), password.slice(-3));
console.log("Original Password:", password);
console.log("Masked Password:", maskedPassword);


// 12. CSV Data Formatter
let record = "  Avinash,22,Java,India  ";
let fields = record.trim().split(",").map(field => field.trim());
let formattedRecord = fields.join(" | ");
console.log("Formatted Record:", formattedRecord);
console.log("Includes Java:", formattedRecord.includes("Java"));
console.log("Ends with India:", formattedRecord.endsWith("India"));


// 13. Character Code Converter
let word = "HELLO";
let codes = [];
let reconstructed = "";
for (let i = 0; i < word.length; i++) {
    let code = word.charCodeAt(i);
    codes.push(code);
    reconstructed += String.fromCharCode(code);
}
console.log("Original Word:", word);
console.log("Character Codes:", codes);
console.log("Reconstructed Word:", reconstructed);


// 14. URL Path Extractor
let url = "https://example.com/products/mobile/iphone";
let domainEnd = url.indexOf("/", 8);
let urlDomain = url.slice(0, domainEnd);
let path = url.slice(domainEnd);
let sections = path.split("/").filter(section => section !== "");
console.log("Starts with https://:", url.startsWith("https://"));
console.log(".com Position:", url.indexOf(".com"));
console.log("Domain:", urlDomain);
console.log("Path:", path);
console.log("Path Sections:", sections);
console.log("Formatted Path:", sections.join(" -> "));


// 15. Text Padding and Alignment
let product = "Laptop";
let price = "45000";
let paddedProduct = product.padStart(12, " ");
let paddedPrice = price.padStart(8, "0");
let finalText = paddedProduct.concat(" ", paddedPrice).padEnd(25, " ");
console.log("Padded Product: [" + paddedProduct + "]");
console.log("Padded Price: [" + paddedPrice + "]");
console.log("Final String: [" + finalText + "]");
console.log("Final Length:", finalText.length);


// 16. Repeated Word Position Finder
let repeatedText = "Java Python Java C++ Java Python";
let firstPosition = repeatedText.indexOf("Java");
let lastPosition = repeatedText.lastIndexOf("Java");
let extractedText = repeatedText.slice(firstPosition + 4, lastPosition);
console.log("First Position:", firstPosition);
console.log("Last Position:", lastPosition);
console.log("Extracted Text:", extractedText);
console.log("Includes Python:", extractedText.includes("Python"));


// 17. Text Boundary Validator
let boundaryText = "   ERROR: Invalid username provided.   ";
let leadingRemoved = boundaryText.trimStart();
let trailingRemoved = boundaryText.trimEnd();
console.log("Leading Spaces Removed:", leadingRemoved);
console.log("Starts with ERROR:", leadingRemoved.startsWith("ERROR"));
console.log("Trailing Spaces Removed:", trailingRemoved);
console.log("Ends with provided.:", trailingRemoved.endsWith("provided."));


// 18. Initials to ASCII Converter
let name = "Avinash";
let firstCode = name.charCodeAt(0);
let middleCode = name.charCodeAt(Math.floor(name.length / 2));
let lastCode = name.charCodeAt(name.length - 1);
let firstChar = String.fromCharCode(firstCode);
let middleChar = String.fromCharCode(middleCode);
let lastChar = String.fromCharCode(lastCode);
let asciiResult = firstChar.concat("-", middleChar, "-", lastChar);
console.log("First Character:", firstChar);
console.log("Middle Character:", middleChar);
console.log("Last Character:", lastChar);
console.log("Character Codes:", firstCode, middleCode, lastCode);
console.log("Final String:", asciiResult);


// 19. Product Code Standardizer
let productCode = "  ab-458  ";
let cleanCode = productCode.trim();
let codeParts = cleanCode.split("-");
let letters = codeParts[0];
let numbers = codeParts[1];
let uppercaseLetters = "";
for (let i = 0; i < letters.length; i++) {
    let code = letters.charCodeAt(i);
    if (code >= 97 && code <= 122) {
        code -= 32;
    }
    uppercaseLetters += String.fromCharCode(code);
}
let paddedNumbers = numbers.padStart(6, "0");
let standardizedCode = uppercaseLetters.concat("-", paddedNumbers);
console.log("Cleaned Code:", cleanCode);
console.log("Alphabetic Portion:", uppercaseLetters);
console.log("Numeric Portion:", paddedNumbers);
console.log("Final Product Code:", standardizedCode);


// 20. Sentence Truncation
let longSentence = "JavaScript string methods are frequently asked in technical interviews";
let first30 = longSentence.slice(0, 30);
let lastSpace = first30.lastIndexOf(" ");
let truncated = first30.slice(0, lastSpace) + "...";
console.log("First 30 Characters:", first30);
console.log("Last Space Position:", lastSpace);
console.log("Truncated Sentence:", truncated);
console.log("Ends with ...:", truncated.endsWith("..."));


// 21. Log Message Analyzer
let log = "  [ERROR] User login failed at 10:45 PM  ";
let cleanLog = log.trim();
let logLevel = cleanLog.slice(1, cleanLog.indexOf("]"));
let failedPosition = cleanLog.indexOf("failed");
let messageStart = cleanLog.indexOf("User");
let logMessage = cleanLog.slice(messageStart);
console.log("Cleaned Log:", cleanLog);
console.log("Starts with [ERROR]:", cleanLog.startsWith("[ERROR]"));
console.log("Log Level:", logLevel);
console.log("Position of failed:", failedPosition);
console.log("Message:", logMessage);


// 22. Transaction Reference Generator
let transaction = "TXN4587";
let prefix = transaction.slice(0, 3);
let number = transaction.slice(3);
let paddedNumber = number.padStart(8, "0");
let reference = prefix.concat(paddedNumber).padEnd(15, "#");
console.log("Prefix:", prefix);
console.log("Original Number:", number);
console.log("Padded Number:", paddedNumber);
console.log("Final Reference:", reference);
console.log("Starts with TXN:", reference.startsWith("TXN"));
console.log("Final Length:", reference.length);


// 23. Text Character Position Analyzer
let text2 = "mississippi";
let character = "s";
let firstS = text2.indexOf(character);
let lastS = text2.lastIndexOf(character);
let between = text2.slice(firstS + 1, lastS);
let nextS = text2.indexOf(character, firstS + 1);
let previousS = text2.lastIndexOf(character, lastS - 1);
console.log("First Position:", firstS);
console.log("Last Position:", lastS);
console.log("Extracted Text:", between);
console.log("Next Occurrence Position:", nextS);
console.log("Previous Occurrence Position:", previousS);


// 24. Custom Title Case Converter
let title = "java programming language";
let titleResult = title.split(" ").map(word => {
    let code = word.charCodeAt(0);
    if (code >= 97 && code <= 122) {
        code -= 32;
    }
    return String.fromCharCode(code) + word.slice(1);
}).join(" ");
console.log("Original Sentence:", title);
console.log("Title Case:", titleResult);


// 25. Email Username Masker
let email2 = "avinashbhoi@gmail.com";
let atPos = email2.indexOf("@");
let username2 = email2.slice(0, atPos);
let emailDomain = email2.slice(atPos);
let maskedUsername = username2.slice(0, 2)
    .concat("*".repeat(username2.length - 2));
let maskedEmail = maskedUsername.concat(emailDomain);
console.log("Original Email:", email2);
console.log("Username:", username2);
console.log("Domain:", emailDomain);
console.log("Masked Username:", maskedUsername);
console.log("Masked Email:", maskedEmail);
console.log("Ends with @gmail.com:", maskedEmail.endsWith("@gmail.com"));


// 26. Custom Character Encoder
let message = "CAT";
let encoded = "";
for (let i = 0; i < message.length; i++) {
    let code = message.charCodeAt(i);
    encoded += String.fromCharCode(code + 2);
}
console.log("Original Message:", message);
console.log("Encoded Message:", encoded);


// 27. File Path Manipulator
let filePath = "  /home/avinash/projects/java/Main.java  ";
let cleanPath = filePath.trim();
let lastSlash = cleanPath.lastIndexOf("/");
let fileName = cleanPath.slice(lastSlash + 1);
let extensionPosition = fileName.lastIndexOf(".");
let fileWithoutExtension = fileName.slice(0, extensionPosition);
let directory = cleanPath.slice(0, lastSlash);
console.log("Cleaned Path:", cleanPath);
console.log("Starts with /home/:", cleanPath.startsWith("/home/"));
console.log("Ends with .java:", cleanPath.endsWith(".java"));
console.log("Last Slash Position:", lastSlash);
console.log("Directory Path:", directory);
console.log("Filename:", fileName);
console.log("Filename Without Extension:", fileWithoutExtension);


// 28. Custom Text Comparison
let first = "JavaScript";
let second = "Javascript";
let position = 0;
while (position < first.length && first.charAt(position) === second.charAt(position)) {
    position++;
}
let char1 = first.charAt(position);
let char2 = second.charAt(position);
let reconstructedText = first.slice(0, position).concat(second.slice(position));
console.log("First Length:", first.length);
console.log("Second Length:", second.length);
console.log("First Different Position:", position);
console.log("First String Character:", char1);
console.log("Second String Character:", char2);
console.log("First Character Code:", first.charCodeAt(position));
console.log("Second Character Code:", second.charCodeAt(position));
console.log("Reconstructed Result:", reconstructedText);


// 29. Data Record Normalizer
let dataRecord = "  AVINASH|bhoi|JAVA|PUNE|  ";
let dataFields = dataRecord.trim().split("|").map(field => field.trim());
let thirdField = dataFields[2];
let lowercaseField = "";
for (let i = 0; i < thirdField.length; i++) {
    let code = thirdField.charCodeAt(i);
    if (code >= 65 && code <= 90) {
        code += 32;
    }
    lowercaseField += String.fromCharCode(code);
}
dataFields[2] = lowercaseField;
let normalized = dataFields.join("-").padEnd(35, "*");
console.log("Normalized Record:", normalized);
console.log("Final Length:", normalized.length);


// 30. Combined String Processing Challenge
let user = "  Avinash Bhoi  ";
let code = "JS458";
let domain2 = "gmail.com";

// Trim username
let cleanUser = user.trim();

// Extract initials using character codes
let userInitials = cleanUser.split(" ").map(word => {
    let codeValue = word.charCodeAt(0);
    if (codeValue >= 97 && codeValue <= 122) {
        codeValue -= 32;
    }
    return String.fromCharCode(codeValue);
}).join("");

// Extract alphabetic and numeric portions
let codePrefix = code.slice(0, 2);
let numericPortion = code.slice(2);

// Pad numeric portion to six digits
let paddedNumeric = numericPortion.padStart(6, "0");

// Combine initials, prefix, and number
let combinedCode = userInitials.concat(codePrefix, paddedNumeric);

// Append domain
let finalResult = combinedCode.concat("@", domain2);

console.log("Cleaned Username:", cleanUser);
console.log("Initials:", userInitials);
console.log("Alphabetic Prefix:", codePrefix);
console.log("Numeric Portion:", numericPortion);
console.log("Padded Number:", paddedNumeric);
console.log("Combined Code:", combinedCode);
console.log("Final Email:", finalResult);
console.log("Starts with ABJS:", finalResult.startsWith("ABJS"));
console.log("Ends with @gmail.com:", finalResult.endsWith("@gmail.com"));

// Last four characters using at()
let lastFourAt = finalResult.at(-4)
    .concat(finalResult.at(-3), finalResult.at(-2), finalResult.at(-1));

// Last four characters using slice()
let lastFourSlice = finalResult.slice(-4);

console.log("Last Four Characters using at():", lastFourAt);
console.log("Last Four Characters using slice():", lastFourSlice);