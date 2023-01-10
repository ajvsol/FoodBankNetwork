
const key = process.env.GOOGLE_KEY

export default function Map({coord}:any):JSX.Element {

return(
<>
<iframe
  width="600"
  height="450"
  loading="lazy"
  allowfullscreen
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/place?key=${key}
    &q=${coord}`}>
</iframe>
</>)
}