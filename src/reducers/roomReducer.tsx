import produce from 'immer';

export interface Room {
  id: number;
  name: string;
}

export interface RoomReducerState {
  rooms: Room[];
}

export interface AddRoomType {
  type: 'ADD_ROOM';
  payload: {
    roomName: string;
  };
}

export type RoomActionType = AddRoomType;

const INITIAL_STATE = {
  rooms: [
    {
      id: 0,
      name: 'Mała sala konferencyjna',
    },
    {
      id: 1,
      name: 'Duza sala konferencyjna',
    },
  ],
};

export default(state: RoomReducerState = INITIAL_STATE, action: RoomActionType) => {
  return produce(state, (draft: RoomReducerState) => {
    switch (action.type) {
      case 'ADD_ROOM': {
        draft.rooms.push({
          id: draft.rooms.length,
          name: action.payload.roomName,
        });
        return draft;
      }
    }
    return state;
  })
};








