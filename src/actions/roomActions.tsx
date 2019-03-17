
export const addRoom = (roomName: string) => {
  return ({
    payload: {
      roomName,
    },
    type: 'ADD_ROOM',
  });
};

export const addLike = (id: number) => {
  return ({
    payload: {
      id,
    },
    type: 'ADD_LIKE',
  });
};
