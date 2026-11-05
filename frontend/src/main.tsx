import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  return (
    <main className="container">
      <p className="eyebrow">YUL · STARTER</p>
      <h1>前后端项目已就绪</h1>
      <p className="description">
        从 <code>frontend/</code> 开始构建界面，从 <code>backend/</code> 开始添加 API。
      </p>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
