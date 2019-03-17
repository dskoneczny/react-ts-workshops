import RoomReducerState from '../roomReducer';

describe('Room reducer', () => {

  it('should add new room', () => {
    const state = {
      rooms: [
        {
          id: 1,
          likes: 5,
          name: 'Example name',
        },
      ],
    };
    const result = RoomReducerState(state,
      {type: 'ADD_ROOM', payload: { roomName: 'Enigma'}});
    expect(result.rooms.length).toEqual(state.rooms.length + 1);
    expect(result.rooms)
      .toContainEqual(expect.objectContaining(
        {name: 'Enigma', id: expect.anything()}));
  });
});
