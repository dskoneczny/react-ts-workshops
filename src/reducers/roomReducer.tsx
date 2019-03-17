import produce from 'immer';

export interface Room {
  id: number;
  name: string;
  likes: number;
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

export interface AddLike {
  type: 'ADD_LIKE';
  payload: {
    id: number,
  };
}

export interface DeleteRoom {
  type: 'DELETE_ROOM';
  payload: {
    id: number;
  };
}

export type RoomActionType = AddRoomType | AddLike | DeleteRoom;

const INITIAL_STATE = {
  rooms: [
    {
      id: 0,
      likes: 0,
      name: 'Mała sala konferencyjna',
    },
    {
      id: 1,
      likes: 0,
      name: 'Duza sala konferencyjna',
    },
  ],
};

export default(state: RoomReducerState = INITIAL_STATE, action: RoomActionType) => {
  return produce(state, (draft: RoomReducerState) => {
    switch (action.type) {
      case 'ADD_ROOM': {
        draft.rooms.push({
          id: Date.now(),
          likes: 0,
          name: action.payload.roomName,
        });
        return draft;
      }
      case 'ADD_LIKE': {
        const id = action.payload.id;

        // FIND INDEX IN ROOMS
        const roomIndex = draft.rooms.findIndex((item: Room) => item.id === id);

        // DECLARE LIKES COUNT
        const newLikesCount = draft.rooms[roomIndex].likes + 1;
        // INCREASE LIKES COUNT
        draft.rooms[roomIndex].likes = newLikesCount;

        return draft;
      }

      case 'DELETE_ROOM': {
        const id = action.payload.id;

        draft.rooms = draft.rooms.filter((item: Room) => item.id !== id);

        return draft;
      }
    }
    return state;
  })
};








