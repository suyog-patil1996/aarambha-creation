import Loader from '../components/Loader';

function RouteFallback() {
  return (
    <div className="flex-center" style={{ minHeight: '60vh' }}>
      <Loader />
    </div>
  );
}

export default RouteFallback;
