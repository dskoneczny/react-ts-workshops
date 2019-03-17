
export const addRoom = (roomName: string) => {
  return ({
    payload: {
      roomName,
    },
    type: 'ADD_ROOM',
  });
};
