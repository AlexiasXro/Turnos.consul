export default function Container({ children }) {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '2rem' }}>
      {children}
    </div>
  );
}
