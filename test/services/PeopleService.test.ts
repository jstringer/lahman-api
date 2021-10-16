import { PeopleService } from '../../src/api/services/PeopleService';
import { People } from '../../src/database/entities/player'
import { setupDbConnection } from '../../src/database/lib/DbConnection'

let connection;

beforeAll(async () => {
  connection = await setupDbConnection('test');
  return connection;
});

afterAll( done => {
  if(connection.isConnected) {
    connection.close();
    done();
  }
})

describe('People Service', () =>
  test('getPlayerById should resolve with undefined when passing in a bad playerID.', () => {
    let player = new People;
    player.playerID = 'jtester01'
    player.nameFirst = 'John';
    player.nameLast = 'Tester';
    player.birthDay = 1;
    player.birthMonth = 1;
    player.birthYear = 2000;

    let peopleService = new PeopleService(connection.getRepository(People));
    return peopleService.getByPlayerId(player.playerID).then(person => {
      expect(person).toBe(undefined);
    })
  })
);
