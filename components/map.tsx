const key = process.env.GOOGLE_KEY

export default function Map(){

return
<>
<iframe
  width="450"
  height="250"
  frameborder="0" style="border:0"
  referrerpolicy="no-referrer-when-downgrade"
  src={`https://www.google.com/maps/embed/v1/MAP_MODE?key=${key};`}
  allowfullscreen>
</iframe>
</>
}