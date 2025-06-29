# Stocker - Your AI Stock Analyzer 📈

An AI-powered stock analysis platform that leverages OpenAI's reliable model to provide intelligent investment insights and recommendations for Indian stock market equities.

## 🌟 Features

- **AI-Powered Analysis**: Utilizes OpenAI's model for intelligent stock analysis and investment recommendations
- **Real-time Data Processing**: Processes historical stock data from CSV files with minute-level granularity
- **Weekly Aggregation**: Computes 4-week moving averages for comprehensive trend analysis
- **Investment Insights**: Provides long-term investment favorability reports with target price suggestions
- **Responsive Design**: Modern, mobile-first UI built with React and Tailwind CSS
- **Multi-Stock Support**: Currently supports major Indian stocks

## 🏗️ Architecture

### Frontend
- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Routing**: React Router
- **HTTP Client**: Axios
- **Notifications**: React Toastify

### Backend
- **Framework**: Node.js with Express
- **AI Integration**: OpenAI GPT-4
- **Data Processing**: CSV parsing with date-fns for time calculations
- **CORS**: Configured for multiple origins including production

## 📁 Project Structure

```
AI Stock Analyzer/
├── backend/
│   ├── index.js              # Express server setup
│   ├── routes/
│   │   └── userRoutes.js     # API endpoints
│   ├── utils/
│   │   ├── aggregate.js      # Data aggregation logic
│   │   ├── openai.js         # OpenAI integration
│   │   └── utils.js          # Weekly average calculations
│   └── resources/            # Stock data CSV files
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── routes/          # Route definitions
│   │   ├── store/           # Redux store
│   │   └── auth/            # Firebase auth setup
│   └── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- OpenAI API Key
- Firebase credentials (optional, for future auth features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd "AI Stock Analyzer"
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

   Create a `.env` file in the backend directory:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

   Create a `.env.local` file in the frontend directory:
   ```env
   VITE_API_URL=http://localhost:3000
   VITE_YOUR_API_KEY=your_firebase_api_key
   VITE_YOUR_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_YOUR_PROJECT_ID=your_firebase_project_id
   VITE_YOUR_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_YOUR_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_YOUR_APP_ID=your_firebase_app_id
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   node index.js
   ```
   Server runs on http://localhost:3000

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Application runs on http://localhost:5173

## 🔧 API Endpoints

### GET `/api/result?data={STOCK_TICKER}`

Analyzes stock data and returns AI-generated investment insights.

**Parameters:**
- `data`: Stock ticker symbol (ABBOTINDIA, ADANIGREEN, ADANIPORTS, CIPLA)

**Response:**
```json
{
  "success": true,
  "analysis": "AI-generated analysis text with investment recommendations and target price"
}
```

## 📊 Data Processing Flow

1. **CSV Data Loading**: Reads minute-level stock data from CSV files
2. **Weekly Aggregation**: Calculates 4-week moving averages for:
   - Open, High, Low, Close prices
   - Trading volume
3. **AI Analysis**: Sends aggregated data to OpenAI GPT-4 with company context
4. **Report Generation**: Returns formatted investment analysis and target price

## 🎨 User Interface

### Pages

- **Home**: Hero section with call-to-action and feature highlights
- **About**: Company information and value propositions
- **Search**: Stock selection and analysis interface
- **Contact**: Contact information and support details

### Components

- **Navigation**: Sticky header with brand and navigation links
- **Hero**: Engaging landing section with background image
- **Footer**: Company branding and copyright information

## 🔒 Security Features

- **CORS Configuration**: Restricts API access to authorized origins
- **Environment Variables**: Sensitive data stored securely
- **Firebase Integration**: Ready for authentication implementation

## 🚢 Deployment

### Backend (Dockerized)
```bash
cd backend
docker build -t ai-stock-analyzer-backend .
docker run -p 3000:3000 ai-stock-analyzer-backend
```

### Frontend
- Configured for Vercel deployment
- Build command: `npm run build`
- Output directory: `dist`

## 📈 Supported Stocks

Currently supports analysis for:
- **ABBOTINDIA** - Abbott India Ltd (Healthcare/Pharmaceuticals)
- **ADANIGREEN** - Adani Green Energy Ltd (Renewable Energy)
- **ADANIPORTS** - Adani Ports & SEZ Ltd (Infrastructure/Logistics)
- **CIPLA** - Cipla Ltd (Pharmaceuticals)

## ⚠️ Disclaimer

This application provides analysis and reports for educational purposes only. It does not offer financial advice. Users should conduct their own research and consult with financial advisors before making investment decisions.

## 🛠️ Technologies Used

### Frontend
- React 18.3.1
- Vite 6.0.1
- Tailwind CSS
- Redux Toolkit
- React Router
- Axios
- React Toastify

### Backend
- Node.js
- Express
- OpenAI GPT-4
- CSV Parser
- Date-fns
- CORS

### Development Tools
- ESLint
- Vite
- Docker
- Vercel (deployment)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

**K Gourav**
- LinkedIn: [https://www.linkedin.com/in/gourav12/](https://www.linkedin.com/in/gourav12/)
- Email: k.gourav254@gmail.com

---

*Built with ❤️ for intelligent stock market analysis*
