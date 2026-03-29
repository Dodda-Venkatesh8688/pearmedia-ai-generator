// DIRECT HARDCODE - To solve 404 and Variable loading issues
const GEMINI_KEY = "AIzaSyDx6fQD1hTdGUzzc8sRnC_foUt3fNHFtKk";
const HF_KEY = "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";

export const enhancePrompt = async (userInput) => {
    try {
        // Updated to v1beta for better key compatibility
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Expand this into a 50-word descriptive image prompt: ${userInput}` }] }]
            })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0].content.parts[0].text) {
            return data.candidates[0].content.parts[0].text;
        }
        return userInput;
    } catch (error) {
        console.error("Gemini Error:", error);
        return userInput;
    }
};

export const generateImage = async (prompt) => {
    try {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2-1",
            {
                headers: { 
                    "Authorization": `Bearer ${HF_KEY}`,
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({ inputs: prompt }),
            }
        );

        if (!response.ok) throw new Error("API Error");

        const blob = await response.blob();
        return URL.createObjectURL(blob);
    } catch (error) {
        console.error("HF Error:", error);
        return null;
    }
};

// Fixed analyzeImage export
export const analyzeImage = async (base64String) => {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [
                        { text: "Describe this image." },
                        { inline_data: { mime_type: "image/jpeg", data: base64String } }
                    ]
                }]
            })
        });
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        return "Image variation.";
    }
};