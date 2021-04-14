
import { useRouter } from 'next/router';

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.productId;


  return (
    <>
      <h1>aca hay un porducto</h1>
    </>
  );
}

export default EventDetailPage;
