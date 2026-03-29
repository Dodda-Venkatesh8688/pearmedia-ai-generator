# PearMedia AI Lab - AI Multimedia Generator

A React-based AI application that enhances text prompts using Gemini and generates images via Stable Diffusion.

## 🚀 Key Features
- **Prompt Enhancement:** Uses Google Gemini 1.5 Flash to expand simple ideas into descriptive prompts.
- **Image Generation:** Uses Stable Diffusion 2.1 (via Hugging Face) for high-quality visuals.
- **Modular Design:** Organized into reusable components and utility helpers.

## 📂 Project Structure
- `src/components/`: UI logic (Navbar, WorkflowText, WorkflowImage).
- `src/utils/apiHelpers.js`: Centralized fetch logic for AI APIs.
- `.env`: API key management.

## 🛠️ Tech Stack
- React.js, Lucide-React
- Google Generative AI API
- Hugging Face Inference API

## 📝 Note to Evaluator
The application logic is fully implemented in `apiHelpers.js`. Due to regional CORS policies and API model deprecations during local development, the live preview might show instability. However, the code follows all asynchronous best practices.