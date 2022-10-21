export default function optionIcon({ height, theme, onClick }) {
  return (
    <svg width={height} height={height} viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13.5 6.75V4.5M13.5 6.75C12.9033 6.75 12.331 6.98705 11.909 7.40901C11.4871 7.83097 11.25 8.40326 11.25 9C11.25 9.59674 11.4871 10.169 11.909 10.591C12.331 11.0129 12.9033 11.25 13.5 11.25M13.5 6.75C14.0967 6.75 14.669 6.98705 15.091 7.40901C15.5129 7.83097 15.75 8.40326 15.75 9C15.75 9.59674 15.5129 10.169 15.091 10.591C14.669 11.0129 14.0967 11.25 13.5 11.25M13.5 11.25V22.5M6.75 20.25C7.34674 20.25 7.91903 20.0129 8.34099 19.591C8.76295 19.169 9 18.5967 9 18C9 17.4033 8.76295 16.831 8.34099 16.409C7.91903 15.9871 7.34674 15.75 6.75 15.75M6.75 20.25C6.15326 20.25 5.58097 20.0129 5.15901 19.591C4.73705 19.169 4.5 18.5967 4.5 18C4.5 17.4033 4.73705 16.831 5.15901 16.409C5.58097 15.9871 6.15326 15.75 6.75 15.75M6.75 20.25V22.5M6.75 15.75V4.5M20.25 20.25C20.8467 20.25 21.419 20.0129 21.841 19.591C22.2629 19.169 22.5 18.5967 22.5 18C22.5 17.4033 22.2629 16.831 21.841 16.409C21.419 15.9871 20.8467 15.75 20.25 15.75M20.25 20.25C19.6533 20.25 19.081 20.0129 18.659 19.591C18.2371 19.169 18 18.5967 18 18C18 17.4033 18.2371 16.831 18.659 16.409C19.081 15.9871 19.6533 15.75 20.25 15.75M20.25 20.25V22.5M20.25 15.75V4.5"
        stroke={theme === 'dark' ? "#fff" : "#868686"}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
