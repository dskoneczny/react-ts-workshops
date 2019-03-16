
export interface Room {
  id: number
  name: string
}

export interface RoomReducerState {
  rooms: Room[]
}

const INITIAL_STATE = {
  rooms: [
    {
      id: 0,
      name: "Mała sala konferencyjna"
    },
    {
      id: 1,
      name: "Duza sala konferencyjna"
    }
  ]
}

export default(state: RoomReducerState = INITIAL_STATE, action) => {
  return state
}









