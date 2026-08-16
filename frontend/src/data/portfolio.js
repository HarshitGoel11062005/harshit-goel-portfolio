export const RESUME_URL = "/assets/resume/Harshit_Goel_Resume.pdf";

export const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Research", href: "#research" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export const SOCIALS = {
    linkedin: "https://www.linkedin.com/in/harshit-goel-42ab91203",
    github: "https://github.com/HarshitGoel11062005",
    email: "mailto:harshitgoel931147@gmail.com",
    phone: "tel:+919311470005",
};

export const CONTACT = {
    email: "harshitgoel931147@gmail.com",
    phone: "+91 93114 70005",
    location: "New Delhi, India",
};

export const ROLES = ["Data Scientist", "Data Analyst", "ML Engineer"];

export const STATS = [
    { value: "500K+", label: "Records Analyzed" },
    { value: "8+", label: "Projects Built" },
    { value: "3", label: "Research Papers" },
    { value: "9.33", label: "CGPA / 10" },
];

export const SKILL_TICKER = [
    "SQL", "Python", "Power BI", "DAX", "Machine Learning", "Pandas", "NumPy",
    "Scikit-learn", "Matplotlib", "SQL Server", "Excel", "EDA", "Statistics", "Git",
];

export const SKILL_GROUPS = [
    { title: "Languages", items: ["SQL", "Python"], span: "md:col-span-1" },
    { title: "Data & Analytics", items: ["Machine Learning", "Predictive Analytics", "Exploratory Data Analysis", "Statistical Analysis"], span: "md:col-span-2" },
    { title: "Libraries", items: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"], span: "md:col-span-1" },
    { title: "Tools & Platforms", items: ["SQL Server", "Power BI (DAX, Data Modeling)", "Excel (Pivot Tables, Power Query)", "Git & GitHub", "Jupyter Notebook"], span: "md:col-span-2" },
    { title: "Soft Skills", items: ["Analytical Thinking", "Problem Solving", "Attention to Detail", "Team Collaboration"], span: "md:col-span-3" },
];

const IMG = {
    ipl: "https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2MTJ8MHwxfHNlYXJjaHwxfHxjcmlja2V0JTIwc3RhZGl1bSUyMGRhcmt8ZW58MHx8fHwxNzg2ODA4NTY5fDA&ixlib=rb-4.1.0&q=85",
    cinema: "https://images.pexels.com/photos/18501410/pexels-photo-18501410.jpeg",
    abstract: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwbmV0d29yayUyMGRhcmt8ZW58MHx8fHwxNzg2ODA4NTY5fDA&ixlib=rb-4.1.0&q=85",
};

export const PROJECTS = [
    {
        slug: "ipl-analysis",
        title: "IPL Data Analysis Dashboard",
        type: "Power BI",
        tech: ["SQL", "Power BI", "DAX"],
        description: "15+ seasons of IPL data (10,000+ records) mined with advanced SQL — Joins, CTEs, Window Functions. Interactive dashboard with 8+ DAX KPIs for win %, player stats and toss-impact analysis.",
        image: IMG.ipl,
        file: "/assets/projects/IPL_Analysis.pbix",
        fileLabel: "Download .pbix",
    },
    {
        slug: "amazon-prime",
        title: "Amazon Prime Video Dashboard",
        type: "Power BI",
        tech: ["Power BI", "DAX", "Power Query"],
        description: "Content-library analytics for Prime Video — genre trends, ratings distribution and release-year patterns, with drill-through and cross-filtering enabled.",
        image: IMG.cinema,
        file: "/assets/projects/Amazon_Prime_Video_Dashboard.pbix",
        fileLabel: "Download .pbix",
    },
    {
        slug: "imdb-dashboard",
        title: "IMDb Analytics Dashboard",
        type: "Power BI",
        tech: ["Power BI", "DAX"],
        description: "Audience ratings and genre trends across 10,000+ IMDb titles, spotlighting top-performing directors and actors with responsive, drill-through visuals.",
        image: IMG.cinema,
        file: "/assets/projects/IMDb_Dashboard.pbix",
        fileLabel: "Download .pbix",
    },
    {
        slug: "restaurant-analytics",
        title: "Indian Restaurant Analytics",
        type: "Power BI",
        tech: ["Power BI", "Data Modeling"],
        description: "Restaurant market intelligence — cuisine popularity, pricing bands, rating patterns and city-level demand to guide location and menu decisions.",
        image: IMG.abstract,
        file: "/assets/projects/Indian_Restaurant_Data_Analytics.pbix",
        fileLabel: "Download .pbix",
    },
    {
        slug: "superstore",
        title: "Superstore Sales Dashboard",
        type: "Power BI",
        tech: ["Power BI", "DAX"],
        description: "Retail sales and profit intelligence across thousands of orders — category margins, discount impact, regional performance and shipping analysis.",
        image: IMG.abstract,
        file: "/assets/projects/Superstore_Dashboard.pbix",
        fileLabel: "Download .pbix",
    },
    {
        slug: "fraud-detection",
        title: "Credit Card Fraud Detection",
        type: "ML Notebook",
        tech: ["Python", "Logistic Regression", "EDA"],
        description: "500,000+ transactions analyzed for fraud patterns. Feature engineering for severe class imbalance; optimized classifier with a strong precision/recall trade-off.",
        image: IMG.abstract,
        file: "/assets/projects/Credit_Card_Fraud_Detection.ipynb",
        fileLabel: "Download .ipynb",
        github: "https://github.com/HarshitGoel11062005",
    },
    {
        slug: "clv-prediction",
        title: "Customer Lifetime Value Prediction",
        type: "ML Notebook",
        tech: ["Python", "Scikit-learn", "Pandas"],
        description: "Regression model predicting customer lifetime value with RFM-style feature engineering — enabling smarter retention and marketing spend decisions.",
        image: IMG.abstract,
        file: "/assets/projects/CLV_Prediction.ipynb",
        fileLabel: "Download .ipynb",
        github: "https://github.com/HarshitGoel11062005",
    },
    {
        slug: "student-performance",
        title: "Student Performance Prediction",
        type: "ML Notebook",
        tech: ["Python", "Classification", "EDA"],
        description: "Classification model predicting student outcomes from study habits and demographic features, with full exploratory analysis and model evaluation.",
        image: IMG.abstract,
        file: "/assets/projects/Student_Performance_Prediction.ipynb",
        fileLabel: "Download .ipynb",
        github: "https://github.com/HarshitGoel11062005",
    },
];

export const EDUCATION = [
    {
        period: "2023 — 2027",
        degree: "B.Tech, Artificial Intelligence & Data Science",
        institution: "Guru Gobind Singh Indraprastha University",
        score: "CGPA 9.33 / 10",
    },
    {
        period: "2022 — 2023",
        degree: "Senior Secondary (Class 12)",
        institution: "KIIT World School",
        score: "9.40 / 10",
    },
];

export const CERTIFICATIONS = [
    {
        title: "3 Research Papers Published",
        detail: "Peer-reviewed papers authored in AI, Data Science and Machine Learning.",
        highlight: true,
    },
    {
        title: "SQL Server Workshop",
        detail: "Advanced database querying and management — ScholarHat.",
        highlight: false,
    },
    {
        title: "Power BI Certification",
        detail: "Power BI for Beginners — data visualization, dashboards, DAX modeling.",
        highlight: false,
    },
    {
        title: "Industry Readiness & Soft Skills",
        detail: "Workplace communication and analytical-thinking training.",
        highlight: false,
    },
];

export const PAPERS = [
    {
        slug: "ai-healthcare",
        title: "The Impact of AI on Healthcare: From Predictive Analytics to Personalized Medicine",
        authors: "Dr. Archana Kumar, Harshit Goel",
        journal: "International Journal of Progressive Research in Engineering Management and Science (IJPREMS)",
        date: "April 2025",
        doi: "https://www.doi.org/10.58257/IJPREMS39995",
        abstract: "How AI is reshaping diagnosis, treatment and patient care — from predictive analytics to personalized medicine — while weighing the risks, ethics and the future of human–AI collaboration in medicine.",
        file: "/assets/papers/The_Impact_of_AI_on_Healthcare.pdf",
    },
    {
        slug: "macro-forecasting",
        title: "Hybrid Machine Learning Models for Global Macroeconomic Forecasting: A Case Study of G20 Economies",
        authors: "Harshit Goel, Ms. Meenu Sharma",
        journal: "International Journal of Progressive Research in Engineering Management and Science (IJPREMS), Vol. 05 Issue 11",
        date: "November 2025",
        doi: "https://www.doi.org/10.58257/IJPREMS44624",
        abstract: "Random Forest, XGBoost and LSTM hybrids beat classical macroeconomic forecasts by 10–15% across G20 economies, with SHAP-based interpretability for policy-ready insights.",
        file: "/assets/papers/Hybrid_ML_Models_Macroeconomic_Forecasting.pdf",
    },
];

export const HERO_BG = "https://images.unsplash.com/photo-1750969185331-e03829f72c7d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzV8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwbmV0d29yayUyMGRhcmt8ZW58MHx8fHwxNzg2ODA4NTY5fDA&ixlib=rb-4.1.0&q=85";
