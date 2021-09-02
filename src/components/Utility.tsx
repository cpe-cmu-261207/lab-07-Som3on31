import {rcg,Reset} from '../stores/PixelPainterStore'



const Utility = () => {

  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={() => {Reset()}}>Clear</button>
      <button className="w-36" onClick={() => {rcg()}}>Random color</button>
    </div>
  )
}

export default Utility