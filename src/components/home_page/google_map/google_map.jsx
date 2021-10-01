import style from "./google_map.module.scss";

const GoogleMap = () => {
  return (
    <section className={style.googleMap} id="toGoogleMapScroll">
      <h1>Как к нам добраться:</h1>
      {/* Yandex map */}
      <iframe
        title="google-map"
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A1ed9c1b6efc2e5fffa7abc41ca96c31346338807ca306af2f4b6538be452d368&amp;source=constructor"
        width="100%"
        height="400"
        frameBorder="0"
      />
      {/* Google Map */}
      {/* <iframe loading='lazy' title='Atlant Hostel' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.0635523245855!2d99.0264056154517!3d54.90180676476729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d1e0e907fcdcbad%3A0x39f3518a3f145354!2z0JDQtNC80LjQvdC40YHRgtGA0LDRhtC40Y8g0J3QuNC20L3QtdGD0LTQuNC90YHQutC-0LPQviDQvNGD0L3QuNGG0LjQv9Cw0LvRjNC90L7Qs9C-INC-0LHRgNCw0LfQvtCy0LDQvdC40Y8!5e0!3m2!1sru!2sru!4v1619699637439!5m2!1sru!2sru" ></iframe> */}
    </section>
  );
};

export default GoogleMap;
