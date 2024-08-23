# AI FITNESS TRAINER

Welcome to the **AI FITNESS TRAINER** project. This application integrates real-time posture correction using camera feedback, a personalized workout planner, and an interactive voice assistant for live posture correction and support.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

## Project Overview

AI Fitness Trainer application aims to:
- Provide real-time posture correction through camera-based feedback.
- Offer personalized workout plans and a workout planner.
- Integrate a voice assistant for live posture correction using NLP.
- Track user profiles and progress.

## Features

- **Real-Time Posture Correction**: Utilizes camera integration and NLP-based voice assistant to analyze and correct posture in real-time.
- **Personalized Workout Planner**: Allows users to create and follow workout plans tailored to their fitness goals.
- **User-Curated Plans**: Users can curate personalized workout plans and adjust them according to their progress and preferences.
- **Interactive Voice Assistant**: Provides live posture correction and guidance using NLP.
- **User Profiles and Progress Tracking**: Allows users to monitor their progress and set fitness goals.

## Technology Stack

- **Frontend**: Figma
- **Backend**: Python with Flask
- **Database**: SQL (e.g., PostgreSQL, MySQL)
- **Posture Correction**: OpenCV, TensorFlow, PyTorch, NLP libraries (e.g., SpaCy, NLTK)
- **Voice Assistant**: NLP integration with Rasa, Dialogflow, or Microsoft Bot Framework
- **Camera Integration**: WebRTC, Mobile Camera APIs
- **Cloud Services**: AWS or Azure (for hosting and data storage)

## Installation

To get started with the project, follow these steps:

### Prerequisites

- Python (>= 3.8)
- Flask
- SQL Database (e.g., PostgreSQL or MySQL)
- Python libraries: `flask`, `flask_sqlalchemy`, `opencv-python`, `tensorflow`, `spacy`, `nltk` (install using `pip`)

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/fitness-posture-corrector.git
   cd fitness-posture-corrector
   ```

2. **Set up the virtual environment** (optional but recommended):
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install the backend dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Set up the database:**
   - Ensure your SQL database is running.
   - Create a `.env` file in the project root directory and add your database credentials:
     ```bash
     DATABASE_URI=postgresql://username:password@localhost:5432/fitnessdb
     ```
   - Initialize the database:
     ```bash
     flask db init
     flask db migrate
     flask db upgrade
     ```

5. **Run the backend server:**
   ```bash
   flask run
   ```

6. **Camera and Voice Assistant Integration Setup:**
   - Please ensure your application has permission to access the camera and microphone.
   - Follow specific instructions based on the platform (e.g., iOS, Android, Web) for integrating camera APIs and NLP-based voice assistants.

## Usage

The AI Fitness Trainer app is designed to assist individuals with any physical fitness exercise by providing:

- **Real-Time Posture Correction**: The app uses camera feedback and voice assistant guidance to ensure proper posture during exercises.
- **Personalized Workout Plans**: Users can create and follow workout plans tailored to their specific goals.
- **Live Guidance**: The voice assistant offers real-time feedback and correction, helping users maintain proper form and technique.

## Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**.
2. **Create a new branch** for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add some feature"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
