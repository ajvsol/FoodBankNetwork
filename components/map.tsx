const key = "AIzaSyCDcyZflRGQzA2s9vRzqtJ4ATVxEKE64e4";
// call as <Map coord={"51.4965956,-0.099385"}/>
export default function Map({ coord }: any): JSX.Element {

  var w = window.innerWidth;
  var h = window.innerHeight;

  function screener (h:number) {
    return h/10 *10
   }
 
   let help = screener (h)
 

  return (
    <div className="min-w-[67vw] min-h-fit max-h-fit">
      <iframe className="min-w-[67vw] min-h-fit max-h-fit"
          // width={ `${help}px`}
        // width="100%"
        // height="100%"
        

        loading="lazy"
        src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=${coord}`}></iframe>
    </div>
  );
}
