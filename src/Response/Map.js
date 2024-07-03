import React from "react";

const Map = () => {
  return (
    <div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d200933.5438947016!2d72.68708766755812!3d21.157189680527853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1714734771068!5m2!1sen!2sin"
          title="Google Map of Surat, Gujarat"
          style={{
            width: "100%",
            height: "350px",
            border: "0",
            marginBottom: "40px",
          }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
