import { RouterProvider } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import router from './routes';
import { ContactSectionProvider } from './context/ContactSectionContext';

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ContactSectionProvider>
        <RouterProvider router={router} />
      </ContactSectionProvider>
    </MotionConfig>
  );
}

export default App;
