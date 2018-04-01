// import * as mongodb from 'mongodb';

class DayData {
  constructor() {
    // this.uri = 'mongodb://heroku_sh419lpq:ud9cib6731fkvhgrgu03ut5h29@ds125618.mlab.com:25618/heroku_sh419lpq';
    this.testData = {
      mmoconnor23: {
        userInfo: {
          firstName: 'Melissa',
          lastName: 'O\'Connor',
        },
        tasks: {
          '3/30/2018': [
            {
              userId: 'mmoconnor23',
              isComplete: false,
              content: 'my to do content will go here',
              firstAdded: '3/30/2018',
            },
          ],
          '3/31/2018': [
            {
              userId: 'mmoconnor23',
              isComplete: false,
              content: 'my other to do content will go here',
              firstAdded: '3/31/2018',
            },
          ],
        },
      },
      dollarbri23: {
        userInfo: {
          firstName: 'Brian',
          lastName: 'O\'Connor',
        },
        tasks: {
          '3/30/2018': [
            {
              userId: 'dollarbri23',
              isComplete: false,
              content: 'dad to do content will go here',
              firstAdded: '3/30/2018',
            },
          ],
          '3/31/2018': [
            {
              userId: 'dollarbri23',
              isComplete: false,
              content: 'dad other to do content will go here',
              firstAdded: '3/31/2018',
            },
          ],
        },
      },
    };
  }

  getEntries(username) {
    if (!this.testData[username]) {
      // create user
      this.testData[username] = {
        userInfo: {
          firstName: '',
          lastName: '',
        },
        tasks: {},
      };
    }

    return this.testData[username].tasks;
  }

  // addEntries() { //take in entries, date
  //   mongodb.MongoClient.connect(uri, (err, client) => {
  //     console.log('connected');
  //     if(err) throw err;
  //     let db = client.db('testDay')
  //     let testItems = db.collection('testItems');

  //     songs.insert(this.testData, (err, result) => {

  //       if(err) throw err;

  //       // Since this is an example, we'll clean up after ourselves.
  //       // songs.drop(function (err) {
  //       //   if(err) throw err;

  //       //   // Only close the connection when your app is terminating.
  //       //   client.close(function (err) {
  //       //     if(err) throw err;
  //       //   });
  //       // });

  //       // songs.update(
  //       //   { song: 'One Sweet Day' },
  //       //   { $set: { artist: 'Mariah Carey ft. Boyz II Men' } },
  //       //   (err, result) => {
  //       //     if(err) throw err;
  //       //     songs.find({ weeksAtOne : { $gte: 10 } }).sort({ decade: 1 }).toArray
  //       //(function (err, docs) {
  //       //       if(err) throw err;
  //       //       docs.forEach(function (doc) {
  //       //         console.log(
  //       //           'In the ' + doc['decade'] + ', ' + doc['song'] + ' by ' + doc['artist'] +
  //       //           ' topped the charts for ' + doc['weeksAtOne'] + ' straight weeks.'
  //       //         );
  //       //       });
  //       //     });
  //       //   }
  //       // );
  //     });
  //   });
  // }
}

/* eslint-disable */
export let dayData = new DayData();
