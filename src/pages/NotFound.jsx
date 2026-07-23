import { Link } from 'react-router-dom';
import useDocumentTitle from '../hooks/useDocumentTitle';

function NotFound() {
  useDocumentTitle('Page Not Found');

  return (
    <div className="container flex-center flex-col text-center" style={{ minHeight: '80vh' }}>
      <h1>404</h1>
      <p>The page you're looking for doesn't exist or has been moved.</p>
      <Link to="/" className="hover-underline">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
