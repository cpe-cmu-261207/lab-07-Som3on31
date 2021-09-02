import { Store } from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][]
  selected: string
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      output[i].push('#FFFFFF')
    }
  }
  return output
}

export const updateCanvas = (y: number, x: number) => {
  PixelPainterStore.update(s => {
    s.canvas[y][x] = s.selected
  })
}

export const rcg = () => {
  const color: string[] = ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E']

  PixelPainterStore.update(s => {
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 16; j++) {
        s.canvas[j][i] = color[Math.floor(Math.random()*12)]
      }
    }
  })

}

export const PickColor = (color: string) => {
  PixelPainterStore.update(s => { s.selected = color })
}

export const Reset = () => {
  PixelPainterStore.update(s => { s.canvas = createEmptyCanvas() })
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  selected: "#000000" //brain fart moment that I forgot to put # in it
})