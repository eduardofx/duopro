const ServiceAreaMap = () => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg border border-border" style={{ height: 500 }}>
      <iframe
        title="DuoPro Painting Service Areas - Westchester County NY"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192698.26153389474!2d-73.87307405!3d41.1220194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2946b4c36b4f1%3A0xc5caboref09ffbb52!2sWestchester+County%2C+NY!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ServiceAreaMap;
