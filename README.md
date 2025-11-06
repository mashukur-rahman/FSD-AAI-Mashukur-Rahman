## Project Structure

```
.
├── Backend/          # FastAPI backend application
│   ├── main.py       # Main FastAPI application
│   └── requirements.txt
└── Frontend/         # React + TypeScript + Vite frontend
    ├── src/
    ├── package.json
    └── vite.config.ts
```

## Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.8+** - for the backend
- **Node.js 18+** and **npm** - for the frontend

## Backend Setup

1. Navigate to the Backend directory:
   ```bash
   cd Backend
   ```

2. Create a virtual environment (recommended):
   ```bash
   # On Windows
   python -m venv venv
   venv\Scripts\activate

   # On macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the backend server:
   ```bash
   uvicorn main:app --reload
   ```

   The backend API will be available at `http://127.0.0.1:8000`


## Frontend Setup

1. Navigate to the Frontend directory:
   ```bash
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will typically be available at `http://localhost:5173` (Vite's default port)

## Technologies Used

### Backend
- FastAPI
- Uvicorn
- Python 3.8+

### Frontend
- React 19
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Radix UI
- Shadcn


