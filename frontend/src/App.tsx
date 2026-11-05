import { useState } from 'react';
import { ApiError } from './api/client';
import { healthApi, type HealthStatus } from './features/health/api';

function App() {
  const [health, setHealth] = useState<HealthStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function checkApi() {
    setLoading(true);
    setError(null);
    try {
      setHealth(await healthApi.check());
    } catch (cause) {
      setHealth(null);
      setError(cause instanceof ApiError ? `${cause.message} (${cause.code})` : '接口请求失败');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="container">
      <p className="eyebrow">YUL · API STARTER</p>
      <h1>开始接入你的接口</h1>
      <p className="description">
        前端请求统一放在 <code>frontend/src/features/</code>，后端路由从 <code>backend/src/routes/</code> 开始扩展。
      </p>
      <button onClick={checkApi} disabled={loading}>
        {loading ? '请求中…' : '测试后端连接'}
      </button>
      {health && <p className="result success">接口已连接：{health.status} · {health.timestamp}</p>}
      {error && <p className="result error">{error}</p>}
    </main>
  );
}

export default App;
