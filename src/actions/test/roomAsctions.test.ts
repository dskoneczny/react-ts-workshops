import {addRoom} from '../roomActions';

describe('room actions tests', () => {
  it('should return add room action ', () => {
    const name = 'example name';
    const result = addRoom(name);
    expect(result.payload).toEqual({roomName: name});
    expect(result.type).toEqual('ADD_ROOM');
  });
});
