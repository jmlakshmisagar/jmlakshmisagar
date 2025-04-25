export default function NotFound() {
  return (
    <div style={{ 
      display: 'grid', 
      placeItems: 'center', 
      height: '100vh',
      background: '#1a1a1a',
      color: '#bcaaa4' 
    }}>
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
      </div>
    </div>
  );
}