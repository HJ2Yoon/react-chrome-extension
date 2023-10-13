import ReactDOM from 'react-dom/client';
import GlobalThemeProvider from '../styles/GlobalThemeProvider';

export default function App() {
  return (
    <GlobalThemeProvider>
      <img src="icon.png" />
      <p>This is test page</p>
    </GlobalThemeProvider>
  );
}

const root = document.createElement('div') as HTMLElement;
root.className = 'root';
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App />);
